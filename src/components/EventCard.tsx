'use client';

import React from 'react';
import Link from 'next/link';
import { CalendarIcon, MapPinIcon } from 'lucide-react';

export interface EventCardProps {
  id: string;
  slug: string;
  title: string;
  date: string;
  location: string;
  image: string;
  featured?: boolean;
}

export function EventCard({
  slug,
  title,
  date,
  location,
  image,
  featured,
}: EventCardProps) {
  return (
    <Link href={`/events/${slug}`} className="block group">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="p-4">
          <h3 className="text-lg font-bold text-gray-800 mb-2">{title}</h3>
          <div className="flex items-center text-sm text-gray-500 mb-1">
            <CalendarIcon className="h-4 w-4 mr-2 text-[#DE8F4D]" />
            {date}
          </div>
          <div className="flex items-center text-sm text-gray-500">
            <MapPinIcon className="h-4 w-4 mr-2 text-[#CB9A38]" />
            {location}
          </div>
          {featured && (
            <span className="inline-block mt-2 text-xs font-semibold text-[#F9CA5B] bg-[#F9CA5B] bg-opacity-10 px-2 py-1 rounded-full">
              Featured
            </span>
          )}
        </div>
      </div>
    </Link>
  );
}
