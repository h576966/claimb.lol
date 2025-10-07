'use client';

import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { APP_CONFIG } from '@/lib/constants';

export default function TermsPage() {
  return (
    <div className='min-h-screen bg-gray-900'>
      <Header />

      <main className='max-w-4xl mx-auto px-4 py-16'>
        <div className='bg-white shadow-lg rounded-lg p-8'>
          <h1 className='text-4xl font-bold text-gray-900 mb-8'>
            Terms of Service
          </h1>

          <div className='prose prose-lg max-w-none'>
            <p className='text-gray-600 mb-8'>
              <strong>Last updated:</strong> {new Date().toLocaleDateString()}
            </p>

            <section className='mb-8'>
              <h2 className='text-2xl font-semibold text-gray-900 mb-4'>
                Acceptance of Terms
              </h2>
              <p className='text-gray-800 mb-4'>
                By using Claimb, you agree to be bound by these Terms of
                Service. If you do not agree to these terms, please do not use
                our application.
              </p>
            </section>

            <section className='mb-8'>
              <h2 className='text-2xl font-semibold text-gray-900 mb-4'>
                Description of Service
              </h2>
              <p className='text-gray-800 mb-4'>
                Claimb is a League of Legends companion application that
                provides:
              </p>
              <ul className='list-disc list-inside text-gray-800 space-y-2 mb-6'>
                <li>Performance analysis based on public game data</li>
                <li>AI-powered coaching insights</li>
                <li>Champion pool analysis and recommendations</li>
                <li>Rank tracking and progression monitoring</li>
                <li>Timeline-based game analysis</li>
              </ul>
            </section>

            <section className='mb-8'>
              <h2 className='text-2xl font-semibold text-gray-900 mb-4'>
                Riot Games API Compliance
              </h2>
              <p className='text-gray-800 mb-4'>
                Claimb uses Riot Games&apos; official API in compliance with their
                Terms of Service:
              </p>
              <ul className='list-disc list-inside text-gray-800 space-y-2 mb-6'>
                <li>We respect rate limits and API guidelines</li>
                <li>We only access publicly available game data</li>
                <li>We properly attribute Riot Games as the data source</li>
                <li>We do not store or cache data beyond reasonable limits</li>
                <li>
                  We handle errors gracefully and avoid unnecessary API calls
                </li>
              </ul>
              <p className='text-gray-800'>
                League of Legends is a trademark of Riot Games, Inc. We are not
                affiliated with Riot Games.
              </p>
            </section>

            <section className='mb-8'>
              <h2 className='text-2xl font-semibold text-gray-900 mb-4'>
                User Responsibilities
              </h2>
              <p className='text-gray-800 mb-4'>
                As a user of Claimb, you agree to:
              </p>
              <ul className='list-disc list-inside text-gray-800 space-y-2 mb-6'>
                <li>Provide accurate summoner information</li>
                <li>
                  Use the service in accordance with League of Legends Terms of
                  Service
                </li>
                <li>
                  Not attempt to reverse engineer or modify the application
                </li>
                <li>
                  Not use the service for any illegal or unauthorized purpose
                </li>
                <li>Respect the intellectual property rights of Riot Games</li>
              </ul>
            </section>

            <section className='mb-8'>
              <h2 className='text-2xl font-semibold text-gray-900 mb-4'>
                Service Availability
              </h2>
              <p className='text-gray-800 mb-4'>
                While we strive to maintain high service availability:
              </p>
              <ul className='list-disc list-inside text-gray-800 space-y-2 mb-6'>
                <li>Service availability depends on Riot Games API uptime</li>
                <li>We may experience temporary outages or delays</li>
                <li>AI coaching features require internet connectivity</li>
                <li>We reserve the right to modify or discontinue features</li>
              </ul>
            </section>

            <section className='mb-8'>
              <h2 className='text-2xl font-semibold text-gray-900 mb-4'>
                Limitation of Liability
              </h2>
              <p className='text-gray-800 mb-4'>
                Claimb is provided &quot;as is&quot; without warranties of any kind. We
                are not responsible for:
              </p>
              <ul className='list-disc list-inside text-gray-800 space-y-2 mb-6'>
                <li>Accuracy of performance analysis or coaching advice</li>
                <li>Game outcomes or ranking changes</li>
                <li>
                  Third-party service interruptions (Riot API, OpenAI, etc.)
                </li>
                <li>Data loss or corruption on your device</li>
              </ul>
            </section>

            <section className='mb-8'>
              <h2 className='text-2xl font-semibold text-gray-900 mb-4'>
                Changes to Terms
              </h2>
              <p className='text-gray-800'>
                We reserve the right to modify these terms at any time.
                Continued use of the service after changes constitutes
                acceptance of the new terms.
              </p>
            </section>

            <section className='mb-8'>
              <h2 className='text-2xl font-semibold text-gray-900 mb-4'>
                Contact Information
              </h2>
              <p className='text-gray-800'>
                For questions about these terms, contact us at{' '}
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
