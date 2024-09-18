import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex min-h-screen w-screen flex-col items-center justify-around px-10 sm:px-24 md:flex-row md:px-0">
      <Link
        className="grid h-64 w-full place-items-center bg-blue-400 md:h-96 md:w-96"
        href="/web-dev"
      >
        <div>Web Dev</div>
      </Link>
      <div>OR</div>
      <Link
        className="grid h-64 w-full place-items-center bg-red-400 md:h-96 md:w-96"
        href="/game-dev"
      >
        <div>Game Dev</div>
      </Link>
    </main>
  )
}
