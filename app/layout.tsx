import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Claimb.lol - League of Legends iOS Coaching App',
  description:
    'AI-powered LoL coaching with privacy-first design. All data stays on your iPhone. Join TestFlight beta now.',
  keywords:
    'League of Legends, LoL, iOS app, AI coaching, privacy-first, TestFlight, mobile gaming, esports, performance analysis',
  authors: [{ name: 'Claimb Team' }],
  creator: 'Claimb Team',
  publisher: 'Claimb',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://claimb.lol'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Claimb.lol - League of Legends iOS Coaching App',
    description:
      'AI-powered LoL coaching with privacy-first design. All data stays on your iPhone.',
    url: 'https://claimb.lol',
    siteName: 'Claimb.lol',
    images: [
      {
        url: '/images/app-screenshot.png',
        width: 800,
        height: 600,
        alt: 'Claimb iOS App Screenshot',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Claimb.lol - League of Legends iOS Coaching App',
    description:
      'AI-powered LoL coaching with privacy-first design. All data stays on your iPhone.',
    images: ['/images/app-screenshot.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code', // Add your actual verification code
  },
};

// Viewport configuration moved to viewport.ts as per Next.js 14 requirements
export { viewport } from './viewport';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'MobileApplication',
    name: 'Claimb',
    description:
      'AI-powered League of Legends coaching app with privacy-first design',
    url: 'https://claimb.lol',
    applicationCategory: 'GameApplication',
    operatingSystem: 'iOS',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
    author: {
      '@type': 'Organization',
      name: 'Claimb Team',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Claimb',
    },
  };

  return (
    <html lang='en'>
      <head>
        <link rel='icon' href='/favicon.ico' />
        <link rel='apple-touch-icon' href='/images/AppIcon.png' />
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
