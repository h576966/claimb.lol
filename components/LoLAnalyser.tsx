'use client'

import { useState } from 'react'
import { SummonerInput } from './SummonerInput'
import { AnalysisResults } from './AnalysisResults'
import { LoadingState } from './LoadingState'
import { ErrorState } from './ErrorState'
import { Summoner, PerformanceStats } from '@/types/lol'
import { riotApiService, REGIONS } from '@/services/riotApi'
import { PerformanceAnalysisService } from '@/services/performanceAnalysis'

export function LoLAnalyser() {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [summoner, setSummoner] = useState<Summoner | null>(null)
  const [stats, setStats] = useState<PerformanceStats | null>(null)
  const [progress, setProgress] = useState<string>('')
  const [isScoutingMode, setIsScoutingMode] = useState(false)

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
    <div className="max-w-4xl mx-auto">
      {/* Preview Header */}
      <div className="text-center mb-8 p-6 bg-gradient-to-r from-primary-50 to-primary-100 rounded-xl border border-primary-200">
        <div className="flex items-center justify-center gap-3 mb-4">
          <div className="w-12 h-12 bg-primary-600 rounded-xl flex items-center justify-center">
            <span className="text-white text-xl">🔍</span>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-900">
              Preview Claimb Features
            </h2>
            <p className="text-gray-600 text-sm">
              Try the web analyzer • Get the full app on TestFlight
            </p>
          </div>
        </div>
        <p className="text-gray-700 mb-4">
          This is a preview of Claimb's analysis capabilities. For AI coaching, timeline insights,
          and offline access, download the full iOS app.
        </p>
        <a
          href="https://testflight.apple.com/join/your-testflight-link"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-primary-600 text-white px-6 py-2 rounded-lg hover:bg-primary-700 transition-colors"
        >
          <span>📱</span>
          Get Full App on TestFlight
        </a>
      </div>

      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            LoL Performance Analyzer
          </h3>
          <p className="text-gray-600">
            Enter any summoner name and region to analyze their performance
          </p>
        </div>

        <SummonerInput onAnalyse={handleAnalyse} regions={REGIONS} />

        <div className="mt-6 p-4 bg-gray-50 rounded-lg text-center">
          <h4 className="text-sm font-medium text-gray-700 mb-2">Preview Features:</h4>
          <ul className="text-sm text-gray-600 space-y-1">
            <li>• Performance statistics from last 20 matches</li>
            <li>• Best role and champion analysis</li>
            <li>• KDA, CS, damage, and vision trends</li>
            <li>• Scouting tool for any summoner</li>
          </ul>
          <div className="mt-3 p-3 bg-primary-50 rounded border border-primary-200">
            <p className="text-xs text-primary-700">
              <strong>Full iOS app includes:</strong> AI coaching, timeline analysis, offline access,
              privacy-first design, and much more!
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
