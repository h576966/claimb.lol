import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Claimb.lol - League of Legends iOS Coaching App',
  description:
    'AI-powered LoL coaching with privacy-first design. All data stays on your iPhone. Join TestFlight beta now.',
  keywords:
    'League of Legends, LoL, iOS app, AI coaching, privacy-first, TestFlight',
  authors: [{ name: 'Claimb Team' }],
  viewport: 'width=device-width, initial-scale=1',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
