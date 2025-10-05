'use client'

import { useState } from 'react'

interface FAQItem {
  question: string
  answer: string
}

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqs: FAQItem[] = [
    {
      question: "What makes Claimb different from other LoL apps?",
      answer: "Claimb is the only League of Legends companion app that's completely privacy-focused and local-first. All your data stays on your iPhone - no servers, no tracking, no data collection. Plus, our AI coaching provides specific, actionable advice with exact timing insights (like 'At 6:30, you should have...') instead of generic tips."
    },
    {
      question: "How does the AI coaching work?",
      answer: "Our AI analyzes your match data, champion performance, and early game timeline to provide personalized coaching. It gives you specific feedback on what you did well and what to improve, with exact minute marks for mistakes and opportunities. The AI considers your role, champion picks, and recent performance trends."
    },
    {
      question: "Do I need internet to use Claimb?",
      answer: "You only need internet for the initial data sync when you first log in. After that, Claimb works completely offline. All your match data, coaching insights, and performance analysis are stored locally on your iPhone for instant access anywhere."
    },
    {
      question: "Is my data private and secure?",
      answer: "Absolutely. Claimb is designed with privacy as the top priority. All your data stays on your iPhone - we never collect, store, or transmit your personal information. Your Riot account data is only used to fetch your match history and is immediately stored locally on your device."
    },
    {
      question: "What iOS version do I need?",
      answer: "Claimb requires iOS 18 or later. We take advantage of the latest iOS features to provide the best possible experience with SwiftData for local storage and modern SwiftUI for the interface."
    },
    {
      question: "How accurate is the performance analysis?",
      answer: "Very accurate! Claimb uses the official Riot Games API to fetch your match data, ensuring all statistics are precise. Our AI coaching is based on real performance metrics and timeline data, giving you insights that are specific to your actual gameplay."
    },
    {
      question: "Can I use this for scouting other players?",
      answer: "Yes! The web version includes a preview tool that lets you analyze any summoner's performance. This is great for scouting opponents or learning from high-level players. However, the full AI coaching features are only available in the iOS app."
    },
    {
      question: "When will Claimb be available on the App Store?",
      answer: "We're currently in TestFlight beta testing and plan to launch on the App Store within the next month. Join our TestFlight beta to get early access and help us improve the app before the official launch."
    },
    {
      question: "Does Claimb work with all regions?",
      answer: "Yes! Claimb supports all major League of Legends regions including EUW, NA, EUNE, KR, and more. Simply select your region when you first log in, and the app will fetch your region-specific data."
    },
    {
      question: "Is Claimb affiliated with Riot Games?",
      answer: "No, Claimb is not officially affiliated with Riot Games. We're an independent app that uses Riot's public API to provide enhanced coaching and analysis features. League of Legends is a trademark of Riot Games, Inc."
    }
  ]

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="py-20 px-4 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600">
            Everything you need to know about Claimb
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-lg shadow-sm border border-gray-200">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
              >
                <h3 className="text-lg font-semibold text-gray-900 pr-4">
                  {faq.question}
                </h3>
                <div className={`transform transition-transform duration-200 ${
                  openIndex === index ? 'rotate-180' : ''
                }`}>
                  <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </button>

              {openIndex === index && (
                <div className="px-6 pb-4">
                  <p className="text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            Still have questions? We're here to help!
          </p>
          <a
            href="mailto:support@claimb.lol"
            className="text-primary-600 hover:text-primary-700 font-medium"
          >
            Contact Support
          </a>
        </div>
      </div>
    </section>
  )
}
