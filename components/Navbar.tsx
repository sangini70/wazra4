import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ExternalLink } from 'lucide-react';
import { IMAGES } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: '브랜드 스토리', path: '/story' },
    { name: '기술 & 특허', path: '/technology' },
    { name: 'FAQ', path: '/faq' },
    { name: '문의하기', path: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md z-50 border-b border-gray-100 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0 flex items-center">
            <img src={IMAGES.LOGO} alt="WAZRA" className="h-10 w-auto object-contain" />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-sm font-medium transition-colors duration-200 ${
                  isActive(link.path) ? 'text-wazra-900 font-bold' : 'text-gray-500 hover:text-wazra-700'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <a
              href="https://www.coupang.com"
              target="_blank"
              rel="noreferrer"
              className="bg-wazra-900 text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-wazra-800 transition-all shadow-md flex items-center gap-1"
            >
              구매하기 <ExternalLink size={14} />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-black focus:outline-none"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 absolute w-full">
          <div className="px-4 pt-2 pb-6 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-3 rounded-md text-base font-medium text-gray-700 hover:text-wazra-900 hover:bg-gray-50"
              >
                {link.name}
              </Link>
            ))}
            <a
              href="https://www.coupang.com"
              target="_blank"
              rel="noreferrer"
              className="block w-full text-center mt-4 bg-wazra-900 text-white px-5 py-3 rounded-md font-bold"
            >
              쿠팡에서 구매하기
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;