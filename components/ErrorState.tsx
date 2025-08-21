interface ErrorStateProps {
  error: string
  onRetry: () => void
}

export function ErrorState({ error, onRetry }: ErrorStateProps) {
  return (
    <div className="text-center py-16">
      <div className="w-16 h-16 bg-error-100 rounded-full flex items-center justify-center mx-auto mb-4">
        <span className="text-error-600 text-2xl">⚠️</span>
      </div>

      <h3 className="text-xl font-semibold text-gray-900 mb-2">
        Analysis Failed
      </h3>

      <p className="text-gray-600 max-w-md mx-auto mb-6">
        {error}
      </p>

      <div className="space-y-3">
        <button
          onClick={onRetry}
          className="btn-primary"
        >
          Try Again
        </button>

        <div className="text-sm text-gray-500">
          Common issues:
        </div>

        <ul className="text-xs text-gray-500 space-y-1 max-w-sm mx-auto">
          <li>• Check your summoner name spelling</li>
          <li>• Verify you selected the correct region</li>
          <li>• Ensure your summoner has recent match history</li>
          <li>• Try again in a few minutes if rate limited</li>
        </ul>
      </div>
    </div>
  )
}
