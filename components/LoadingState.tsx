interface LoadingStateProps {
  progress?: string
}

export function LoadingState({ progress }: LoadingStateProps) {
  return (
    <div className="text-center py-16">
      <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-primary-500 mb-4"></div>
      <h3 className="text-xl font-semibold text-text-900 dark:text-text-50 mb-2">
        Analyzing Performance
      </h3>

      {progress && (
        <p className="text-primary-600 dark:text-primary-400 font-medium mb-4">
          {progress}
        </p>
      )}

      <p className="text-text-600 dark:text-text-400 max-w-md mx-auto mb-8">
        Fetching your match data and generating insights. This may take a few moments...
      </p>

      <div className="mt-8 space-y-3 max-w-sm mx-auto">
        <div className="flex items-center space-x-3">
          <div className="w-4 h-4 bg-primary-200 rounded-full animate-pulse"></div>
          <span className="text-sm text-text-500 dark:text-text-400">Fetching summoner data</span>
        </div>
        <div className="flex items-center space-x-3">
          <div className="w-4 h-4 bg-primary-200 rounded-full animate-pulse"></div>
          <span className="text-sm text-text-500 dark:text-text-400">Analyzing recent matches</span>
        </div>
        <div className="flex items-center space-x-3">
          <div className="w-4 h-4 bg-primary-200 rounded-full animate-pulse"></div>
          <span className="text-sm text-text-500 dark:text-text-400">Computing statistics</span>
        </div>
      </div>

      <div className="mt-6 text-xs text-text-400 dark:text-text-500">
        Rate limiting applied to stay within Riot API limits
      </div>
    </div>
  )
}
