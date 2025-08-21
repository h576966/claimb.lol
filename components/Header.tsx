export function Header() {
  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold text-primary-600">
                Claimb.lol
              </h1>
            </div>
          </div>

          <nav className="hidden md:flex space-x-8">
            <a href="#features" className="text-gray-600 hover:text-primary-600 transition-colors">
              Features
            </a>
            <a href="#download" className="text-gray-600 hover:text-primary-600 transition-colors">
              Download
            </a>
            <a href="#about" className="text-gray-600 hover:text-primary-600 transition-colors">
              About
            </a>
          </nav>

          <div className="flex items-center space-x-4">
            <a
              href="https://apps.apple.com/app/claimb/id1234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Download for macOS
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}
