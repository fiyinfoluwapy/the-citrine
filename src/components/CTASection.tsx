'use client'

import Link from 'next/link'
import { ArrowRightIcon } from 'lucide-react'
import { Button } from '@/components/Button'

export const CTASection = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-[#DE8F4D] to-[#CB9A38] text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Left content */}
          <div className="mb-8 md:mb-0 md:max-w-xl">
            <h2 className="text-3xl font-bold mb-4">Ready to Join an Event?</h2>
            <p className="text-white text-opacity-90 text-lg">
              Browse our selection of educational events and register your
              school or students today to unlock new opportunities.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/events">
              <Button variant="primary" size="lg" >
                <span className="text-white ">Explore Events</span>
              </Button>
            </Link>
            {/* <Link href="/admin/login">
              <Button variant="primary" size="lg">
                <span className="flex items-center bg-white text-[#DE8F4D] px-6 py-3 rounded-md">
                  School Login
                  <ArrowRightIcon className="ml-2 h-5 w-5" />
                </span>
              </Button>
            </Link> */}
          </div>
        </div>
      </div>
    </section>
  )
}
