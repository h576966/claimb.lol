interface HeroProps {
  onAnalyseClick: () => void
}

export function Hero({ onAnalyseClick }: HeroProps) {
  return (
    <section className="py-20 px-4 text-center">
      <div className="max-w-4xl mx-auto">
        {/* App Icon */}
        <div className="mb-8 flex justify-center">
          <div className="w-24 h-24 bg-primary-100 rounded-2xl flex items-center justify-center shadow-lg">
            <div className="text-4xl">🎮</div>
          </div>
        </div>

        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
          Your Personal League of Legends
          <span className="text-primary-600 block">Coach in Your Pocket</span>
        </h1>

        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Get AI-powered coaching, performance insights, and actionable advice to climb the ranked ladder.
          Privacy-focused, local-first, and designed for iPhone users who want to improve.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <a
            href="https://testflight.apple.com/join/your-testflight-link"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-lg px-8 py-3 flex items-center justify-center gap-2"
          >
            <span>📱</span>
            Try on TestFlight
          </a>

          <button
            onClick={onAnalyseClick}
            className="btn-secondary text-lg px-8 py-3 flex items-center justify-center gap-2"
          >
            <span>🔍</span>
            Preview Features
          </button>
        </div>

        <p className="text-sm text-gray-500 mb-12">
          Available on iOS 18+ • Coming to App Store soon
        </p>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
          <div className="space-y-2">
            <div className="text-3xl">🧠</div>
            <div className="text-lg font-semibold text-gray-900">AI Coaching</div>
            <div className="text-gray-600 text-sm">Personalized insights</div>
          </div>

          <div className="space-y-2">
            <div className="text-3xl">🔒</div>
            <div className="text-lg font-semibold text-gray-900">Privacy-First</div>
            <div className="text-gray-600 text-sm">All data stays on device</div>
          </div>

          <div className="space-y-2">
            <div className="text-3xl">📱</div>
            <div className="text-lg font-semibold text-gray-900">Offline Capable</div>
            <div className="text-gray-600 text-sm">Works without internet</div>
          </div>

          <div className="space-y-2">
            <div className="text-3xl">⚡</div>
            <div className="text-lg font-semibold text-gray-900">Local-First</div>
            <div className="text-gray-600 text-sm">No backend required</div>
          </div>
        </div>
      </div>
    </section>
  )
}
