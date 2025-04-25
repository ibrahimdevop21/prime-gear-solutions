// ProductCard.tsx
"use client";
import Image from 'next/image';
import { useState } from "react";

// Define the Product type
type Product = {
  title: string;
  serial: string;
  image: string;
  price_per_day?: number;
  sale_price?: number;
};

export default function ProductCard({ product }: { product: Product }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="border-2 border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Image
        src={product.image}
        width={300}
        height={200}
        alt={product.title}
        className={`transition-transform duration-300 ${isHovered ? 'scale-105' : ''}`}
      />
      <div className="p-4">
        <h3 className="font-bold text-lg">{product.title}</h3>
        <p className="text-gray-600">{product.serial}</p>
        {product.price_per_day ? (
          <p>${product.price_per_day}/day</p>
        ) : (
          <p>${product.sale_price}</p>
        )}
      </div>
    </div>
  );
}
