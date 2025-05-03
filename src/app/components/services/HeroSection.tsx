import Image from 'next/image';

export default function HeroSection() {
  return (
    <div className="relative bg-white">
      <div className="absolute inset-0">
        <Image
          src="/images/services-hero-bg.jpg"
          alt="Heavy equipment in operation"
          fill
          className="object-cover opacity-20"
          priority
        />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center">
          <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
            <span className="block">Heavy Equipment Solutions</span>
            <span className="block text-primary">Rental, Sales, and Parts</span>
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-gray-600 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            Discover our comprehensive range of heavy equipment solutions for your construction and industrial needs.
          </p>
          <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
            <div className="rounded-md shadow">
              <a
                href="/equipment"
                className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-primary/90 md:py-4 md:text-lg md:px-10"
              >
                Explore Equipment
              </a>
            </div>
            <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
              <a
                href="/contact"
                className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-primary bg-primary/10 hover:bg-primary/20 md:py-4 md:text-lg md:px-10"
              >
                Get a Quote
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
