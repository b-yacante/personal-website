'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function HeaderWebBar() {
  const [tooggleMenu, setToggleMenu] = useState(false)
  return (
    <header className="fixed top-0 z-10 w-full bg-gray-900 p-4 text-white">
      <nav className="ml-5 justify-self-start text-sm lg:ml-8">
        {/* mobile */}
        <div className="flex items-center md:hidden">
          {/* Hamburger button */}
          <button
            onClick={() => setToggleMenu(!tooggleMenu)}
            className="text-dark hover:text-dark active:text-gray-600"
          >
            <svg
              className="h-7 w-7"
              stroke="currentColor"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="3"
                d="M4 6h16M4 12h16m-16 6h7"
              ></path>
            </svg>
          </button>
          <h1 className="ml-auto text-xl font-bold px-3">Front-end Developer</h1>
        </div>
        {/* Menu items */}
        <div
          id="mobile-menu"
          className={`absolute z-20 h-56 w-40 rounded bg-gray-900 sm:h-64 sm:w-60 sm:p-4 md:hidden ${!tooggleMenu ? 'hidden' : ''}`}
        >
          <div className="text-dark h-full p-3">
            <div className="flex h-full flex-col items-center justify-around font-medium">
              <Link
                onClick={() => setToggleMenu(false)}
                href="#about"
                className="flex h-full w-full items-center"
              >
                About me
              </Link>
              <Link
                onClick={() => setToggleMenu(false)}
                href="#experience"
                className="flex h-full w-full items-center"
              >
                Experience
              </Link>
              <Link
                onClick={() => setToggleMenu(false)}
                href="#skills"
                className="flex h-full w-full items-center"
              >
                Skills
              </Link>
              <Link
                onClick={() => setToggleMenu(false)}
                href="#contact"
                className="flex h-full w-full items-center"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
        {/* Overlay */}
        {tooggleMenu && (
          <div
            onClick={() => setToggleMenu(false)}
            className={`fixed left-0 top-0 z-10 h-screen w-screen md:hidden`}
          ></div>
        )}
      </nav>
      {/* Web nav */}
      <div className="container mx-auto hidden md:flex md:items-center md:justify-between">
        <h1 className="text-xl font-bold">Front-end Developer</h1>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <a href="#about" className="hover:text-gray-300">
                About me
              </a>
            </li>
            <li>
              <a href="#experience" className="hover:text-gray-300">
                Experience
              </a>
            </li>
            <li>
              <a href="#skills" className="hover:text-gray-300">
                Skills
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-gray-300">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
