import React, { useEffect, useState } from 'react';
import Logo from './assets/RM Logo-NB.png';

const Navbar = () => {
  const [opacity, setOpacity] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Education', href: '#education' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const maxScroll = 500;
      const newOpacity = Math.min(scrollY / maxScroll, 1) * 1;
      setOpacity(newOpacity);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav
      className="fixed top-0 left-0 w-full z-50 transition-all duration-300"
      style={{
        background: `linear-gradient(to bottom, rgba(0, 0, 0, ${opacity}), rgba(27, 28, 47, ${opacity}))`,
        boxShadow: opacity > 0 ? `0 4px 6px -1px rgba(0, 0, 0, ${opacity})` : 'none',
      }}
    >
      <div className="max-w-6xl mx-auto flex justify-between items-center px-4">
        <div className="flex items-center">
          <img src={Logo} alt="Logo" className="h-20 w-20" />
        </div>
        {/* Desktop Menu */}
        <ul className="hidden sm:flex space-x-6">
          {navLinks.map((link, index) => (
            <li key={index}>
              <a
                href={link.href}
                className="text-white hover:text-[#A855F7] transition-colors duration-300 uppercase text-sm"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
        {/* Mobile Burger Icon */}
        <div className="sm:hidden flex items-center">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
              />
            </svg>
          </button>
        </div>
      </div>
      {/* Mobile Dropdown Menu */}
      {isMenuOpen && (
        <div className="sm:hidden">
          <ul className="flex flex-col items-center bg-[#1B1C2F] w-full py-4">
            {navLinks.map((link, index) => (
              <li key={index} className="py-2">
                <a
                  href={link.href}
                  className="text-white hover:text-[#A855F7] transition-colors duration-300 uppercase text-sm"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;