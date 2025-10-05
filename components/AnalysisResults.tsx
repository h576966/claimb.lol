'use client'

import { PerformanceStats } from '@/types/lol'
import { StatCard } from './StatCard'
import { ChampionTable } from './ChampionTable'
import { RoleAnalysis } from './RoleAnalysis'
import { TrendsChart } from './TrendsChart'

interface AnalysisResultsProps {
  stats: PerformanceStats
}

export function AnalysisResults({ stats }: AnalysisResultsProps) {
  return (
    <div className="space-y-8">
      {/* Overview Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          title="Win Rate"
          value={`${stats.winRate.toFixed(1)}%`}
          subtitle={`${stats.wins}/${stats.totalGames} games`}
          color={stats.winRate >= 55 ? 'success' : stats.winRate >= 50 ? 'warning' : 'error'}
        />

        <StatCard
          title="KDA Ratio"
          value={stats.averageKDA.toFixed(2)}
          subtitle="Average KDA"
          color={stats.averageKDA >= 3 ? 'success' : stats.averageKDA >= 2 ? 'warning' : 'error'}
        />

        <StatCard
          title="CS/min"
          value={stats.averageCSMin.toFixed(1)}
          subtitle="Creep Score per minute"
          color={stats.averageCSMin >= 7 ? 'success' : stats.averageCSMin >= 6 ? 'warning' : 'error'}
        />

        <StatCard
          title="Best Role"
          value={stats.bestRole}
          subtitle="Based on performance"
          color="primary"
        />
      </div>

      {/* Main Performance Metrics */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="card">
          <h3 className="text-xl font-semibold text-text-900 dark:text-text-50 mb-4">Performance Overview</h3>
          <div className="space-y-4">
            <div className="flex justify-between">
              <span className="text-text-600 dark:text-text-400">Average Kills:</span>
              <span className="font-medium text-text-900 dark:text-text-50">{stats.averageKills.toFixed(1)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-text-600 dark:text-text-400">Average Deaths:</span>
              <span className="font-medium text-text-900 dark:text-text-50">{stats.averageDeaths.toFixed(1)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-text-600 dark:text-text-400">Average Assists:</span>
              <span className="font-medium text-text-900 dark:text-text-50">{stats.averageAssists.toFixed(1)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-text-600 dark:text-text-400">Average Damage/min:</span>
              <span className="font-medium text-text-900 dark:text-text-50">{stats.averageDamageMin.toFixed(0)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-text-600 dark:text-text-400">Average Vision Score:</span>
              <span className="font-medium text-text-900 dark:text-text-50">{stats.averageVisionScore.toFixed(1)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-text-600 dark:text-text-400">Average Game Duration:</span>
              <span className="font-medium text-text-900 dark:text-text-50">{(stats.averageGameDuration / 60).toFixed(1)} min</span>
            </div>
          </div>
        </div>

        <div className="card">
          <h3 className="text-xl font-semibold text-text-900 dark:text-text-50 mb-4">Performance Trends</h3>
          <TrendsChart trends={stats.trends} />
        </div>
      </div>

      {/* Champion Performance */}
      <div className="card">
        <h3 className="text-xl font-semibold text-text-900 dark:text-text-50 mb-4">Champion Performance</h3>
        <ChampionTable champions={stats.championPerformance} />
      </div>

      {/* Role Analysis */}
      <div className="card">
        <h3 className="text-xl font-semibold text-text-900 dark:text-text-50 mb-4">Role Performance</h3>
        <RoleAnalysis roles={stats.rolePerformance} />
      </div>

      {/* iOS App CTA */}
      <div className="text-center p-8 bg-gradient-to-r from-primary-50 to-primary-100 rounded-xl border border-primary-200">
        <div className="flex items-center justify-center gap-3 mb-4">
          <div className="w-12 h-12 bg-primary-600 rounded-xl flex items-center justify-center">
            <span className="text-white text-xl">📱</span>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-gray-900">
              Want AI Coaching & More?
            </h3>
            <p className="text-gray-600 text-sm">
              Get the full iOS app on TestFlight
            </p>
          </div>
        </div>
        <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
          This web preview shows basic performance analysis. The full iOS app includes AI-powered coaching,
          timeline analysis, offline access, and privacy-first design for the complete Claimb experience.
        </p>
        <a
          href="https://testflight.apple.com/join/your-testflight-link"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-primary-600 text-white px-8 py-3 rounded-lg hover:bg-primary-700 transition-colors text-lg"
        >
          <span>📱</span>
          Get Full App on TestFlight
        </a>
        <p className="text-sm text-gray-500 mt-4">
          iOS 18+ required • Coming to App Store soon
        </p>
      </div>
    </div>
  )
}
