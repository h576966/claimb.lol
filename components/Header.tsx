export function Header() {
  return (
    <header className='bg-gray-900/95 backdrop-blur-md border-b border-gray-800'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex justify-between items-center h-16'>
          <div className='flex items-center'>
            <div className='flex-shrink-0'>
              <h1 className='text-2xl font-bold text-primary-400'>
                Claimb.lol
              </h1>
            </div>
          </div>

          <nav className='flex items-center space-x-6'>
            <a
              href='/'
              className='text-gray-300 hover:text-primary-400 transition-colors'
            >
              LoL
            </a>
            <a
              href='/tft'
              className='text-gray-300 hover:text-primary-400 transition-colors'
            >
              TFT
            </a>
            <a
              href='/privacy'
              className='text-gray-300 hover:text-primary-400 transition-colors'
            >
              Privacy
            </a>
            <a
              href='/terms'
              className='text-gray-300 hover:text-primary-400 transition-colors'
            >
              Terms
            </a>
            <a
              href='/support'
              className='text-gray-300 hover:text-primary-400 transition-colors'
            >
              Support
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
