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

      {/* Download CTA */}
      <div className="text-center p-8 bg-primary-50 dark:bg-primary-900/20 rounded-xl">
        <h3 className="text-2xl font-bold text-text-900 dark:text-text-50 mb-4">
          Want deeper insights?
        </h3>
        <p className="text-text-600 dark:text-text-400 mb-6 max-w-2xl mx-auto">
          Download the full Claimb macOS app for comprehensive analysis, champion recommendations,
          and personalized coaching to help you climb the ranked ladder.
        </p>
        <a
          href="https://apps.apple.com/app/claimb/id1234567890"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary text-lg px-8 py-3"
        >
          Download Claimb for macOS
        </a>
      </div>
    </div>
  )
}
