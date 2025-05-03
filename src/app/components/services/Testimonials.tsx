import Image from 'next/image';

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: 'Ahmed Al-Saud',
      company: 'Saudi Construction Co.',
      content: 'Prime Gear Solutions has been our trusted partner for all heavy equipment needs. Their fleet availability and 24/7 support have been invaluable to our projects.',
      image: 'ahmed.jpg',
    },
    {
      id: 2,
      name: 'Sarah Al-Mansour',
      company: 'Al-Mansour Engineering',
      content: 'The equipment rental process was smooth and efficient. Their competitive rates and fast delivery made our project timeline much easier to manage.',
      image: 'sarah.jpg',
    },
  ];

  return (
    <div className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            What Our Clients Say
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-600">
            Real feedback from satisfied customers
          </p>
        </div>
        <div className="mt-12">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-white p-6 rounded-lg shadow">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <Image
                      src={`/images/testimonials/${testimonial.image}`}
                      alt={testimonial.name}
                      width={48}
                      height={48}
                      className="rounded-full border-4 border-primary/10"
                    />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">
                      {testimonial.name}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {testimonial.company}
                    </p>
                  </div>
                </div>
                <div className="mt-4">
                  <p className="text-base text-gray-600">
                    {testimonial.content}
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
