// 'use client'

// import { useSearchParams } from 'next/navigation'
// import { Copy } from 'lucide-react'
// import { useState } from 'react'

// export default function PaymentInfoPage() {
//   const params = useSearchParams()
//   const ref = params.get('ref') || 'CIT-XXXXX'
//   const [copied, setCopied] = useState(false)

//   const copyToClipboard = (text: string) => {
//     navigator.clipboard.writeText(text)
//     setCopied(true)
//     setTimeout(() => setCopied(false), 2000)
//   }

//   return (
//     <div className="max-w-xl mx-auto px-4 py-10 text-center">
//       <h1 className="text-3xl font-bold mb-2 text-green-700">🎉 Registration Successful!</h1>
//       <p className="text-gray-600 mb-6">Your form has been submitted. Please complete your payment below to secure your slot.</p>

//       <div className="bg-white shadow-md rounded-xl p-6 text-left space-y-4 border">
//         <div className="flex justify-between items-center">
//           <span className="font-medium">Bank Name:</span>
//           <span>Zenith Bank</span>
//         </div>

//         <div className="flex justify-between items-center">
//           <span className="font-medium">Account Number:</span>
//           <span className="flex items-center gap-2">
//             <span className="font-mono">1234567890</span>
//             <Copy 
//               size={18} 
//               className="cursor-pointer text-blue-600 hover:text-blue-800" 
//               onClick={() => copyToClipboard('1234567890')} 
//             />
//           </span>
//         </div>

//         <div className="flex justify-between items-center">
//           <span className="font-medium">Account Name:</span>
//           <span>Citrine Events</span>
//         </div>

//         <div className="flex justify-between items-center">
//           <span className="font-medium">Amount:</span>
//           <span>₦5,000</span>
//         </div>

//         <div className="flex justify-between items-center">
//           <span className="font-medium">Your Reference:</span>
//           <span className="font-mono text-sm">{ref}</span>
//         </div>
//       </div>

//       <p className="mt-6 text-sm text-gray-700">
//         📩 Please send your proof of payment to <strong>bookings@citrine.ng</strong> with your name and reference ID.
//       </p>

//       {copied && <p className="text-green-600 mt-3 text-sm">Account number copied!</p>}
//     </div>
//   )
// }


'use client'

import { useSearchParams } from 'next/navigation'
import { Copy, Printer } from 'lucide-react'
import { QRCode } from 'qrcode.react'

export default function PaymentInfoPage() {
  const params = useSearchParams()
  const ref = params.get('ref') || 'N/A'

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
    alert('Copied!')
  }

  const handlePrint = () => {
    window.print()
  }

  return (
    <div className="max-w-xl mx-auto py-10 px-6 text-center">
      <h1 className="text-2xl font-bold mb-4">Complete Your Payment</h1>
      <p className="mb-6 text-gray-600">
        To confirm your event registration, kindly make a bank transfer and send your proof of payment.
      </p>

      <div className="bg-white shadow-md p-4 rounded-lg space-y-4">
        <div className="flex justify-between items-center">
          <span className="font-semibold">Bank Name:</span>
          <span>Zenith Bank</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="font-semibold">Account Number:</span>
          <span className="flex items-center gap-2">
            1234567890
            <Copy size={16} className="cursor-pointer" onClick={() => copyToClipboard('1234567890')} />
          </span>
        </div>
        <div className="flex justify-between items-center">
          <span className="font-semibold">Account Name:</span>
          <span>Citrine Events</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="font-semibold">Amount:</span>
          <span>₦5,000</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="font-semibold">Your Reference:</span>
          <span className="font-mono text-sm">{ref}</span>
        </div>
      </div>

      <p className="mt-6 text-sm text-gray-500">
        After payment, please send your proof of payment to{' '}
        <strong>bookings@citrine.ng</strong> with your name and reference.
      </p>

      <div className="mt-10">
        <p className="font-semibold mb-2">Scan this QR Code at the event:</p>
        <QRCode value={ref} size={128} />
      </div>

      <button
        onClick={handlePrint}
        className="mt-6 bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-2 px-4 rounded flex items-center justify-center gap-2"
      >
        <Printer size={18} />
        Print Confirmation
      </button>
    </div>
  )
}
