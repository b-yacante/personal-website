'use client'
import PresentationGamePage from '@/components/game-dev/presentation-game'

export default function GameDev() {
  return (
    <div className="grid min-w-full place-items-center gap-4 divide-y divide-slate-600">
      <section id="game-presentation">
        <PresentationGamePage />
      </section>
    </div>
  )
}
