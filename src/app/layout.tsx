import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import {NextAuth} from './providers'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Dexter',
  description: 'Portfolio website.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <NextAuth>
        {children}
      </NextAuth>
      </body>
    </html>
  )
}
