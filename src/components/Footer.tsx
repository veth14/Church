import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-8 text-white bg-gray-800">
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div>
            <h3 className="mb-4 text-xl font-semibold">Light of the World - North Caloocan</h3>
            <p className="text-gray-300">A place of worship, fellowship, and community.</p>
          </div>
          <div>
            <h3 className="mb-4 text-xl font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#about" className="text-gray-300 hover:text-white">About</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-white">Services</a></li>
              <li><a href="#events" className="text-gray-300 hover:text-white">Events</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-white">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-xl font-semibold">Contact Info</h3>
            <ul className="space-y-2 text-gray-300">
              <li>123 Church Street</li>
              <li>City, State 12345</li>
              <li>Phone: (123) 456-7890</li>
              <li>Email: info@church.com</li>
            </ul>
          </div>
        </div>
        <div className="pt-8 mt-8 text-center text-gray-300 border-t border-gray-700">
          <p>&copy; {new Date().getFullYear()} Light of the World - North Caloocan. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
