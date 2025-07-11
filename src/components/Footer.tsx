'use client';

import React from 'react';
import Link from 'next/link';
import { MapPinIcon, PhoneIcon, MailIcon } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 text-[#DE8F4D]">Citrine</h3>
            <p className="text-gray-300 mb-4">
              Connecting students with educational events and opportunities to
              help them excel in their academic journey.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-[#F9CA5B]">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/events" className="text-gray-300 hover:text-[#F9CA5B]">
                  Events
                </Link>
              </li>
              <li>
                <Link href="/admin/login" className="text-gray-300 hover:text-[#F9CA5B]">
                  Admin Portal
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPinIcon className="h-5 w-5 text-[#F9CA5B] mr-2 mt-0.5" />
                <span className="text-gray-300">
                  123 Education Ave, Learning City
                </span>
              </li>
              <li className="flex items-center">
                <PhoneIcon className="h-5 w-5 text-[#F9CA5B] mr-2" />
                <span className="text-gray-300">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <MailIcon className="h-5 w-5 text-[#F9CA5B] mr-2" />
                <span className="text-gray-300">info@citrine-events.com</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-6 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Citrine. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
