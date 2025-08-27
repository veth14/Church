import React, { useEffect, useState } from 'react';

const Hero: React.FC = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="home" className="relative h-screen overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0 w-full h-full">
        <video
          className="absolute inset-0 object-cover w-full h-full"
          autoPlay
          loop
          muted
          playsInline
          style={{
            transform: `translateY(${scrollPosition * 0.5}px)`,
          }}
        >
          <source src="/Videos/LandingPageVideo.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-black opacity-40" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center h-full">
        <div 
          className="max-w-4xl px-4 mx-auto text-center sm:px-6 lg:px-8"
          style={{
            transform: `translateY(${scrollPosition * 0.2}px)`,
          }}
        >
          <div className="relative z-20">
            <h1 className="flex flex-col items-center space-y-6">
              <span className="text-base tracking-[0.5em] uppercase text-[#FBD719] font-['Champion-Light'] opacity-90 hover:opacity-100 transition-opacity">
                WELCOME TO
              </span>
              <span 
                className="text-5xl md:text-7xl text-white tracking-wide font-['Champion-Light'] uppercase relative group"
              >
                <span className="relative z-10">LIGHT OF THE WORLD</span>
                <span className="absolute inset-0 z-0 text-[#FBD719] blur-sm opacity-50 transform group-hover:blur-md group-hover:opacity-70 transition-all duration-500">
                  LIGHT OF THE WORLD
                </span>
              </span>
              <span className="text-lg md:text-xl tracking-[0.2em] text-white/80 font-['Champion-Light'] uppercase hover:text-[#FBD719] transition-colors duration-300">
                NORTH CALOOCAN
              </span>
            </h1>
            <p className="font-['Figtree'] text-base md:text-lg mt-12 text-white/70 max-w-2xl mx-auto font-light">
              Winning souls for Christ, making disciples who will live and share His Word.
            </p>
            <div className="relative z-50 flex flex-col items-center justify-center gap-4 mt-12 sm:flex-row sm:gap-8">
              <a
                href="#services"
                className="w-full sm:w-auto bg-[#FBD719] hover:bg-[#FBD719]/90 text-black px-8 py-3 rounded-lg font-['Figtree'] font-medium text-center"
              >
                Join Us This Sunday
              </a>
              <a
                href="#about"
                className="w-full sm:w-auto bg-white/10 hover:bg-white/20 text-white px-8 py-3 rounded-lg font-['Figtree'] font-medium flex items-center justify-center gap-2"
              >
                Learn More
                <svg 
                  className="w-4 h-4" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute flex flex-col items-center transform -translate-x-1/2 bottom-8 left-1/2 animate-bounce">
        <div className="w-[1px] h-8 bg-gradient-to-b from-[#FBD719] to-transparent"></div>
      </div>
    </section>
  );
};

export default Hero;
