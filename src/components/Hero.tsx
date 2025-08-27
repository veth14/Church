import { useEffect, useState } from 'react';

const Hero = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative flex items-center justify-center min-h-screen overflow-hidden">
      {/* Background Video or Image */}
      <div className="absolute inset-0 w-full h-full">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="object-cover w-full h-full transform scale-110"
          style={{
            transform: `translateY(${scrollPosition * 0.5}px)`,
          }}
        >
          <source src="/Videos/LandingPageVideo.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Content */}
      <div 
        className="container relative z-10 px-6 mx-auto"
        style={{
          transform: `translateY(${scrollPosition * 0.2}px)`,
        }}
      >
        <div className="space-y-8 text-center">
          {/* Welcome Text */}
          <div className="font-serif text-yellow-400 text-xl tracking-[0.5em] uppercase">
            WELCOME TO
          </div>

          {/* Church Name */}
          <h1 className="relative font-serif text-5xl tracking-wider md:text-7xl lg:text-8xl group">
            <span className="relative z-10 text-white">LIGHT OF THE WORLD</span>
            <span className="absolute inset-0 text-yellow-400 transition-all duration-500 opacity-50 blur-sm group-hover:blur-md group-hover:opacity-70">
              LIGHT OF THE WORLD
            </span>
          </h1>
          
          {/* Location */}
          <div className="text-2xl md:text-3xl text-white tracking-[0.3em] font-light">
            NORTH CALOOCAN
          </div>

          {/* Mission Statement */}
          <p className="max-w-3xl mx-auto text-lg font-light md:text-xl text-white/90">
            Winning souls for Christ, making disciples who will live and share His Word.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col items-center justify-center gap-4 pt-4 sm:flex-row sm:gap-6">
            <a 
              href="#services"
              className="w-full px-8 py-3 font-medium text-center text-black transition-colors bg-yellow-400 rounded-full sm:w-auto hover:bg-yellow-300"
            >
              Join Us This Sunday
            </a>
            <a 
              href="#about"
              className="inline-flex items-center justify-center w-full px-8 py-3 font-medium text-white transition-all border rounded-full sm:w-auto border-white/30 hover:bg-white/10 group"
            >
              Learn More
              <svg 
                className="w-5 h-5 ml-2 transition-transform transform group-hover:translate-x-1" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M17 8l4 4m0 0l-4 4m4-4H3" 
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;