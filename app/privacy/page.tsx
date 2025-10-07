'use client';

import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { APP_CONFIG } from '@/lib/constants';

export default function PrivacyPage() {
  return (
    <div className='min-h-screen bg-gray-900'>
      <Header />

      <main className='max-w-4xl mx-auto px-4 py-16'>
        <div className='bg-white shadow-lg rounded-lg p-8'>
          <h1 className='text-4xl font-bold text-gray-900 mb-8'>
            Privacy Policy
          </h1>

          <div className='prose prose-lg max-w-none'>
            <p className='text-gray-600 mb-8'>
              <strong>Last updated:</strong> {new Date().toLocaleDateString()}
            </p>

            <section className='mb-8'>
              <h2 className='text-2xl font-semibold text-gray-900 mb-4'>
                Data We Handle
              </h2>
              <p className='text-gray-800 mb-4'>
                Claimb processes only public League of Legends data provided by
                Riot Games through their official API. This includes:
              </p>
              <ul className='list-disc list-inside text-gray-800 space-y-2 mb-6'>
                <li>Summoner names and basic account information</li>
                <li>Public match history and performance statistics</li>
                <li>Champion mastery and play data</li>
                <li>Rank and LP information</li>
                <li>Public game timeline data</li>
              </ul>
              <p className='text-gray-800'>
                <strong>Important:</strong> We do not collect, store, or have
                access to any personal information, private messages, payment
                details, or any data not publicly available through Riot's API.
              </p>
            </section>

            <section className='mb-8'>
              <h2 className='text-2xl font-semibold text-gray-900 mb-4'>
                Local-First Architecture
              </h2>
              <p className='text-gray-800 mb-4'>
                All data processing happens locally on your iPhone:
              </p>
              <ul className='list-disc list-inside text-gray-800 space-y-2 mb-6'>
                <li>Match data is cached locally using SwiftData</li>
                <li>
                  AI coaching analysis is generated and stored on your device
                </li>
                <li>Performance metrics are calculated locally</li>
                <li>
                  No data is transmitted to external servers except for API
                  calls
                </li>
              </ul>
            </section>

            <section className='mb-8'>
              <h2 className='text-2xl font-semibold text-gray-900 mb-4'>
                External Services
              </h2>
              <p className='text-gray-800 mb-4'>
                Claimb uses the following external services:
              </p>
              <ul className='list-disc list-inside text-gray-800 space-y-2 mb-6'>
                <li>
                  <strong>Riot Games API:</strong> For fetching public game data
                </li>
                <li>
                  <strong>OpenAI API:</strong> For AI coaching analysis (via
                  secure proxy)
                </li>
                <li>
                  <strong>Data Dragon API:</strong> For champion and game asset
                  data
                </li>
              </ul>
              <p className='text-gray-800'>
                All API calls are made through secure server-side proxies. API
                keys are never exposed to your device.
              </p>
            </section>

            <section className='mb-8'>
              <h2 className='text-2xl font-semibold text-gray-900 mb-4'>
                Data Retention
              </h2>
              <p className='text-gray-800 mb-4'>Data is retained as follows:</p>
              <ul className='list-disc list-inside text-gray-800 space-y-2 mb-6'>
                <li>Match history: Up to 100 matches cached locally</li>
                <li>AI coaching responses: Cached locally with expiration</li>
                <li>Champion data: Cached locally until game updates</li>
                <li>User preferences: Stored locally using UserDefaults</li>
              </ul>
              <p className='text-gray-800'>
                You can clear all data by uninstalling the app.
              </p>
            </section>

            <section className='mb-8'>
              <h2 className='text-2xl font-semibold text-gray-900 mb-4'>
                Contact Information
              </h2>
              <p className='text-gray-800'>
                If you have questions about this privacy policy, contact us at{' '}
                <a
                  href={`mailto:${APP_CONFIG.SUPPORT_EMAIL}`}
                  className='text-primary-600 hover:text-primary-700'
                >
                  {APP_CONFIG.SUPPORT_EMAIL}
                </a>
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
