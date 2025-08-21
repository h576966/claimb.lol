import { Match, Participant, PerformanceStats, ChampionPerformance, RolePerformance, PerformanceTrends } from '@/types/lol'

export class PerformanceAnalysisService {
  static analyzePerformance(matches: Match[], summonerPuuid: string): PerformanceStats {
    if (matches.length === 0) {
      throw new Error('No matches to analyze')
    }

    const playerMatches = matches.map(match => {
      const participant = match.info.participants.find(p => p.puuid === summonerPuuid)
      if (!participant) {
        throw new Error('Player not found in match')
      }
      return { match, participant }
    })

    const totalGames = playerMatches.length
    const wins = playerMatches.filter(({ participant }) => participant.win).length
    const winRate = (wins / totalGames) * 100

    // Calculate averages
    const averageKDA = this.calculateAverageKDA(playerMatches.map(({ participant }) => participant))
    const averageKills = this.calculateAverage(playerMatches.map(({ participant }) => participant.kills))
    const averageDeaths = this.calculateAverage(playerMatches.map(({ participant }) => participant.deaths))
    const averageAssists = this.calculateAverage(playerMatches.map(({ participant }) => participant.assists))
    const averageCS = this.calculateAverage(playerMatches.map(({ participant }) => participant.totalMinionsKilled))
    const averageCSMin = this.calculateAverage(playerMatches.map(({ participant, match }) =>
      this.calculateCSMin(participant.totalMinionsKilled, match.info.gameDuration)
    ))
    const averageDamage = this.calculateAverage(playerMatches.map(({ participant }) =>
      participant.totalDamageDealtToChampions
    ))
    const averageDamageMin = this.calculateAverage(playerMatches.map(({ participant, match }) =>
      this.calculateDamageMin(participant.totalDamageDealtToChampions, match.info.gameDuration)
    ))
    const averageVisionScore = this.calculateAverage(playerMatches.map(({ participant }) => participant.visionScore))
    const averageGameDuration = this.calculateAverage(playerMatches.map(({ match }) => match.info.gameDuration))

    // Analyze champion performance
    const championPerformance = this.analyzeChampionPerformance(playerMatches)

    // Analyze role performance
    const rolePerformance = this.analyzeRolePerformance(playerMatches)

    // Determine best role
    const bestRole = this.determineBestRole(rolePerformance)

    // Analyze trends
    const trends = this.analyzeTrends(playerMatches)

    return {
      totalGames,
      wins,
      winRate,
      averageKDA,
      averageKills,
      averageDeaths,
      averageAssists,
      averageCS,
      averageCSMin,
      averageDamage,
      averageDamageMin,
      averageVisionScore,
      averageGameDuration,
      bestRole,
      championPerformance,
      rolePerformance,
      trends
    }
  }

  private static calculateAverage(values: number[]): number {
    return values.reduce((sum, value) => sum + value, 0) / values.length
  }

  private static calculateAverageKDA(participants: Participant[]): number {
    const kdaValues = participants.map(p => {
      if (p.deaths === 0) return p.kills + p.assists
      return (p.kills + p.assists) / p.deaths
    })
    return this.calculateAverage(kdaValues)
  }

  private static calculateCSMin(cs: number, gameDuration: number): number {
    const gameMinutes = gameDuration / 60
    return cs / gameMinutes
  }

  private static calculateDamageMin(damage: number, gameDuration: number): number {
    const gameMinutes = gameDuration / 60
    return damage / gameMinutes
  }

  private static analyzeChampionPerformance(playerMatches: Array<{ match: Match, participant: Participant }>): ChampionPerformance[] {
    const championStats = new Map<number, {
      games: number
      wins: number
      kills: number[]
      deaths: number[]
      assists: number[]
      cs: number[]
      damage: number[]
      visionScore: number[]
    }>()

    playerMatches.forEach(({ match, participant }) => {
      const championId = participant.championId
      if (!championStats.has(championId)) {
        championStats.set(championId, {
          games: 0,
          wins: 0,
          kills: [],
          deaths: [],
          assists: [],
          cs: [],
          damage: [],
          visionScore: []
        })
      }

      const stats = championStats.get(championId)!
      stats.games++
      if (participant.win) stats.wins++
      stats.kills.push(participant.kills)
      stats.deaths.push(participant.deaths)
      stats.assists.push(participant.assists)
      stats.cs.push(participant.totalMinionsKilled)
      stats.damage.push(participant.totalDamageDealtToChampions)
      stats.visionScore.push(participant.visionScore)
    })

    return Array.from(championStats.entries()).map(([championId, stats]) => {
      const winRate = (stats.wins / stats.games) * 100
      const averageKDA = this.calculateAverageKDA(
        stats.kills.map((k, i) => ({ kills: k, deaths: stats.deaths[i], assists: stats.assists[i] } as Participant))
      )

      return {
        championId,
        championName: this.getChampionName(championId),
        games: stats.games,
        wins: stats.wins,
        winRate,
        averageKDA,
        averageKills: this.calculateAverage(stats.kills),
        averageDeaths: this.calculateAverage(stats.deaths),
        averageAssists: this.calculateAverage(stats.assists),
        averageCS: this.calculateAverage(stats.cs),
        averageCSMin: this.calculateAverage(stats.cs) / 10, // Approximate
        averageDamage: this.calculateAverage(stats.damage),
        averageDamageMin: this.calculateAverage(stats.damage) / 10, // Approximate
        averageVisionScore: this.calculateAverage(stats.visionScore)
      }
    }).sort((a, b) => b.winRate - a.winRate)
  }

  private static analyzeRolePerformance(playerMatches: Array<{ match: Match, participant: Participant }>): RolePerformance[] {
    const roleStats = new Map<string, {
      games: number
      wins: number
      kda: number[]
      cs: number[]
      damage: number[]
      visionScore: number[]
    }>()

    playerMatches.forEach(({ match, participant }) => {
      const role = this.normalizeRole(participant.individualPosition, participant.teamPosition)
      if (!roleStats.has(role)) {
        roleStats.set(role, {
          games: 0,
          wins: 0,
          kda: [],
          cs: [],
          damage: [],
          visionScore: []
        })
      }

      const stats = roleStats.get(role)!
      stats.games++
      if (participant.win) stats.wins++
      stats.kda.push(this.calculateKDA(participant.kills, participant.deaths, participant.assists))
      stats.cs.push(participant.totalMinionsKilled)
      stats.damage.push(participant.totalDamageDealtToChampions)
      stats.visionScore.push(participant.visionScore)
    })

    return Array.from(roleStats.entries()).map(([role, stats]) => ({
      role,
      games: stats.games,
      wins: stats.wins,
      winRate: (stats.wins / stats.games) * 100,
      averageKDA: this.calculateAverage(stats.kda),
      averageCS: this.calculateAverage(stats.cs),
      averageDamage: this.calculateAverage(stats.damage),
      averageVisionScore: this.calculateAverage(stats.visionScore)
    })).sort((a, b) => b.winRate - a.winRate)
  }

  private static normalizeRole(individualPosition: string, teamPosition: string): string {
    if (individualPosition === 'UTILITY') return 'Support'
    if (individualPosition === 'BOTTOM') return 'ADC'
    if (individualPosition === 'JUNGLE') return 'Jungle'
    if (individualPosition === 'MIDDLE') return 'Mid'
    if (individualPosition === 'TOP') return 'Top'

    // Fallback to team position
    if (teamPosition === 'BOTTOM') return individualPosition === 'UTILITY' ? 'Support' : 'ADC'
    return teamPosition.charAt(0).toUpperCase() + teamPosition.slice(1).toLowerCase()
  }

  private static calculateKDA(kills: number, deaths: number, assists: number): number {
    if (deaths === 0) return kills + assists
    return (kills + assists) / deaths
  }

  private static determineBestRole(rolePerformance: RolePerformance[]): string {
    if (rolePerformance.length === 0) return 'Unknown'

    // Consider both win rate and number of games
    const bestRole = rolePerformance.reduce((best, current) => {
      if (current.games < 3) return best // Require minimum games
      if (best.games < 3) return current

      // Weight win rate more heavily than games played
      const currentScore = current.winRate * 0.7 + (current.games / 20) * 0.3
      const bestScore = best.winRate * 0.7 + (best.games / 20) * 0.3

      return currentScore > bestScore ? current : best
    })

    return bestRole.role
  }

  private static analyzeTrends(playerMatches: Array<{ match: Match, participant: Participant }>): PerformanceTrends {
    if (playerMatches.length < 5) {
      return {
        earlyGame: 'average',
        midGame: 'average',
        lateGame: 'average',
        consistency: 'medium'
      }
    }

    // Sort by game creation time (most recent first)
    const sortedMatches = [...playerMatches].sort((a, b) => b.match.info.gameCreation - a.match.info.gameCreation)

    // Analyze last 5 games vs previous 5 games
    const recentGames = sortedMatches.slice(0, 5)
    const previousGames = sortedMatches.slice(5, 10)

    if (previousGames.length === 0) {
      return {
        earlyGame: 'average',
        midGame: 'average',
        lateGame: 'average',
        consistency: 'medium'
      }
    }

    const recentKDA = this.calculateAverageKDA(recentGames.map(({ participant }) => participant))
    const previousKDA = this.calculateAverageKDA(previousGames.map(({ participant }) => participant))
    const kdaChange = ((recentKDA - previousKDA) / previousKDA) * 100

    const recentCS = this.calculateAverage(recentGames.map(({ participant }) => participant.totalMinionsKilled))
    const previousCS = this.calculateAverage(previousGames.map(({ participant }) => participant.totalMinionsKilled))
    const csChange = ((recentCS - previousCS) / previousCS) * 100

    // Determine trends based on performance changes
    const earlyGame = kdaChange > 10 ? 'strong' : kdaChange < -10 ? 'weak' : 'average'
    const midGame = csChange > 10 ? 'strong' : csChange < -10 ? 'weak' : 'average'
    const lateGame = (kdaChange + csChange) / 2 > 10 ? 'strong' : (kdaChange + csChange) / 2 < -10 ? 'weak' : 'average'

    // Calculate consistency based on standard deviation
    const kdaValues = playerMatches.map(({ participant }) =>
      this.calculateKDA(participant.kills, participant.deaths, participant.assists)
    )
    const kdaStdDev = this.calculateStandardDeviation(kdaValues)
    const consistency = kdaStdDev < 1 ? 'high' : kdaStdDev < 2 ? 'medium' : 'low'

    return { earlyGame, midGame, lateGame, consistency }
  }

  private static calculateStandardDeviation(values: number[]): number {
    const mean = this.calculateAverage(values)
    const squaredDiffs = values.map(value => Math.pow(value - mean, 2))
    const avgSquaredDiff = this.calculateAverage(squaredDiffs)
    return Math.sqrt(avgSquaredDiff)
  }

  private static getChampionName(championId: number): string {
    // This would ideally come from a champion data service
    // For now, return a placeholder
    return `Champion ${championId}`
  }
}

export default PerformanceAnalysisService
