'use client'
import { AlertCircle } from 'lucide-react'
import React, { useState } from 'react'
import { FaNewspaper } from 'react-icons/fa'

export default function NewsLetter() {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)
  const [alreadySubscribed, setAlreadySubscribed] = useState(false)

  const handleSubscribe = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!email) return

    // Reset notification states
    setSubscribed(false)
    setAlreadySubscribed(false)

    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })

      const data = await res.json()

      if (res.status === 409) {
        // Show already subscribed notification instead of alert
        setAlreadySubscribed(true)
        setTimeout(() => setAlreadySubscribed(false), 5000)
      } else if (res.ok) {
        setSubscribed(true)
        setEmail('')
        setTimeout(() => setSubscribed(false), 5000)
      } else {
        alert(data.error || 'Something went wrong. Please try again later.')
      }
    } catch (error) {
      alert('Failed to subscribe. Please try again later.')
      console.error(error)
    }
  }

  return (
    <div className="bg-gradient-to-br from-[#0066cc] to-[#d53020] rounded-2xl shadow-lg p-6 text-white">
      <form onSubmit={handleSubscribe}>
        <div className="text-center">
          <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
            <FaNewspaper className="w-6 h-6 text-white" />
          </div>
          <h3 className="text-lg font-bold mb-2">Stay Updated</h3>
          <p className="text-white/90 text-sm mb-4">Get the latest news delivered to your inbox.</p>
          <div className="space-y-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full px-4 py-2 rounded-lg outline-2 outline-white/80 text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-white/50"
            />
            <button className="w-full bg-white text-[#0066cc] font-semibold py-2 rounded-lg hover:bg-gray-100 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
        <div className="max-w-md mx-auto">
          {/* Success notification */}
          {subscribed && (
            <div className="mt-4 px-4 py-3 bg-[#0066cc] bg-opacity-20 rounded-md border-l-4 border-[#0066cc]/50 animate-fade-in">
              <p className="text-white text-sm">
                Thank you for subscribing! We{"'"}ll be in touch soon.
              </p>
            </div>
          )}
          {/* Already subscribed notification */}
          {alreadySubscribed && (
            <div className="mt-4 px-4 py-3 bg-[#d53020] bg-opacity-20 rounded-md border-l-4 border-[#d53020] animate-fade-in flex items-center">
              <AlertCircle className="h-5 w-5 text-white mr-2 flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-white text-sm font-medium">Already Subscribed</p>
                <p className="text-white/80 text-sm">
                  This email is already in our subscriber list. Thank you for your continued
                  interest!
                </p>
              </div>
            </div>
          )}
        </div>
      </form>
    </div>
  )
}
