import { useState } from 'react';

const Events = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const events = [
    {
      id: 1,
      title: "Youth Night: Light Up The Night",
      date: "September 15, 2025",
      time: "7:00 PM - 9:00 PM",
      location: "Main Sanctuary",
      category: "youth",
      description: "An evening of worship, games, and fellowship for our youth ministry. Join us for a night of fun and spiritual growth!",
      image: "/Pictures/Powerhouse.jpg",
      isHighlighted: true
    },
    {
      id: 2,
      title: "Water Baptism Service",
      date: "September 20, 2025",
      time: "10:00 AM - 12:00 PM",
      location: "Main Sanctuary",
      category: "service",
      description: "Join us for this special service as new believers take their next step in faith through water baptism.",
      image: "/Pictures/MainService.jpg"
    },
    {
      id: 3,
      title: "Campus Leaders Summit",
      date: "September 25, 2025",
      time: "2:00 PM - 5:00 PM",
      location: "Conference Hall",
      category: "leadership",
      description: "A gathering of all campus ministry leaders for vision casting, training, and strategic planning.",
      image: "/Pictures/MainHall.jpg"
    },
    {
      id: 4,
      title: "Prayer & Fasting Week",
      date: "October 1-7, 2025",
      time: "6:00 AM - 8:00 PM Daily",
      location: "Multiple Venues",
      category: "prayer",
      description: "Join our community in a week of focused prayer and fasting as we seek God's presence and direction.",
      image: "/Pictures/MorningPrayer.jpg",
      isHighlighted: true
    },
    {
      id: 5,
      title: "Kids Ministry Fun Day",
      date: "October 12, 2025",
      time: "9:00 AM - 3:00 PM",
      location: "Church Grounds",
      category: "children",
      description: "A day filled with games, activities, and Bible lessons for our young ones.",
      image: "/Pictures/MainHall.jpg"
    }
  ];

  const categories = [
    { id: 'all', name: 'All Events' },
    { id: 'youth', name: 'Youth' },
    { id: 'service', name: 'Services' },
    { id: 'leadership', name: 'Leadership' },
    { id: 'prayer', name: 'Prayer' },
    { id: 'children', name: 'Children' }
  ];

  const filteredEvents = activeCategory === 'all' 
    ? events 
    : events.filter(event => event.category === activeCategory);

  return (
    <div id="events" className="relative min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center">
        <div className="absolute inset-0 w-full h-full">
          <img
            src="/Pictures/MainHall.jpg"
            alt="Church Events"
            className="object-cover w-full h-full"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/90"></div>
        </div>
        <div className="relative z-10 text-center">
          <h1 className="mb-6 font-bold text-white text-7xl">
            Upcoming Events
          </h1>
          <p className="max-w-3xl px-4 mx-auto text-2xl text-gray-300">
            Join us in our upcoming activities and be part of our community
          </p>
        </div>
      </section>

      {/* Events Section */}
      <section className="relative py-24">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900/95 to-black"></div>
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary-500/10 to-transparent"></div>

        <div className="container relative z-10 px-6 mx-auto">
          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-2 rounded-full transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-primary-600 text-white'
                    : 'bg-white/5 text-gray-300 hover:bg-white/10'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* Events Grid */}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {filteredEvents.map(event => (
              <div 
                key={event.id}
                className={`group relative overflow-hidden rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 transition-all duration-500 
                  ${event.isHighlighted ? 'md:col-span-2 lg:col-span-2' : ''}`}
              >
                {/* Event Image */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 transition-opacity duration-500 bg-gradient-to-t from-black via-black/50 to-transparent opacity-60 group-hover:opacity-40"></div>
                  
                  {/* Date Badge */}
                  <div className="absolute top-4 right-4">
                    <div className="px-4 py-2 text-sm font-semibold text-white rounded-lg bg-primary-600/90 backdrop-blur-sm">
                      {event.date}
                    </div>
                  </div>
                </div>

                {/* Event Content */}
                <div className="p-6">
                  <div className="mb-4">
                    <h3 className="mb-2 text-2xl font-bold text-white">
                      {event.title}
                    </h3>
                    <p className="text-gray-400">
                      {event.description}
                    </p>
                  </div>

                  {/* Event Details */}
                  <div className="space-y-3">
                    <div className="flex items-center text-gray-300">
                      <svg className="w-5 h-5 mr-3 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {event.time}
                    </div>
                    <div className="flex items-center text-gray-300">
                      <svg className="w-5 h-5 mr-3 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      {event.location}
                    </div>
                  </div>

                  {/* Learn More Button */}
                  <div className="mt-6">
                    <button className="w-full px-6 py-3 text-sm font-semibold text-white transition-all duration-300 border rounded-lg bg-primary-600/20 border-primary-500/30 hover:bg-primary-600/30">
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Events;
