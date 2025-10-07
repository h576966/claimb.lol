export function Header() {
  return (
    <header className='bg-white shadow-sm border-b border-gray-200'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex justify-between items-center h-16'>
          <div className='flex items-center'>
            <div className='flex-shrink-0'>
              <h1 className='text-2xl font-bold text-primary-600'>
                Claimb.lol
              </h1>
            </div>
          </div>

          <nav className='flex items-center space-x-6'>
            <a
              href='/'
              className='text-gray-600 hover:text-primary-600 transition-colors'
            >
              Home
            </a>
            <a
              href='/privacy'
              className='text-gray-600 hover:text-primary-600 transition-colors'
            >
              Privacy
            </a>
            <a
              href='/support'
              className='text-gray-600 hover:text-primary-600 transition-colors'
            >
              Support
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
