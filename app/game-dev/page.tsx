'use client'
export default function GameDev() {
  return (
    <div className="grid place-items-center">
      <div className="w-1/2 md:w-1/5">
        <img
          className="nes-avatar is-large object-cover"
          alt="Avatar"
          src="https://www.gravatar.com/avatar?s=15"
          style={{
            imageRendering: 'pixelated',
            width: '100%',
            height: '100%',
            aspectRatio: '1 / 1',
          }}
        ></img>
      </div>
      <progress
        className="nes-progress is-primary"
        value="25"
        max="100"
      ></progress>
      <div className="nes-container with-title is-dark">
        <p className="title">Braian Yacante</p>
        <p>Good morning. Thou hast had a good night's sleep, I hope.</p>
      </div>
      <div>
        <div className="nes-container is-dark">
          <p>Good morning. Thou hast had a good night's sleep, I hope.</p>
        </div>
        <div className="nes-container is-dark">
          <p>Good morning. Thou hast had a good night's sleep, I hope.</p>
        </div>
      </div>
      <div className="lists">
        <ul className="nes-list is-circle">
          <li>Good morning.</li>
          <li>Thou hast had a good night's sleep, I hope.</li>
          <li>Thou hast had a good afternoon</li>
          <li>Good night.</li>
        </ul>
      </div>
    </div>
  )
}
