export function Features() {
  const features = [
    {
      title: 'AI-Powered Coaching',
      description: 'Get personalized post-game analysis with specific timing insights and actionable advice tailored to your performance.',
      icon: '🧠'
    },
    {
      title: 'Privacy-First Design',
      description: 'All your data stays on your iPhone. No servers, no tracking, complete privacy protection.',
      icon: '🔒'
    },
    {
      title: 'Local-First Performance',
      description: 'Works offline after initial sync. No internet required for coaching insights and match analysis.',
      icon: '⚡'
    },
    {
      title: 'Champion Pool Analysis',
      description: 'Track your champion performance, identify your best picks, and get optimization insights.',
      icon: '🎯'
    },
    {
      title: 'Timeline Integration',
      description: 'Early game analysis with exact minute marks for specific feedback and improvement opportunities.',
      icon: '⏱️'
    },
    {
      title: 'iPhone Optimized',
      description: 'Designed for one-handed mobile use with Apple Watch-like interface and intuitive navigation.',
      icon: '📱'
    }
  ]

  return (
    <section id="features" className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Built for iPhone, Designed for Privacy
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            The only League of Legends companion app that puts your privacy first while delivering
            powerful AI coaching and performance insights directly on your iPhone.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center p-6">
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-primary-50 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to climb the ranked ladder?
            </h3>
            <p className="text-gray-600 mb-6">
              Join the TestFlight beta and experience the future of League of Legends coaching.
              Your personal coach, always in your pocket.
            </p>
            <a
              href="https://testflight.apple.com/join/your-testflight-link"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-lg px-8 py-3 flex items-center justify-center gap-2 mx-auto w-fit"
            >
              <span>📱</span>
              Join TestFlight Beta
            </a>
            <p className="text-sm text-gray-500 mt-4">
              Coming to App Store soon • iOS 18+ required
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
