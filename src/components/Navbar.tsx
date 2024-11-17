import { Menu, X, Code2, ChevronDown } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-white/95 backdrop-blur-sm z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <Code2 className="h-8 w-8 text-blue-600" />
            <span className="ml-2 text-xl font-bold text-gray-900">TechPro Solutions</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-700 hover:text-blue-600 transition">Home</a>
            <div className="relative group">
              <button className="flex items-center text-gray-700 hover:text-blue-600 transition">
                Services <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              <div className="absolute hidden group-hover:block w-48 bg-white shadow-lg rounded-md mt-2 py-2">
                <a href="#web-dev" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50">Web Development</a>
                <a href="#mobile-dev" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50">Mobile Development</a>
                <a href="#cloud" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50">Cloud Solutions</a>
                <a href="#ai" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50">AI & ML Services</a>
              </div>
            </div>
            <a href="#about" className="text-gray-700 hover:text-blue-600 transition">About</a>
            <a href="#portfolio" className="text-gray-700 hover:text-blue-600 transition">Portfolio</a>
            <a href="#contact" className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition">
              Contact Us
            </a>
          </div>

          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#home" className="block px-3 py-2 text-gray-700 hover:bg-blue-50 rounded-md">Home</a>
            <a href="#services" className="block px-3 py-2 text-gray-700 hover:bg-blue-50 rounded-md">Services</a>
            <a href="#about" className="block px-3 py-2 text-gray-700 hover:bg-blue-50 rounded-md">About</a>
            <a href="#portfolio" className="block px-3 py-2 text-gray-700 hover:bg-blue-50 rounded-md">Portfolio</a>
            <a href="#contact" className="block px-3 py-2 bg-blue-600 text-white rounded-md">Contact Us</a>
          </div>
        </div>
      )}
    </nav>
  );
}