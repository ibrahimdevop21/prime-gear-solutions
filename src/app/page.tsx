"use client";

import Image from 'next/image';
import { heroData, services, whyChooseUs, testimonials } from './lib/home-data';
import { FaHome, FaTruck, FaWrench, FaUser, FaTools } from 'react-icons/fa';


export default function Home() {
  return (
    <main className="min-h-screen bg-gray-900 text-white">


      {/* Hero Section */}
      <section className="relative min-h-[600px] md:min-h-screen flex items-center">
        <div className="absolute inset-0">
          <Image
            src="/hero-bg.jpg"
            alt="Heavy equipment in action"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative container mx-auto px-4 text-white">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 line-clamp-3">
              {heroData.title}
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl mb-8 line-clamp-4">
              {heroData.subtitle}
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              {heroData.cta.map((cta, index) => (
                <button
                  key={index}
                  className="px-4 md:px-8 py-3 md:py-4 bg-primary hover:bg-primary/90 rounded-lg text-base md:text-lg font-semibold transition-colors whitespace-nowrap"
                >
                  {cta.text}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-12 md:py-16 lg:py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6">About Prime Gear Solutions</h2>
            <p className="text-base md:text-lg lg:text-xl text-gray-400 leading-relaxed mb-8">
              Prime Gear Solutions delivers complete heavy equipment services, combining rugged machines with skilled manpower and smart technology to support infrastructure and construction megaprojects.
            </p>
            <button className="mt-4 md:mt-8 px-4 md:px-8 py-3 md:py-4 bg-primary hover:bg-primary/90 rounded-lg text-base md:text-lg font-semibold">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-12 md:py-16 lg:py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-8 md:mb-12">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-gray-900 p-4 md:p-6 rounded-lg hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center justify-center w-10 h-10 md:w-12 md:h-12 bg-primary/10 rounded-full mb-4">
                  {getIcon(service.icon)}
                </div>
                <h3 className="text-base md:text-lg lg:text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-sm md:text-base text-gray-400 line-clamp-3">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-12 md:py-16 lg:py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-8 md:mb-12">Why Choose Prime Gear?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {whyChooseUs.map((item, index) => (
              <div
                key={index}
                className="bg-gray-800 p-4 md:p-6 rounded-lg hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center justify-center w-10 h-10 md:w-12 md:h-12 bg-primary/10 rounded-full mb-4">
                  {getIcon(item.icon)}
                </div>
                <h3 className="text-base md:text-lg lg:text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-sm md:text-base text-gray-400 line-clamp-3">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-12 md:py-16 lg:py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-8 md:mb-12">What Our Clients Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-gray-900 p-8 rounded-lg"
              >
                <p className="text-gray-400 mb-4">&quot;{testimonial.quote}&quot;</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="text-xl">{testimonial.author[0]}</span>
                  </div>
                  <div>
                    <h3 className="font-semibold">{testimonial.author}</h3>
                    <p className="text-gray-400">{testimonial.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h2 className="text-3xl font-bold mb-6">Ready to Power Your Next Project?</h2>
            <div className="flex gap-4 justify-center">
              <button className="px-8 py-4 bg-white text-primary hover:bg-white/90 rounded-lg text-lg font-semibold transition-colors">
                Request a Free Quote
              </button>
              <button className="px-8 py-4 bg-white/10 hover:bg-white/20 rounded-lg text-lg font-semibold transition-colors">
                Talk to Our Experts
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

const iconMap = {
  construction: <FaHome className="w-6 h-6" />,
  truck: <FaTruck className="w-6 h-6" />,
  wrench: <FaWrench className="w-6 h-6" />,
  people: <FaUser className="w-6 h-6" />,
  tools: <FaTools className="w-6 h-6" />,
  monitoring: <FaHome className="w-6 h-6" />,
  experience: <FaHome className="w-6 h-6" />,
  technicians: <FaWrench className="w-6 h-6" />,
  support: <FaUser className="w-6 h-6" />,
  delivery: <FaTruck className="w-6 h-6" />,
  rates: <FaTools className="w-6 h-6" />,
} as const;

function getIcon(iconName: string) {
  return iconMap[iconName as keyof typeof iconMap] || <FaHome className="w-6 h-6" />;
}
