import Link from 'next/link'
import Image from 'next/image'

export default function NavBar() {
  return (
    <nav className="bg-secondary text-white">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          {/* Logo and Brand */}
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/logo.svg"
              alt="Prime Gear Solutions"
              width={40}
              height={40}
              priority
              className="object-contain"
            />
            <span className="text-xl font-bold">Prime Gear Solutions</span>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/equipment"
              className="text-neutral-700 hover:text-primary transition-colors px-3 py-2 rounded-lg"
            >
              Equipment
            </Link>
            <Link
              href="/services"
              className="text-neutral-700 hover:text-primary transition-colors px-3 py-2 rounded-lg"
            >
              Services
            </Link>
            <Link
              href="/parts"
              className="text-neutral-700 hover:text-primary transition-colors px-3 py-2 rounded-lg"
            >
              Parts
            </Link>
            <Link
              href="/about"
              className="text-neutral-700 hover:text-primary transition-colors px-3 py-2 rounded-lg"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="text-neutral-700 hover:text-primary transition-colors px-3 py-2 rounded-lg"
            >
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2 hover:bg-neutral-100 rounded-lg">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  )
}
