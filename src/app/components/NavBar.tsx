"use client"; // Required for interactivity

import Link from "next/link";
import { useState } from "react";
import Image from 'next/image';
import React from 'react';
import { FiSearch, FiShoppingCart, FiUser } from 'react-icons/fi';

interface IconProps {
  className?: string;
  size?: number;
}

const FiSearchIcon = FiSearch as React.FC<IconProps>;
const FiShoppingCartIcon = FiShoppingCart as React.FC<IconProps>;
const FiUserIcon = FiUser as React.FC<IconProps>;

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const equipmentCategories = [
    { name: 'Category 1', subcategories: ['Subcategory 1', 'Subcategory 2'] },
    { name: 'Category 2', subcategories: ['Subcategory 3', 'Subcategory 4'] },
  ];

  const services = ['Service 1', 'Service 2', 'Service 3'];

  return (
    <nav className="bg-gradient-to-r from-secondary to-gray-900/80 backdrop-blur-lg text-white sticky top-0 z-50 shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo and Brand */}
            <Link href="/" className="flex items-center">
              <Image
                src="/text-logo.png"
                alt="Prime Gear Solutions"
                width={100}
                height={20}
                priority
                className="object-contain"
              />
            </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/equipment"
              className="group relative px-4 py-2 transition-all duration-200 hover:text-primary hover:scale-105"
            >
              Equipment
              <div className="absolute bottom-0 left-0 w-full h-0.5 bg-primary opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
            </Link>
            <Link
              href="/services"
              className="group relative px-4 py-2 transition-all duration-200 hover:text-primary hover:scale-105"
            >
              Services
              <div className="absolute bottom-0 left-0 w-full h-0.5 bg-primary opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
            </Link>
            <Link
              href="/parts"
              className="group relative px-4 py-2 transition-all duration-200 hover:text-primary hover:scale-105"
            >
              Parts
              <div className="absolute bottom-0 left-0 w-full h-0.5 bg-primary opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
            </Link>
            <Link
              href="/about"
              className="group relative px-4 py-2 transition-all duration-200 hover:text-primary hover:scale-105"
            >
              About
              <div className="absolute bottom-0 left-0 w-full h-0.5 bg-primary opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
            </Link>
            <Link
              href="/contact"
              className="group relative px-4 py-2 transition-all duration-200 hover:text-primary hover:scale-105"
            >
              Contact
              <div className="absolute bottom-0 left-0 w-full h-0.5 bg-primary opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2 hover:bg-neutral-100/20 rounded-lg transition-colors" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden absolute top-full left-0 w-full bg-gradient-to-b from-secondary to-gray-900/80 backdrop-blur-lg p-6">
              <div className="space-y-6">
                <Link 
                  href="/equipment"
                  className="block text-lg font-medium text-neutral-700 hover:text-primary transition-colors py-3"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Equipment
                </Link>
                <Link 
                  href="/services"
                  className="block text-lg font-medium text-neutral-700 hover:text-primary transition-colors py-3"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Services
                </Link>
                <Link 
                  href="/parts"
                  className="block text-lg font-medium text-neutral-700 hover:text-primary transition-colors py-3"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Parts
                </Link>
                <Link 
                  href="/about"
                  className="block text-lg font-medium text-neutral-700 hover:text-primary transition-colors py-3"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  About
                </Link>
                <Link 
                  href="/contact"
                  className="block text-lg font-medium text-neutral-700 hover:text-primary transition-colors py-3"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Contact
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Mobile Menu Accordion */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-secondary p-4">
          <div className="space-y-4">
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
                <FiSearchIcon className="w-6 h-6" />
              </button>
              <button className="hover:text-orange-400 relative">
                <FiShoppingCartIcon className="w-6 h-6" />
                <span className="absolute -top-2 -right-2 bg-orange-500 text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  3
                </span>
              </button>
              <button className="hover:text-orange-400">
                <FiUserIcon className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}