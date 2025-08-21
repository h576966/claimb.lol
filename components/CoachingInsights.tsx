interface CoachingInsightsProps {
  summary: {
    summary: string
    keyInsights: string[]
    recommendations: string[]
  }
}

export function CoachingInsights({ summary }: CoachingInsightsProps) {
  return (
    <div className="space-y-6">
      {/* Summary */}
      <div>
        <h4 className="text-lg font-medium text-gray-900 mb-3">Performance Summary</h4>
        <p className="text-gray-700 leading-relaxed">{summary.summary}</p>
      </div>

      {/* Key Insights */}
      <div>
        <h4 className="text-lg font-medium text-gray-900 mb-3">Key Insights</h4>
        <ul className="space-y-2">
          {summary.keyInsights.map((insight, index) => (
            <li key={index} className="flex items-start">
              <span className="text-primary-600 mr-2">•</span>
              <span className="text-gray-700">{insight}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Recommendations */}
      <div>
        <h4 className="text-lg font-medium text-gray-900 mb-3">Recommendations</h4>
        <ul className="space-y-2">
          {summary.recommendations.map((recommendation, index) => (
            <li key={index} className="flex items-start">
              <span className="text-success-600 mr-2">→</span>
              <span className="text-gray-700">{recommendation}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="text-xs text-gray-500 text-center pt-4 border-t border-gray-200">
        AI-generated insights based on your performance data
      </div>
    </div>
  )
}
