
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  return (
    <header className="sticky top-0 z-50 px-4 py-2 bg-pixel-dark border-b-4 border-pixel-darkGray">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <h1 className="text-xl md:text-2xl text-pixel-yellow font-pixel">DEV_PORTFOLIO</h1>
        </div>
        
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 focus:outline-none"
          >
            <div className="w-6 h-0.5 bg-pixel-white mb-1.5"></div>
            <div className="w-6 h-0.5 bg-pixel-white mb-1.5"></div>
            <div className="w-6 h-0.5 bg-pixel-white"></div>
          </button>
        </div>
        
        <nav className={`absolute md:relative top-full left-0 w-full md:w-auto md:flex ${
          isMenuOpen ? 'flex' : 'hidden'
        } flex-col md:flex-row bg-pixel-dark md:bg-transparent border-b-4 md:border-0 border-pixel-darkGray md:space-x-6`}>
          {['Inicio', 'Sobre Mi', 'Habilidades', 'Proyectos', 'Contacto'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(' ', '-')}`}
              className="px-4 py-3 md:py-2 text-pixel-lightBlue hover:text-pixel-skyBlue border-b md:border-b-0 border-pixel-darkGray md:border-transparent font-pixel text-xs"
              onClick={() => setIsMenuOpen(false)}
            >
              {item}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
