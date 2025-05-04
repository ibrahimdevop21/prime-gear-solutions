"use client";


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
    const matchesPrice = (item.type === 'rental' 
      ? (item.rentalRate?.daily ?? 0) >= filters.priceRange[0] && (item.rentalRate?.daily ?? 0) <= filters.priceRange[1]
      : (item.salePrice ?? 0) >= filters.priceRange[0] && (item.salePrice ?? 0) <= filters.priceRange[1]);

    return matchesType && matchesCategory && matchesBrand && matchesCondition && matchesLocation && matchesPrice;
  });

  // Show loading state if equipment is empty
  if (equipment.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-16">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mb-4"></div>
        <p className="text-gray-400 text-lg">Loading equipment...</p>
      </div>
    );
  }

  // Show empty state if no results found
  if (filtered.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-16">
        <div className="text-gray-400 text-4xl mb-4">🔍</div>
        <h3 className="text-xl font-semibold mb-2">No Equipment Found</h3>
        <p className="text-gray-400 text-center max-w-md">
          No equipment matches your filters. Try adjusting your search criteria.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {filtered.map((item) => (
        <EquipmentCard key={item.id} equipment={item} />
      ))}
    </div>
  );
}
