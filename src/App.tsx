import React, { useState, useEffect } from 'react';
import { Menu } from 'lucide-react';
import Navigation from './components/Navigation';
import Content from './components/Content';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isWhiteBackground, setIsWhiteBackground] = useState(true);
  const [backgroundColor, setBackgroundColor] = useState('#ffffff');
  const [showNavigation, setShowNavigation] = useState(false);

  useEffect(() => {
    setIsWhiteBackground(true);
  }, []);

  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden">
      <div 
        className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
          isWhiteBackground ? 'opacity-100' : 'opacity-0'
        }`}
        style={{ backgroundColor, transitionDuration: '1000ms' }}
      ></div>
      <div className={`absolute inset-0 bg-black transition-opacity duration-1000 ease-in-out ${
        isWhiteBackground ? 'opacity-0' : 'opacity-100'
      }`}></div>
      <div className={`relative z-10 min-h-screen flex flex-col transition-colors duration-1000 ${
        isWhiteBackground ? 'text-black' : 'text-white'
      }`}>
        <header className="p-4 sm:p-6 flex justify-end items-center">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-current opacity-0 pointer-events-none">
            <Menu size={24} className="sm:w-8 sm:h-8" />
          </button>
        </header>
        <main className="flex-grow flex">
          {showNavigation && (
            <Navigation isOpen={isMenuOpen} isWhiteBackground={isWhiteBackground} />
          )}
          <Content 
            isWhiteBackground={isWhiteBackground}
            setBackgroundColor={setBackgroundColor}
          />
        </main>
      </div>
    </div>
  );
}

export default App;