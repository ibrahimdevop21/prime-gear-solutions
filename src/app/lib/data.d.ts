export interface EquipmentSpecs {
  tonnage?: string;
  enginePower: string;
  year: number;
  attachments: string[];
  capacity?: string;
  maxLift?: string;
  boomLength?: string;
}

export interface EquipmentRentalRate {
  daily: number;
  weekly: number;
  monthly: number;
}

export interface EquipmentMaintenanceHistory {
  date: string;
  description: string;
}

export interface Equipment {
  id: number;
  name: string;
  category: 'excavators' | 'loaders' | 'cranes' | 'dozers' | 'backhoes';
  brand: string;
  image: string;
  specs: EquipmentSpecs;
  type: 'rental' | 'sale';
  rentalRate?: EquipmentRentalRate;
  salePrice?: number;
  availability: boolean;
  condition: 'new' | 'used' | 'refurbished';
  location: string;
  maintenanceHistory: EquipmentMaintenanceHistory[];
}

export const equipment: Equipment[];
export const equipmentCategories: readonly [
  'excavators',
  'loaders',
  'cranes',
  'dozers',
  'backhoes'
];
