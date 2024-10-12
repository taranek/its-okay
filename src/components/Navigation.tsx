import React from 'react';

interface NavigationProps {
  isOpen: boolean;
  isWhiteBackground: boolean;
}

const Navigation: React.FC<NavigationProps> = ({ isOpen, isWhiteBackground }) => {
  return (
    <nav className={`w-72 p-6 transition-all duration-300 ease-in-out ${isOpen ? 'translate-x-0' : '-translate-x-full'} fixed h-full z-20 ${isWhiteBackground ? 'bg-gray-100' : 'bg-gray-900'}`}>
      <ul className="space-y-6">
        <li><a href="#" className="hover:text-gray-500 text-current text-xl font-semibold">Home</a></li>
        <li><a href="#" className="hover:text-gray-500 text-current text-xl font-semibold">About</a></li>
        <li><a href="#" className="hover:text-gray-500 text-current text-xl font-semibold">Projects</a></li>
        <li><a href="#" className="hover:text-gray-500 text-current text-xl font-semibold">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navigation;