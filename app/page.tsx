import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { APP_CONFIG } from '@/lib/constants';

export default function HomePage() {
  return (
    <div className='min-h-screen bg-gray-900'>
      <Header />

      {/* Dark Hero Section */}
      <section className='bg-gray-900 text-white py-20 px-4'>
        <div className='max-w-6xl mx-auto'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
            {/* Left Column - Text Content */}
            <div className='text-center lg:text-left'>
              {/* App Icon */}
              <div className='mb-8 flex justify-center lg:justify-start'>
                <div className='w-24 h-24 rounded-2xl shadow-lg overflow-hidden'>
                  <img
                    src='/images/AppIcon.png'
                    alt='Claimb App Icon'
                    className='w-full h-full object-cover'
                  />
                </div>
              </div>

              <h1 className='text-5xl md:text-6xl font-bold text-white mb-6'>
                Your Personal League of Legends
                <span className='text-primary-400 block'>
                  Coach in Your Pocket
                </span>
              </h1>

              <p className='text-xl text-gray-300 mb-8 max-w-2xl mx-auto lg:mx-0'>
                AI-powered coaching with specific timing insights, performance
                analysis, and privacy-first design. All data stays on your
                iPhone - no servers, no tracking.
              </p>

              <div className='flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8'>
                <a
                  href={APP_CONFIG.TESTFLIGHT_URL}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='bg-primary-600 hover:bg-primary-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors text-lg flex items-center justify-center gap-2'
                >
                  <svg
                    className='w-5 h-5'
                    fill='currentColor'
                    viewBox='0 0 20 20'
                  >
                    <path
                      fillRule='evenodd'
                      d='M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z'
                      clipRule='evenodd'
                    />
                  </svg>
                  Try on TestFlight
                </a>
              </div>

              <p className='text-sm text-gray-400 mb-12'>
                Available on iOS 18+ • Coming to App Store soon
              </p>

              <div className='flex justify-center lg:justify-start items-center gap-8 text-gray-300'>
                <div className='flex items-center gap-2'>
                  <svg
                    className='w-6 h-6'
                    fill='currentColor'
                    viewBox='0 0 20 20'
                  >
                    <path d='M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z' />
                  </svg>
                  <span className='font-medium'>AI Coaching</span>
                </div>
                <div className='w-px h-6 bg-gray-600'></div>
                <div className='flex items-center gap-2'>
                  <svg
                    className='w-6 h-6'
                    fill='currentColor'
                    viewBox='0 0 20 20'
                  >
                    <path
                      fillRule='evenodd'
                      d='M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z'
                      clipRule='evenodd'
                    />
                  </svg>
                  <span className='font-medium'>Privacy-First</span>
                </div>
                <div className='w-px h-6 bg-gray-600'></div>
                <div className='flex items-center gap-2'>
                  <svg
                    className='w-6 h-6'
                    fill='currentColor'
                    viewBox='0 0 20 20'
                  >
                    <path
                      fillRule='evenodd'
                      d='M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z'
                      clipRule='evenodd'
                    />
                  </svg>
                  <span className='font-medium'>iOS 18+</span>
                </div>
              </div>
            </div>

            {/* Right Column - App Screenshot */}
            <div className='flex justify-center lg:justify-end'>
              <div className='relative'>
                <div className='w-80 h-auto rounded-3xl shadow-2xl overflow-hidden bg-gray-800'>
                  <img
                    src='/images/app-screenshot.png'
                    alt='Claimb App Screenshot'
                    className='w-full h-auto object-cover'
                  />
                </div>
                {/* Decorative elements */}
                <div className='absolute -top-4 -right-4 w-8 h-8 bg-primary-500 rounded-full opacity-20'></div>
                <div className='absolute -bottom-4 -left-4 w-6 h-6 bg-primary-400 rounded-full opacity-30'></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
