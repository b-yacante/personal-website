import Link from 'next/link'
import { GrLocation } from 'react-icons/gr'
import { MdArrowOutward } from 'react-icons/md'

export default function PresentationWebPage() {
  return (
    <div className="grid min-h-screen place-items-center p-6">
      <div className="grid place-items-center gap-4 rounded-3xl bg-gradient-to-b from-sky-950 px-4">
        <div className="mt-6 aspect-square w-full rounded-full bg-slate-400 md:mt-14 md:min-h-96 md:w-fit"></div>
        <p className="py-4 text-center text-xl">
          Hello, my name is Braian Yacante. I currently specialize in developing
          hybrid mobile applications and also handle their UI/UX design.
          However, I am always open to learning new technologies that can help
          me grow professionally.
        </p>
        <Link
          className="flex items-center justify-center space-x-2"
          href="https://www.google.com/maps?q=-31.5375,-68.5364"
          target="_blank"
        >
          <GrLocation className="text-xl text-red-500" />
          <p className="lg:text-lg">San Juan, Argentina</p>
          <MdArrowOutward className="text-slate-400" />
        </Link>
      </div>
    </div>
  )
}
