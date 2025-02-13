import type { Metadata } from 'next'
import * as React from 'react'
import { Header } from '@/components/Header'
import Footer  from '@/components/Footer'
import 'react-toastify/dist/ReactToastify.css';
import 'tailwindcss/tailwind.css'
import './globals.css'

export const metadata: Metadata = {
  title: 'Company People Discussion',
  description: 'Engage in meaningful discussions with company professionals.',
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      {/* The Navbar and Footer bar is Hide   */}
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
