import { FiMail } from 'react-icons/fi'
import { CiLinkedin } from 'react-icons/ci'
import { FaWhatsapp, FaGithub } from 'react-icons/fa'
import Link from 'next/link'

export default function ContactWebPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center space-y-4">
      <div className="mb-6 px-4 text-center">
        <h1 className="mb-2 text-4xl font-black">Contact Me!</h1>
      </div>
      <div className="min-w-full space-y-6 rounded-3xl bg-gradient-to-br from-sky-950 p-8">
        {/* Mail */}
        <Link
          href="mailto:braian.yac@gmail.com"
          className="flex items-center justify-center"
        >
          <FiMail className="text-2xl lg:text-3xl" />
          <p className="ml-2 text-xl lg:text-2xl">braian.yac@gmail.com</p>
        </Link>
        {/* Linkedin */}
        <Link
          href="mailto:braian.yac@gmail.com"
          className="flex items-center justify-center"
        >
          <CiLinkedin color="#0e76a8" className="text-2xl lg:text-3xl" />
          <p className="ml-2 text-xl lg:text-2xl">Braian Yacante</p>
        </Link>
        {/* Whatsapp */}
        <Link
          href="tel:+54 2644642600"
          className="flex items-center justify-center"
        >
          <FaWhatsapp color="#25d366" className="text-2xl lg:text-3xl" />
          <p className="ml-2 text-xl lg:text-2xl">+54 2644642600</p>
        </Link>
      </div>
      <Link
        href="https://github.com/b-yacante"
        className="grid place-items-center rounded-2xl bg-slate-700 px-6 py-4"
      >
        <p className="text-sm text-slate-400">See my jobs</p>
        <FaGithub color="#000" className="text-2xl lg:text-3xl" />
      </Link>
    </div>
  )
}
