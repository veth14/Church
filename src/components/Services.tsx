import { useEffect } from 'react';
import Slider from 'react-slick';
// Import Slick Carousel styles
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
// Make sure these styles are imported after the slick styles

const Services = () => {
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        const section = entry.target.querySelector('.content-wrapper');
        if (entry.isIntersecting) {
          section?.classList.remove('opacity-0', 'translate-y-8');
          section?.classList.add('opacity-100', 'translate-y-0');
        }
      });
    }, observerOptions);

    const sections = document.querySelectorAll('.service-section');
    sections.forEach(section => observer.observe(section));

    return () => sections.forEach(section => observer.unobserve(section));
  }, []);

  const sundayServices = [
    {
      title: "Tagalog Service",
      time: "Sunday 8:00 AM - 9:15 AM",
      description: "Our Filipino language service catering to our Tagalog-speaking congregation.",
      image: "/Pictures/MainHall.jpg"
    },
    {
      title: "Main Service",
      time: "Sunday 10:00 AM - 12:00 PM",
      description: "Our main worship service with contemporary worship and powerful biblical teaching.",
      image: "/Pictures/MainService.jpg"
    },
    {
      title: "Afternoon Service",
      time: "Sunday 3:00 PM - 5:00 PM",
      description: "An additional service time perfect for those who prefer afternoon worship.",
      image: "/Pictures/AfternoonService.jpg"
    }
  ];

  const campuses = [
    {
      name: "National University",
      location: "SM Fairview, Leo Pizza",
      service: "Thursday 11:30 AM",
      leader: "Jaira Manaig",
      image: "/Pictures/MainHall.jpg"  // TODO: Replace with actual campus image
    },
    {
      name: "Deparo High School",
      location: "Nuk Cafe",
      service: "Friday 10:00 AM and 1:00 PM",
      leader: "Sophia Abeleda",
      image: "/Pictures/MainHall.jpg"  // TODO: Replace with actual campus image
    },
    {
      name: "Metro Manila College",
      location: "McDonalds, Novaliches",
      service: "Saturday 4:00 PM",
      leader: "Aira Catanyag",
      image: "/Pictures/MainHall.jpg"  // TODO: Replace with actual campus image
    },
    {
      name: "Escuela de Sophia of Caloocan, Inc.",
      location: "Dunkin Donuts",
      service: "Wednesday 10:30 AM and 3:30 PM",
      leader: "Fahrl Munoz",
      image: "/Pictures/MainHall.jpg"
    },
    {
      name: "Bestlink College of the Philippines",
      location: "McDonalds, Novaliches",
      service: "Thursday 10:00 AM",
      leader: "John Michael Villas",
      image: "/Pictures/MainHall.jpg"
    },
    {
      name: "Young Achievers' School of Caloocan, Inc.",
      location: "SM Caloocan, Food Court",
      service: "Thursday 2:00 PM",
      leader: "Diko alam hahaha",
      image: "/Pictures/MainHall.jpg"
    },
    {
      name: "Caloocan City Business High School",
      location: "Dunkin Donuts",
      service: "Saturday 10:00 AM",
      leader: "King Calilao",
      image: "/Pictures/MainHall.jpg"
    }
  ];

  const prayerGatherings = [
    {
      title: "Powerhouse Wednesday",
      time: "Wednesday 7:00 PM",
      description: "Our main onsite prayer gathering. Come experience powerful corporate prayer and worship.",
      image: "/Pictures/Powerhouse.jpg",
      isOnsite: true,
      location: "Main Sanctuary"
    },
    {
      title: "Morning Prayer",
      time: "Tuesday, Thursday, Saturday 6:15 AM",
      description: "Start your day with prayer in our online morning prayer gatherings.",
      image: "/Pictures/MorningPrayer.jpg",
      isOnsite: false,
      link: "https://us06web.zoom.us/j/84491535475?pwd=xrHEhRqd9GqeEMydlTGCWJkgZ0MG88.1",
      platform: "Zoom"
    }
  ];

  return (
    <div id="services" className="relative min-h-screen">
      {/* Hero Section with Title */}
      <section className="relative h-[60vh] flex items-center justify-center">
        <div className="absolute inset-0 w-full h-full">
          <img
            src="/Pictures/MainHall.jpg"
            alt="Church Main Hall"
            className="object-cover w-full h-full"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/90"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-yellow-500/10 to-transparent"></div>
        </div>
        <div className="relative z-10 text-center">
          <span className="inline-block mb-4 text-sm font-medium tracking-[0.2em] text-yellow-400 uppercase">Worship With Us</span>
          <h1 className="relative inline-block">
            <span className="relative px-8 py-2 font-bold text-white text-7xl">
              <span className="relative z-10">Join Our Services</span>
              <span className="absolute inset-0 w-full h-full transform -skew-x-12 rounded-lg bg-gradient-to-r from-yellow-600/20 to-yellow-500/20"></span>
              <span className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-yellow-600 to-yellow-400"></span>
            </span>
          </h1>
          <p className="max-w-3xl px-4 mx-auto mt-8 text-2xl text-gray-300">
            Experience the presence of God through our various services and prayer gatherings
          </p>
        </div>
      </section>

      {/* Sunday Services Title */}
      <div className="relative py-32 overflow-hidden text-center">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900/95 to-black"></div>
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-yellow-500/5 to-transparent"></div>
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-yellow-500/30 to-transparent"></div>
        
        <div className="relative z-10">
          <div className="inline-block mb-12">
            <span className="inline-block mb-4 text-sm font-medium tracking-[0.2em] text-yellow-400 uppercase">Every Sunday</span>
            <h2 className="relative text-5xl font-bold">
              <span className="relative px-8 py-2 text-white">
                <span className="relative z-10">Sunday Services</span>
                <span className="absolute inset-0 w-full h-full transform -skew-x-12 rounded-lg bg-gradient-to-r from-yellow-600/20 to-yellow-500/20"></span>
                <span className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-yellow-600 to-yellow-400"></span>
              </span>
            </h2>
          </div>
          <p className="max-w-3xl px-4 mx-auto text-xl font-medium text-gray-300">
            Join us every Sunday for powerful worship and life-changing messages
          </p>
        </div>
      </div>

      {/* Sunday Services Sections */}
      {sundayServices.map((service, index) => (
        <section
          key={index}
          className="service-section relative min-h-[100vh] w-full flex items-center justify-center first:pt-24"
        >
          {/* Full screen background image */}
          <div className="absolute inset-0 w-full h-full">
            <img
              src={service.image}
              alt={service.title}
              className="object-cover w-full h-full"
            />
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/80"></div>
          </div>

          {/* Content */}
          <div className="relative z-10 px-6 py-24 mx-auto max-w-7xl">
            <div className="transition-all duration-1000 ease-out translate-y-8 opacity-0 content-wrapper">
              <div className="relative max-w-3xl mx-auto text-center">
                {/* Service Title with Highlight */}
                <div className="mb-12 group">
                  <span className="inline-block mb-4 text-sm font-medium tracking-[0.2em] text-yellow-400/80 uppercase">Welcome To</span>
                  <h3 className="relative inline-block">
                    <span className="relative z-10 text-6xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/70">
                      {service.title}
                    </span>
                    <span className="absolute inset-0 z-0 text-6xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-300 blur-sm opacity-70 animate-pulse">
                      {service.title}
                    </span>
                  </h3>
                  <div className="w-32 h-0.5 mx-auto mt-6 bg-gradient-to-r from-transparent via-yellow-400/50 to-transparent"></div>
                </div>

                {/* Time Display */}
                <div className="relative group">
                  <div className="relative inline-flex items-center px-8 py-4 mb-8 space-x-4 text-xl font-medium tracking-wide transition-all duration-500 border rounded-xl border-white/10 bg-white/5 text-yellow-300/90 backdrop-blur-md hover:border-yellow-400/30 hover:bg-white/10">
                    <div className="absolute inset-0 transition-all duration-500 rounded-xl bg-gradient-to-r from-yellow-400/0 via-yellow-400/5 to-yellow-400/0 group-hover:via-yellow-400/10"></div>
                    <svg className="w-6 h-6 transition-transform duration-500 group-hover:scale-110 group-hover:text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="relative z-10">{service.time}</span>
                    <div className="absolute inset-x-0 h-px transition-opacity duration-500 opacity-0 -bottom-px bg-gradient-to-r from-transparent via-yellow-400/50 to-transparent group-hover:opacity-100"></div>
                  </div>
                </div>

                {/* Description */}
                <div className="relative group">
                  <p className="max-w-2xl mx-auto text-xl leading-relaxed tracking-wide transition-colors duration-300 text-white/80 group-hover:text-white/90">
                    {service.description}
                  </p>
                  <div className="absolute inset-x-0 bottom-0 h-px transition-opacity duration-500 opacity-0 bg-gradient-to-r from-transparent via-white/10 to-transparent group-hover:opacity-100"></div>
                </div>

                {/* Join Button */}
                <div className="mt-12 perspective-1000">
                  <a 
                    href="#contact" 
                    className="relative inline-flex items-center px-8 py-4 overflow-hidden text-lg font-medium rounded-xl group/button"
                  >
                    <span className="relative z-10 text-black transition-colors duration-500 group-hover/button:text-white">
                      Join This Service
                      <svg className="inline-block w-5 h-5 ml-2 -mr-1 transition-transform duration-500 group-hover/button:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </span>
                    <div className="absolute inset-0 transition-transform duration-500 bg-gradient-to-r from-yellow-400 to-yellow-500 group-hover/button:scale-105"></div>
                    <div className="absolute inset-0 transition-all duration-500 bg-gradient-to-r from-white to-yellow-300 group-hover/button:-translate-y-full"></div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Prayer Gatherings Title */}
      <div className="relative py-32 overflow-hidden text-center">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900/95 to-black"></div>
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500/5 to-transparent"></div>
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent"></div>
        
        <div className="relative z-10">
          <div className="inline-block mb-12">
            <span className="inline-block mb-4 text-sm font-medium tracking-[0.2em] text-blue-400 uppercase">Come Together In Prayer</span>
            <h2 className="relative text-5xl font-bold">
              <span className="relative px-8 py-2 text-white">
                <span className="relative z-10">Prayer Gatherings</span>
                <span className="absolute inset-0 w-full h-full transform -skew-x-12 rounded-lg bg-gradient-to-r from-blue-600/20 to-blue-500/20"></span>
                <span className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 to-blue-400"></span>
              </span>
            </h2>
          </div>
          <p className="max-w-3xl px-4 mx-auto text-xl font-medium text-gray-300">
            Join our community in powerful prayer meetings throughout the week
          </p>
        </div>
      </div>

      {/* Prayer Gatherings Sections */}
      {prayerGatherings.map((gathering, index) => (
        <section
          key={index}
          className="service-section relative min-h-[100vh] w-full flex items-center justify-center"
        >
          {/* Full screen background image */}
          <div className="absolute inset-0 w-full h-full">
            <img
              src={gathering.image}
              alt={gathering.title}
              className="object-cover w-full h-full"
            />
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/80"></div>
          </div>

          {/* Content */}
          <div className="relative z-10 px-6 py-24 mx-auto max-w-7xl">
            <div className="transition-all duration-1000 ease-out translate-y-8 opacity-0 content-wrapper">
              <div className="relative max-w-3xl mx-auto text-center">
                {/* Prayer Title with Highlight */}
                <div className="mb-12 group">
                  <span className="inline-block mb-4 text-sm font-medium tracking-[0.2em] text-blue-400/80 uppercase">Join Us In Prayer</span>
                  <h3 className="relative inline-block">
                    <span className="relative z-10 text-6xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/70">
                      {gathering.title}
                    </span>
                    <span className="absolute inset-0 z-0 text-6xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-blue-400 to-blue-300 blur-sm opacity-70 animate-pulse">
                      {gathering.title}
                    </span>
                  </h3>
                  <div className="w-32 h-0.5 mx-auto mt-6 bg-gradient-to-r from-transparent via-blue-400/50 to-transparent"></div>
                </div>

                {/* Meeting Type Badge */}
                <div className="mb-8">
                  <span className={`inline-flex items-center px-6 py-3 text-sm font-medium rounded-xl backdrop-blur-md transition-all duration-500 ${
                    gathering.isOnsite 
                      ? 'bg-emerald-500/5 text-emerald-300 border border-emerald-500/20 hover:bg-emerald-500/10 hover:border-emerald-500/30'
                      : 'bg-blue-500/5 text-blue-300 border border-blue-500/20 hover:bg-blue-500/10 hover:border-blue-500/30'
                  }`}>
                    <span className={`mr-2 w-2 h-2 rounded-full animate-pulse ${
                      gathering.isOnsite ? 'bg-emerald-400' : 'bg-blue-400'
                    }`}></span>
                    {gathering.isOnsite ? 'Onsite Meeting' : 'Online Meeting'}
                  </span>
                </div>

                {/* Time Display */}
                <div className="relative group">
                  <div className="relative inline-flex items-center px-8 py-4 mb-8 space-x-4 text-xl font-medium tracking-wide transition-all duration-500 border rounded-xl border-white/10 bg-white/5 text-blue-300/90 backdrop-blur-md hover:border-blue-400/30 hover:bg-white/10">
                    <div className="absolute inset-0 transition-all duration-500 rounded-xl bg-gradient-to-r from-blue-400/0 via-blue-400/5 to-blue-400/0 group-hover:via-blue-400/10"></div>
                    <svg className="w-6 h-6 transition-transform duration-500 group-hover:scale-110 group-hover:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="relative z-10">{gathering.time}</span>
                    <div className="absolute inset-x-0 h-px transition-opacity duration-500 opacity-0 -bottom-px bg-gradient-to-r from-transparent via-blue-400/50 to-transparent group-hover:opacity-100"></div>
                  </div>
                </div>

                {/* Description */}
                <div className="relative group">
                  <p className="max-w-2xl mx-auto text-xl leading-relaxed tracking-wide transition-colors duration-300 text-white/80 group-hover:text-white/90">
                    {gathering.description}
                  </p>
                  <div className="absolute inset-x-0 bottom-0 h-px transition-opacity duration-500 opacity-0 bg-gradient-to-r from-transparent via-white/10 to-transparent group-hover:opacity-100"></div>
                </div>

                {/* Location */}
                {gathering.location && (
                  <div className="mt-8 group">
                    <div className="relative inline-flex items-center px-6 py-3 space-x-3 transition-all duration-500 border rounded-xl border-white/10 bg-white/5 text-white/80 backdrop-blur-md group-hover:border-blue-400/30 group-hover:bg-white/10">
                      <svg className="w-5 h-5 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <span className="text-lg">{gathering.location}</span>
                      <div className="absolute inset-x-0 h-px transition-opacity duration-500 opacity-0 -bottom-px bg-gradient-to-r from-transparent via-blue-400/50 to-transparent group-hover:opacity-100"></div>
                    </div>
                  </div>
                )}

                {/* Join Link */}
                {gathering.link && (
                  <div className="mt-12 perspective-1000">
                    <a
                      href={gathering.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="relative inline-flex items-center px-8 py-4 overflow-hidden text-lg font-medium rounded-xl group/button"
                    >
                      <span className="relative z-10 text-black transition-colors duration-500 group-hover/button:text-white">
                        Join via {gathering.platform}
                        <svg className="inline-block w-5 h-5 ml-2 -mr-1 transition-transform duration-500 group-hover/button:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </span>
                      <div className="absolute inset-0 transition-transform duration-500 bg-gradient-to-r from-blue-400 to-blue-500 group-hover/button:scale-105"></div>
                      <div className="absolute inset-0 transition-all duration-500 bg-gradient-to-r from-white to-blue-300 group-hover/button:-translate-y-full"></div>
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      ))}
      {/* Light Youth Section */}
      <section className="relative flex items-center justify-center min-h-screen overflow-hidden bg-black">
        <div className="absolute inset-0">
          {/* Dynamic background with diagonal stripes */}
          <div className="absolute inset-0" style={{
            backgroundImage: `repeating-linear-gradient(
              45deg,
              #000 0px,
              #000 10px,
              #222 10px,
              #222 20px
            )`
          }}></div>
          
          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/50"></div>
        </div>

        <div className="relative z-10 w-full px-6 py-24 mx-auto max-w-7xl">
          <div className="flex flex-col items-center space-y-12">
            {/* Light Youth Logo/Text */}
            <div className="w-full max-w-3xl transition-transform duration-500 transform hover:scale-105">
              <h2 className="text-[120px] font-black text-white italic transform -skew-x-12 leading-none tracking-tighter">
                LIGHT
              </h2>
              <h2 className="text-[120px] font-black text-yellow-400 italic transform -skew-x-12 leading-none tracking-tighter">
                YOUTH
              </h2>
            </div>

            {/* Leadership & Info */}
            <div className="space-y-6 text-center">
              <div className="inline-block">
                <span className="inline-block px-6 py-2 text-lg font-bold text-black transform -skew-x-12 bg-yellow-400 rounded-full">
                  Under the leadership of Ackizza Francheska Suero
                </span>
              </div>
              
              <p className="max-w-2xl mx-auto text-xl text-gray-300">
                Join us for dynamic worship, powerful messages, and authentic community as we pursue God together.
              </p>

              {/* Meeting Details */}
              <div className="flex items-center justify-center mt-8 space-x-8">
                <div className="flex items-center">
                  <svg className="w-6 h-6 mr-2 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="font-medium text-white">Every Last Friday of the Month</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-6 h-6 mr-2 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span className="font-medium text-white">Main Sanctuary</span>
                </div>
              </div>

              {/* Join Us Button */}
              <button className="px-8 py-3 mt-8 text-lg font-bold text-black transition-all duration-300 transform -skew-x-12 bg-yellow-400 rounded-full hover:scale-105 hover:bg-yellow-300">
                JOIN US THIS FRIDAY!
              </button>
            </div>
          </div>
        </div>

        {/* Animated elements */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Diagonal flashing lines */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute w-[200%] h-2 bg-yellow-400 transform -rotate-45 animate-pulse"></div>
            <div className="absolute w-[200%] h-2 bg-yellow-400 transform -rotate-45 translate-y-[400px] animate-pulse" style={{ animationDelay: '0.5s' }}></div>
          </div>
        </div>
      </section>

      {/* Campuses Section */}
      <div className="relative py-32 overflow-hidden text-center">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900/95 to-black"></div>
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-yellow-500/5 to-transparent"></div>
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-yellow-500/30 to-transparent"></div>
        
        {/* Content Container */}
        <div className="relative z-10">
          {/* Section Header */}
          <div className="inline-block mb-12">
            <span className="inline-block mb-4 text-sm font-medium tracking-[0.2em] text-yellow-400 uppercase">Our Ministry Locations</span>
            <h2 className="relative text-5xl font-bold">
              <span className="relative px-8 py-2 text-white">
                <span className="relative z-10">Campus Ministry</span>
                <span className="absolute inset-0 w-full h-full transform -skew-x-12 rounded-lg bg-gradient-to-r from-yellow-600/20 to-yellow-500/20"></span>
                <span className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-yellow-600 to-yellow-400"></span>
              </span>
            </h2>
          </div>
          
          {/* Section Description */}
          <p className="max-w-3xl px-4 mx-auto mb-20 text-xl font-medium text-gray-300">
            Experience worship across our multiple locations throughout the city
          </p>

          {/* Carousel Section */}
          <div className="max-w-[1400px] px-12 mx-auto">
            <Slider
              dots={true}
              infinite={true}
              speed={800}
              slidesToShow={3}
              slidesToScroll={1}
              autoplay={true}
              autoplaySpeed={6000}
              pauseOnHover={true}
              centerMode={true}
              centerPadding="0"
              dotsClass="slick-dots"
              appendDots={dots => (
                <div className="pt-12 pb-4">
                  <ul className="flex items-center justify-center gap-2">
                    {Array.isArray(dots) && dots.map((dot, i) => (
                      <li key={i} className="m-0">
                        <button className="w-2 h-2 mx-1 transition-all duration-300 rounded-full bg-white/30 hover:bg-yellow-400">
                          {dot}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              responsive={[
                {
                  breakpoint: 1280,
                  settings: {
                    slidesToShow: 2,
                    centerMode: false
                  }
                },
                {
                  breakpoint: 768,
                  settings: {
                    slidesToShow: 1,
                    centerMode: false
                  }
                }
              ]}
              className="px-8 campus-carousel"
            >
              {campuses.map((campus, index) => (
                <div key={index} className="p-4 pb-16">
                  <div className="group relative overflow-hidden rounded-xl bg-gradient-to-b from-gray-900/90 to-black border border-gray-800/50 backdrop-blur-sm transition-all duration-500 hover:border-yellow-500/30 h-[600px] transform hover:-translate-y-1">
                    {/* Background glow effect */}
                    <div className="absolute inset-0 transition-opacity duration-500 opacity-0 group-hover:opacity-100">
                      <div className="absolute inset-0 scale-110 bg-gradient-to-t from-yellow-500/10 to-transparent blur-xl"></div>
                    </div>

                    {/* Image Container */}
                    <div className="relative h-64 overflow-hidden">
                      <img
                        src={campus.image}
                        alt={campus.name}
                        className="object-cover w-full h-full transition-all duration-700"
                      />
                      <div className="absolute inset-0 transition-opacity duration-700 bg-gradient-to-t from-black via-black/70 to-transparent"></div>
                    </div>

                    {/* Content Container */}
                    <div className="relative p-8 flex flex-col h-[calc(600px-16rem)]">
                      {/* Campus Status Badge */}
                      <div className="absolute z-10 transform -translate-x-1/2 -top-4 left-1/2">
                        <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-yellow-400/10 border border-yellow-400/30 text-yellow-300 text-sm font-medium backdrop-blur-sm">
                          Active Campus
                        </span>
                      </div>

                      {/* Campus Name */}
                      <div className="mt-2 mb-6 min-h-[4rem] flex items-center justify-center">
                        <h3 className="text-2xl font-bold tracking-tight text-white transition-colors duration-300 group-hover:text-yellow-400">
                          {campus.name}
                        </h3>
                      </div>

                      {/* Campus Details */}
                      <div className="flex-grow space-y-4">
                        <div className="flex items-center justify-center gap-3">
                          <svg className="w-5 h-5 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                          <span className="text-lg text-white/90">{campus.location}</span>
                        </div>
                        
                        <div className="flex items-center justify-center gap-3">
                          <svg className="w-5 h-5 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          <span className="text-lg text-white/90">{campus.service}</span>
                        </div>

                        <div className="flex items-center justify-center gap-3">
                          <svg className="w-5 h-5 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                          </svg>
                          <span className="text-lg text-white/90">{campus.leader}</span>
                        </div>
                      </div>

                      {/* Visit Button */}
                      <div className="pt-8">
                        <button className="w-full px-6 py-3 text-lg font-medium text-center text-black transition-all duration-300 bg-yellow-400 rounded-lg hover:bg-yellow-300">
                          Visit Campus
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
