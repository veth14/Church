import React from 'react';

const Events: React.FC = () => {
  return (
    <section id="events" className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Upcoming Events</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Example Event Card */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">Sunday Service</h3>
              <p className="text-gray-600 mb-4">Join us every Sunday for worship and fellowship.</p>
              <div className="text-sm text-gray-500">
                <p>Every Sunday</p>
                <p>9:00 AM - 11:00 AM</p>
              </div>
            </div>
          </div>
          
          {/* Add more event cards as needed */}
        </div>
      </div>
    </section>
  );
};

export default Events;
