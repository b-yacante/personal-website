'use client'

import avatar from '@/public/avatar.png'
import { useState } from 'react'
import { ReactTyped } from 'react-typed'

type Dialogs = 'experience' | 'contact' | 'skills'

export default function PresentationGamePage() {
  const [arrayStrings, setArrayStrings] = useState([
    'Hello, my name is Braian Yacante, soy desarrollador de videojuegos independiente',
  ])

  function changeString(dialog: Dialogs) {
    switch (dialog) {
      case 'experience':
        setArrayStrings(['Experience'])
        break
      case 'skills':
        setArrayStrings(['Skills'])
        break
      case 'contact':
        setArrayStrings(['Contact'])
        break

      default:
        break
    }
  }

  return (
    <div className="grid min-h-screen grow-0 place-items-center p-4 sm:px-32 md:px-32 md:py-12 lg:px-64 lg:text-base xl:px-72 2xl:px-96">
      <section className="nes-container min-w-full">
        <section className="message-list">
          <section className="message -left flex">
            {/* image */}
            <div className="relative h-20 min-w-20 self-end">
              <img
                className="nes-avatar"
                alt="Avatar"
                src={avatar.src}
                style={{
                  imageRendering: 'pixelated',
                  width: '100%',
                  height: '100%',
                  aspectRatio: '1 / 1',
                }}
              />
            </div>
            {/* dialog */}
            <div className="nes-balloon from-left min-h-28 min-w-36">
              <ReactTyped
                startWhenVisible
                strings={arrayStrings}
                typeSpeed={40}
              />
              {/* <p>Hello, my name is Braian Yacante,</p>
              <p>soy desarrollador de videojuegos independiente.</p> */}
            </div>
          </section>
        </section>
      </section>

      <button
        onClick={() => changeString('experience')}
        className="rounded-lg bg-slate-200 p-4"
      >
        Experience
      </button>
      <button
        onClick={() => changeString('skills')}
        className="rounded-lg bg-slate-200 p-4"
      >
        Skills
      </button>
      <button
        onClick={() => changeString('contact')}
        className="rounded-lg bg-slate-200 p-4"
      >
        contact
      </button>

      <div className="w-full">
        <progress
          className="nes-progress is-primary"
          value="80"
          max="100"
        ></progress>
      </div>
    </div>
  )
}
