export function Features() {
  const features = [
    {
      title: 'Performance Analysis',
      description: 'Deep dive into your match history with KDA, CS, damage, and vision analysis.',
      icon: '📊'
    },
    {
      title: 'Champion Recommendations',
      description: 'AI-powered suggestions based on your playstyle and current meta.',
      icon: '🎯'
    },
    {
      title: 'Role Optimization',
      description: 'Discover your best roles and get role-specific improvement tips.',
      icon: '⚔️'
    },
    {
      title: 'Personalized Coaching',
      description: 'Get actionable advice tailored to your performance patterns.',
      icon: '🎓'
    },
    {
      title: 'Trend Analysis',
      description: 'Track your improvement over time with performance trends.',
      icon: '📈'
    },
    {
      title: 'Offline Access',
      description: 'All data stored locally on your Mac for privacy and performance.',
      icon: '💾'
    }
  ]

  return (
    <section id="features" className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Why Choose Claimb?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Built specifically for League of Legends players who want to improve their game
            and climb the ranked ladder with data-driven insights.
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
              Ready to improve your game?
            </h3>
            <p className="text-gray-600 mb-6">
              Download Claimb for macOS and start your journey to becoming a better League of Legends player.
            </p>
            <a
              href="https://apps.apple.com/app/claimb/id1234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-lg px-8 py-3"
            >
              Download Now
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
