import Image from 'next/image';

export default function HowItWorks() {
  const steps = [
    {
      id: 1,
      title: 'Browse Equipment',
      description: 'Explore our extensive fleet of heavy equipment across various categories.',
      icon: 'browse',
    },
    {
      id: 2,
      title: 'Request a Quote',
      description: 'Get personalized pricing and availability for your specific needs.',
      icon: 'quote',
    },
    {
      id: 3,
      title: 'Confirm Booking',
      description: 'Secure your equipment with easy booking and flexible payment options.',
      icon: 'booking',
    },
    {
      id: 4,
      title: 'Delivery & Support',
      description: 'Fast delivery and 24/7 technical support throughout your project.',
      icon: 'support',
    },
  ];

  return (
    <div className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            How It Works
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-600">
            Simple process from start to finish
          </p>
        </div>
        <div className="mt-12">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step) => (
              <div
                key={step.id}
                className="relative"
              >
                <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-primary/10 rounded-full p-3 shadow-lg">
                  <Image
                    src={`/images/icons/${step.icon}.svg`}
                    alt={`${step.title} icon`}
                    width={48}
                    height={48}
                  />
                </div>
                <div className="bg-white p-6 rounded-lg shadow">
                  <h3 className="text-lg font-medium text-gray-900">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-base text-gray-600">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
