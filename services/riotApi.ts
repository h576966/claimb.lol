import axios from 'axios'
import { Summoner, Match, Region } from '@/types/lol'

const RIOT_API_KEY = process.env.NEXT_PUBLIC_RIOT_API_KEY

// Available regions (limited to main regions)
export const REGIONS: Region[] = [
  { id: 'euw1', name: 'Europe West (EUW)', endpoint: 'europe.api.riotgames.com' },
  { id: 'eun1', name: 'Europe Nordic & East (EUNE)', endpoint: 'europe.api.riotgames.com' },
  { id: 'na1', name: 'North America (NA)', endpoint: 'americas.api.riotgames.com' },
]

class RiotApiService {
  private apiKey: string
  private requestQueue: Array<() => Promise<any>> = []
  private isProcessing = false
  private lastRequestTime = 0
  private readonly MIN_REQUEST_INTERVAL = 100 // 100ms between requests
  private readonly MAX_REQUESTS_PER_WINDOW = 100
  private readonly WINDOW_SIZE = 120000 // 2 minutes in ms

  constructor() {
    this.apiKey = RIOT_API_KEY || ''
    if (!this.apiKey) {
      console.warn('Riot API key not found. Some features may not work.')
    }
  }

  /**
   * Simple rate limiting to stay within Riot's 100 requests per 2 minutes limit
   */
  private async enforceRateLimit(): Promise<void> {
    const now = Date.now()
    const timeSinceLastRequest = now - this.lastRequestTime

    if (timeSinceLastRequest < this.MIN_REQUEST_INTERVAL) {
      const delay = this.MIN_REQUEST_INTERVAL - timeSinceLastRequest
      await new Promise(resolve => setTimeout(resolve, delay))
    }

    this.lastRequestTime = Date.now()
  }

  /**
   * Make a rate-limited API request
   */
  private async makeRequest(url: string, region: string) {
    await this.enforceRateLimit()

    try {
      const response = await axios.get(url, {
        headers: {
          'X-Riot-Token': this.apiKey,
        },
        timeout: 10000,
      })
      return response.data
    } catch (error: any) {
      if (error.response?.status === 429) {
        throw new Error('Rate limit exceeded. Please try again in a few minutes.')
      } else if (error.response?.status === 404) {
        throw new Error('Summoner not found. Please check the name and tag.')
      } else if (error.response?.status === 403) {
        throw new Error('API key invalid or expired.')
      } else if (error.code === 'ECONNABORTED') {
        throw new Error('Request timeout. Please try again.')
      } else {
        throw new Error(`API request failed: ${error.message}`)
      }
    }
  }

  /**
   * Get summoner information by name and tag using the correct API flow
   */
  async getSummoner(summonerName: string, region: string): Promise<Summoner> {
    const regionData = REGIONS.find(r => r.id === region)
    if (!regionData) {
      throw new Error('Invalid region')
    }

    // Split summoner name into name and tag
    const [name, tag] = summonerName.split('#')
    if (!tag) {
      throw new Error('Please enter summoner name in format: Name#Tag (e.g., Faker#KR1)')
    }

    try {
      // Step 1: Get PUUID from account-v1 API (global endpoint)
      console.log('Getting PUUID from account-v1 API...')
      const accountUrl = `https://${regionData.endpoint}/riot/account/v1/accounts/by-riot-id/${encodeURIComponent(name)}/${encodeURIComponent(tag)}`
      const accountData = await this.makeRequest(accountUrl, region)

      if (!accountData.puuid) {
        throw new Error('Failed to get summoner PUUID')
      }

      // Step 2: Get summoner details using PUUID (region-specific endpoint)
      console.log('Getting summoner details from summoner-v4 API...')
      const summonerUrl = `https://${regionData.id}.api.riotgames.com/lol/summoner/v4/summoners/by-puuid/${accountData.puuid}`
      const summonerData = await this.makeRequest(summonerUrl, region)

      // Combine the data
      return {
        ...summonerData,
        gameName: accountData.gameName,
        tagLine: accountData.tagLine,
        puuid: accountData.puuid
      }

    } catch (error: any) {
      if (error.response?.status === 404) {
        throw new Error('Summoner not found. Please check the name, tag, and region.')
      }
      throw error
    }
  }

  /**
   * Get match history (limited to 20 matches to stay within rate limits)
   */
  async getMatchHistory(puuid: string, region: string, count: number = 20): Promise<string[]> {
    const regionData = REGIONS.find(r => r.id === region)
    if (!regionData) {
      throw new Error('Invalid region')
    }

    // Limit to 20 matches to stay within rate limits
    const safeCount = Math.min(count, 20)

    const url = `https://${regionData.endpoint}/lol/match/v5/matches/by-puuid/${puuid}/ids?start=0&count=${safeCount}`
    return this.makeRequest(url, region)
  }

  /**
   * Get match details with built-in rate limiting
   */
  async getMatch(matchId: string, region: string): Promise<Match> {
    const regionData = REGIONS.find(r => r.id === region)
    if (!regionData) {
      throw new Error('Invalid region')
    }

    const url = `https://${regionData.endpoint}/lol/match/v5/matches/${matchId}`
    return this.makeRequest(url, region)
  }

  /**
   * Get multiple matches with automatic rate limiting
   */
  async getMatches(matchIds: string[], region: string): Promise<Match[]> {
    const matches: Match[] = []

    for (let i = 0; i < matchIds.length; i++) {
      try {
        const match = await this.getMatch(matchIds[i], region)
        matches.push(match)

        // Progress feedback for user
        if (i % 5 === 0) {
          console.log(`Fetched ${i + 1}/${matchIds.length} matches...`)
        }
      } catch (error) {
        console.warn(`Failed to fetch match ${matchIds[i]}:`, error)
        // Continue with other matches instead of failing completely
      }
    }

    return matches
  }

  /**
   * Get champion data from Data Dragon (no rate limiting needed)
   */
  async getChampionData(championId: number): Promise<any> {
    try {
      const response = await axios.get(
        `https://ddragon.leagueoflegends.com/cdn/14.1.1/data/en_US/champion.json`
      )
      const champions = response.data.data
      const championName = Object.keys(champions).find(
        (name) => champions[name].key === championId.toString()
      )

      if (championName) {
        const championResponse = await axios.get(
          `https://ddragon.leagueoflegends.com/cdn/14.1.1/data/en_US/champion/${championName}.json`
        )
        return championResponse.data.data[championName]
      }
      return null
    } catch (error) {
      console.warn('Failed to fetch champion data:', error)
      return null
    }
  }

  /**
   * Get current patch version
   */
  async getCurrentPatch(): Promise<string> {
    try {
      const response = await axios.get('https://ddragon.leagueoflegends.com/api/versions.json')
      return response.data[0]
    } catch (error) {
      console.warn('Failed to fetch patch version, using fallback:', error)
      return '14.1.1' // Fallback version
    }
  }

  /**
   * Check if API key is valid
   */
  isApiKeyValid(): boolean {
    return !!this.apiKey
  }

  /**
   * Get rate limit status
   */
  getRateLimitStatus(): { remainingRequests: number; windowResetTime: number } {
    const now = Date.now()
    const timeInWindow = now % this.WINDOW_SIZE
    const requestsInCurrentWindow = Math.floor(timeInWindow / this.MIN_REQUEST_INTERVAL)
    const remainingRequests = Math.max(0, this.MAX_REQUESTS_PER_WINDOW - requestsInCurrentWindow)
    const windowResetTime = now + (this.WINDOW_SIZE - timeInWindow)

    return { remainingRequests, windowResetTime }
  }
}

export const riotApiService = new RiotApiService()
export default riotApiService
