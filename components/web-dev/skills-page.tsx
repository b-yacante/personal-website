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
import { BiLogoMongodb } from 'react-icons/bi'
import { GrMysql } from 'react-icons/gr'
import { RiNextjsFill, RiTailwindCssFill } from 'react-icons/ri'

export default function SkillsWebPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <div className="mb-6 px-4 text-center">
        <h1 className="mb-2 text-4xl">Skills</h1>
        <p className="text-sm text-slate-400">
          My skills are focused on frontend development, but I have the
          flexibility and strong foundational knowledge to quickly learn any new
          technology.
        </p>
      </div>
      <div className="grid w-full gap-y-4 px-4">
        {/* Development */}
        <div className="grid min-w-full rounded-3xl bg-gradient-to-br from-sky-950 p-4">
          <h1 className="pb-4 text-center text-base md:text-lg">Development</h1>
          <div className="flex min-w-full justify-around">
            <div className="grid w-full gap-y-2 space-x-1 sm:px-6 md:px-12">
              <div className="flex items-center space-x-2">
                <FaVuejs color="#42b883" className="text-3xl lg:text-[40px]" />
                <p className="text-sm text-slate-400 lg:text-base">Vue 2 y 3</p>
              </div>
              <div className="flex items-center space-x-1">
                <IoLogoCapacitor
                  className="text-3xl lg:text-[40px]"
                  color="#119eff"
                />
                <p className="text-sm text-slate-400 lg:text-base">
                  CapacitorJS
                </p>
              </div>
              <div className="flex items-center space-x-1">
                <SiTypescript
                  className="text-3xl lg:text-[40px]"
                  color="#3178c6"
                />
                <p className="text-sm text-slate-400 lg:text-base">
                  Typescript
                </p>
              </div>
              <div className="flex items-center space-x-1">
                <SiVuetify
                  className="text-3xl lg:text-[40px]"
                  color="#2196f3"
                />
                <p className="text-sm text-slate-400 lg:text-base">Vuetify</p>
              </div>
              <div className="flex items-center space-x-1">
                <RiNextjsFill
                  color="#000"
                  className="text-3xl lg:text-[40px]"
                />
                <p className="text-sm text-slate-400 lg:text-base">NextJS</p>
              </div>
              <div className="flex items-center space-x-1">
                <FaHtml5 className="text-3xl lg:text-[40px]" color="#e34c26" />
                <p className="text-sm text-slate-400 lg:text-base">HTML5</p>
              </div>
            </div>
            <div className="grid w-full gap-y-2 space-x-1 sm:px-6 md:px-12">
              <div className="flex items-center space-x-1">
                <SiCss3 className="text-3xl lg:text-[40px]" color="#264de4" />
                <p className="text-sm text-slate-400 lg:text-base">CSS</p>
              </div>
              <div className="flex items-center space-x-1">
                <SiSass className="text-3xl lg:text-[40px]" color="#cc6699" />
                <p className="text-sm text-slate-400 lg:text-base">Sass</p>
              </div>
              <div className="flex items-center space-x-1">
                <FaReact className="text-3xl lg:text-[40px]" color="#58c4dc" />
                <p className="text-sm text-slate-400 lg:text-base">React</p>
              </div>
              <div className="flex items-center space-x-1">
                <RiTailwindCssFill
                  color="#06b6d4"
                  className="text-3xl lg:text-[40px]"
                />
                <p className="text-sm text-slate-400 lg:text-base">Tailwind</p>
              </div>
              <div className="flex items-center space-x-1">
                <BiLogoMongodb
                  color="#13aa52"
                  className="text-3xl lg:text-[40px]"
                />
                <p className="text-sm text-slate-400 lg:text-base">MongoDB</p>
              </div>
              <div className="flex items-center space-x-1">
                <GrMysql color="#2b5d80" className="text-3xl lg:text-[40px]" />
                <p className="text-sm text-slate-400 lg:text-base">MySQL</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex w-full gap-y-4 space-x-3">
          {/* Organization */}
          <div className="w-1/2 rounded-3xl bg-gradient-to-br from-sky-950 p-4 md:w-1/2">
            <h1 className="pb-4 text-center text-base md:text-lg">
              Organization
            </h1>
            <div className="grid gap-y-2 space-x-1 sm:space-x-2 sm:px-6 md:px-12">
              <div className="flex items-center space-x-1">
                <img
                  src="/clickup.svg"
                  alt="clickup"
                  className="ml-2 aspect-square h-[30px] lg:h-[40px]"
                />
                <p className="text-sm text-slate-400 lg:text-base">Clickup</p>
              </div>
              <div className="flex items-center space-x-1">
                <img
                  src="/slack.svg"
                  alt="slack"
                  className="aspect-square h-[30px] lg:h-[40px]"
                />
                <p className="text-sm text-slate-400 lg:text-base">Slack</p>
              </div>
              <div className="flex items-center space-x-1">
                <img
                  src="/git.svg"
                  alt="git"
                  className="aspect-square h-[30px] lg:h-[40px]"
                />
                <p className="text-sm text-slate-400 lg:text-base">Git</p>
              </div>
              <div className="flex items-center space-x-1">
                <img
                  src="/excel.svg"
                  alt="excel"
                  className="aspect-square h-[30px] lg:h-[40px]"
                />
                <p className="text-sm text-slate-400 lg:text-base">Excel</p>
              </div>
              <div className="flex items-center space-x-1">
                <img
                  src="/word.svg"
                  alt="word"
                  className="aspect-square h-[30px] lg:h-[40px]"
                />
                <p className="text-sm text-slate-400 lg:text-base">Word</p>
              </div>
            </div>
          </div>
          {/* Design and Edition */}
          <div className="w-1/2 rounded-3xl bg-gradient-to-br from-sky-950 p-4">
            <h1 className="pb-4 text-center text-base md:text-lg">
              Design and Edition
            </h1>
            <div className="grid w-full gap-y-2 space-x-1 sm:px-6 md:px-12">
              <div className="flex items-center space-x-1">
                <img
                  src="/figma.svg"
                  alt="figma"
                  className="aspect-square h-[30px] lg:h-[40px]"
                />
                <p className="text-sm text-slate-400 lg:text-base">Figma</p>
              </div>
              <div className="flex items-center space-x-1">
                <SiAdobephotoshop
                  color="#31A8FF"
                  className="text-3xl lg:text-[40px]"
                />
                <p className="text-sm text-slate-400 lg:text-base">Photoshop</p>
              </div>
              <div className="flex items-center space-x-1">
                <SiAdobeillustrator
                  color="#f8a829"
                  className="text-3xl lg:text-[40px]"
                />
                <p className="text-sm text-slate-400 lg:text-base">
                  Illustrator
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
