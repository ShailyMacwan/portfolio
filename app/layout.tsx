import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Navigation from '@/components/Navigation'
import ProjectCard from '@/components/ProjectCard'
import ContactForm from '@/components/ContactForm'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Shaily Macwan',
  description: 'This is my portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}

        </body>
    </html>
  )
}