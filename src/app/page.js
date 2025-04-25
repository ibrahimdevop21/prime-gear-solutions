import Image from 'next/image'
import { FiArrowRight } from 'react-icons/fi'
import ProductCard from './components/ProductCard';
import { heavyEquipment } from './lib/data'
import Link from 'next/link';
export default function Home() {
  const featuredProducts = heavyEquipment.filter(product => product.featured)

  return (
    <div className="space-y-16 pb-16">
      {/* Hero Section */}
      <section className="relative h-[500px]" style={{ position: 'relative' }}>
        <Image
          src="/hero-bg.jpg" // Your hero image
          alt="Heavy Equipment"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50 flex items-center">
          <div className="container mx-auto px-4 text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Premium <span className="text-orange-500">Heavy Equipment</span> Solutions
             </h1>
            <p className="text-xl mb-8 max-w-2xl">
              Rent, buy, or maintain top-tier construction machinery with Saudi Arabia&apos;s most trusted provider
            </p>
            <div className="flex flex-wrap gap-4">
              <Link 
                href="/equipment/rentals" 
                className="bg-orange-600 hover:bg-orange-700 px-6 py-3 rounded-md font-medium flex items-center gap-2"
              >
                Browse Rentals <FiArrowRight />
              </Link>
              <Link 
                href="/services" 
                className="bg-gray-800 hover:bg-gray-700 px-6 py-3 rounded-md font-medium"
              >
                Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Equipment */}
      <section className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold">Featured Equipment</h2>
          <Link href="/equipment" className="text-orange-600 hover:underline">
            View All
          </Link>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Services CTA */}
      <section className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">Comprehensive Equipment Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3">Maintenance & Repairs</h3>
              <p className="text-gray-300 mb-4">
                Keep your machinery running at peak performance with our certified technicians.
              </p>
              <Link href="/services/maintenance" className="text-orange-400 hover:underline">
                Learn More
              </Link>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3">Spare Parts</h3>
              <p className="text-gray-300 mb-4">
                Genuine OEM and high-quality aftermarket parts with fast delivery.
              </p>
              <Link href="/parts" className="text-orange-400 hover:underline">
                Browse Parts
              </Link>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3">Fleet Management</h3>
              <p className="text-gray-300 mb-4">
                Optimize your equipment fleet for maximum efficiency and cost savings.
              </p>
              <Link href="/services/fleet-management" className="text-orange-400 hover:underline">
                Get Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}