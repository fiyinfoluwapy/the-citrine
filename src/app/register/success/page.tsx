'use client'

import { useSearchParams, useRouter } from 'next/navigation'
import { CheckCircleIcon, CopyIcon } from 'lucide-react'
import { Button } from '@/components/Button'
import { useState } from 'react'

export default function SuccessPage() {
  const params = useSearchParams()
  const router = useRouter()

  const title = params.get('title') || 'Citrine Event'
  const referenceId = params.get('referenceId') || 'N/A'
  const [copied, setCopied] = useState(false)

  const accountNumber = '1234567890' // Update with real account number
  const accountName = 'CITRINE AFRICA ENTERPRISES'
  const bank = 'Guaranty Trust Bank (GTB)'

  const handleCopy = () => {
    navigator.clipboard.writeText(accountNumber)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="min-h-screen bg-[#F8F8F8] flex items-center justify-center px-4">
      <div className="max-w-xl w-full bg-white rounded-xl shadow-md p-6 md:p-10 text-center">
        <CheckCircleIcon className="mx-auto h-16 w-16 text-green-500 mb-4" />
        <h1 className="text-2xl md:text-3xl font-bold mb-2 text-gray-800">
          Registration Successful!
        </h1>
        <p className="text-gray-600 mb-6">
          Your registration for <strong>{title}</strong> has been received.
        </p>

        <div className="bg-[#F9CA5B] bg-opacity-20 p-4 rounded-lg text-left mb-6">
          <p className="font-semibold text-gray-800 mb-2">Next Step:</p>
          <p className="text-sm text-gray-700 mb-1">
            Please make your payment to the account below and send proof to: <br />
            <strong>info@citrine.africa</strong>
          </p>

          <div className="mt-3 space-y-2">
            <div className="flex items-center justify-between border px-3 py-2 rounded-md bg-white">
              <span className="text-sm font-mono">{accountNumber}</span>
              <button onClick={handleCopy}>
                <CopyIcon className="h-4 w-4 text-gray-500" />
              </button>
            </div>
            {copied && (
              <p className="text-xs text-green-600 mt-1">Account number copied!</p>
            )}
            <p className="text-sm text-gray-700">{accountName}</p>
            <p className="text-sm text-gray-700">{bank}</p>
          </div>
        </div>

        <div className="text-sm text-gray-600 mb-6">
          <p>
            Use your reference ID when sending proof: <br />
            <strong>{referenceId}</strong>
          </p>
        </div>

        <Button onClick={() => router.push('/events')} variant="primary">
          Back to Events
        </Button>
      </div>
    </div>
  )
}
