import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { APP_CONFIG } from '@/lib/constants';

export default function HomePage() {
  return (
    <div className='min-h-screen bg-gray-900'>
      <Header />

      {/* Dark Hero Section */}
      <section className='bg-gray-900 text-white py-16 px-4'>
        <div className='max-w-4xl mx-auto text-center'>
          {/* App Icon */}
          <div className='mb-8 flex justify-center'>
            <div className='w-24 h-24 rounded-2xl shadow-lg overflow-hidden'>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src='/images/AppIcon.png'
                alt='Claimb App Icon'
                className='w-full h-full object-cover'
              />
            </div>
          </div>

          <h1 className='text-4xl md:text-5xl font-bold text-white mb-6'>
            Your Personal League of Legends
            <span className='text-primary-400 block'>Coach in Your Pocket</span>
          </h1>

          <p className='text-xl text-gray-300 mb-8 max-w-2xl mx-auto'>
            AI-powered coaching with specific timing insights, performance
            analysis, and privacy-first design. All data stays on your iPhone -
            no servers, no tracking.
          </p>

          <div className='flex flex-col sm:flex-row gap-4 justify-center mb-8'>
            <a
              href={APP_CONFIG.TESTFLIGHT_URL}
              target='_blank'
              rel='noopener noreferrer'
              className='bg-primary-600 hover:bg-primary-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors text-lg flex items-center justify-center gap-2'
            >
              <svg className='w-5 h-5' fill='currentColor' viewBox='0 0 20 20'>
                <path
                  fillRule='evenodd'
                  d='M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z'
                  clipRule='evenodd'
                />
              </svg>
              Try on TestFlight
            </a>
          </div>

          <p className='text-sm text-gray-400 mb-8'>
            Available on iOS 18+ • Coming to App Store soon
          </p>

          <div className='flex justify-center items-center gap-8 text-gray-300'>
            <div className='flex items-center gap-2'>
              <svg className='w-6 h-6' fill='currentColor' viewBox='0 0 20 20'>
                <path d='M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z' />
              </svg>
              <span className='font-medium'>AI Coaching</span>
            </div>
            <div className='w-px h-6 bg-gray-600'></div>
            <div className='flex items-center gap-2'>
              <svg className='w-6 h-6' fill='currentColor' viewBox='0 0 20 20'>
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
              <svg className='w-6 h-6' fill='currentColor' viewBox='0 0 20 20'>
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
      </section>

      {/* Features Section */}
      <section className='bg-gray-800 py-20 px-4'>
        <div className='max-w-6xl mx-auto'>
          <div className='text-center mb-16'>
            <h2 className='text-4xl md:text-5xl font-bold text-white mb-6'>
              Everything You Need to
              <span className='text-primary-400 block'>Improve Your Game</span>
            </h2>
            <p className='text-xl text-gray-300 max-w-3xl mx-auto'>
              Three powerful features designed to give you actionable insights
              and personalized coaching for your League of Legends journey.
            </p>
          </div>

          <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
            {/* Champions Feature */}
            <div className='bg-gray-900 rounded-2xl p-8 hover:bg-gray-850 transition-colors'>
              <div className='mb-6'>
                <div className='w-full rounded-xl overflow-hidden bg-gray-800 mb-6'>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src='/ClaimbImages/championsView.jpeg'
                    alt='Champions View - Champion Pool Analysis'
                    className='w-full h-auto object-contain'
                  />
                </div>
                <h3 className='text-2xl font-bold text-white mb-4'>
                  Champion Pool Analysis
                </h3>
                <p className='text-gray-300 mb-6'>
                  Track your champion performance with detailed win rates,
                  optimization insights, and filtering options. Analyze your
                  champion pool to identify strengths and areas for improvement.
                </p>
                <ul className='space-y-2 text-gray-400'>
                  <li className='flex items-center gap-2'>
                    <svg
                      className='w-4 h-4 text-primary-400'
                      fill='currentColor'
                      viewBox='0 0 20 20'
                    >
                      <path
                        fillRule='evenodd'
                        d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                        clipRule='evenodd'
                      />
                    </svg>
                    Performance tracking for 171 champions
                  </li>
                  <li className='flex items-center gap-2'>
                    <svg
                      className='w-4 h-4 text-primary-400'
                      fill='currentColor'
                      viewBox='0 0 20 20'
                    >
                      <path
                        fillRule='evenodd'
                        d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                        clipRule='evenodd'
                      />
                    </svg>
                    Win rate analysis and filtering
                  </li>
                  <li className='flex items-center gap-2'>
                    <svg
                      className='w-4 h-4 text-primary-400'
                      fill='currentColor'
                      viewBox='0 0 20 20'
                    >
                      <path
                        fillRule='evenodd'
                        d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                        clipRule='evenodd'
                      />
                    </svg>
                    Pool optimization insights
                  </li>
                </ul>
              </div>
            </div>

            {/* Performance Feature */}
            <div className='bg-gray-900 rounded-2xl p-8 hover:bg-gray-850 transition-colors'>
              <div className='mb-6'>
                <div className='w-full rounded-xl overflow-hidden bg-gray-800 mb-6'>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src='/ClaimbImages/performanceView.jpeg'
                    alt='Performance View - KPI Dashboard and Rank Tracking'
                    className='w-full h-auto object-contain'
                  />
                </div>
                <h3 className='text-2xl font-bold text-white mb-4'>
                  Performance Analytics
                </h3>
                <p className='text-gray-300 mb-6'>
                  Comprehensive KPI dashboard with role-specific metrics,
                  baseline comparisons, and rank tracking. Monitor your Solo/Duo
                  and Flex progress with detailed LP tracking.
                </p>
                <ul className='space-y-2 text-gray-400'>
                  <li className='flex items-center gap-2'>
                    <svg
                      className='w-4 h-4 text-primary-400'
                      fill='currentColor'
                      viewBox='0 0 20 20'
                    >
                      <path
                        fillRule='evenodd'
                        d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                        clipRule='evenodd'
                      />
                    </svg>
                    Role-specific KPI metrics
                  </li>
                  <li className='flex items-center gap-2'>
                    <svg
                      className='w-4 h-4 text-primary-400'
                      fill='currentColor'
                      viewBox='0 0 20 20'
                    >
                      <path
                        fillRule='evenodd'
                        d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                        clipRule='evenodd'
                      />
                    </svg>
                    Solo/Duo & Flex rank tracking
                  </li>
                  <li className='flex items-center gap-2'>
                    <svg
                      className='w-4 h-4 text-primary-400'
                      fill='currentColor'
                      viewBox='0 0 20 20'
                    >
                      <path
                        fillRule='evenodd'
                        d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                        clipRule='evenodd'
                      />
                    </svg>
                    Streak analysis and warnings
                  </li>
                </ul>
              </div>
            </div>

            {/* Coaching Feature */}
            <div className='bg-gray-900 rounded-2xl p-8 hover:bg-gray-850 transition-colors'>
              <div className='mb-6'>
                <div className='w-full rounded-xl overflow-hidden bg-gray-800 mb-6'>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src='/ClaimbImages/coachingView.jpeg'
                    alt='Coaching View - AI-Powered Analysis and Insights'
                    className='w-full h-auto object-contain'
                  />
                </div>
                <h3 className='text-2xl font-bold text-white mb-4'>
                  AI Coaching
                </h3>
                <p className='text-gray-300 mb-6'>
                  Personalized AI coaching with post-game analysis and
                  performance summaries. Get specific timing insights with exact
                  minute marks for actionable feedback.
                </p>
                <ul className='space-y-2 text-gray-400'>
                  <li className='flex items-center gap-2'>
                    <svg
                      className='w-4 h-4 text-primary-400'
                      fill='currentColor'
                      viewBox='0 0 20 20'
                    >
                      <path
                        fillRule='evenodd'
                        d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                        clipRule='evenodd'
                      />
                    </svg>
                    Post-game analysis with timing
                  </li>
                  <li className='flex items-center gap-2'>
                    <svg
                      className='w-4 h-4 text-primary-400'
                      fill='currentColor'
                      viewBox='0 0 20 20'
                    >
                      <path
                        fillRule='evenodd'
                        d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                        clipRule='evenodd'
                      />
                    </svg>
                    Lane matchup context
                  </li>
                  <li className='flex items-center gap-2'>
                    <svg
                      className='w-4 h-4 text-primary-400'
                      fill='currentColor'
                      viewBox='0 0 20 20'
                    >
                      <path
                        fillRule='evenodd'
                        d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                        clipRule='evenodd'
                      />
                    </svg>
                    Optimistic caching for instant responses
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Additional Features */}
          <div className='mt-16 text-center'>
            <h3 className='text-2xl font-bold text-white mb-8'>
              Built for Competitive Players
            </h3>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
              <div className='bg-gray-900 rounded-xl p-6'>
                <div className='w-12 h-12 bg-primary-600 rounded-lg flex items-center justify-center mb-4 mx-auto'>
                  <svg
                    className='w-6 h-6 text-white'
                    fill='currentColor'
                    viewBox='0 0 20 20'
                  >
                    <path
                      fillRule='evenodd'
                      d='M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z'
                      clipRule='evenodd'
                    />
                  </svg>
                </div>
                <h4 className='text-lg font-semibold text-white mb-2'>
                  Privacy-First
                </h4>
                <p className='text-gray-400 text-sm'>
                  All data stays on your device. No servers, no tracking.
                </p>
              </div>

              <div className='bg-gray-900 rounded-xl p-6'>
                <div className='w-12 h-12 bg-primary-600 rounded-lg flex items-center justify-center mb-4 mx-auto'>
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
                <h4 className='text-lg font-semibold text-white mb-2'>
                  Offline-First
                </h4>
                <p className='text-gray-400 text-sm'>
                  Works without internet after initial data sync.
                </p>
              </div>

              <div className='bg-gray-900 rounded-xl p-6'>
                <div className='w-12 h-12 bg-primary-600 rounded-lg flex items-center justify-center mb-4 mx-auto'>
                  <svg
                    className='w-6 h-6 text-white'
                    fill='currentColor'
                    viewBox='0 0 20 20'
                  >
                    <path d='M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z' />
                  </svg>
                </div>
                <h4 className='text-lg font-semibold text-white mb-2'>
                  AI-Powered
                </h4>
                <p className='text-gray-400 text-sm'>
                  GPT-5-mini powered coaching with specific insights.
                </p>
              </div>

              <div className='bg-gray-900 rounded-xl p-6'>
                <div className='w-12 h-12 bg-primary-600 rounded-lg flex items-center justify-center mb-4 mx-auto'>
                  <svg
                    className='w-6 h-6 text-white'
                    fill='currentColor'
                    viewBox='0 0 20 20'
                  >
                    <path
                      fillRule='evenodd'
                      d='M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z'
                      clipRule='evenodd'
                    />
                  </svg>
                </div>
                <h4 className='text-lg font-semibold text-white mb-2'>
                  Performance Focused
                </h4>
                <p className='text-gray-400 text-sm'>
                  KPI-driven analytics for competitive improvement.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
