import Image from 'next/image'
import Link from 'next/link'

export default function ProductCard({ product }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="relative h-48">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
        <p className="text-gray-600 mb-3">{product.description}</p>
        <div className="flex justify-between items-center">
          <span className="text-primary-600 font-medium">
            {product.price}
          </span>
          <Link
            href={`/equipment/${product.slug}`}
            className="text-primary-600 hover:text-primary-700"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  )
}
