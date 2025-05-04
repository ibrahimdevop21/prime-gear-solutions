"use client";

import EquipmentGrid from "../components/EquipmentGrid";
import EquipmentFilter from "../components/EquipmentFilter";
import { equipment } from '../lib/data.js';
import { useState } from 'react';

export default function EquipmentPage() {
  const [filters, setFilters] = useState({
    type: '',
    category: '',
    brand: '',
    condition: '',
    location: '',
    priceRange: [0, 1000000] as [number, number],
  });

  const formattedEquipment = equipment.map(item => ({
    ...item,
    model: item.specs?.tonnage || '',
    serial: item.specs?.enginePower || ''
  }));

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-screen-xl">
        {/* Hero Section */}
        <div className="text-center py-12 sm:py-16 lg:py-20">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary mb-4">
            Equipment
          </h1>
          <p className="text-gray-400 text-sm sm:text-base">
            Browse our extensive collection of heavy equipment
          </p>
        </div>

        {/* Filter and Grid Section */}
        <div className="mt-8">
          <div className="w-full">
            <EquipmentFilter filters={filters} setFilters={setFilters} />
          </div>

          <div className="mt-8">
            <EquipmentGrid equipment={formattedEquipment} filters={filters} />
          </div>
        </div>
      </div>
    </div>
  );
}
