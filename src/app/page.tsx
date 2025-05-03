"use client";

import Image from 'next/image';
import { heroData, services, whyChooseUs, testimonials } from './lib/home-data';
import { FaTruck, FaWrench, FaUser, FaTools, FaHome } from 'react-icons/fa';

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center">
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
            <h1 className="text-5xl md:text-7xl font-bold mb-4">{heroData.title}</h1>
            <p className="text-xl md:text-2xl mb-8">{heroData.subtitle}</p>
            <div className="flex gap-4">
              {heroData.cta.map((cta, index) => (
                <button
                  key={index}
                  className="px-8 py-4 bg-primary hover:bg-primary/90 rounded-lg text-lg font-semibold transition-colors"
                >
                  {cta.text}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">About Prime Gear Solutions</h2>
            <p className="text-xl text-gray-400">
              Prime Gear Solutions delivers complete heavy equipment services, combining rugged machines with skilled manpower and smart technology to support infrastructure and construction megaprojects.
            </p>
            <button className="mt-8 px-8 py-4 bg-primary hover:bg-primary/90 rounded-lg text-lg font-semibold">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-gray-900 p-6 rounded-lg hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full mb-4">
                  {getIcon(service.icon)}
                </div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-400">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Prime Gear?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, index) => (
              <div
                key={index}
                className="bg-gray-800 p-6 rounded-lg hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full mb-4">
                  {getIcon(item.icon)}
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-400">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">What Our Clients Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-gray-900 p-8 rounded-lg"
              >
                <p className="text-gray-400 mb-4">"{testimonial.quote}"</p>
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
  technicians: <FaUser className="w-6 h-6" />,
  delivery: <FaTruck className="w-6 h-6" />,
  support: <FaHome className="w-6 h-6" />
};

function getIcon(iconName: string) {
  return iconMap[iconName] || <FaHome className="w-6 h-6" />;
}
