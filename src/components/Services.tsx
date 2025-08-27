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
    <div className="relative min-h-screen">
      {/* Hero Section with Title */}
            <section className="relative h-[60vh] flex items-center justify-center">
        <div className="absolute inset-0 w-full h-full">
          <img
            src="/Pictures/MainHall.jpg"
            alt="Church Main Hall"
            className="object-cover w-full h-full"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/90"></div>
        </div>
        <div className="relative z-10 text-center">
          <h1 className="mb-6 font-bold text-white text-7xl">
            Join Our Services
          </h1>
          <p className="max-w-3xl px-4 mx-auto text-2xl text-gray-300">
            Experience the presence of God through our various services and prayer gatherings
          </p>
        </div>
      </section>

      {/* Sunday Services Title */}
      <div className="relative py-24 overflow-hidden text-center">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900/95 to-black"></div>
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary-500/10 to-transparent"></div>
        <div className="relative z-10">
          <div className="inline-block mb-8">
            <h2 className="relative text-5xl font-bold">
              <span className="relative px-8 py-2 text-white">
                <span className="relative z-10">Sunday Services</span>
                <span className="absolute inset-0 w-full h-full transform -skew-x-12 rounded-lg bg-gradient-to-r from-primary-600/20 to-primary-500/20"></span>
                <span className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-600 to-primary-400"></span>
              </span>
            </h2>
          </div>
          <p className="max-w-3xl px-4 mx-auto text-xl font-medium text-gray-200">
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
                <h3 className="mb-8 text-6xl font-bold tracking-tight text-white">
                  {service.title}
                </h3>
                <div className="space-y-8">
                  <div className="flex items-center justify-center">
                    <svg className="w-6 h-6 mr-3 text-primary-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-xl font-medium text-primary-300">{service.time}</span>
                  </div>
                  <p className="max-w-2xl mx-auto text-xl leading-relaxed text-gray-300">
                    {service.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Prayer Gatherings Title */}
      <div className="relative py-24 overflow-hidden text-center">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900/95 to-black"></div>
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary-500/10 to-transparent"></div>
        <div className="relative z-10">
          <div className="inline-block mb-8">
            <h2 className="relative text-5xl font-bold">
              <span className="relative px-8 py-2 text-white">
                <span className="relative z-10">Prayer Gatherings</span>
                <span className="absolute inset-0 w-full h-full transform -skew-x-12 rounded-lg bg-gradient-to-r from-primary-600/20 to-primary-500/20"></span>
                <span className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-600 to-primary-400"></span>
              </span>
            </h2>
          </div>
          <p className="max-w-3xl px-4 mx-auto text-xl font-medium text-gray-200">
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
                <h3 className="mb-8 text-6xl font-bold tracking-tight text-white">
                  {gathering.title}
                </h3>
                <div className="mb-8">
                  <span className={`inline-flex items-center px-5 py-2 text-sm font-medium rounded-full ${
                    gathering.isOnsite 
                      ? 'bg-emerald-950/30 text-emerald-300 border border-emerald-700/30'
                      : 'bg-blue-950/30 text-blue-300 border border-blue-700/30'
                  }`}>
                    <span className={`mr-2 w-1.5 h-1.5 rounded-full ${
                      gathering.isOnsite ? 'bg-emerald-400' : 'bg-blue-400'
                    }`}></span>
                    {gathering.isOnsite ? 'Onsite' : 'Online'}
                  </span>
                </div>
                <div className="space-y-8">
                  <div className="flex items-center justify-center">
                    <svg className="w-6 h-6 mr-3 text-primary-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-xl font-medium text-primary-300">{gathering.time}</span>
                  </div>
                  <p className="max-w-2xl mx-auto text-xl leading-relaxed text-gray-300">
                    {gathering.description}
                  </p>
                  {gathering.location && (
                    <div className="flex items-center justify-center gap-3">
                      <svg className="w-6 h-6 text-primary-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <span className="text-xl text-gray-300">{gathering.location}</span>
                    </div>
                  )}
                  {gathering.link && (
                    <a
                      href={gathering.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-6 py-3 text-sm font-medium text-white transition-all duration-300 ease-out rounded-lg bg-primary-600 hover:bg-primary-500"
                    >
                      Join via {gathering.platform}
                      <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  )}
                </div>
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
      <div className="relative py-24 overflow-hidden text-center">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900/95 to-black"></div>
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary-500/10 to-transparent"></div>
        
        {/* Content Container */}
        <div className="relative z-10">
          {/* Section Header */}
          <div className="inline-block mb-12">
            <h2 className="relative text-6xl font-black">
              <span className="relative px-8 py-2 text-white">
                <span className="relative z-10">Our Campuses</span>
                <span className="absolute inset-0 w-full h-full transform -skew-x-12 rounded-lg bg-gradient-to-r from-primary-600/20 to-primary-500/20"></span>
                <span className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-600 to-primary-400"></span>
              </span>
            </h2>
          </div>
          
          {/* Section Description */}
          <p className="max-w-3xl px-4 mx-auto mb-20 text-xl font-medium text-gray-200">
            Experience worship across our multiple locations throughout the city
          </p>

          {/* Carousel Section */}
          <div className="max-w-[1400px] px-12 mx-auto">
            <Slider
              dots={true}
              infinite={true}
              speed={700}
              slidesToShow={3}
              slidesToScroll={1}
              autoplay={true}
              autoplaySpeed={5000}
              pauseOnHover={true}
              centerMode={true}
              centerPadding="0"
              dotsClass="slick-dots"
              appendDots={dots => (
                <div style={{ padding: "40px 0" }}>
                  <ul style={{ 
                    display: 'flex',
                    justifyContent: 'center',
                    gap: '8px',
                    listStyle: 'none',
                    margin: 0,
                    padding: 0
                  }}> 
                    {dots.map((dot, i) => (
                      <li key={i} style={{ margin: 0 }}>
                        <div className="w-3 h-3 mx-1 transition-all duration-300 rounded-full bg-white/40 hover:bg-white/60">
                          {dot}
                        </div>
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
                  <div className="group relative overflow-hidden rounded-xl bg-gradient-to-b from-gray-900/90 to-black border border-gray-800/50 backdrop-blur-sm transition-all duration-500 hover:border-primary-500/50 hover:shadow-2xl hover:shadow-primary-500/20 h-[600px] transform hover:scale-110 hover:-translate-y-4 hover:z-10">
                    {/* Background glow effect */}
                    <div className="absolute inset-0 transition-opacity duration-500 opacity-0 group-hover:opacity-100">
                      <div className="absolute inset-0 scale-110 bg-primary-500/20 blur-2xl"></div>
                    </div>

                    {/* Image Container */}
                    <div className="relative h-64 overflow-hidden">
                      <img
                        src={campus.image}
                        alt={campus.name}
                        className="object-cover w-full h-full transition-all duration-700 filter grayscale group-hover:grayscale-0 group-hover:scale-105 group-hover:brightness-110"
                      />
                      {/* Single subtle gradient for text protection */}
                      <div className="absolute inset-0 transition-all duration-700 bg-gradient-to-t from-black via-black/20 to-transparent group-hover:opacity-30"></div>
                    </div>

                    {/* Content Container */}
                    <div className="relative p-8 flex flex-col h-[calc(600px-16rem)]">
                      {/* Campus Status Badge */}
                      <div className="absolute z-10 transform -translate-x-1/2 -top-4 left-1/2">
                        <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-primary-500/30 border border-primary-400/50 text-primary-200 text-sm font-medium shadow-lg backdrop-blur-sm">
                          Active Campus
                        </span>
                      </div>
                      {/* Extra shadow protection for badge */}
                      <div className="absolute left-0 right-0 h-16 -top-8 bg-gradient-to-b from-gray-900 to-transparent"></div>

                      {/* Campus Name */}
                      <div className="mt-2 mb-6 min-h-[4rem] flex items-center justify-center">
                        <h3 className="text-2xl font-bold tracking-tight text-white line-clamp-2">
                          {campus.name}
                        </h3>
                      </div>

                      {/* Campus Details */}
                      <div className="flex-grow space-y-4 text-gray-300">
                        <div className="flex items-center justify-center">
                          <svg className="flex-shrink-0 w-5 h-5 mr-3 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                          <span className="text-lg truncate">{campus.location}</span>
                        </div>
                        <div className="flex items-center justify-center">
                          <svg className="flex-shrink-0 w-5 h-5 mr-3 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          <span className="text-lg truncate">{campus.service}</span>
                        </div>
                        <div className="flex items-center justify-center">
                          <svg className="flex-shrink-0 w-5 h-5 mr-3 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                          </svg>
                          <span className="text-lg truncate">{campus.leader}</span>
                        </div>
                      </div>

                      {/* Visit Button */}
                      <div className="pt-8">
                        <button className="w-full px-6 py-3 text-sm font-semibold text-white transition-all duration-300 border rounded-lg bg-primary-600/20 border-primary-500/30 hover:bg-primary-600/30 hover:border-primary-500/50">
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
