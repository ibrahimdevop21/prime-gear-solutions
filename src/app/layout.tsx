import { Metadata } from 'next'
import './globals.css'
import Footer from './components/Footer'
import NavBar from './components/NavBar'
import EmergencyButton from './components/EmergencyButton'

export const metadata: Metadata = {
  title: 'Prime Gear Solutions | Heavy Equipment Rentals & Parts',
  description: 'Saudi Arabia\'s premier provider of heavy equipment rentals, parts, and maintenance services',
  icons: {
    icon: '/logo.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-secondary text-white font-sans" suppressHydrationWarning={true}>
        <div className="min-h-screen flex flex-col">
          <NavBar />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
          <EmergencyButton phone="+966 123 4567" />
        </div>
      </body>
    </html>
  )
}