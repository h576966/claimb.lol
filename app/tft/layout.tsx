import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Claimb TFT - Teamfight Tactics Strategy Assistant',
  description:
    'Discover under-utilized champions, optimize comps, and climb the TFT ladder with data-driven insights. Coming soon to Claimb.',
  keywords:
    'Teamfight Tactics, TFT, strategy, under-utilized champions, comp optimization, meta analysis, mobile gaming, esports',
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
    canonical: '/tft',
  },
  openGraph: {
    title: 'Claimb TFT - Teamfight Tactics Strategy Assistant',
    description:
      'Discover under-utilized champions, optimize comps, and climb the TFT ladder with data-driven insights.',
    url: 'https://claimb.lol/tft',
    siteName: 'Claimb.lol',
    images: [
      {
        url: '/images/tft-preview.png',
        width: 800,
        height: 600,
        alt: 'Claimb TFT Strategy Assistant Preview',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Claimb TFT - Teamfight Tactics Strategy Assistant',
    description:
      'Discover under-utilized champions, optimize comps, and climb the TFT ladder with data-driven insights.',
    images: ['/images/tft-preview.png'],
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
};

export default function TFTLayout({ children }: { children: React.ReactNode }) {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Claimb TFT - Teamfight Tactics Strategy Assistant',
    description:
      'Discover under-utilized champions, optimize comps, and climb the TFT ladder with data-driven insights.',
    url: 'https://claimb.lol/tft',
    isPartOf: {
      '@type': 'WebSite',
      name: 'Claimb.lol',
      url: 'https://claimb.lol',
    },
    about: {
      '@type': 'Thing',
      name: 'Teamfight Tactics',
      description: 'Strategy game mode in League of Legends',
    },
  };

  return (
    <>
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      {children}
    </>
  );
}



