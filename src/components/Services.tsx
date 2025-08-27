import { useEffect } from 'react';

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
      image: "/Pictures/MainService.jpg"
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
      link: "https://zoom.us/j/yourchurchzoomlink",
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
      <div className="relative py-24 text-center bg-gradient-to-b from-gray-900 to-black">
        <h2 className="mb-8 text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-primary-200">
          Sunday Services
        </h2>
        <p className="max-w-3xl px-4 mx-auto text-xl text-gray-400">
          Join us every Sunday for powerful worship and life-changing messages
        </p>
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
              <div className="relative max-w-3xl">
                <h3 className="mb-6 font-bold tracking-tight text-white text-7xl">
                  {service.title}
                </h3>
                <div className="space-y-6">
                  <div className="inline-flex items-center">
                    <svg className="w-6 h-6 mr-3 text-primary-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-xl text-primary-300">{service.time}</span>
                  </div>
                  <p className="max-w-2xl text-lg leading-relaxed text-gray-400">
                    {service.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Prayer Gatherings Title */}
      <div className="relative py-24 text-center bg-gradient-to-b from-black to-gray-900">
        <h2 className="mb-8 text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-primary-200">
          Prayer Gatherings
        </h2>
        <p className="max-w-3xl px-4 mx-auto text-xl text-gray-400">
          Join our community in powerful prayer meetings throughout the week
        </p>
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
              <div className="relative max-w-3xl mx-auto">
                <div className="mb-6">
                  <h3 className="mb-4 font-bold tracking-tight text-white text-7xl">
                    {gathering.title}
                  </h3>
                  <span className={`inline-flex items-center px-4 py-1.5 text-sm font-medium rounded-full ${
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
                <div className="space-y-6">
                  <div className="inline-flex items-center">
                    <svg className="w-5 h-5 mr-3 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-xl text-primary-200">{gathering.time}</span>
                  </div>
                  <p className="max-w-2xl text-xl leading-relaxed text-gray-300">
                    {gathering.description}
                  </p>
                  {gathering.location && (
                    <div className="flex items-center gap-3">
                      <svg className="w-5 h-5 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
    </div>
  );
};

export default Services;
