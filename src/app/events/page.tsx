
// src/app/events/page.tsx
'use client';

import { useState } from 'react';
import { SearchIcon } from 'lucide-react';
import { EventCard } from '../../components/EventCard';
import { events } from '../../data/events';

export default function EventsPage() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredEvents = events.filter(
    (event) =>
      event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      event.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="w-full bg-[#F8F8F8]">
      <section className="bg-white py-10 shadow-sm">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-gray-800 mb-6">Upcoming Events</h1>
          <div className="relative max-w-md">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <SearchIcon className="h-5 w-5 text-yellow-400" />
            </div>
            <input
              type="text"
              placeholder="Search events by name or location..."
              className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-md  placeholder-[#DE8F4D]  focus:outline-none focus:ring-2 focus:ring-[#DE8F4D] focus:border-transparent"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4">
          {filteredEvents.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredEvents.map((event) => (
                <EventCard
                  key={event.id}
                  id={event.id}
                  slug={event.slug}
                  title={event.title}
                  date={event.date}
                  location={event.location}
                  image={event.image}
                  featured={event.featured}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <h3 className="text-xl font-medium text-gray-800 mb-2">No events found</h3>
              <p className="text-gray-600">Try adjusting your search or check back later for new events.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
