'use client'

import { StarIcon } from 'lucide-react'

export const TestimonialSection = () => {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Principal, Washington High School',
      quote:
        'Citrine has transformed how we connect our students with educational opportunities. The platform is intuitive, and the events are top-notch.',
    },
    {
      name: 'Michael Chen',
      role: 'STEM Coordinator, Tech Academy',
      quote:
        'Our students have gained invaluable experiences through the events we discovered on Citrine. The registration process is seamless and efficient.',
    },
    {
      name: 'Lisa Rodriguez',
      role: 'Academic Director, Edison STEM Academy',
      quote:
        "Citrine has opened doors for our students that we didn't even know existed. The diversity of events available is impressive and enriching.",
    },
  ]

  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-12">
          <StarIcon className="h-10 w-10 text-[#F9CA5B] mx-auto mb-4" />
          <h2 className="text-3xl font-bold mb-6">
            What Schools Say About Us
          </h2>
          <div className="w-20 h-1 bg-[#DE8F4D] mx-auto mb-8" />
        </div>

        {/* Testimonials grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="bg-gray-800 p-6 rounded-lg relative text-sm"
            >
              <div className="absolute -top-4 -right-4">
                <div className="bg-[#DE8F4D] rounded-full p-2">
                  <StarIcon className="h-6 w-6 text-white" />
                </div>
              </div>
              <p className="text-gray-300 mb-6 italic">"{item.quote}"</p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gray-600 rounded-full mr-4" />
                <div>
                  <h4 className="font-semibold">{item.name}</h4>
                  <p className="text-gray-400 text-xs">{item.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
