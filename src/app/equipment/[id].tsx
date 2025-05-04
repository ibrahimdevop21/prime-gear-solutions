"use client";

import { equipmentItems } from "../lib/equipment";
import Image from 'next/image';
import { FaTruck, FaTag } from 'react-icons/fa';

export default function EquipmentDetails({ params }: { params: { id: string } }) {
  interface EquipmentItem {
    id: number;
    name: string;
    description: string;
    price: string;
    image: string;
    category: string;
  }

  const equipment = equipmentItems.find((item: EquipmentItem) => item.id === parseInt(params.id));

  if (!equipment) {
    return <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">Equipment not found</div>;
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Hero Section with Full Image */}
      <section className="relative min-h-[600px] md:min-h-screen flex items-center">
        <div className="absolute inset-0">
          <Image
            src={equipment.image}
            alt={equipment.name}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative container mx-auto px-4">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">{equipment.name}</h1>
            <div className="flex items-center space-x-4 mb-8">
              <div className="flex items-center">
                <FaTruck className="w-5 h-5 mr-2" />
                <span>{equipment.category}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Details Section */}
      <section className="py-16 bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Description */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-6">Description</h2>
              <p className="text-gray-400">{equipment.description}</p>
            </div>

            {/* Price */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-6">Pricing</h2>
              <div className="p-6 bg-gray-700 rounded-lg">
                <div className="flex items-center">
                  <FaTag className="w-5 h-5 mr-2" />
                  <span className="text-xl font-bold">{equipment.price}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
