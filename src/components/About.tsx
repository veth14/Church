import React from 'react'

const About = () => {
  return (
    <section id="about" className="py-16 bg-gray-50">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">About Our Church</h2>
          <p className="max-w-3xl mx-auto text-lg text-gray-600">
            For over 35 years, Light of the World - North Caloocan has been a beacon of hope and faith in our community, 
            dedicated to spreading God's love and serving others.
          </p>
        </div>

        <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
          <div>
            <h3 className="mb-6 text-2xl font-bold text-gray-900">Our Mission</h3>
            <p className="mb-6 text-gray-600">
              We are committed to creating a welcoming environment where people can encounter God, 
              grow in their faith, and discover their purpose. Our mission is to love God, love people, 
              and serve our community with the heart of Christ.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center w-6 h-6 rounded-full bg-primary-600">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
                <div className="ml-3">
                  <h4 className="text-lg font-semibold text-gray-900">Biblical Teaching</h4>
                  <p className="text-gray-600">Grounded in Scripture and relevant to daily life</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center w-6 h-6 rounded-full bg-primary-600">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
                <div className="ml-3">
                  <h4 className="text-lg font-semibold text-gray-900">Community Outreach</h4>
                  <p className="text-gray-600">Serving our neighbors and making a positive impact</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center w-6 h-6 rounded-full bg-primary-600">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
                <div className="ml-3">
                  <h4 className="text-lg font-semibold text-gray-900">Authentic Fellowship</h4>
                  <p className="text-gray-600">Building genuine relationships and supporting one another</p>
                </div>
              </div>
            </div>
          </div>

          <div className="p-8 bg-white rounded-lg shadow-lg">
            <h3 className="mb-6 text-2xl font-bold text-gray-900">Our Values</h3>
            <div className="space-y-4">
              <div className="pl-4 border-l-4 border-primary-600">
                <h4 className="font-semibold text-gray-900">Faith</h4>
                <p className="text-gray-600">Trusting in God's promises and living by His word</p>
              </div>
              <div className="pl-4 border-l-4 border-secondary-500">
                <h4 className="font-semibold text-gray-900">Hope</h4>
                <p className="text-gray-600">Finding strength and encouragement in Christ</p>
              </div>
              <div className="pl-4 border-l-4 border-primary-600">
                <h4 className="font-semibold text-gray-900">Love</h4>
                <p className="text-gray-600">Showing compassion and kindness to all people</p>
              </div>
              <div className="pl-4 border-l-4 border-secondary-500">
                <h4 className="font-semibold text-gray-900">Service</h4>
                <p className="text-gray-600">Using our gifts to serve God and others</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
