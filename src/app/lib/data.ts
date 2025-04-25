export type Product = {
    id: string;
    title: string;
    category: 'rentals' | 'sales' | 'parts';
    type: string;
    price_per_day?: number;
    sale_price?: number;
    serial: string;
    image: string;
    specs: {
        weight: string;
        engine: string;
        year?: number;
    };
    featured?: boolean;
};

export const heavyEquipment: Product[] = [
    {
        id: 'ex-001',
        title: 'CAT 320 Excavator',
        category: 'rentals',
        type: 'excavator',
        price_per_day: 450,
        sale_price: 125000,
        serial: 'CAT-320-XJ2024',
        image: '/hero-bg.jpg',
        specs: { weight: '22T', engine: 'Diesel', year: 2022 },
        featured: true,
    },
    // Add more products...
];