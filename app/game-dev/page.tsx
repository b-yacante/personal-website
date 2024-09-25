'use client'
import avatar from '@/public/avatar.png'

export default function GameDev() {
  return (
    <div className="grid place-items-center">
      <div className="my-6 flex w-full justify-center">
        <img
          className="nes-avatar is-large max-h-80 max-w-80"
          alt="Avatar"
          src={avatar.src}
          style={{
            imageRendering: 'pixelated',
            width: '50%',
            height: '50%',
            aspectRatio: '1 / 1',
          }}
        />
        <div
          className="nes-container with-title ml-4 hidden md:block"
          style={{ borderColor: '#2B3467' }}
        >
          <p className="title text-game-text" style={{ background: '#CDDEFF' }}>
            Braian Yacante
          </p>
          <div className="lists px-6">
            <ul className="nes-list is-circle">
              <li>21/12/1998 - lvl 25.</li>
              <li>
                Phone: <a href="tel:+54 2644642600">+54 2644642600.</a>
              </li>
              <li>
                Mail:{' '}
                <a href="mailto:braian.yac@gmail.com">braian.yac@gmail.com.</a>{' '}
              </li>
              <li>Address: San Juan, Argentina.</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="space-y-4">
        <div
          className="nes-container with-title md:hidden"
          style={{ borderColor: '#2B3467' }}
        >
          <p className="title text-game-text" style={{ background: '#CDDEFF' }}>
            Braian Yacante
          </p>
          <p>Good morning. Thou hast had a good night's sleep, I hope.</p>
        </div>
        <div className="nes-container" style={{ borderColor: '#2B3467' }}>
          <p>Good morning. Thou hast had a good night's sleep, I hope.</p>
        </div>
        <div className="nes-container" style={{ borderColor: '#2B3467' }}>
          <p>Good morning. Thou hast had a good night's sleep, I hope.</p>
        </div>
        <div className="lists px-6">
          <ul className="nes-list is-circle">
            <li>Good morning.</li>
            <li>Thou hast had a good night's sleep, I hope.</li>
            <li>Thou hast had a good afternoon</li>
            <li>Good night.</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
