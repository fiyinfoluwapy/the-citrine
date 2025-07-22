'use client'
import { CalendarIcon, GraduationCapIcon, UsersIcon } from 'lucide-react'

export const StatsSection = () => (
  <section className="py-12 bg-white relative">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 -mt-16 relative z-20">
        <StatCard
          title="50+ Events"
          description="Access to over fifty educational events across the country every year"
          icon={<CalendarIcon className="h-6 w-6 text-[#DE8F4D]" />}
          borderColor="#DE8F4D"
        />
        <StatCard
          title="100+ Schools"
          description="Join a network of over one hundred schools participating in our events"
          icon={<GraduationCapIcon className="h-6 w-6 text-[#CB9A38]" />}
          borderColor="#CB9A38"
        />
        <StatCard
          title="250+ Students"
          description="Helping over hundred students discover opportunities and develop skills"
          icon={<UsersIcon className="h-6 w-6 text-[#F9CA5B]" />}
          borderColor="#F9CA5B"
        />
      </div>
    </div>
  </section>
)

const StatCard = ({
  title,
  description,
  icon,
  borderColor
}: {
  title: string
  description: string
  icon: React.ReactNode
  borderColor: string
}) => (
  <div
    className="bg-white rounded-lg shadow-lg p-6 hover:transform hover:-translate-y-1 transition-transform border-t-4"
    style={{ borderColor }}
  >
    <div className="flex items-center mb-4">
      <div className="p-3 rounded-full mr-4" style={{ backgroundColor: `${borderColor}1A` }}>
        {icon}
      </div>
      <h3 className="text-xl font-bold text-gray-800">{title}</h3>
    </div>
    <p className="text-gray-600">{description}</p>
  </div>
)
