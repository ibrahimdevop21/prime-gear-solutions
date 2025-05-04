export const spareParts = [
  {
    id: 1,
    name: "Caterpillar 320 Excavator Bucket",
    model: "High-Strength Steel",
    serial: "1500 kg",
    category: "Excavator Parts",
    brand: "Caterpillar",
    image: "/spare-parts/bucket.jpg",
    specs: {
      enginePower: "N/A",
      year: 2023,
      capacity: "2.5 cubic yards",
      attachments: ["Quick Coupler", "Pin-on"],
      material: "High-Strength Steel",
      weight: "1500 kg"
    },
    type: 'sale' as const,
    salePrice: 15000,
    availability: true,
    condition: 'new' as const,
    location: "Riyadh",
    maintenanceHistory: []
  },
  {
    id: 2,
    name: "Komatsu PC200 Track Shoes",
    model: "Hardened Steel",
    serial: "120 kg",
    category: "Track Components",
    brand: "Komatsu",
    image: "/spare-parts/track-shoes.jpg",
    specs: {
      enginePower: "N/A",
      year: 2023,
      attachments: ["Bolt-on"],
      material: "Hardened Steel",
      size: "700mm",
      weight: "120 kg"
    },
    type: 'sale' as const,
    salePrice: 8000,
    availability: true,
    condition: 'new' as const,
    location: "Jeddah",
    maintenanceHistory: []
  },
  {
    id: 3,
    name: "Hitachi ZX200 Boom Cylinder",
    model: "Chrome Plated",
    serial: "Standard Mount",
    category: "Hydraulic Components",
    brand: "Hitachi",
    image: "/spare-parts/cylinder.jpg",
    specs: {
      enginePower: "N/A",
      year: 2023,
      attachments: ["Standard Mount"],
      material: "Chrome Plated",
      diameter: "100mm",
      stroke: "1500mm"
    },
    type: 'sale' as const,
    salePrice: 12000,
    availability: true,
    condition: 'new' as const,
    location: "Dammam",
    maintenanceHistory: []
  },
  {
    id: 4,
    name: "Volvo EC210 Dipper Arm",
    model: "High-Strength Steel",
    serial: "800 kg",
    category: "Arm Components",
    brand: "Volvo",
    image: "/spare-parts/dipper-arm.jpg",
    specs: {
      enginePower: "N/A",
      year: 2023,
      attachments: ["Quick Coupler"],
      material: "High-Strength Steel",
      length: "3000mm",
      weight: "800 kg"
    },
    type: 'sale' as const,
    salePrice: 18000,
    availability: true,
    condition: 'new' as const,
    location: "Riyadh",
    maintenanceHistory: []
  },
  {
    id: 5,
    name: "John Deere 210L Bucket Teeth",
    model: "Hardened Steel",
    serial: "12 pieces",
    category: "Bucket Components",
    brand: "John Deere",
    image: "/spare-parts/bucket-teeth.jpg",
    specs: {
      enginePower: "N/A",
      year: 2023,
      attachments: ["Weld-on"],
      material: "Hardened Steel",
      size: "150mm",
      quantity: "12 pieces"
    },
    type: 'sale' as const,
    salePrice: 3000,
    availability: true,
    condition: 'new' as const,
    location: "Jeddah",
    maintenanceHistory: []
  }
];

export const partCategories = [
  "Excavator Parts",
  "Track Components",
  "Hydraulic Components",
  "Arm Components",
  "Bucket Components",
  "Engine Parts",
  "Electrical Components"
];
