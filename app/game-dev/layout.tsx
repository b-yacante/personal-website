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
    <body className={`${ness.className} min-h-screen min-w-full bg-slate-500`}>
      {/* HEADER */}
      <header className="h-16 md:h-20 lg:h-24">
        <button type="button" className="nes-btn is-primary">
          Primary
        </button>
        <i className="nes-icon linkedin is-large"></i>
        <i className="nes-icon github is-large"></i>
        <i className="nes-icon gmail is-large"></i>
      </header>
      <main className="min-h-full w-full px-6 text-white md:px-28 lg:px-44 xl:px-64 2xl:px-80">
        {children}
      </main>
    </body>
  )
}
