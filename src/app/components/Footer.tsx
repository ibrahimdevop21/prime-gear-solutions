import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import Image from 'next/image';

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Company Info & Logo */}
          <div className="space-y-8">
            <div className="mb-8">
              <Image
                src="/text-logo.png"
                alt="Prime Gear Solutions"
                width={200}
                height={40}
                priority
                className="object-contain"
              />
              <p className="mb-4 text-gray-500">
                Saudi Arabia's premier provider of heavy equipment rentals, parts, and maintenance services.
              </p>
            </div>
            <div className="flex gap-6 mb-10">
              <a href="https://facebook.com/primegearsolutions" className="text-primary hover:text-white transition-colors">
                <FaFacebook className="w-6 h-6" />
              </a>
              <a href="https://twitter.com/primegearsolutions" className="text-primary hover:text-white transition-colors">
                <FaTwitter className="w-6 h-6" />
              </a>
              <a href="https://linkedin.com/company/primegearsolutions" className="text-primary hover:text-white transition-colors">
                <FaLinkedin className="w-6 h-6" />
              </a>
              <a href="https://instagram.com/primegearsolutions" className="text-primary hover:text-white transition-colors">
                <FaInstagram className="w-6 h-6" />
              </a>
            </div>
            <div className="border-t border-gray-800 pt-6">
              <p className="text-sm text-gray-500">
                Business Hours: <br />
                Sunday - Thursday: 8:00 AM - 5:00 PM <br />
                Friday & Saturday: Closed
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-8">
            <h3 className="text-xl font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-4">
              <li>
                <a href="/services" className="hover:text-white transition-colors">
                  Our Services
                </a>
              </li>
              <li>
                <a href="/equipment" className="hover:text-white transition-colors">
                  Equipment
                </a>
              </li>
              <li>
                <a href="/about" className="hover:text-white transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-white transition-colors">
                  Contact
                </a>
              </li>
              <li>
                <a href="/careers" className="hover:text-white transition-colors">
                  Careers
                </a>
              </li>
              <li>
                <a href="/privacy-policy" className="hover:text-white transition-colors">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Contact */}
          <div className="space-y-8">
            <h3 className="text-xl font-semibold mb-6">Quick Contact</h3>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <FaPhone className="w-5 h-5" />
                <a href="tel:+9661234567" className="hover:text-white transition-colors">
                  +966 123 4567
                </a>
              </div>
              <div className="flex items-center gap-2">
                <FaEnvelope className="w-5 h-5" />
                <a href="mailto:info@primegearsolutions.com" className="hover:text-white transition-colors">
                  info@primegearsolutions.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <FaMapMarkerAlt className="w-5 h-5" />
                <span>Riyadh, Saudi Arabia</span>
              </div>
            </div>
            <div className="border-t border-gray-800 pt-6">
              <p className="text-sm text-gray-500">
                Emergency Service Available 24/7
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-16 pt-12">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500">
              &copy; {new Date().getFullYear()} Prime Gear Solutions. All rights reserved.
            </p>
            <div className="flex gap-6 mt-6 md:mt-0">
              <a href="/terms-of-service" className="text-gray-500 hover:text-white transition-colors">
                Terms of Service
              </a>
              <a href="/privacy-policy" className="text-gray-500 hover:text-white transition-colors">
                Privacy Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;