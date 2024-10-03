'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'

export default function HeaderWebBar() {
  const [tooggleMenu, setToggleMenu] = useState(false)
  const [isAtTop, setIsAtTop] = useState(true)
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY <= 100) {
        setIsAtTop(true)
      } else {
        setIsAtTop(false)
      }
    }

    // Añade el evento scroll
    window.addEventListener('scroll', handleScroll)

    // Limpia el evento cuando el componente se desmonta
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  useEffect(() => {
    const sections = document.querySelectorAll('section')

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            // actualizamos la seccion activa
            setActiveSection(entry.target.id)
          }
        })
      },
      { threshold: 0.8 }
    )
    // Observa cada sección
    sections.forEach(section => {
      observer.observe(section)
    })
    // Limpia el observer cuando se desmonte el componente
    return () => {
      sections.forEach(section => {
        observer.unobserve(section)
      })
    }
  }, [])
  return (
    <header
      className={`fixed top-0 z-10 w-full p-2 text-white ${isAtTop ? 'bg-gray-900' : 'bg-gray-800'}`}
    >
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
          <h1 className="ml-auto px-3 text-xl font-bold">Frontend Developer</h1>
        </div>
        {/* Menu items */}
        <div
          id="mobile-menu"
          className={`absolute z-20 h-56 w-40 rounded-2xl bg-gray-900 shadow-lg shadow-gray-800 sm:h-64 sm:w-60 sm:p-4 md:hidden ${!tooggleMenu ? 'hidden' : ''}`}
        >
          <div className="text-dark h-full">
            <div className="flex h-full flex-col items-center justify-around font-medium">
              <Link
                onClick={() => setToggleMenu(false)}
                href="#about"
                className={`flex h-full w-full items-center px-3 ${activeSection == 'about' ? 'bg-gray-700' : ''}`}
              >
                About me
              </Link>
              <Link
                onClick={() => setToggleMenu(false)}
                href="#experience"
                className={`flex h-full w-full items-center px-3 ${activeSection == 'experience' ? 'bg-gray-700' : ''}`}
              >
                Experience
              </Link>
              <Link
                onClick={() => setToggleMenu(false)}
                href="#skills"
                className={`flex h-full w-full items-center px-3 ${activeSection == 'skills' ? 'bg-gray-700' : ''}`}
              >
                Skills
              </Link>
              <Link
                onClick={() => setToggleMenu(false)}
                href="#contact"
                className={`flex h-full w-full items-center px-3 ${activeSection == 'contact' ? 'bg-gray-700' : ''}`}
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
        <h1 className="text-xl font-bold">Frontend Developer</h1>
        <nav>
          <ul className="flex space-x-2">
            <li
              className={`grid place-items-center rounded-2xl px-4 py-2 hover:bg-gray-700 ${activeSection === 'about' ? 'bg-gray-700' : ''}`}
            >
              <a href="#about">About me</a>
            </li>
            <li
              className={`grid place-items-center rounded-2xl px-4 py-2 hover:bg-gray-700 ${activeSection === 'experience' ? 'bg-gray-700' : ''}`}
            >
              <a href="#experience">Experience</a>
            </li>
            <li
              className={`grid place-items-center rounded-2xl px-4 py-2 hover:bg-gray-700 ${activeSection === 'skills' ? 'bg-gray-700' : ''}`}
            >
              <a href="#skills">Skills</a>
            </li>
            <li
              className={`grid place-items-center rounded-2xl px-4 py-2 hover:bg-gray-700 ${activeSection === 'contact' ? 'bg-gray-700' : ''}`}
            >
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
