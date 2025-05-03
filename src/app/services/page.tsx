import HeroSection from '../components/services/HeroSection';
import ServiceCategories from '../components/services/ServiceCategories';
import HowItWorks from '../components/services/HowItWorks';
import WhyChooseUs from '../components/services/WhyChooseUs';
import Testimonials from '../components/services/Testimonials';
import CTASection from '../components/services/CTASection';

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <HeroSection />
      <ServiceCategories />
      <HowItWorks />
      <WhyChooseUs />
      <Testimonials />
      <CTASection />
    </main>
  );
}
