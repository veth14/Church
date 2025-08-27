
import React, { useState, useEffect } from 'react'

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
      
      const sections = ['home', 'about', 'services', 'events', 'contact']
      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section)
            break
          }
        }
      }
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className={`fixed top-0 z-50 w-full transition-all duration-500 ${isScrolled ? 'bg-black py-2' : 'bg-transparent py-4'}`}>
      {/* Backdrop overlay */}
      <div className={`absolute inset-0 transition-opacity duration-500 ${isScrolled ? 'opacity-90 backdrop-blur-md' : 'opacity-0'}`} />
      
      <div className="relative px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Church Name */}
          <div className="relative">
            <a href="#home" onClick={() => setActiveSection('home')} className="group">
              <div className="overflow-hidden">
                <div className={`transform transition-transform duration-500 ${isScrolled ? 'translate-y-0' : '-translate-y-1'}`}>
                  <span className="block text-xl font-['Champion-Light'] uppercase tracking-wider text-white group-hover:text-[#FBD719] transition-all duration-300">
                    Light of the World
                  </span>
                  <span className="block text-sm font-['Figtree'] tracking-widest text-white/70 transition-all duration-300">
                    North Caloocan
                  </span>
                </div>
              </div>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <div className="flex items-center space-x-1">
              {['Home', 'About', 'Services', 'Events', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setActiveSection(item.toLowerCase())}
                  className="relative px-3 py-2 group"
                >
                  <span className={`relative z-10 text-sm font-['Figtree'] tracking-wider transition-all duration-300
                    ${activeSection === item.toLowerCase() 
                      ? 'text-black font-medium' 
                      : 'text-white/90 group-hover:text-white'}`}
                  >
                    {item}
                  </span>
                  <span className={`absolute inset-0 rounded-full bg-[#FBD719] transform transition-all duration-300 origin-left
                    ${activeSection === item.toLowerCase()
                      ? 'scale-x-100 opacity-100'
                      : 'scale-x-0 opacity-0 group-hover:opacity-20'}`}
                  />
                </a>
              ))}
            </div>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-full text-white hover:text-[#FBD719] focus:outline-none transition-colors duration-300"
            >
              <span className="sr-only">Open main menu</span>
              {!isMenuOpen ? (
                <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
          <div className="px-4 py-2 space-y-1 border-t bg-black/95 backdrop-blur-md border-white/10">
            {['Home', 'About', 'Services', 'Events', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className={`block py-3 text-sm font-['Figtree'] tracking-wider transition-colors duration-300
                  ${activeSection === item.toLowerCase() ? 'text-[#FBD719]' : 'text-white/80 hover:text-[#FBD719]'}`}
                onClick={() => {
                  setActiveSection(item.toLowerCase())
                  setIsMenuOpen(false)
                }}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}

export default Header
