"use client"; // Required for interactivity

import Link from "next/link";
import { useState } from "react";
import { FiMenu, FiX, FiSearch, FiShoppingCart, FiUser } from "react-icons/fi";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  // Equipment categories data
  const equipmentCategories = [
    {
      name: "Excavators",
      subcategories: ["Mini Excavators", "Crawler Excavators", "Wheeled Excavators"]
    },
    {
      name: "Loaders",
      subcategories: ["Skid Steer", "Backhoe", "Wheel Loaders"]
    },
    {
      name: "Bulldozers",
      subcategories: ["Crawler Dozers", "Wheel Dozers"]
    }
  ];

  const services = [
    "Equipment Maintenance",
    "Fleet Optimization",
    "Emergency Repairs"
  ];

  return (
    <nav className="bg-gray-900 text-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3">
        {/* Desktop Nav */}
        <div className="hidden md:flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="text-xl font-bold">
            <span className="text-orange-500">Prime</span>Gear
          </Link>

          {/* Main Navigation */}
          <div className="flex items-center space-x-8">
            {/* Equipment Dropdown */}
            <div className="relative group">
              <button 
                className="flex items-center space-x-1 hover:text-orange-400 transition"
                onClick={() => setOpenDropdown(openDropdown === 'equipment' ? null : 'equipment')}
              >
                <span>Equipment</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {openDropdown === 'equipment' && (
                <div className="absolute left-0 mt-2 w-56 bg-gray-800 rounded-md shadow-lg py-1 z-50">
                  {equipmentCategories.map((category) => (
                    <div key={category.name} className="relative submenu group">
                      <Link 
                        href={`/equipment/${category.name.toLowerCase()}`}
                        className="block px-4 py-2 hover:bg-gray-700"
                        onClick={() => setOpenDropdown(null)}
                      >
                        <div className="flex justify-between items-center">
                          <span>{category.name}</span>
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </div>
                      </Link>
                      <div className="absolute left-full top-0 ml-1 hidden group-hover:block bg-gray-800 rounded-md shadow-lg py-1 w-48">
                        {category.subcategories.map((sub) => (
                          <Link
                            key={sub}
                            href={`/equipment/${category.name.toLowerCase()}/${sub.toLowerCase().replace(/\s+/g, '-')}`}
                            className="block px-4 py-2 hover:bg-gray-700 text-sm"
                            onClick={() => setOpenDropdown(null)}
                          >
                            {sub}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Parts Link */}
            <Link href="/parts" className="hover:text-orange-400 transition">
              Spare Parts
            </Link>

            {/* Services Dropdown */}
            <div className="relative">
              <button 
                className="flex items-center space-x-1 hover:text-orange-400 transition"
                onClick={() => setOpenDropdown(openDropdown === 'services' ? null : 'services')}
              >
                <span>Services</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {openDropdown === 'services' && (
                <div className="absolute right-0 mt-2 w-48 bg-gray-800 rounded-md shadow-lg py-1 z-50">
                  {services.map((service) => (
                    <Link
                      key={service}
                      href={`/services/${service.toLowerCase().replace(/\s+/g, '-')}`}
                      className="block px-4 py-2 hover:bg-gray-700"
                      onClick={() => setOpenDropdown(null)}
                    >
                      {service}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Contact Link */}
            <Link href="/contact" className="hover:text-orange-400 transition">
              Contact
            </Link>
          </div>

          {/* Right Side Icons */}
          <div className="flex items-center space-x-6">
            <button className="hover:text-orange-400 transition">
              <FiSearch className="w-5 h-5" />
            </button>
            <button className="hover:text-orange-400 transition relative">
              <FiShoppingCart className="w-5 h-5" />
              <span className="absolute -top-2 -right-2 bg-orange-500 text-xs rounded-full h-5 w-5 flex items-center justify-center">
                3
              </span>
            </button>
            <button className="hover:text-orange-400 transition">
              <FiUser className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        <div className="md:hidden flex items-center justify-between">
          <Link href="/" className="text-xl font-bold">
            <span className="text-orange-500">Prime</span>Gear
          </Link>

          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-white focus:outline-none"
          >
            {isMobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-gray-800 px-4 py-2">
          <div className="flex flex-col space-y-3">
            {/* Equipment Accordion */}
            <div>
              <button 
                className="flex items-center justify-between w-full py-2"
                onClick={() => setOpenDropdown(openDropdown === 'mobile-equipment' ? null : 'mobile-equipment')}
              >
                <span>Equipment</span>
                <svg className={`w-4 h-4 transition-transform ${openDropdown === 'mobile-equipment' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {openDropdown === 'mobile-equipment' && (
                <div className="pl-4 py-2 space-y-2">
                  {equipmentCategories.map((category) => (
                    <div key={category.name}>
                      <Link 
                        href={`/equipment/${category.name.toLowerCase()}`}
                        className="block py-1 hover:text-orange-400"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {category.name}
                      </Link>
                      <div className="pl-4 space-y-1">
                        {category.subcategories.map((sub) => (
                          <Link
                            key={sub}
                            href={`/equipment/${category.name.toLowerCase()}/${sub.toLowerCase().replace(/\s+/g, '-')}`}
                            className="block py-1 text-sm hover:text-orange-400"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            {sub}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <Link 
              href="/parts" 
              className="py-2 hover:text-orange-400"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Spare Parts
            </Link>

            {/* Services Accordion */}
            <div>
              <button 
                className="flex items-center justify-between w-full py-2"
                onClick={() => setOpenDropdown(openDropdown === 'mobile-services' ? null : 'mobile-services')}
              >
                <span>Services</span>
                <svg className={`w-4 h-4 transition-transform ${openDropdown === 'mobile-services' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {openDropdown === 'mobile-services' && (
                <div className="pl-4 py-2 space-y-1">
                  {services.map((service) => (
                    <Link
                      key={service}
                      href={`/services/${service.toLowerCase().replace(/\s+/g, '-')}`}
                      className="block py-1 hover:text-orange-400"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {service}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link 
              href="/contact" 
              className="py-2 hover:text-orange-400"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact
            </Link>

            <div className="flex items-center space-x-4 pt-2 border-t border-gray-700">
              <button className="hover:text-orange-400">
                <FiSearch className="w-5 h-5" />
              </button>
              <button className="hover:text-orange-400 relative">
                <FiShoppingCart className="w-5 h-5" />
                <span className="absolute -top-2 -right-2 bg-orange-500 text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  3
                </span>
              </button>
              <button className="hover:text-orange-400">
                <FiUser className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}