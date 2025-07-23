// src/app/events/[slug]/page.tsx

import { events } from '@/data/events';
import { notFound } from 'next/navigation';

type Props = {
  params: {
    slug: string;
  };
};

export default function EventDetailsPage({ params }: Props) {
  const event = events.find((e) => e.slug === params.slug);

  if (!event) {
    return notFound();
  }

  return (
    <main className="max-w-4xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-4">{event.title}</h1>
      <p className="text-gray-600 mb-2">{event.date} — {event.location}</p>
      <img
        src={event.image}
        alt={event.title}
        className="w-full rounded-lg mb-6"
      />
      <p className="text-white">{event.description}</p>
    </main>
  );
}
