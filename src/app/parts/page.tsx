"use client";

import EquipmentGrid from "../components/EquipmentGrid";
import EquipmentFilter from "../components/EquipmentFilter";
import { spareParts } from '../lib/parts';
import { useState } from 'react';

export default function PartsPage() {
  const [filters, setFilters] = useState({
    type: '',
    category: '',
    brand: '',
    condition: '',
    location: '',
    priceRange: [0, 1000000] as [number, number],
  });

  const formattedParts = spareParts.map(item => ({
    ...item,
    model: item.specs?.material || '',
    serial: item.specs?.weight || ''
  }));

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">Spare Parts</h1>
          
          <div className="mt-8">
            <div className="w-full">
              <EquipmentFilter filters={filters} setFilters={setFilters} />
            </div>

            <div className="mt-8">
              <EquipmentGrid equipment={formattedParts} filters={filters} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
