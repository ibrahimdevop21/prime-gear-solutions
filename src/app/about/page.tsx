"use client";

import { aboutData } from "../lib/about";
import { FaRocket, FaShieldAlt, FaHandshake, FaLeaf, FaTruckLoading, FaStore, FaTools, FaChartLine } from 'react-icons/fa';

export default function AboutPage() {
  const iconMap = {
    FaRocket: <FaRocket className="w-8 h-8" />,
    FaShieldAlt: <FaShieldAlt className="w-8 h-8" />,
    FaHandshake: <FaHandshake className="w-8 h-8" />,
    FaLeaf: <FaLeaf className="w-8 h-8" />,
    FaTruckLoading: <FaTruckLoading className="w-8 h-8" />,
    FaStore: <FaStore className="w-8 h-8" />,
    FaTools: <FaTools className="w-8 h-8" />,
    FaChartLine: <FaChartLine className="w-8 h-8" />
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Hero Section */}
      <section className="relative min-h-[600px] md:min-h-screen flex items-center">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative container mx-auto px-4">
          <div className="max-w-4xl text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">About Us</h1>
            <p className="text-lg md:text-xl lg:text-2xl mb-8">
              Discover our journey and commitment to excellence in heavy equipment solutions
            </p>
          </div>
        </div>
      </section>

      {/* Company Info */}
      <section className="py-16 bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Company Overview</h2>
              <p className="text-lg mb-4">
                Established in {aboutData.companyInfo.establishmentYear}, Prime Gear Solutions has grown to become a leading provider of heavy equipment solutions in the Middle East.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-4xl font-bold mb-2">{aboutData.companyInfo.employees}</div>
                  <div className="text-gray-400">Employees</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold mb-2">{aboutData.companyInfo.fleetSize}</div>
                  <div className="text-gray-400">Fleet Size</div>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4">Headquartered in</h3>
              <p className="text-xl font-semibold mb-2">{aboutData.companyInfo.headquarters}</p>
              <div className="mt-6">
                <h3 className="text-2xl font-bold mb-4">Service Areas</h3>
                <div className="flex flex-wrap gap-2">
                  {aboutData.companyInfo.serviceAreas.map((area, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-gray-700 rounded-full text-sm"
                    >
                      {area}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-3xl font-bold mb-4">{aboutData.mission.title}</h2>
              <p className="text-lg">{aboutData.mission.content}</p>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-4">{aboutData.vision.title}</h2>
              <p className="text-lg">{aboutData.vision.content}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Core Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {aboutData.values.map((value, index) => (
              <div key={index} className="text-center">
                {iconMap[value.icon as keyof typeof iconMap]}
                <h3 className="text-xl font-bold mt-4 mb-2">{value.title}</h3>
                <p className="text-gray-400">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {aboutData.services.map((service, index) => (
              <div key={index} className="text-center">
                {iconMap[service.icon as keyof typeof iconMap]}
                <h3 className="text-xl font-bold mt-4 mb-2">{service.title}</h3>
                <p className="text-gray-400">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">What Our Clients Say</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {aboutData.testimonials.map((testimonial, index) => (
              <div key={index} className="p-6 bg-gray-700 rounded-lg">
                <p className="text-gray-400 mb-4">"{testimonial.content}"</p>
                <div className="flex items-center justify-center">
                  <div className="ml-4">
                    <h3 className="font-bold">{testimonial.name}</h3>
                    <p className="text-gray-400">{testimonial.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
