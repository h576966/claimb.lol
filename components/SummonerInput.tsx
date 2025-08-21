'use client'

import { useState } from 'react'
import { Region } from '@/types/lol'

interface SummonerInputProps {
  onAnalyse: (summonerName: string, region: string) => void
  regions: Region[]
}

export function SummonerInput({ onAnalyse, regions }: SummonerInputProps) {
  const [summonerName, setSummonerName] = useState('')
  const [region, setRegion] = useState('na1')
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!summonerName.trim() || !region) return

    setIsSubmitting(true)
    try {
      await onAnalyse(summonerName.trim(), region)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="card">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="summonerName" className="block text-sm font-medium text-gray-700 mb-2">
            Summoner Name
          </label>
          <input
            type="text"
            id="summonerName"
            value={summonerName}
            onChange={(e) => setSummonerName(e.target.value)}
            placeholder="Enter your summoner name"
            className="input-field"
            required
            disabled={isSubmitting}
          />
        </div>

        <div>
          <label htmlFor="region" className="block text-sm font-medium text-gray-700 mb-2">
            Region
          </label>
          <select
            id="region"
            value={region}
            onChange={(e) => setRegion(e.target.value)}
            className="input-field"
            required
            disabled={isSubmitting}
          >
            {regions.map((r) => (
              <option key={r.id} value={r.id}>
                {r.name}
              </option>
            ))}
          </select>
        </div>

        <button
          type="submit"
          disabled={!summonerName.trim() || isSubmitting}
          className="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? 'Analyzing...' : 'Analyze Performance'}
        </button>
      </form>

      <div className="mt-6 p-4 bg-gray-50 rounded-lg">
        <h4 className="text-sm font-medium text-gray-700 mb-2">What you'll get:</h4>
        <ul className="text-sm text-gray-600 space-y-1">
          <li>• Performance statistics from your last 20 matches</li>
          <li>• Best role and champion analysis</li>
          <li>• KDA, CS, damage, and vision trends</li>
          <li>• AI-powered coaching recommendations</li>
        </ul>
      </div>
    </div>
  )
}
