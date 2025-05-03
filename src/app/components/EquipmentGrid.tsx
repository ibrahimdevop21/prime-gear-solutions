"use client";

import { useState } from 'react';
import EquipmentCard from './EquipmentCard';

interface EquipmentGridProps {
  equipment: {
    id: number;
    name: string;
    model: string;
    serial: string;
    category: string;
    brand: string;
    image: string;
    specs: {
      tonnage?: string;
      enginePower: string;
      year: number;
      attachments: string[];
      capacity?: string;
      maxLift?: string;
      boomLength?: string;
    };
    type: 'rental' | 'sale';
    rentalRate?: {
      daily: number;
      weekly: number;
      monthly: number;
    };
    salePrice?: number;
    availability: boolean;
    condition: 'new' | 'used' | 'refurbished';
    location: string;
    maintenanceHistory: {
      date: string;
      description: string;
    }[];
  }[];
  filters: {
    type: string;
    category: string;
    brand: string;
    condition: string;
    location: string;
    priceRange: [number, number];
  };
}

export default function EquipmentGrid({ equipment, filters }: EquipmentGridProps) {
  const filtered = equipment.filter((item) => {
    const matchesType = !filters.type || item.type === filters.type;
    const matchesCategory = !filters.category || item.category === filters.category;
    const matchesBrand = !filters.brand || item.brand === filters.brand;
    const matchesCondition = !filters.condition || item.condition === filters.condition;
    const matchesLocation = !filters.location || item.location === filters.location;
    const matchesPrice = 
      (filters.type === 'rental' && item.rentalRate?.daily >= filters.priceRange[0] && item.rentalRate?.daily <= filters.priceRange[1]) ||
      (filters.type === 'sale' && item.salePrice >= filters.priceRange[0] && item.salePrice <= filters.priceRange[1]) ||
      (!filters.type && ((item.rentalRate?.daily >= filters.priceRange[0] && item.rentalRate?.daily <= filters.priceRange[1]) ||
                       (item.salePrice >= filters.priceRange[0] && item.salePrice <= filters.priceRange[1])));

    return matchesType && matchesCategory && matchesBrand && matchesCondition && matchesLocation && matchesPrice;
  });

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold">Browse Equipment</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((item) => (
          <EquipmentCard key={item.id} equipment={item} />
        ))}
      </div>
    </div>
  );
}
