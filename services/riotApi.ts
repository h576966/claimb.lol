import axios from 'axios'
import { Summoner, Match, Region } from '@/types/lol'

const RIOT_API_KEY = process.env.NEXT_PUBLIC_RIOT_API_KEY

// Available regions
export const REGIONS: Region[] = [
  { id: 'na1', name: 'North America', endpoint: 'americas.api.riotgames.com' },
  { id: 'euw1', name: 'Europe West', endpoint: 'europe.api.riotgames.com' },
  { id: 'eun1', name: 'Europe Nordic & East', endpoint: 'europe.api.riotgames.com' },
  { id: 'kr', name: 'Korea', endpoint: 'asia.api.riotgames.com' },
  { id: 'br1', name: 'Brazil', endpoint: 'americas.api.riotgames.com' },
  { id: 'la1', name: 'LAN', endpoint: 'americas.api.riotgames.com' },
  { id: 'la2', name: 'LAS', endpoint: 'americas.api.riotgames.com' },
  { id: 'oc1', name: 'Oceania', endpoint: 'americas.api.riotgames.com' },
  { id: 'tr1', name: 'Turkey', endpoint: 'europe.api.riotgames.com' },
  { id: 'ru', name: 'Russia', endpoint: 'europe.api.riotgames.com' },
  { id: 'jp1', name: 'Japan', endpoint: 'asia.api.riotgames.com' },
  { id: 'ph2', name: 'Philippines', endpoint: 'asia.api.riotgames.com' },
  { id: 'sg2', name: 'Singapore', endpoint: 'asia.api.riotgames.com' },
  { id: 'th2', name: 'Thailand', endpoint: 'asia.api.riotgames.com' },
  { id: 'tw2', name: 'Taiwan', endpoint: 'asia.api.riotgames.com' },
  { id: 'vn2', name: 'Vietnam', endpoint: 'asia.api.riotgames.com' },
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
        throw new Error('Summoner not found. Please check the name and region.')
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
   * Get summoner information
   */
  async getSummoner(summonerName: string, region: string): Promise<Summoner> {
    const regionData = REGIONS.find(r => r.id === region)
    if (!regionData) {
      throw new Error('Invalid region')
    }

    const url = `https://${regionData.id}.api.riotgames.com/lol/summoner/v4/summoners/by-name/${encodeURIComponent(summonerName)}`
    return this.makeRequest(url, region)
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
