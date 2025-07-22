// src/app/register/[slug]/page.tsx
'use client'

import React from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { ArrowLeftIcon } from 'lucide-react'
import { registrationSchema, RegistrationFormData } from '@/utils/validation'
import { events } from '@/data/events'
import { Button } from '@/components/Button'

interface RegisterPageProps {
  params: {
    slug: string
  }
}

export default function RegisterPage({ params }: RegisterPageProps) {
  const { slug } = params
  const router = useRouter()

  const event = events.find((e) => e.slug === slug)

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting }
  } = useForm<RegistrationFormData>({
    resolver: zodResolver(registrationSchema)
  })

  const onSubmit = async (data: RegistrationFormData) => {
    const referenceId = `CIT-${Date.now().toString().slice(-6)}`
    const title = event?.title || 'Citrine Event'

    try {
      await fetch('https://formsubmit.co/ajax/teedire@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify({
          ...data,
          event: title,
          referenceId
        })
      })

      router.push(
        `/register/success?referenceId=${referenceId}&title=${encodeURIComponent(title)}`
      )
    } catch (error) {
      console.error('Submission failed:', error)
      alert('Something went wrong. Please try again later.')
    }
  }


  if (!event) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h2 className="text-2xl font-bold mb-4">Event Not Found</h2>
        <p className="mb-8">
          The event you're looking for doesn't exist or has been removed.
        </p>
        <Button onClick={() => router.push('/events')}>Back to Events</Button>
      </div>
    )
  }

  return (
    <div className="w-full bg-[#F8F8F8]">
      <div className="container mx-auto px-4 py-8">
        <button
          onClick={() => router.push(`/events/${slug}`)}
          className="flex items-center text-gray-600 hover:text-[#DE8F4D] mb-4"
        >
          <ArrowLeftIcon className="h-4 w-4 mr-1" />
          Back to Event Details
        </button>

        <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md p-6">
          <h1 className="text-2xl font-bold text-gray-800 mb-6">
            Register for {event.title}
          </h1>

          <div className="bg-[#F9CA5B] bg-opacity-20 p-4 rounded-lg mb-6">
            <p className="text-gray-700">
              Please complete the form below to register your school or students
              for this event. You'll receive a confirmation email within 24
              hours after your payment is verified.
            </p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-4">
              <label
                htmlFor="schoolName"
                className="block text-gray-700 font-medium mb-2"
              >
                School Name
              </label>
              <input
                id="schoolName"
                type="text"
                className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#DE8F4D] ${errors.schoolName ? 'border-red-500' : 'border-gray-300'
                  }`}
                placeholder="Enter your school name"
                {...register('schoolName')}
              />
              {errors.schoolName && (
                <p className="mt-1 text-red-500 text-sm">
                  {errors.schoolName.message}
                </p>
              )}
            </div>

            <div className="mb-4">
              <label
                htmlFor="contactEmail"
                className="block text-gray-700 font-medium mb-2"
              >
                Contact Email
              </label>
              <input
                id="contactEmail"
                type="email"
                className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#DE8F4D] ${errors.contactEmail ? 'border-red-500' : 'border-gray-300'
                  }`}
                placeholder="Enter your email address"
                {...register('contactEmail')}
              />
              {errors.contactEmail && (
                <p className="mt-1 text-red-500 text-sm">
                  {errors.contactEmail.message}
                </p>
              )}
            </div>

            <div className="mb-4">
              <label
                htmlFor="contactPhone"
                className="block text-gray-700 font-medium mb-2"
              >
                Contact Phone
              </label>
              <input
                id="contactPhone"
                type="tel"
                className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#DE8F4D] ${errors.contactPhone ? 'border-red-500' : 'border-gray-300'
                  }`}
                placeholder="Enter your phone number"
                {...register('contactPhone')}
              />
              {errors.contactPhone && (
                <p className="mt-1 text-red-500 text-sm">
                  {errors.contactPhone.message}
                </p>
              )}
            </div>

            <div className="mb-6">
              <label
                htmlFor="studentDetails"
                className="block text-gray-700 font-medium mb-2"
              >
                Student Details
              </label>
              <textarea
                id="studentDetails"
                rows={4}
                className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#DE8F4D] ${errors.studentDetails ? 'border-red-500' : 'border-gray-300'
                  }`}
                placeholder="Please provide details about the students attending (number of students, age range, any special requirements, etc.)"
                {...register('studentDetails')}
              ></textarea>
              {errors.studentDetails && (
                <p className="mt-1 text-red-500 text-sm">
                  {errors.studentDetails.message}
                </p>
              )}
            </div>

            <Button
              type="submit"
              variant="primary"
              size="lg"
              fullWidth
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Submitting...' : 'Submit Registration'}
            </Button>
          </form>
        </div>
      </div>
    </div>
  )
}
