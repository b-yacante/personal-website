import { FaVuejs } from 'react-icons/fa'
import { IoLogoCapacitor } from 'react-icons/io5'
import { SiTypescript } from 'react-icons/si'
import { SiVuetify } from 'react-icons/si'
import { FaHtml5 } from 'react-icons/fa'
import { SiCss3 } from 'react-icons/si'
import { SiSass } from 'react-icons/si'
import { MdArrowOutward } from 'react-icons/md'

export default function ExperienceWebPage() {
  return (
    <div className="grid min-h-screen place-items-center">
      <div>
        <h1 className="text-3xl font-extrabold">Work Experience</h1>
      </div>
      {/* argfit */}
      <div className="w-full">
        <div className="flex items-center underline">
          <h2 className="my-3 text-xl">
            <a
              href="https://www.argfit.net/"
              target="_blank"
              className="font-bold"
            >
              Argfit
            </a>
          </h2>
          <MdArrowOutward />
        </div>
        <div className="my-2 space-y-3">
          <b className="text-xl">
            Development of touch functionality for reflex training using
            Bluetooth devices.
          </b>
          <p>
            -Created in a hybrid application built with Vue 2, TypeScript, and
            CapacitorJS.
          </p>
          <p className="text-sm text-slate-400">(Duration: 3 months).</p>
        </div>
        <div className="flex w-full justify-end space-x-1 py-2">
          <FaVuejs size={40} color="#42b883" />
          <IoLogoCapacitor size={40} color="#119eff" />
          <SiTypescript size={40} color="#3178c6" />
          <SiVuetify size={40} color="#2196f3" />
          <FaHtml5 size={40} color="#e34c26" />
          <SiCss3 size={40} color="#264de4" />
        </div>
      </div>
      {/* irent */}
      <div>
        <div className="flex items-center underline">
          <h2 className="my-3 text-xl">
            <a
              href="https://www.i-rent.net/"
              target="_blank"
              className="font-bold"
            >
              I-Rent.Net
            </a>
          </h2>
          <MdArrowOutward />
        </div>
        <div className="my-2 space-y-3">
          <b className="text-xl">
            Responsible for the development of three applications and their
            deployment to the App Store and Play Store.
          </b>
          <p>
            -Maintenance App: Developed functionalities using Vue 2, TypeScript,
            CapacitorJS, and Figma for UI design.
          </p>
          <p>
            -Owner's App: Developed functionalities using Vue 2, TypeScript,
            CapacitorJS, and Figma for UI design.
          </p>
          <p>
            -Property Manager App: Full development using Vue 3, TypeScript,
            CapacitorJS, and Figma for UI design.
          </p>
          <p className="text-sm text-slate-400">(Duration: 2 years).</p>
        </div>
        <div className="flex w-full justify-end space-x-1 py-2">
          <FaVuejs size={40} color="#42b883" />
          <IoLogoCapacitor size={40} color="#119eff" />
          <SiTypescript size={40} color="#3178c6" />
          <SiVuetify size={40} color="#2196f3" />
          <FaHtml5 size={40} color="#e34c26" />
          <SiCss3 size={40} color="#264de4" />
          <SiSass size={40} color="#cc6699" />
        </div>
      </div>
    </div>
  )
}
