import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Claimb.lol - League of Legends Companion App',
  description: 'Get personalized LoL performance insights and coaching. Download the Claimb macOS app for comprehensive game analysis.',
  keywords: 'League of Legends, LoL, coaching, performance analysis, summoner stats, champion mastery',
  authors: [{ name: 'Claimb Team' }],
  viewport: 'width=device-width, initial-scale=1',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
          {children}
        </div>
      </body>
    </html>
  )
}
