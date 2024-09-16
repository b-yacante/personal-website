import type { Metadata } from 'next'
import { Press_Start_2P } from 'next/font/google'
import 'nes.css/css/nes.min.css'

const ness = Press_Start_2P({
  weight: '400',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Game Developer',
  description: 'Game development website',
}

export default function GameLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return <body className={`${ness.className}`}>{children}</body>
}
