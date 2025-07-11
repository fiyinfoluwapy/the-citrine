'use client';

import React from 'react';
import { HeroSection } from '@/components/HeroSection';
import { StatsSection } from '@/components/StatsSection';
import { MissionSection } from '@/components/MissionSection';
import { UpcomingEventsSection } from '@/components/UpcomingEventsSection';
import { TestimonialSection } from '@/components/TestimonialSection';
import { CTASection } from '@/components/CTASection';


export default function HomePage() {
  return (
    <div className="w-full bg-[#F8F8F8]">
      
      <HeroSection />
      <StatsSection />
      <MissionSection />
      <UpcomingEventsSection />
      <TestimonialSection />
      <CTASection />
     
    </div>
  );
}
