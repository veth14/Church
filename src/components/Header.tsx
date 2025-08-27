import React, { useState } from 'react'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="fixed top-0 z-50 w-full bg-gradient-to-b from-black/50 to-transparent">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex items-center gap-4">
              <div className="relative w-16 h-16 overflow-hidden">
                <img 
                  src="/Logo/LOGOS.png" 
                  alt="Light NC Logo" 
                  className="absolute inset-0 object-contain w-full h-full"
                />
              </div>
              <h1 className="flex flex-col">
                <span className="text-xl font-['Champion-Light'] uppercase tracking-wider text-church-yellow">
                  LIGHT OF THE WORLD
                </span>
                <span className="text-sm font-['Figtree'] tracking-widest text-church-white/90">
                  North Caloocan
                </span>
              </h1>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <div className="flex items-center space-x-10">
              <a href="#home" 
                className="relative px-1 py-2 text-sm font-['Champion-Light'] uppercase tracking-wider text-church-yellow group"
              >
                <span>Home</span>
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-church-yellow transition-all group-hover:w-full"></span>
              </a>
              <a href="#about" 
                className="relative px-1 py-2 text-sm font-['Champion-Light'] uppercase tracking-wider text-church-white/90 hover:text-church-white group"
              >
                <span>About</span>
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-church-yellow transition-all group-hover:w-full"></span>
              </a>
              <a href="#services" 
                className="relative px-1 py-2 text-sm font-['Champion-Light'] uppercase tracking-wider text-church-white/90 hover:text-church-white group"
              >
                <span>Services</span>
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-church-yellow transition-all group-hover:w-full"></span>
              </a>
              <a href="#events" 
                className="relative px-1 py-2 text-sm font-['Champion-Light'] uppercase tracking-wider text-church-white/90 hover:text-church-white group"
              >
                <span>Events</span>
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-church-yellow transition-all group-hover:w-full"></span>
              </a>
              <a href="#contact" 
                className="relative px-1 py-2 text-sm font-['Champion-Light'] uppercase tracking-wider text-church-white/90 hover:text-church-white group"
              >
                <span>Contact</span>
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-church-yellow transition-all group-hover:w-full"></span>
              </a>
            </div>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-church-white hover:text-church-yellow focus:outline-none focus:ring-2 focus:ring-inset focus:ring-church-yellow"
            >
              <span className="sr-only">Open main menu</span>
              {!isMenuOpen ? (
                <svg className="block w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 border-t bg-black/95 backdrop-blur-sm border-church-white/10 sm:px-3">
            <a href="#home" className="block px-3 py-3 text-base font-['Champion-Light'] uppercase tracking-wider text-church-yellow">
              Home
            </a>
            <a href="#about" className="block px-3 py-3 text-base font-['Champion-Light'] uppercase tracking-wider text-church-white/90 hover:text-church-white">
              About
            </a>
            <a href="#services" className="block px-3 py-3 text-base font-['Champion-Light'] uppercase tracking-wider text-church-white/90 hover:text-church-white">
              Services
            </a>
            <a href="#events" className="block px-3 py-3 text-base font-['Champion-Light'] uppercase tracking-wider text-church-white/90 hover:text-church-white">
              Events
            </a>
            <a href="#contact" className="block px-3 py-3 text-base font-['Champion-Light'] uppercase tracking-wider text-church-white/90 hover:text-church-white">
              Contact
            </a>
          </div>
        </div>
      )}
    </header>
  )
}

export default Header
