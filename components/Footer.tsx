import { APP_CONFIG } from '@/lib/constants';

export function Footer() {
  return (
    <footer className='bg-gray-900 text-white py-8'>
      <div className='max-w-4xl mx-auto px-4'>
        <div className='text-center'>
          <h3 className='text-xl font-bold text-primary-400 mb-4'>
            Claimb.lol
          </h3>
          <p className='text-gray-300 mb-6 max-w-md mx-auto'>
            Your personal League of Legends coach in your pocket.
            Privacy-focused, local-first iOS app with AI coaching.
          </p>

          <div className='flex justify-center space-x-6 mb-6'>
            <a
              href='/'
              className='text-primary-400 hover:text-primary-300 transition-colors'
            >
              LoL
            </a>
            <a
              href='/tft'
              className='text-primary-400 hover:text-primary-300 transition-colors'
            >
              TFT
            </a>
            <a
              href={APP_CONFIG.TESTFLIGHT_URL}
              target='_blank'
              rel='noopener noreferrer'
              className='text-primary-400 hover:text-primary-300 transition-colors'
            >
              TestFlight Beta
            </a>
            <a
              href='/support'
              className='text-primary-400 hover:text-primary-300 transition-colors'
            >
              Support
            </a>
            <a
              href='/privacy'
              className='text-primary-400 hover:text-primary-300 transition-colors'
            >
              Privacy
            </a>
            <a
              href='/terms'
              className='text-primary-400 hover:text-primary-300 transition-colors'
            >
              Terms
            </a>
          </div>

          <div className='border-t border-gray-800 pt-6 text-gray-400'>
            <p className='text-sm'>
              © 2024 Claimb.lol. Built with ❤️ for the League of Legends
              community.
            </p>
            <p className='text-xs mt-1'>
              Not affiliated with Riot Games. League of Legends is a trademark
              of Riot Games, Inc.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
