import Image from 'next/image';
import Link from 'next/link';
import { MapPin, Calendar, Gauge, Package, Tag } from 'lucide-react';

interface EquipmentCardProps {
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
      enginePower?: string;
      year: number;
      capacity?: string;
      maxLift?: string;
      boomLength?: string;
      attachments: string[];
    };
    type: 'rental' | 'sale';
    rentalRate?: {
      daily: number;
      weekly: number;
      monthly: number;
    };
    salePrice?: number;
    availability: boolean;
    condition: string;
    location: string;
    maintenanceHistory: {
      date: string;
      description: string;
    }[];
  };
}

export default function EquipmentCard({ equipment }: EquipmentCardProps) {

  const fallbackImage = '/text-logo.png';
  const isFeatured = equipment.maintenanceHistory.length > 0;

  const formatPrice = (amount?: number) =>
    amount ? `${amount.toLocaleString()} SAR` : 'N/A';

  return (
    <article className="bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden flex flex-col">
      {/* Image Section */}
      <div className="relative w-full aspect-[4/3] bg-gray-100">
        <Image
          src={equipment.image || fallbackImage}
          alt={equipment.name}
          fill
          sizes="100%"
          className="object-cover transition-transform duration-300 hover:scale-105"
          loading="lazy"
        />
        {isFeatured && (
          <span className="absolute top-3 left-3 flex items-center gap-1 bg-yellow-200 text-yellow-800 text-xs font-medium px-2 py-1 rounded-full">
            <Tag className="w-3 h-3" />
            Featured
          </span>
        )}
      </div>

      {/* Content Section */}
      <div className="p-4 flex flex-col flex-1">
        {/* Header */}
        <div className="mb-3 flex justify-between items-start">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 leading-tight">
              {equipment.name}
            </h3>
            <p className="text-sm text-gray-500">{equipment.category}</p>
          </div>
          <div className="text-xs space-y-1 text-right">
            <span
              className={`inline-block px-2 py-0.5 rounded-full ${
                equipment.type === 'rental'
                  ? 'bg-blue-100 text-blue-800'
                  : 'bg-green-100 text-green-800'
              }`}
            >
              {equipment.type === 'rental' ? 'For Rent' : 'For Sale'}
            </span>
            <br />
            <span className="inline-block bg-gray-100 text-gray-700 px-2 py-0.5 rounded-full">
              {equipment.condition}
            </span>
          </div>
        </div>

        {/* Specs Grid */}
        <div className="grid grid-cols-2 gap-x-3 gap-y-2 text-sm text-gray-600 mb-4">
          <div className="flex items-center gap-1">
            <MapPin className="w-4 h-4 text-gray-500" />
            {equipment.location}
          </div>
          <div className="flex items-center gap-1">
            <Calendar className="w-4 h-4 text-gray-500" />
            {equipment.specs.year}
          </div>
          <div className="flex items-center gap-1">
            <Gauge className="w-4 h-4 text-gray-500" />
            {equipment.specs.enginePower ?? 'N/A'}
          </div>
          <div className="flex items-center gap-1">
            <Package className="w-4 h-4 text-gray-500" />
            {equipment.specs.capacity ?? 'N/A'}
          </div>
        </div>

        {/* Price & Button */}
        <div className="mt-auto flex justify-between items-center">
          <div className="text-sm">
            {equipment.type === 'rental' ? (
              <div className="text-blue-600 font-semibold leading-tight">
                {formatPrice(equipment.rentalRate?.daily)} / day
              </div>
            ) : (
              <div className="text-green-600 font-semibold leading-tight">
                {formatPrice(equipment.salePrice)}
              </div>
            )}
          </div>
          <Link
            href={equipment.type === 'sale' ? `/parts/${equipment.id}` : `/equipment/${equipment.id}`}
            className="text-sm px-3 py-1.5 rounded-md bg-orange-600 text-white hover:bg-orange-700 transition"
          >
            View Details
          </Link>
        </div>
      </div>
    </article>
  );
}
