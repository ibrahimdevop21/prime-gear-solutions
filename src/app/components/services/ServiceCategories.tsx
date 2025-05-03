import Image from 'next/image';

export default function ServiceCategories() {
  const services = [
    {
      id: 1,
      title: 'Rental Services',
      description: 'Short and long-term equipment hire for construction, mining, and industrial projects.',
      icon: 'rental',
      link: '/rental',
    },
    {
      id: 2,
      title: 'Sales Services',
      description: 'New and used heavy equipment sales with competitive pricing and financing options.',
      icon: 'sales',
      link: '/sales',
    },
    {
      id: 3,
      title: 'Parts & Maintenance',
      description: 'Genuine parts, repair services, and scheduled maintenance for all major equipment brands.',
      icon: 'maintenance',
      link: '/parts',
    },
  ];

  return (
    <div className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Our Services
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Comprehensive solutions for all your heavy equipment needs
          </p>
        </div>
        <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
          {services.map((service) => (
            <div
              key={service.id}
              className="flex flex-col rounded-lg shadow-lg overflow-hidden"
            >
              <div className="flex-shrink-0 p-6 text-center">
                <Image
                  src={`/images/icons/${service.icon}.svg`}
                  alt={`${service.title} icon`}
                  width={48}
                  height={48}
                  className="mx-auto"
                />
              </div>
              <div className="flex-1 bg-white p-6 flex flex-col">
                <h3 className="flex-1 font-semibold text-gray-900">
                  <a href={service.link} className="hover:text-primary">
                    {service.title}
                  </a>
                </h3>
                <p className="mt-3 text-base text-gray-600">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
