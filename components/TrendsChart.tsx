import { PerformanceTrends } from '@/types/lol'

interface TrendsChartProps {
  trends: PerformanceTrends
}

export function TrendsChart({ trends }: TrendsChartProps) {
  const getTrendColor = (trend: string) => {
    switch (trend) {
      case 'strong': return 'text-success-600 bg-success-100'
      case 'weak': return 'text-error-600 bg-error-100'
      default: return 'text-warning-600 bg-warning-100'
    }
  }

  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case 'strong': return '↗️'
      case 'weak': return '↘️'
      default: return '→'
    }
  }

  const getConsistencyColor = (consistency: string) => {
    switch (consistency) {
      case 'high': return 'text-success-600 bg-success-100'
      case 'low': return 'text-error-600 bg-error-100'
      default: return 'text-warning-600 bg-warning-100'
    }
  }

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-2 gap-4">
        <div className="text-center">
          <div className="text-sm text-gray-600 mb-2">Early Game</div>
          <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${getTrendColor(trends.earlyGame)}`}>
            <span className="mr-1">{getTrendIcon(trends.earlyGame)}</span>
            {trends.earlyGame.charAt(0).toUpperCase() + trends.earlyGame.slice(1)}
          </div>
        </div>

        <div className="text-center">
          <div className="text-sm text-gray-600 mb-2">Mid Game</div>
          <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${getTrendColor(trends.midGame)}`}>
            <span className="mr-1">{getTrendIcon(trends.midGame)}</span>
            {trends.midGame.charAt(0).toUpperCase() + trends.midGame.slice(1)}
          </div>
        </div>

        <div className="text-center">
          <div className="text-sm text-gray-600 mb-2">Late Game</div>
          <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${getTrendColor(trends.lateGame)}`}>
            <span className="mr-1">{getTrendIcon(trends.lateGame)}</span>
            {trends.lateGame.charAt(0).toUpperCase() + trends.lateGame.slice(1)}
          </div>
        </div>

        <div className="text-center">
          <div className="text-sm text-gray-600 mb-2">Consistency</div>
          <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${getConsistencyColor(trends.consistency)}`}>
            {trends.consistency.charAt(0).toUpperCase() + trends.consistency.slice(1)}
          </div>
        </div>
      </div>

      <div className="text-xs text-gray-500 text-center">
        Based on performance changes across recent matches
      </div>
    </div>
  )
}
