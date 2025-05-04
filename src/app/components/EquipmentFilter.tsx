"use client";

import { useState } from 'react';
import { equipmentCategories } from "../lib/data.js";

interface EquipmentFilterProps {
  filters: {
    type: string;
    category: string;
    brand: string;
    condition: string;
    location: string;
    priceRange: [number, number];
  };
  setFilters: (filters: {
    type: string;
    category: string;
    brand: string;
    condition: string;
    location: string;
    priceRange: [number, number];
  }) => void;
}

export default function EquipmentFilter({ filters, setFilters }: EquipmentFilterProps) {
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);

  const handleReset = () => {
    setFilters({
      type: "",
      category: "",
      brand: "",
      condition: "",
      location: "",
      priceRange: [0, 1000000] as [number, number]
    });
  };

  const brands = ['CAT', 'Komatsu', 'Volvo', 'Liebherr'];
  const locations = ['Riyadh', 'Jeddah', 'Dammam'];

  return (
    <div className="relative">
      {/* Mobile filter button */}
      <button
        onClick={() => setIsMobileFilterOpen(!isMobileFilterOpen)}
        className="md:hidden bg-gray-800 text-white px-4 py-2 rounded-lg flex items-center gap-2"
        aria-expanded={isMobileFilterOpen}
        aria-controls="mobile-filters"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
        </svg>
        Filters
      </button>

      {/* Desktop filters - Sticky on scroll */}
      <div className="hidden md:block bg-gray-800 text-white p-4 sm:p-6 lg:px-8">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:gap-6">
          <div className="flex-1">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {/* Type Filter */}
              <div className="space-y-2">
                <label className="block text-sm font-medium">Type</label>
                <select
                  value={filters.type}
                  onChange={(e) => setFilters({...filters, type: e.target.value})}
                  className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="">All Types</option>
                  <option value="rental">For Rent</option>
                  <option value="sale">For Sale</option>
                </select>
              </div>

              {/* Category Filter */}
              <div className="space-y-2">
                <label className="block text-sm font-medium">Category</label>
                <select
                  value={filters.category}
                  onChange={(e) => setFilters({...filters, category: e.target.value})}
                  className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="">All Categories</option>
                  {equipmentCategories.map((category) => (
                    <option key={category} value={category}>
                      {category.charAt(0).toUpperCase() + category.slice(1)}
                    </option>
                  ))}
                </select>
              </div>

              {/* Brand Filter */}
              <div className="space-y-2">
                <label className="block text-sm font-medium">Brand</label>
                <select
                  value={filters.brand}
                  onChange={(e) => setFilters({...filters, brand: e.target.value})}
                  className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="">All Brands</option>
                  {brands.map((brand) => (
                    <option key={brand} value={brand}>
                      {brand}
                    </option>
                  ))}
                </select>
              </div>

              {/* Condition Filter */}
              <div className="space-y-2">
                <label className="block text-sm font-medium">Condition</label>
                <select
                  value={filters.condition}
                  onChange={(e) => setFilters({...filters, condition: e.target.value})}
                  className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="">All Conditions</option>
                  <option value="new">New</option>
                  <option value="used">Used</option>
                  <option value="refurbished">Refurbished</option>
                </select>
              </div>

              {/* Location Filter */}
              <div className="space-y-2">
                <label className="block text-sm font-medium">Location</label>
                <select
                  value={filters.location}
                  onChange={(e) => setFilters({...filters, location: e.target.value})}
                  className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="">All Locations</option>
                  {locations.map((location) => (
                    <option key={location} value={location}>
                      {location}
                    </option>
                  ))}
                </select>
              </div>

              {/* Price Range Filter */}
              <div className="space-y-2">
                <label className="block text-sm font-medium">Price Range</label>
                <div className="flex gap-2">
                  <input
                    type="number"
                    value={filters.priceRange[0]}
                    onChange={(e) => {
                      const value = parseInt(e.target.value) || 0;
                      setFilters({...filters, priceRange: [value, filters.priceRange[1]]});
                    }}
                    className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Min"
                  />
                  <input
                    type="number"
                    value={filters.priceRange[1]}
                    onChange={(e) => {
                      const value = parseInt(e.target.value) || 1000000;
                      setFilters({...filters, priceRange: [filters.priceRange[0], value]});
                    }}
                    className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Max"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="flex-none">
            <button
              onClick={handleReset}
              className="px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-md text-white"
            >
              Reset All
            </button>
          </div>
        </div>
      </div>

      {/* Mobile filters */}
      <div
        className={`md:hidden fixed top-0 left-0 right-0 bottom-0 bg-gray-800 text-white p-4 overflow-y-auto transition-transform duration-300 ${
          isMobileFilterOpen ? 'translate-y-0' : 'translate-y-full'
        }`}
        id="mobile-filters"
        role="dialog"
        aria-modal="true"
      >
        <div className="flex justify-between items-center mb-4 border-b border-gray-700 pb-4">
          <h2 className="text-xl font-bold">Filters</h2>
          <button
            onClick={handleReset}
            className="text-sm text-gray-400 hover:text-gray-200"
          >
            Reset All
          </button>
        </div>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Type</label>
            <select
              value={filters.type}
              onChange={(e) => setFilters({...filters, type: e.target.value})}
              className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="">All Types</option>
              <option value="rental">For Rent</option>
              <option value="sale">For Sale</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Category</label>
            <select
              value={filters.category}
              onChange={(e) => setFilters({...filters, category: e.target.value})}
              className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="">All Categories</option>
              {equipmentCategories.map((category) => (
                <option key={category} value={category}>
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Brand</label>
            <select
              value={filters.brand}
              onChange={(e) => setFilters({...filters, brand: e.target.value})}
              className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="">All Brands</option>
              {brands.map((brand) => (
                <option key={brand} value={brand}>
                  {brand}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Condition</label>
            <select
              value={filters.condition}
              onChange={(e) => setFilters({...filters, condition: e.target.value})}
              className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="">All Conditions</option>
              <option value="new">New</option>
              <option value="used">Used</option>
              <option value="refurbished">Refurbished</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Location</label>
            <select
              value={filters.location}
              onChange={(e) => setFilters({...filters, location: e.target.value})}
              className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="">All Locations</option>
              {locations.map((location) => (
                <option key={location} value={location}>
                  {location}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Price Range</label>
            <div className="flex gap-2">
              <input
                type="number"
                value={filters.priceRange[0]}
                onChange={(e) => {
                  const value = parseInt(e.target.value) || 0;
                  setFilters({...filters, priceRange: [value, filters.priceRange[1]]});
                }}
                className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Min"
              />
              <input
                type="number"
                value={filters.priceRange[1]}
                onChange={(e) => {
                  const value = parseInt(e.target.value) || 1000000;
                  setFilters({...filters, priceRange: [filters.priceRange[0], value]});
                }}
                className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Max"
              />
            </div>
          </div>

          <div className="mt-4 flex justify-end gap-2">
            <button
              onClick={() => setIsMobileFilterOpen(false)}
              className="px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-md text-white"
            >
              Cancel
            </button>
            <button
              onClick={() => {
                setFilters({ ...filters });
                setIsMobileFilterOpen(false);
              }}
              className="px-4 py-2 bg-primary hover:bg-primary/90 rounded-md text-white"
            >
              Apply Filters
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
