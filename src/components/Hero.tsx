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
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute inset-0 z-10 bg-black opacity-40" />
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
      </div>

      {/* Content */}
      <div className="relative flex items-center justify-center h-full">
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
              Where faith illuminates hearts and transforms lives.
            </p>
            <div className="flex items-center justify-center gap-8 mt-12">
              <a
                href="#services"
                className="relative px-8 py-3 overflow-hidden text-sm group"
              >
                <span className="relative z-10 font-['Figtree'] text-black font-medium">
                  Join Us This Sunday
                </span>
                <div className="absolute inset-0 bg-[#FBD719] transform transition-transform duration-300 group-hover:scale-x-110"></div>
              </a>
              <a
                href="#about"
                className="relative px-8 py-3 overflow-hidden text-sm group"
              >
                <span className="relative z-10 font-['Figtree'] text-white font-medium">
                  Learn More
                </span>
                <div className="absolute inset-0 border border-[#FBD719] opacity-50 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute inset-0 bg-[#FBD719] transform origin-left transition-transform duration-300 scale-x-0 group-hover:scale-x-100"></div>
              </a>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute flex flex-col items-center transform -translate-x-1/2 bottom-8 left-1/2 animate-bounce">
            <div className="w-[1px] h-8 bg-gradient-to-b from-[#FBD719] to-transparent"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
