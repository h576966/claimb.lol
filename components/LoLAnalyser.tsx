'use client'

import { useState } from 'react'
import { SummonerInput } from './SummonerInput'
import { AnalysisResults } from './AnalysisResults'
import { LoadingState } from './LoadingState'
import { ErrorState } from './ErrorState'
import { Summoner, Match, PerformanceStats } from '@/types/lol'
import { riotApiService, REGIONS } from '@/services/riotApi'
import { PerformanceAnalysisService } from '@/services/performanceAnalysis'

export function LoLAnalyser() {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [summoner, setSummoner] = useState<Summoner | null>(null)
  const [stats, setStats] = useState<PerformanceStats | null>(null)
  const [progress, setProgress] = useState<string>('')

  const handleAnalyse = async (summonerName: string, region: string) => {
    setIsLoading(true)
    setError(null)
    setSummoner(null)
    setStats(null)
    setProgress('')

    try {
      // Check if API key is available
      if (!riotApiService.isApiKeyValid()) {
        throw new Error('Riot API key not configured. Please add NEXT_PUBLIC_RIOT_API_KEY to your environment variables.')
      }

      // Step 1: Get summoner info
      setProgress('Looking up summoner...')
      const summonerData = await riotApiService.getSummoner(summonerName, region)
      setSummoner(summonerData)

      // Step 2: Get match history
      setProgress('Fetching match history...')
      const matchIds = await riotApiService.getMatchHistory(summonerData.puuid, region, 20)

      if (matchIds.length === 0) {
        throw new Error('No recent matches found for this summoner. Try a different summoner or region.')
      }

      // Step 3: Get match details with built-in rate limiting
      setProgress(`Analyzing ${matchIds.length} recent matches...`)
      const matches = await riotApiService.getMatches(matchIds, region)

      if (matches.length === 0) {
        throw new Error('Failed to fetch match data. Please try again.')
      }

      // Step 4: Analyze performance
      setProgress('Computing performance statistics...')
      const performanceStats = PerformanceAnalysisService.analyzePerformance(matches, summonerData.puuid)
      setStats(performanceStats)

      setProgress('Analysis complete!')

    } catch (err: any) {
      setError(err.message || 'Failed to analyze summoner')
    } finally {
      setIsLoading(false)
      setProgress('')
    }
  }

  const handleReset = () => {
    setSummoner(null)
    setStats(null)
    setError(null)
    setProgress('')
  }

  if (isLoading) {
    return <LoadingState progress={progress} />
  }

  if (error) {
    return <ErrorState error={error} onRetry={() => handleReset()} />
  }

  if (summoner && stats) {
    return (
      <div className="space-y-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-text-900 dark:text-text-50 mb-2">
            Analysis Results for {summoner.name}
          </h2>
          <p className="text-text-600 dark:text-text-400">
            Based on {stats.totalGames} recent matches
          </p>
          <button
            onClick={handleReset}
            className="btn-secondary mt-4"
          >
            Analyze Another Summoner
          </button>
        </div>

        <AnalysisResults stats={stats} />
      </div>
    )
  }

  return (
    <div className="max-w-2xl mx-auto">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-text-900 dark:text-text-50 mb-4">
          LoL Performance Analyser
        </h2>
        <p className="text-text-600 dark:text-text-400">
          Enter your summoner name and region to get personalized performance insights
        </p>
      </div>

      <SummonerInput onAnalyse={handleAnalyse} regions={REGIONS} />

      <div className="mt-6 p-4 bg-surface-100 dark:bg-surface-800 rounded-lg text-center">
        <h4 className="text-sm font-medium text-text-700 dark:text-text-300 mb-2">What you'll get:</h4>
        <ul className="text-sm text-text-600 dark:text-text-400 space-y-1">
          <li>• Performance statistics from your last 20 matches</li>
          <li>• Best role and champion analysis</li>
          <li>• KDA, CS, damage, and vision trends</li>
          <li>• Personalized improvement insights</li>
        </ul>
      </div>
    </div>
  )
}
