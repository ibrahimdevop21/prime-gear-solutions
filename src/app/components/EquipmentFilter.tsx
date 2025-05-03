"use client";

import { useState } from "react";
import { FiFilter } from "react-icons/fi";
import { equipmentCategories } from "../lib/data.js";

interface EquipmentFilterProps {
  onFilter: (filters: {
    type: string;
    category: string;
    brand: string;
    condition: string;
    location: string;
    priceRange: [number, number];
  }) => void;
}

interface FilterState {
  type: string;
  category: string;
  brand: string;
  condition: string;
  location: string;
  priceRange: [number, number];
}

export default function EquipmentFilter({ onFilter }: EquipmentFilterProps) {
  const [filters, setFilters] = useState<FilterState>({
    type: "",
    category: "",
    brand: "",
    condition: "",
    location: "",
    priceRange: [0, 1000000] as [number, number],
  });

  const brands = ['CAT', 'Komatsu', 'Volvo', 'Liebherr'];
  const locations = ['Riyadh', 'Jeddah', 'Dammam'];

  const handleFilterChange = (field: keyof FilterState, value: any) => {
    setFilters((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleReset = () => {
    setFilters({
      type: "",
      category: "",
      brand: "",
      condition: "",
      location: "",
      priceRange: [0, 1000000] as [number, number],
    });
  };

  const handleApply = () => {
    onFilter(filters);
  };

  const handleResetFilters = () => {
    setFilters({
      type: '',
      category: '',
      brand: '',
      condition: '',
      location: '',
      priceRange: [0, 1000000] as [number, number],
    });
    onFilter({
      type: '',
      category: '',
      brand: '',
      condition: '',
      location: '',
      priceRange: [0, 1000000],
    });
  };

  const categories = equipmentCategories;

  return (
    <div className="bg-gray-50 rounded-lg shadow-md p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-900 mb-1">Type</label>
          <select
            value={filters.type}
            onChange={(e) => setFilters({ ...filters, type: e.target.value })}
            className="w-full p-2 border border-gray-400 rounded-md bg-white text-gray-900 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="">All Types</option>
            <option value="rental">Rental</option>
            <option value="sale">Sale</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
          <select
            value={filters.category}
            onChange={(e) => setFilters({ ...filters, category: e.target.value })}
            className="w-full p-2 border border-gray-400 rounded-md bg-white text-gray-900 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
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
          <label className="block text-sm font-medium text-gray-700 mb-1">Brand</label>
          <select
            value={filters.brand}
            onChange={(e) => setFilters({ ...filters, brand: e.target.value })}
            className="w-full p-2 border border-gray-400 rounded-md bg-white text-gray-900 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
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
          <label className="block text-sm font-medium text-gray-700 mb-1">Condition</label>
          <select
            value={filters.condition}
            onChange={(e) => setFilters({ ...filters, condition: e.target.value })}
            className="w-full p-2 border border-gray-400 rounded-md bg-white text-gray-900 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="">All Conditions</option>
            <option value="new">New</option>
            <option value="used">Used</option>
            <option value="refurbished">Refurbished</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Location</label>
          <select
            value={filters.location}
            onChange={(e) => setFilters({ ...filters, location: e.target.value })}
            className="w-full p-2 border border-gray-400 rounded-md bg-white text-gray-900 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="">All Locations</option>
            {locations.map((location) => (
              <option key={location} value={location}>
                {location.charAt(0).toUpperCase() + location.slice(1)}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Price Range</label>
          <div className="flex gap-2">
            <input
              type="number"
              value={filters.priceRange[0]}
              onChange={(e) =>
                setFilters({
                  ...filters,
                  priceRange: [parseInt(e.target.value), filters.priceRange[1]]
                })
              }
              className="flex-1 p-2 border border-gray-400 rounded-md bg-white text-gray-900 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Min"
            />
            <span className="text-gray-700">-</span>
            <input
              type="number"
              value={filters.priceRange[1]}
              onChange={(e) =>
                setFilters({
                  ...filters,
                  priceRange: [filters.priceRange[0], parseInt(e.target.value)]
                })
              }
              className="flex-1 p-2 border border-gray-400 rounded-md bg-white text-gray-900 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Max"
            />
          </div>
        </div>
        <div className="col-span-3 flex justify-end gap-2">
          <button
            onClick={handleReset}
            className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-200 rounded-md hover:bg-gray-300 transition-colors"
          >
            Reset
          </button>
          <button
            onClick={handleApply}
            className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 transition-colors"
          >
            Apply Filters
          </button>
        </div>
      </div>
    </div>
  );
}
