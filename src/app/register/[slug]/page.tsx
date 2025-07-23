'use client'

import React from 'react'
import { useParams, useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Button } from '@/components/Button'

const registerSchema = z.object({
  schoolName: z.string().min(1, 'School name is required'),
  contactEmail: z.string().email('Invalid email'),
  contactPhone: z.string().min(10, 'Phone number is required'),
})

type RegisterFormData = z.infer<typeof registerSchema>

export default function RegisterPage() {
  const router = useRouter()
  const { slug } = useParams() as { slug: string } // <- 👈 important fix

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),
  })

  const onSubmit = (data: RegisterFormData) => {
    console.log('Form submitted:', data)
    // Optionally redirect or send data to backend
  }

  return (
    <div className="w-full bg-[#F8F8F8]">
      <div className="container mx-auto px-4 py-8">
        <button
          onClick={() => router.push(`/events/${slug}`)}
          className="flex items-center text-gray-600 hover:text-[#DE8F4D] mb-4"
        >
          ← Back to Event
        </button>

        <div className="max-w-2xl mx-auto bg-white p-6 rounded shadow">
          <h1 className="text-2xl font-semibold mb-4 text-gray-800">
            Register to Attend
          </h1>

          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-4">
              <label className="block mb-1 font-medium">School Name</label>
              <input
                id="schoolName"
                type="text"
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
                placeholder="Enter your school name"
                {...register('schoolName')}
              />
              {errors.schoolName && (
                <p className="text-red-500 text-sm mt-1">{errors.schoolName.message}</p>
              )}
            </div>

            <div className="mb-4">
              <label className="block mb-1 font-medium">Contact Email</label>
              <input
                id="contactEmail"
                type="email"
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
                placeholder="Enter your email address"
                {...register('contactEmail')}
              />
              {errors.contactEmail && (
                <p className="text-red-500 text-sm mt-1">{errors.contactEmail.message}</p>
              )}
            </div>

            <div className="mb-4">
              <label className="block mb-1 font-medium">Contact Phone</label>
              <input
                id="contactPhone"
                type="tel"
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
                placeholder="Enter your phone number"
                {...register('contactPhone')}
              />
              {errors.contactPhone && (
                <p className="text-red-500 text-sm mt-1">{errors.contactPhone.message}</p>
              )}
            </div>

            <Button type="submit" variant="primary" size="lg" fullWidth>
              Submit Registration
            </Button>
          </form>
        </div>
      </div>
    </div>
  )
}
