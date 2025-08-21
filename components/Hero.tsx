interface HeroProps {
  onAnalyseClick: () => void
}

export function Hero({ onAnalyseClick }: HeroProps) {
  return (
    <section className="py-20 px-4 text-center">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
          Master League of Legends
          <span className="text-primary-600 block">with Claimb</span>
        </h1>

        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Get personalized performance insights, champion recommendations, and coaching advice.
          Built for serious players who want to climb the ranked ladder.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <a
            href="https://apps.apple.com/app/claimb/id1234567890"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-lg px-8 py-3"
          >
            Download for macOS
          </a>

          <button
            onClick={onAnalyseClick}
            className="btn-secondary text-lg px-8 py-3"
          >
            Try LoL Analyser
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="space-y-2">
            <div className="text-3xl font-bold text-primary-600">100%</div>
            <div className="text-gray-600">Client-side analysis</div>
          </div>

          <div className="space-y-2">
            <div className="text-3xl font-bold text-primary-600">20+</div>
            <div className="text-gray-600">Recent matches analyzed</div>
          </div>

          <div className="space-y-2">
            <div className="text-3xl font-bold text-primary-600">AI</div>
            <div className="text-gray-600">Coaching insights</div>
          </div>
        </div>
      </div>
    </section>
  )
}
