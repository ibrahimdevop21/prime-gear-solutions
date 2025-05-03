"use client";

import EquipmentGrid from "../components/EquipmentGrid";
import EquipmentFilter from "../components/EquipmentFilter";
import { equipment, equipmentCategories } from "../lib/data.js";
import { useState } from 'react';

export default function EquipmentPage() {
  const [filters, setFilters] = useState({
    type: "",
    category: "",
    brand: "",
    condition: "",
    location: "",
    priceRange: [0, 1000000] as [number, number],
  });

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Equipment</h1>
      
      <div className="space-y-8">
        <EquipmentFilter onFilter={setFilters} />
        <EquipmentGrid equipment={equipment} filters={filters} />
      </div>
    </div>
  );
}
