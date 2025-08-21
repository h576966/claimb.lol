export interface Summoner {
  id: string
  accountId: string
  puuid: string
  name: string
  profileIconId: number
  revisionDate: number
  summonerLevel: number
}

export interface Match {
  info: {
    gameCreation: number
    gameDuration: number
    gameId: number
    gameMode: string
    gameType: string
    gameVersion: string
    mapId: number
    participants: Participant[]
    platformId: string
    queueId: number
    teams: Team[]
    tournamentCode: string
  }
  metadata: {
    dataVersion: string
    matchId: string
    participants: string[]
  }
}

export interface Participant {
  assists: number
  baronKills: number
  bountyLevel: number
  champExperience: number
  champLevel: number
  championId: number
  championName: string
  championTransform: number
  consumablesPurchased: number
  damageDealtToBuildings: number
  damageDealtToObjectives: number
  damageDealtToTurrets: number
  damageSelfMitigated: number
  deaths: number
  detectorWardsPlaced: number
  doubleKills: number
  dragonKills: number
  firstBloodAssist: boolean
  firstBloodKill: boolean
  firstTowerAssist: boolean
  firstTowerKill: boolean
  gameEndedInEarlySurrender: boolean
  gameEndedInSurrender: boolean
  goldEarned: number
  goldSpent: number
  individualPosition: string
  inhibitorKills: number
  inhibitorTakedowns: number
  inhibitorsLost: number
  item0: number
  item1: number
  item2: number
  item3: number
  item4: number
  item5: number
  item6: number
  itemsPurchased: number
  killingSprees: number
  kills: number
  lane: string
  largestCriticalStrike: number
  largestKillingSpree: number
  largestMultiKill: number
  longestTimeSpentLiving: number
  magicDamageDealt: number
  magicDamageDealtToChampions: number
  magicDamageTaken: number
  neutralMinionsKilled: number
  nexusKills: number
  nexusLost: number
  nexusTakedowns: number
  objectivesStolen: number
  objectivesStolenAssists: number
  participantId: number
  pentaKills: number
  perks: Perks
  physicalDamageDealt: number
  physicalDamageDealtToChampions: number
  physicalDamageTaken: number
  profileIcon: number
  puuid: string
  quadraKills: number
  riotIdName: string
  riotIdTagline: string
  role: string
  sightWardsBoughtInGame: number
  spell1Casts: number
  spell2Casts: number
  spell3Casts: number
  spell4Casts: number
  summoner1Casts: number
  summoner1Id: number
  summoner2Casts: number
  summoner2Id: number
  summonerId: string
  summonerLevel: number
  summonerName: string
  teamEarlySurrendered: boolean
  teamId: number
  teamPosition: string
  timeCCingOthers: number
  timePlayed: number
  totalDamageDealt: number
  totalDamageDealtToChampions: number
  totalDamageShieldedOnTeammates: number
  totalDamageTaken: number
  totalHeal: number
  totalHealsOnTeammates: number
  totalMinionsKilled: number
  totalTimeCCDealt: number
  totalTimeSpentDead: number
  totalUnitsHealed: number
  tripleKills: number
  trueDamageDealt: number
  trueDamageDealtToChampions: number
  trueDamageTaken: number
  turretKills: number
  turretTakedowns: number
  turretsLost: number
  unrealKills: number
  visionScore: number
  visionWardsBoughtInGame: number
  wardsKilled: number
  wardsPlaced: number
  win: boolean
}

export interface Perks {
  statPerks: {
    defense: number
    flex: number
    offense: number
  }
  styles: Array<{
    description: string
    selections: Array<{
      perk: number
      var1: number
      var2: number
      var3: number
    }>
    style: number
  }>
}

export interface Team {
  bans: Array<{
    championId: number
    pickTurn: number
  }>
  objectives: {
    baron: Objective
    champion: Objective
    dragon: Objective
    inhibitor: Objective
    riftHerald: Objective
    tower: Objective
  }
  teamId: number
  win: boolean
}

export interface Objective {
  first: boolean
  kills: number
}

export interface Champion {
  id: number
  name: string
  title: string
  blurb: string
  info: {
    attack: number
    defense: number
    magic: number
    difficulty: number
  }
  tags: string[]
  partype: string
  stats: {
    hp: number
    hpperlevel: number
    mp: number
    mpperlevel: number
    movespeed: number
    armor: number
    armorperlevel: number
    spellblock: number
    spellblockperlevel: number
    attackrange: number
    hpregen: number
    hpregenperlevel: number
    mpregen: number
    mpregenperlevel: number
    crit: number
    critperlevel: number
    attackdamage: number
    attackdamageperlevel: number
    attackspeedperlevel: number
    attackspeed: number
  }
}

export interface PerformanceStats {
  totalGames: number
  wins: number
  winRate: number
  averageKDA: number
  averageKills: number
  averageDeaths: number
  averageAssists: number
  averageCS: number
  averageCSMin: number
  averageDamage: number
  averageDamageMin: number
  averageVisionScore: number
  averageGameDuration: number
  bestRole: string
  championPerformance: ChampionPerformance[]
  rolePerformance: RolePerformance[]
  trends: PerformanceTrends
}

export interface ChampionPerformance {
  championId: number
  championName: string
  games: number
  wins: number
  winRate: number
  averageKDA: number
  averageKills: number
  averageDeaths: number
  averageAssists: number
  averageCS: number
  averageCSMin: number
  averageDamage: number
  averageDamageMin: number
  averageVisionScore: number
}

export interface RolePerformance {
  role: string
  games: number
  wins: number
  winRate: number
  averageKDA: number
  averageCS: number
  averageDamage: number
  averageVisionScore: number
}

export interface PerformanceTrends {
  earlyGame: 'strong' | 'average' | 'weak'
  midGame: 'strong' | 'average' | 'weak'
  lateGame: 'strong' | 'average' | 'weak'
  consistency: 'high' | 'medium' | 'low'
}

export interface Region {
  id: string
  name: string
  endpoint: string
}
