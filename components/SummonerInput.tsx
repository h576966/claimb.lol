'use client'

import { useState, useEffect } from 'react'
import { Region } from '@/types/lol'

interface SummonerInputProps {
  onAnalyse: (summonerName: string, region: string) => void
  regions: Region[]
}

export function SummonerInput({ onAnalyse, regions }: SummonerInputProps) {
  const [summonerName, setSummonerName] = useState('')
  const [region, setRegion] = useState('euw1') // Default to EUW
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showTagSuggestions, setShowTagSuggestions] = useState(false)
  const [tagSuggestions, setTagSuggestions] = useState<string[]>([])

  // Common tag suggestions for popular regions
  const commonTags = {
    euw1: ['EUW', 'EU1', 'EU2', 'EU3', 'EU4', 'EU5'],
    eun1: ['EUNE', 'NE1', 'NE2', 'NE3', 'NE4', 'NE5'],
    na1: ['NA1', 'NA2', 'NA3', 'NA4', 'NA5', 'NA6']
  }

  // Show tag suggestions when user types summoner name
  useEffect(() => {
    if (summonerName.trim() && !summonerName.includes('#')) {
      setShowTagSuggestions(true)
      setTagSuggestions(commonTags[region as keyof typeof commonTags] || [])
    } else {
      setShowTagSuggestions(false)
    }
  }, [summonerName, region])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!summonerName.trim() || !region) {
      return
    }

    // Validate name#tag format
    if (!summonerName.includes('#')) {
      alert('Please enter summoner name in format: Name#Tag (e.g., Faker#KR1)')
      return
    }

    setIsSubmitting(true)
    try {
      await onAnalyse(summonerName.trim(), region)
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleTagSelect = (tag: string) => {
    setSummonerName(prev => {
      const name = prev.split('#')[0] || prev
      return `${name}#${tag}`
    })
    setShowTagSuggestions(false)
  }

  const isValid = summonerName.trim().length > 0 && region && summonerName.includes('#')

  return (
    <div className="space-y-6">
      <div>
        <label htmlFor="summonerName" className="block text-sm font-medium text-text-700 dark:text-text-300 mb-2">
          Summoner Name & Tag
        </label>
        <div className="relative">
          <input
            id="summonerName"
            type="text"
            value={summonerName}
            onChange={(e) => setSummonerName(e.target.value)}
            placeholder="Enter summoner name#tag (e.g., Faker#KR1)"
            className="input-field"
            required
            disabled={isSubmitting}
          />

          {/* Tag Suggestions Dropdown */}
          {showTagSuggestions && tagSuggestions.length > 0 && (
            <div className="absolute z-10 w-full mt-1 bg-white dark:bg-surface-800 border border-ui-border rounded-lg shadow-lg max-h-48 overflow-y-auto">
              {tagSuggestions.map((tag) => (
                <button
                  key={tag}
                  type="button"
                  onClick={() => handleTagSelect(tag)}
                  className="w-full text-left px-3 py-2 hover:bg-surface-100 dark:hover:bg-surface-700 text-text-900 dark:text-text-100 transition-colors"
                >
                  {summonerName.split('#')[0] || summonerName}#{tag}
                </button>
              ))}
            </div>
          )}
        </div>
        <p className="text-xs text-text-500 dark:text-text-400 mt-1">
          Format: Name#Tag (e.g., Faker#KR1, Doublelift#NA1)
        </p>
      </div>

      <div>
        <label htmlFor="region" className="block text-sm font-medium text-text-700 dark:text-text-300 mb-2">
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
        disabled={!isValid || isSubmitting}
        className="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
        onClick={handleSubmit}
      >
        {isSubmitting ? 'Analyzing...' : 'Analyze Performance'}
      </button>

      <div className="text-center">
        <p className="text-sm text-text-500 dark:text-text-400">
          Don&apos;t know your tag? Check your League client or use common tags like EUW, NA1, etc.
        </p>
      </div>
    </div>
  )
}
