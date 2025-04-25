import { Metadata } from 'next'
import './globals.css'
import Footer from './components/Footer' // You'll create this next
import NavBar from './components/NavBar'
import EmergencyButton from './components/EmergencyButton'

export const metadata: Metadata = {
  title: 'Prime Gear Solutions | Heavy Equipment Rentals & Parts',
  description: 'Saudi Arabia\'s premier provider of heavy equipment rentals, parts, and maintenance services',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning className='bg-gray-50'>
        <NavBar />
        <main className="min-h-[calc(100vh-160px)] mt-20">
          {children}
          </main>
        <Footer />
        <EmergencyButton phone="+966 123 4567" />
      </body>
    </html>
  )
}