'use client'

import Link from 'next/link'
import { ArrowRightIcon } from 'lucide-react'
import { events } from '@/data/events'
import { EventCard } from '@/components/EventCard'
import { Button } from '@/components/Button'

export const UpcomingEventsSection = () => {
  // Prioritize featured events first, then slice top 3
  const displayEvents = [...events]
    .sort((a, b) => (a.featured ? -1 : 1))
    .slice(0, 3)

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        {/* Section Heading */}
        <div className="text-center mb-12">
          <div className="inline-block bg-[#F9CA5B] bg-opacity-20 px-4 py-1 rounded-full text-sm font-semibold text-[#CB9A38] mb-4">
            Upcoming Opportunities
          </div>
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Featured Educational Events
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover and register for upcoming educational events designed to
            enhance learning and provide valuable experiences for students.
          </p>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {displayEvents.map((event, index) => (
            <div
              key={event.id}
              className={`transform transition-transform duration-300 hover:-translate-y-2 ${
                index === 0 ? 'md:col-span-3 lg:col-span-1' : ''
              }`}
            >
              <EventCard {...event} />
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center mt-10">
          <Link href="/events">
            <Button variant="secondary" size="lg">
              <span className="flex items-center">
                View All Events
                <ArrowRightIcon className="ml-2 h-5 w-5" />
              </span>
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
