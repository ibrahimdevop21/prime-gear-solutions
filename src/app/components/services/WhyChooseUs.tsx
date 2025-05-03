import Image from 'next/image';

export default function WhyChooseUs() {
  const features = [
    {
      id: 1,
      name: 'Large Fleet Availability',
      description: 'Access to a wide range of heavy equipment across all major brands.',
      icon: 'fleet',
    },
    {
      id: 2,
      name: 'Trusted Brands',
      description: 'Official dealers and partners of leading equipment manufacturers.',
      icon: 'brands',
    },
    {
      id: 3,
      name: 'Fast Delivery',
      description: 'Quick turnaround for equipment delivery across the region.',
      icon: 'delivery',
    },
    {
      id: 4,
      name: '24/7 Support',
      description: 'Round-the-clock technical support and maintenance services.',
      icon: 'support',
    },
    {
      id: 5,
      name: 'Competitive Rates',
      description: 'Transparent pricing with flexible payment options.',
      icon: 'rates',
    },
    {
      id: 6,
      name: 'Expert Team',
      description: 'Experienced professionals ready to assist with your equipment needs.',
      icon: 'team',
    },
  ];

  return (
    <div className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Why Choose Us
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-600">
            Experience the difference with our comprehensive heavy equipment solutions
          </p>
        </div>
        <div className="mt-16">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.id} className="pt-6">
                <div className="flow-root bg-primary/5 rounded-lg px-6 pb-8">
                  <div className="-mt-6">
                    <div>
                      <Image
                        src={`/images/icons/${feature.icon}.svg`}
                        alt={`${feature.name} icon`}
                        width={48}
                        height={48}
                        className="mx-auto"
                      />
                    </div>
                    <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">
                      {feature.name}
                    </h3>
                    <p className="mt-2 text-base text-gray-600">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
