export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold text-primary-400 mb-4">
              Claimb.lol
            </h3>
            <p className="text-gray-300 mb-4 max-w-md">
              The ultimate League of Legends companion app for macOS.
              Get personalized insights, champion recommendations, and coaching to improve your game.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://apps.apple.com/app/claimb/id1234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-400 hover:text-primary-300 transition-colors"
              >
                App Store
              </a>
              <a
                href="#"
                className="text-primary-400 hover:text-primary-300 transition-colors"
              >
                Documentation
              </a>
              <a
                href="#"
                className="text-primary-400 hover:text-primary-300 transition-colors"
              >
                Support
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Features</h4>
            <ul className="space-y-2 text-gray-300">
              <li>Performance Analysis</li>
              <li>Champion Recommendations</li>
              <li>Role Optimization</li>
              <li>AI Coaching</li>
              <li>Trend Analysis</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-gray-300">
              <li>Privacy Policy</li>
              <li>Terms of Service</li>
              <li>API Documentation</li>
              <li>Changelog</li>
              <li>Community</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>
            © 2024 Claimb.lol. Built with ❤️ for the League of Legends community.
          </p>
          <p className="text-sm mt-2">
            Not affiliated with Riot Games. League of Legends is a trademark of Riot Games, Inc.
          </p>
        </div>
      </div>
    </footer>
  )
}
