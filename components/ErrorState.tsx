interface ErrorStateProps {
  error: string
  onRetry: () => void
}

export function ErrorState({ error, onRetry }: ErrorStateProps) {
  const isApiKeyError = error.includes('API key')
  const isSummonerNotFound = error.includes('not found')
  const isRateLimitError = error.includes('Rate limit')

  return (
    <div className="text-center py-16">
      <div className="inline-flex items-center justify-center w-16 h-16 bg-error-100 dark:bg-error-900/20 rounded-full mb-6">
        <svg className="w-8 h-8 text-error-600 dark:text-error-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
        </svg>
      </div>

      <h3 className="text-xl font-semibold text-text-900 dark:text-text-50 mb-2">
        Analysis Failed
      </h3>

      <p className="text-text-600 dark:text-text-400 mb-6 max-w-md mx-auto">
        {error}
      </p>

      {isApiKeyError && (
        <div className="mb-6 p-4 bg-error-50 dark:bg-error-900/20 rounded-lg text-left max-w-md mx-auto">
          <h4 className="text-sm font-medium text-error-800 dark:text-error-200 mb-2">API Key Issue:</h4>
          <ul className="text-sm text-error-700 dark:text-error-300 space-y-1">
            <li>• Check if your Riot API key is valid</li>
            <li>• Ensure the key hasn&apos;t expired</li>
            <li>• Verify the key has proper permissions</li>
          </ul>
        </div>
      )}

      {isSummonerNotFound && (
        <div className="mb-6 p-4 bg-warning-50 dark:bg-warning-900/20 rounded-lg text-left max-w-md mx-auto">
          <h4 className="text-sm font-medium text-warning-800 dark:text-warning-200 mb-2">Summoner Not Found:</h4>
          <ul className="text-sm text-warning-700 dark:text-warning-300 space-y-1">
            <li>• Check the summoner name spelling</li>
            <li>• Verify the tag is correct (e.g., #EUW, #NA1)</li>
            <li>• Ensure you selected the right region</li>
            <li>• Make sure the summoner has recent match history</li>
          </ul>
        </div>
      )}

      {isRateLimitError && (
        <div className="mb-6 p-4 bg-warning-50 dark:bg-warning-900/20 rounded-lg text-left max-w-md mx-auto">
          <h4 className="text-sm font-medium text-warning-800 dark:text-warning-200 mb-2">Rate Limited:</h4>
          <ul className="text-sm text-warning-700 dark:text-warning-300 space-y-1">
            <li>• Wait a few minutes before trying again</li>
            <li>• The app automatically limits requests</li>
            <li>• Try with a different summoner</li>
          </ul>
        </div>
      )}

      <div className="space-y-3">
        <button
          onClick={onRetry}
          className="btn-primary"
        >
          Try Again
        </button>

        <div className="text-sm text-text-500 dark:text-text-400">
          <p className="mb-2">Common issues:</p>
          <ul className="space-y-1 text-xs">
            <li>• Use format: Name#Tag (e.g., Faker#KR1)</li>
            <li>• Available regions: EUW, EUNE, NA</li>
            <li>• Check your League client for exact tag</li>
            <li>• Ensure summoner has recent matches</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
