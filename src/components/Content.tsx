import React, { useState, useEffect } from 'react';
import { Phone } from 'lucide-react';

interface ContentProps {
  isWhiteBackground: boolean;
  setBackgroundColor: (color: string) => void;
}

const Content: React.FC<ContentProps> = ({ isWhiteBackground, setBackgroundColor }) => {
  const [currentSuffix, setCurrentSuffix] = useState('');
  const [isChanging, setIsChanging] = useState(false);
  const [transitionDuration, setTransitionDuration] = useState(1000);
  const [showPhoneNumber, setShowPhoneNumber] = useState(false);
  const [showMainCTA, setShowMainCTA] = useState(true);

  const suffixes = [
    'have a bad day',
    'be sad',
    'feel overwhelmed',
    'ask for help',
    'take a break',
    'not be okay',
    'cry',
    'feel lost',
    'be anxious',
    'feel angry',
    'be scared',
    'feel lonely',
    'doubt yourself',
    'make mistakes',
    'feel stressed',
    'be vulnerable',
    'feel disappointed',
    'need support',
    'take time for yourself',
    'feel uncertain',
    'feel frustrated',
    'be exhausted',
    'feel unmotivated',
    'struggle with change',
    'feel insecure',
    'have self-doubt',
    'feel disconnected',
    'be overwhelmed by emotions',
    'feel stuck',
    'have a setback',
    'feel misunderstood',
    'be afraid of failure',
    'feel inadequate',
    'struggle with perfectionism',
    'feel burnt out',
    'have anxiety',
    'feel hopeless',
    'be in pain',
    'feel rejected',
    'struggle with self-image',
    'feel like giving up',
    'be afraid of the future',
    'feel unworthy',
    'struggle with depression',
    'feel like an imposter',
    'be overwhelmed by responsibilities',
    `feel like you're not enough`,
    'struggle with self-love',
    'feel trapped',
    'be afraid of change'
  ];

  const colors = [
    '#FFA07A', // Light Salmon
    '#98FB98', // Pale Green
    '#87CEFA', // Light Sky Blue
    '#DDA0DD', // Plum
    '#F0E68C', // Khaki
    '#E6E6FA', // Lavender
    '#FFDAB9', // Peach Puff
    '#B0E0E6', // Powder Blue
    '#FAFAD2', // Light Goldenrod Yellow
    '#D8BFD8', // Thistle
  ];

  useEffect(() => {
    const changeSuffix = () => {
      setIsChanging(true);
      setTimeout(() => {
        const randomIndex = Math.floor(Math.random() * suffixes.length);
        setCurrentSuffix(suffixes[randomIndex]);
        setBackgroundColor(colors[Math.floor(Math.random() * colors.length)]);
        setIsChanging(false);
      }, transitionDuration / 2);
    };

    changeSuffix();
    const intervalId = setInterval(changeSuffix, 4000);

    return () => clearInterval(intervalId);
  }, [setBackgroundColor]);

  const handleCallSupport = () => {
    setShowPhoneNumber(true);
    setShowMainCTA(false);
  };

  const initiateCall = () => {
    window.location.href = 'tel:+48116123';
  };

  return (
    <div className="flex-grow flex flex-col items-center justify-center p-4 sm:p-8">
      <div className="max-w-3xl text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 h-36 sm:h-48 flex flex-col justify-center">
          <span className="block">It's okay to</span>
          <span 
            className={`block mt-2 transition-opacity duration-${transitionDuration} ${isChanging ? 'opacity-0' : 'opacity-100'}`}
            style={{ transitionDuration: `${transitionDuration}ms` }}
          >
            {currentSuffix}
          </span>
        </h1>
      </div>
      <div className="flex flex-col items-center">
        {showMainCTA && (
          <button 
            onClick={handleCallSupport}
            className="cta-button text-base sm:text-lg px-4 sm:px-6 py-2 sm:py-3 rounded-full transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg flex items-center space-x-2 mb-4"
          >
            <Phone size={20} className="sm:w-6 sm:h-6" />
            <span>Need support? We're here</span>
          </button>
        )}
        {showPhoneNumber && (
          <div className="animate-fadeIn mt-4 flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4">
            <button 
              onClick={initiateCall}
              className="cta-button text-sm px-4 py-2 rounded-full transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg flex items-center space-x-1"
            >
              <Phone size={16} />
              <span>Call</span>
            </button>
            <div className="text-center sm:text-left">
              <p className="text-lg font-semibold">
                <span className="text-xs opacity-40">(+48)</span> 116 123
              </p>
              <p className="text-sm opacity-80">Polish Mental Health Helpline</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Content;