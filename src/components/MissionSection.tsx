'use client'
import Image from 'next/image'
import { TrophyIcon, UsersIcon } from 'lucide-react'

export const MissionSection = () => (
  <section className="py-20 bg-gray-50">
    <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      {/* Image */}
      <div className="order-2 lg:order-1">
        <Image
          src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80"
          alt="Students collaborating"
          width={800}
          height={500}
          className="rounded-lg shadow-lg w-full h-auto object-cover"
        />
      </div>

      {/* Text */}
      <div className="order-1 lg:order-2">
        <div className="inline-block bg-[#F9CA5B] bg-opacity-20 px-4 py-1 rounded-full text-sm font-semibold text-[#CB9A38] mb-4">
          Our Mission
        </div>
        <h2 className="text-3xl font-bold mb-6 text-gray-800">
          Empowering the Next Generation
        </h2>
        <div className="w-20 h-1 bg-[#DE8F4D] mb-6" />
        <p className="text-lg text-gray-600 mb-6 leading-relaxed">
          At Citrine, we believe every student deserves enriching educational
          experiences beyond the classroom. Our mission is to connect schools
          and students with high-quality events that inspire learning, foster
          creativity, and build future-ready skills.
        </p>
        <p className="text-lg text-gray-600 mb-8 leading-relaxed">
          Through our platform, schools can easily discover, register, and
          participate in diverse educational opportunities nationwide.
        </p>

        {/* Values */}
        <div className="grid grid-cols-2 gap-4">
          <ValueCard
            title="Excellence"
            icon={<TrophyIcon className="h-5 w-5 text-[#DE8F4D]" />}
            desc="Curating the highest quality educational events"
          />
          <ValueCard
            title="Inclusivity"
            icon={<UsersIcon className="h-5 w-5 text-[#DE8F4D]" />}
            desc="Making opportunities accessible to all students"
          />
        </div>
      </div>
    </div>
  </section>
)

const ValueCard = ({
  title,
  icon,
  desc
}: {
  title: string
  icon: React.ReactNode
  desc: string
}) => (
  <div className="flex items-start">
    <div className="bg-[#DE8F4D] bg-opacity-10 p-2 rounded-full mr-3 mt-1">
      {icon}
    </div>
    <div>
      <h4 className="font-semibold text-gray-800 mb-1">{title}</h4>
      <p className="text-gray-600 text-sm">{desc}</p>
    </div>
  </div>
)
