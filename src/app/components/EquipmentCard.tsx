import Image from 'next/image';
import { useRouter } from 'next/navigation';

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
  const router = useRouter();

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="relative h-48">
        <Image
          src={equipment.serial ? `/equipment/${equipment.serial}.jpg` : '/text-logo.png'}
          alt={equipment.name}
          fill
          className="object-cover"
          onError={(e) => {
            const img = e.target as HTMLImageElement;
            img.src = '/text-logo.png';
          }}
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2">{equipment.name}</h3>
        <div className="flex justify-between items-center mb-2">
          {equipment.type === 'rental' && (
            <span className="text-sm text-gray-600">Daily: SR {equipment.rentalRate?.daily}</span>
          )}
          {equipment.type === 'sale' && (
            <span className="text-sm text-gray-600">Price: SR {equipment.salePrice}</span>
          )}
        </div>
        <div className="space-y-2">
          <div className="mb-4">
            <p className="text-sm text-gray-600">Brand: {equipment.brand}</p>
            <p className="text-sm text-gray-600">Model: {equipment.model}</p>
            <p className="text-sm text-gray-600">Serial: {equipment.serial}</p>
            <p className="text-sm text-gray-600">Condition: {equipment.condition}</p>
            <p className="text-sm text-gray-600">Location: {equipment.location}</p>
          </div>
          <div className="mb-4">
            <p className="text-sm text-gray-600">Year: {equipment.specs.year}</p>
            {equipment.specs.tonnage && <p className="text-sm text-gray-600">Tonnage: {equipment.specs.tonnage}</p>}
            {equipment.specs.capacity && <p className="text-sm text-gray-600">Capacity: {equipment.specs.capacity}</p>}
            {equipment.specs.maxLift && <p className="text-sm text-gray-600">Max Lift: {equipment.specs.maxLift}</p>}
            {equipment.specs.boomLength && <p className="text-sm text-gray-600">Boom Length: {equipment.specs.boomLength}</p>}
          </div>
        </div>
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <span className="text-sm text-gray-500 mr-2">Condition:</span>
            <span className={`px-2 py-1 rounded-full text-xs ${
              equipment.condition === 'new'
                ? 'bg-green-100 text-green-800'
                : equipment.condition === 'used'
                ? 'bg-yellow-100 text-yellow-800'
                : 'bg-blue-100 text-blue-800'
            }`}>
              {equipment.condition}
            </span>
          </div>
          <div className="flex items-center">
            <span className="text-sm text-gray-500 mr-2">Location:</span>
            <span className="text-sm text-gray-600">{equipment.location}</span>
          </div>
        </div>
        <div className="mt-6">
          <button
            onClick={() => router.push(`/equipment/${equipment.id}`)}
            className="w-full bg-primary text-white px-4 py-2 rounded-md hover:bg-primary/90 transition-colors"
          >
            {equipment.type === 'rental' ? 'View Rental Details' : 'View Sale Details'}
          </button>
        </div>
      </div>
    </div>
  );
}
