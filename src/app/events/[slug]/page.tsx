// app/events/[slug]/page.tsx

import { notFound } from 'next/navigation';
import Link from 'next/link';
import { events } from '@/data/events';
import { CalendarIcon, MapPinIcon, ArrowLeftIcon } from 'lucide-react';
import { Button } from '@/components/Button';
export const dynamicParams = true;


type Props = {
  params: { slug: string };
};

// ✅ ASYNC is required here
export default async function EventDetailsPage({ params }: Props) {
  const { slug } = params;
  const event = events.find((e) => e.slug === slug);

  if (!event) {
    notFound();
  }

  return (
    <div className="w-full bg-[#F8F8F8]">
      <div className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-6">
          <Link href="/events" className="flex items-center text-gray-600 hover:text-[#DE8F4D] mb-4">
            <ArrowLeftIcon className="h-4 w-4 mr-1" />
            Back to Events
          </Link>
          <h1 className="text-3xl font-bold text-gray-800 mb-2">{event.title}</h1>
          <div className="flex flex-wrap gap-4 text-gray-600 mb-4">
            <div className="flex items-center">
              <CalendarIcon className="h-5 w-5 mr-2 text-[#c7c6c5]" />
              <span>{event.date}</span>
            </div>
            <div className="flex items-center">
              <MapPinIcon className="h-5 w-5 mr-2 text-[#c7c6c5]" />
              <span>{event.location}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <img src={event.image} alt={event.title} className="w-full h-80 object-cover" />
          <div className="p-6">
            <div className="prose max-w-none mb-8">
              <h2 className="text-xl font-semibold mb-4">About This Event</h2>
              <p className="text-gray-700">{event.description}</p>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg mb-8">
              <h2 className="text-xl font-semibold mb-4">Venue Information</h2>
              <p className="font-medium text-gray-800">{event.venue.name}</p>
              <p className="text-gray-600">{event.venue.address}</p>
              <p className="text-gray-600">{event.venue.city}</p>
            </div>

            <div className="text-center">
              <Link href={`/register/${event.slug}`}>
                <Button variant="primary" size="lg">
                  Register to Attend
                </Button>
              </Link>
              <p className="mt-4 text-sm text-gray-500">
                Registration closes 7 days before the event date
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
