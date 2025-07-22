'use client'

import Link from 'next/link'
import { ArrowRightIcon } from 'lucide-react'
import { Button } from '@/components/Button'

export const HeroSection = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-gray-900 to-gray-800 opacity-90 z-0"></div>
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left text block */}
          <div className="text-white">
            <div className="inline-block bg-[#DE8F4D] px-4 py-1 rounded-full text-sm font-semibold mb-6">
              Educational Events Platform
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Discover Exceptional{' '}
              <span className="text-[#F9CA5B]">Educational Events</span> for Students
            </h1>
            <p className="text-xl mb-8 text-gray-300 leading-relaxed">
              Citrine connects students with high-quality educational opportunities to help them excel.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/events">
                <Button variant="primary" size="lg">
                  <span className="flex items-center">
                    Browse Events
                    <ArrowRightIcon className="ml-2 h-5 w-5" />
                  </span>
                </Button>
              </Link>
             
            </div>
          </div>

          {/* Image block */}
          <div className="hidden lg:block relative">
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-[#F9CA5B] rounded-full opacity-20"></div>
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-[#DE8F4D] rounded-full opacity-20"></div>
            <img
              src="https://images.unsplash.com/photo-1617292797716-ec3000a44093?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Students at educational event"
              className="rounded-lg shadow-2xl relative z-10 w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
