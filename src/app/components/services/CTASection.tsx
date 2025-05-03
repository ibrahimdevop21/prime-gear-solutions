export default function CTASection() {
  return (
    <div className="bg-primary">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
        <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
          <span className="block">Ready to start your project?</span>
          <span className="block text-primary/10">Contact us today to discuss your equipment needs</span>
        </h2>
        <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
          <div className="inline-flex rounded-md shadow">
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-primary bg-white hover:bg-primary/10"
            >
              Contact Us
            </a>
          </div>
          <div className="ml-3 inline-flex rounded-md shadow">
            <a
              href="/equipment"
              className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-primary/90"
            >
              View Equipment
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
