'use client'
import { FaHtml5, FaVuejs, FaReact } from 'react-icons/fa'
import { IoLogoCapacitor } from 'react-icons/io5'
import {
  SiCss3,
  SiSass,
  SiTypescript,
  SiVuetify,
  SiAdobephotoshop,
  SiAdobeillustrator,
} from 'react-icons/si'
import { RiNextjsFill, RiTailwindCssFill } from 'react-icons/ri'
import Image from 'next/image'

export default function SkillsWebPage() {
  return (
    <div className="grid min-h-screen place-items-center">
      <div>
        {/* Development */}
        <div className="flex">
          <FaVuejs size={60} color="#42b883" />
          <IoLogoCapacitor size={60} color="#119eff" />
          <SiTypescript size={60} color="#3178c6" />
          <SiVuetify size={60} color="#2196f3" />
          <FaHtml5 size={60} color="#e34c26" />
          <SiCss3 size={60} color="#264de4" />
          <SiSass size={60} color="#cc6699" />
          <FaReact size={60} color="#58c4dc" />

          <RiNextjsFill color="#000" size={60} className='drop-shadow-md'/>
          <RiTailwindCssFill color="#06b6d4" size={60} />
        </div>
        {/* Design and Edition */}
        <div className="flex">
          <Image src="/figma.svg" alt="figma" width={60} height={60} />
          <SiAdobephotoshop color="#40D0FB" size={60} />
          <SiAdobeillustrator color="#f8a829" size={60} />
        </div>
        {/* Organization */}
        <div className="flex">
          <Image
            src="/clickup.svg"
            alt="clickup"
            width={60}
            height={60}
            className="p-1"
          />
          <Image src="/slack.svg" alt="slack" width={60} height={60} />
          <Image src="/git.svg" alt="git" width={60} height={60} />
          <Image src="/excel.svg" alt="excel" width={60} height={60} />
          <Image src="/word.svg" alt="word" width={60} height={60} />
        </div>
      </div>
    </div>
  )
}
