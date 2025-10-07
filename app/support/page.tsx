'use client';

import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { APP_CONFIG } from '@/lib/constants';

export default function SupportPage() {
  return (
    <div className='min-h-screen bg-gray-900'>
      <Header />

      <main className='max-w-4xl mx-auto px-4 py-16'>
        <div className='space-y-8'>
          {/* Contact Information */}
          <div className='bg-white shadow-lg rounded-lg p-8'>
            <h1 className='text-4xl font-bold text-gray-900 mb-8'>
              Support & Contact
            </h1>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
              <div>
                <h2 className='text-2xl font-semibold text-gray-900 mb-4'>
                  Get Help
                </h2>
                <p className='text-gray-800 mb-6'>
                  Need assistance with Claimb? We're here to help you get the
                  most out of your League of Legends coaching experience.
                </p>

                <div className='space-y-4'>
                  <div className='flex items-start space-x-3'>
                    <div className='w-6 h-6 bg-primary-100 rounded-full flex items-center justify-center mt-1'>
                      <svg
                        className='w-4 h-4 text-primary-600'
                        fill='currentColor'
                        viewBox='0 0 20 20'
                      >
                        <path d='M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z' />
                        <path d='M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z' />
                      </svg>
                    </div>
                    <div>
                      <h3 className='font-semibold text-gray-900'>
                        Email Support
                      </h3>
                      <p className='text-gray-800 text-sm'>
                        <a
                          href={`mailto:${APP_CONFIG.SUPPORT_EMAIL}`}
                          className='text-primary-600 hover:text-primary-700'
                        >
                          {APP_CONFIG.SUPPORT_EMAIL}
                        </a>
                      </p>
                      <p className='text-gray-600 text-xs mt-1'>
                        Response time: Within 24 hours
                      </p>
                    </div>
                  </div>

                  <div className='flex items-start space-x-3'>
                    <div className='w-6 h-6 bg-primary-100 rounded-full flex items-center justify-center mt-1'>
                      <svg
                        className='w-4 h-4 text-primary-600'
                        fill='currentColor'
                        viewBox='0 0 20 20'
                      >
                        <path
                          fillRule='evenodd'
                          d='M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z'
                          clipRule='evenodd'
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className='font-semibold text-gray-900'>
                        Bug Reports
                      </h3>
                      <p className='text-gray-800 text-sm'>
                        Found a bug? Please include your iOS version and device
                        model
                      </p>
                    </div>
                  </div>

                  <div className='flex items-start space-x-3'>
                    <div className='w-6 h-6 bg-primary-100 rounded-full flex items-center justify-center mt-1'>
                      <svg
                        className='w-4 h-4 text-primary-600'
                        fill='currentColor'
                        viewBox='0 0 20 20'
                      >
                        <path d='M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z' />
                        <path d='M5 5a2 2 0 00-2 2v6a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2H5z' />
                      </svg>
                    </div>
                    <div>
                      <h3 className='font-semibold text-gray-900'>
                        Feature Requests
                      </h3>
                      <p className='text-gray-800 text-sm'>
                        Have an idea? We'd love to hear your suggestions
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h2 className='text-2xl font-semibold text-gray-900 mb-4'>
                  Common Issues
                </h2>

                <div className='space-y-4'>
                  <div className='border-l-4 border-primary-500 pl-4'>
                    <h3 className='font-semibold text-gray-900'>
                      Can't find my summoner?
                    </h3>
                    <p className='text-gray-800 text-sm'>
                      Make sure you're using the correct region and your Riot ID
                      format (Name#Tag)
                    </p>
                  </div>

                  <div className='border-l-4 border-primary-500 pl-4'>
                    <h3 className='font-semibold text-gray-900'>
                      AI coaching not working?
                    </h3>
                    <p className='text-gray-800 text-sm'>
                      Check your internet connection and try refreshing the data
                    </p>
                  </div>

                  <div className='border-l-4 border-primary-500 pl-4'>
                    <h3 className='font-semibold text-gray-900'>
                      App crashing?
                    </h3>
                    <p className='text-gray-800 text-sm'>
                      Try force-closing and reopening the app, or restart your
                      device
                    </p>
                  </div>

                  <div className='border-l-4 border-primary-500 pl-4'>
                    <h3 className='font-semibold text-gray-900'>
                      Data not updating?
                    </h3>
                    <p className='text-gray-800 text-sm'>
                      Pull down to refresh, or logout and login again
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Technical Information */}
          <div className='bg-white shadow-lg rounded-lg p-8'>
            <h2 className='text-2xl font-semibold text-gray-900 mb-6'>
              Technical Information
            </h2>

            <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
              <div className='text-center'>
                <div className='w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-3'>
                  <svg
                    className='w-6 h-6 text-primary-600'
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
                <h3 className='font-semibold text-gray-900 mb-2'>
                  iOS Requirements
                </h3>
                <p className='text-gray-800 text-sm'>
                  iOS 18.0 or later
                  <br />
                  iPhone only
                </p>
              </div>

              <div className='text-center'>
                <div className='w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-3'>
                  <svg
                    className='w-6 h-6 text-primary-600'
                    fill='currentColor'
                    viewBox='0 0 20 20'
                  >
                    <path
                      fillRule='evenodd'
                      d='M4.083 9h1.946c.089-1.546.383-2.97.837-4.118A6.004 6.004 0 004.083 9zM10 2a8 8 0 100 16 8 8 0 000-16zm0 2c-.076 0-.232.032-.465.262-.238.234-.497.623-.737 1.182-.389.907-.673 2.142-.766 3.556h3.936c-.093-1.414-.377-2.649-.766-3.556-.24-.56-.5-.948-.737-1.182C10.232 4.032 10.076 4 10 4zm3.971 5c-.089-1.546-.383-2.97-.837-4.118A6.004 6.004 0 0115.917 9h-1.946zm-2.003 2H8.032c.093 1.414.377 2.649.766 3.556.24.56.5.948.737 1.182.233.23.389.262.465.262.076 0 .232-.032.465-.262.238-.234.498-.623.737-1.182.389-.907.673-2.142.766-3.556zm1.166 4.118c.454-1.147.748-2.572.837-4.118h1.946a6.004 6.004 0 01-2.783 4.118zm-6.268 0C6.412 13.97 6.118 12.546 6.03 11H4.083a6.004 6.004 0 002.783 4.118z'
                      clipRule='evenodd'
                    />
                  </svg>
                </div>
                <h3 className='font-semibold text-gray-900 mb-2'>
                  Supported Regions
                </h3>
                <p className='text-gray-800 text-sm'>
                  EUW, NA, EUNE
                  <br />
                  More coming soon
                </p>
              </div>

              <div className='text-center'>
                <div className='w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-3'>
                  <svg
                    className='w-6 h-6 text-primary-600'
                    fill='currentColor'
                    viewBox='0 0 20 20'
                  >
                    <path
                      fillRule='evenodd'
                      d='M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z'
                      clipRule='evenodd'
                    />
                  </svg>
                </div>
                <h3 className='font-semibold text-gray-900 mb-2'>
                  Performance
                </h3>
                <p className='text-gray-800 text-sm'>
                  Local-first design
                  <br />
                  Works offline
                </p>
              </div>
            </div>
          </div>

          {/* FAQ Link */}
          <div className='bg-white shadow-lg rounded-lg p-8 text-center'>
            <h2 className='text-2xl font-semibold text-gray-900 mb-4'>
              Still Need Help?
            </h2>
            <p className='text-gray-800 mb-6'>
              Check out our comprehensive FAQ section for more answers
            </p>
            <a
              href='/#faq'
              className='btn-primary inline-flex items-center gap-2'
            >
              View FAQ
            </a>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
