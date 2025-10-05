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
              Your personal League of Legends coach in your pocket.
              Privacy-focused, local-first iOS app with AI coaching and performance insights.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://testflight.apple.com/join/your-testflight-link"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-400 hover:text-primary-300 transition-colors"
              >
                TestFlight Beta
              </a>
              <a
                href="mailto:support@claimb.lol"
                className="text-primary-400 hover:text-primary-300 transition-colors"
              >
                Support
              </a>
              <a
                href="#faq"
                className="text-primary-400 hover:text-primary-300 transition-colors"
              >
                FAQ
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">iOS App Features</h4>
            <ul className="space-y-2 text-gray-300">
              <li>AI-Powered Coaching</li>
              <li>Privacy-First Design</li>
              <li>Offline Capability</li>
              <li>Timeline Analysis</li>
              <li>Champion Pool Insights</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-gray-300">
              <li>TestFlight Beta</li>
              <li>Privacy Policy</li>
              <li>Terms of Service</li>
              <li>iOS 18+ Required</li>
              <li>Support</li>
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
