import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { APP_CONFIG } from '@/lib/constants';

export default function TFTPage() {
  return (
    <div className='min-h-screen bg-gray-900'>
      <Header />

      {/* TFT Hero Section */}
      <section className='bg-gray-900 text-white py-20 px-4'>
        <div className='max-w-6xl mx-auto'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
            {/* Left Column - Text Content */}
            <div className='text-center lg:text-left'>
              {/* TFT Icon/Badge */}
              <div className='mb-8 flex justify-center lg:justify-start'>
                <div className='w-24 h-24 rounded-2xl shadow-lg overflow-hidden bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center'>
                  <svg
                    className='w-12 h-12 text-white'
                    fill='currentColor'
                    viewBox='0 0 24 24'
                  >
                    <path d='M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5' />
                  </svg>
                </div>
              </div>

              <h1 className='text-5xl md:text-6xl font-bold text-white mb-6'>
                Teamfight Tactics
                <span className='text-primary-400 block'>
                  Strategy Assistant
                </span>
              </h1>

              <p className='text-xl text-gray-300 mb-8 max-w-2xl mx-auto lg:mx-0'>
                Discover under-utilized champions, optimize your comps, and
                climb the TFT ladder with data-driven insights. Coming soon to
                help you master the meta.
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
                  Join Beta
                </a>
                <a
                  href='/'
                  className='bg-gray-700 hover:bg-gray-600 text-white font-semibold py-3 px-8 rounded-lg transition-colors text-lg flex items-center justify-center gap-2'
                >
                  <svg
                    className='w-5 h-5'
                    fill='currentColor'
                    viewBox='0 0 20 20'
                  >
                    <path
                      fillRule='evenodd'
                      d='M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z'
                      clipRule='evenodd'
                    />
                  </svg>
                  Back to LoL
                </a>
              </div>

              <p className='text-sm text-gray-400 mb-12'>
                Coming Soon • TFT Strategy Features
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
                  <span className='font-medium'>Meta Analysis</span>
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
                  <span className='font-medium'>Comp Builder</span>
                </div>
                <div className='w-px h-6 bg-gray-600'></div>
                <div className='flex items-center gap-2'>
                  <svg
                    className='w-6 h-6'
                    fill='currentColor'
                    viewBox='0 0 20 20'
                  >
                    <path d='M9 2a1 1 0 000 2h2a1 1 0 100-2H9z' />
                    <path
                      fillRule='evenodd'
                      d='M4 5a2 2 0 012-2v1a1 1 0 102 0V3h4a1 1 0 100 2v1a2 2 0 012 2v6a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3z'
                      clipRule='evenodd'
                    />
                  </svg>
                  <span className='font-medium'>Champ Insights</span>
                </div>
              </div>
            </div>

            {/* Right Column - TFT Preview */}
            <div className='flex justify-center lg:justify-end'>
              <div className='relative'>
                <div className='w-80 h-96 rounded-3xl shadow-2xl overflow-hidden bg-gray-800 flex items-center justify-center'>
                  <div className='text-center text-gray-400'>
                    <svg
                      className='w-16 h-16 mx-auto mb-4 text-purple-500'
                      fill='currentColor'
                      viewBox='0 0 24 24'
                    >
                      <path d='M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5' />
                    </svg>
                    <p className='text-lg font-medium'>TFT Features</p>
                    <p className='text-sm'>Coming Soon</p>
                  </div>
                </div>
                {/* Decorative elements */}
                <div className='absolute -top-4 -right-4 w-8 h-8 bg-purple-500 rounded-full opacity-20'></div>
                <div className='absolute -bottom-4 -left-4 w-6 h-6 bg-pink-400 rounded-full opacity-30'></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Coming Soon Features Section */}
      <section className='bg-gray-800 py-16 px-4'>
        <div className='max-w-6xl mx-auto'>
          <div className='text-center mb-12'>
            <h2 className='text-3xl md:text-4xl font-bold text-white mb-4'>
              TFT Strategy Features
            </h2>
            <p className='text-xl text-gray-300 max-w-3xl mx-auto'>
              Advanced tools to help you identify opportunities and climb the
              TFT ladder
            </p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {/* Under-utilized Champions */}
            <div className='bg-gray-700 rounded-xl p-6 hover:bg-gray-600 transition-colors'>
              <div className='w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mb-4'>
                <svg
                  className='w-6 h-6 text-white'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                >
                  <path d='M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z' />
                </svg>
              </div>
              <h3 className='text-xl font-semibold text-white mb-3'>
                Under-utilized Champions
              </h3>
              <p className='text-gray-300'>
                Discover hidden gems in the current meta. Find champions with
                high win rates but low pick rates.
              </p>
            </div>

            {/* Comp Optimization */}
            <div className='bg-gray-700 rounded-xl p-6 hover:bg-gray-600 transition-colors'>
              <div className='w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4'>
                <svg
                  className='w-6 h-6 text-white'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                >
                  <path
                    fillRule='evenodd'
                    d='M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z'
                    clipRule='evenodd'
                  />
                </svg>
              </div>
              <h3 className='text-xl font-semibold text-white mb-3'>
                Comp Optimization
              </h3>
              <p className='text-gray-300'>
                Get suggestions for optimal item builds, positioning, and team
                compositions.
              </p>
            </div>

            {/* Meta Tracking */}
            <div className='bg-gray-700 rounded-xl p-6 hover:bg-gray-600 transition-colors'>
              <div className='w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mb-4'>
                <svg
                  className='w-6 h-6 text-white'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                >
                  <path d='M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z' />
                  <path d='M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z' />
                </svg>
              </div>
              <h3 className='text-xl font-semibold text-white mb-3'>
                Meta Tracking
              </h3>
              <p className='text-gray-300'>
                Stay ahead of the meta with real-time tracking of champion and
                comp performance.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}



