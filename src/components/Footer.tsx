import { type FC } from 'react';

const Footer: FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Church Info */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Light of the World</h3>
            <p className="text-gray-400 mb-2">North Caloocan</p>
            <p className="text-gray-400 mb-4">Where faith meets community</p>
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
