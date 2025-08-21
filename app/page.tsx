'use client'

import { useState } from 'react'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { LoLAnalyser } from '@/components/LoLAnalyser'
import { Features } from '@/components/Features'
import { Footer } from '@/components/Footer'

export default function HomePage() {
  const [showAnalyser, setShowAnalyser] = useState(false)

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <Header />

      <main>
        <Hero onAnalyseClick={() => setShowAnalyser(true)} />

        {showAnalyser && (
          <div className="py-16 px-4">
            <div className="max-w-6xl mx-auto">
              <LoLAnalyser />
            </div>
          </div>
        )}

        <Features />
      </main>

      <Footer />
    </div>
  )
}
