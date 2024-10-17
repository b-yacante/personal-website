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
  return (
    <html>
      <body
        className={`${ness.className} bg-game-bg min-h-screen w-screen px-2 py-4 text-game-text sm:px-32 md:px-32 md:py-12 lg:px-64 lg:text-base xl:px-72 2xl:px-96`}
      >
        {children}
      </body>
    </html>
  )
}
