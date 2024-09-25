import type { Metadata } from 'next'
import { Press_Start_2P } from 'next/font/google'
import 'nes.css/css/nes.min.css'
import Link from 'next/link'

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
    <body className={`${ness.className} min-h-screen min-w-full bg-background`}>
      {/* HEADER */}
      <header className="text-game-text bg-game-light flex h-16 justify-between p-2 md:h-20 md:px-20 md:py-4 lg:h-24">
        <div>
          <Link href="/">
            <button
              style={{ backgroundColor: '#EB455F' }}
              type="button"
              className="nes-btn is-primary"
            >
              Back
            </button>
          </Link>
        </div>
        <div className="flex space-x-3 md:space-x-6">
          <Link href="">
            <i className="nes-icon linkedin is-medium"></i>
          </Link>
          <Link href="">
            <i className="nes-icon github is-medium"></i>
          </Link>
          <Link href="mailto:braian.yac@gmail.com">
            <i className="nes-icon gmail is-medium"></i>
          </Link>
        </div>
      </header>
      <main className="text-game-text min-h-full w-full px-6 py-4 text-sm sm:px-28 md:px-32 md:py-12 lg:px-64 lg:text-base xl:px-80 2xl:px-96">
        {children}
      </main>
    </body>
  )
}
