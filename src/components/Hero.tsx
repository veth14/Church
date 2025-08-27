import React from 'react'

const Hero = () => {
  return (
    <section id="home" className="relative bg-gradient-to-r from-primary-600 to-primary-800 text-white pt-20">
      <div className="absolute inset-0 bg-black opacity-20"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Welcome to Grace Community Church
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            A place where faith, hope, and love come together. Join our community as we grow in God's grace and serve others with compassion.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-secondary-500 hover:bg-secondary-600 text-white px-8 py-3 rounded-lg text-lg font-semibold transition-colors">
              Join Us This Sunday
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-primary-700 px-8 py-3 rounded-lg text-lg font-semibold transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </div>
      
      {/* Service Times */}
      <div className="relative bg-white text-gray-800 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <h3 className="text-lg font-semibold text-primary-700 mb-2">Sunday Worship</h3>
              <p className="text-gray-600">9:00 AM & 11:00 AM</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-primary-700 mb-2">Bible Study</h3>
              <p className="text-gray-600">Wednesday 7:00 PM</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-primary-700 mb-2">Youth Group</h3>
              <p className="text-gray-600">Friday 6:30 PM</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
