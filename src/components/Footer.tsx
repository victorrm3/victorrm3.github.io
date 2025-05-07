
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-pixel-dark py-8 border-t-4 border-pixel-darkGray">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="font-pixel text-sm text-pixel-yellow">DEV_PORTFOLIO</h3>
          </div>
          
          <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8">
            <a href="#inicio" className="text-pixel-lightGray hover:text-pixel-skyBlue font-pixelated text-sm transition-colors">
              Inicio
            </a>
            <a href="#proyectos" className="text-pixel-lightGray hover:text-pixel-skyBlue font-pixelated text-sm transition-colors">
              Proyectos
            </a>
            <a href="#habilidades" className="text-pixel-lightGray hover:text-pixel-skyBlue font-pixelated text-sm transition-colors">
              Habilidades
            </a>
            <a href="#contacto" className="text-pixel-lightGray hover:text-pixel-skyBlue font-pixelated text-sm transition-colors">
              Contacto
            </a>
          </div>
        </div>
        
        <div className="pixel-separator my-6"></div>
        
        <div className="text-center">
          <p className="text-pixel-gray font-pixelated text-sm">
            © {new Date().getFullYear()} • Desarrollado con <span className="text-pixel-red">♥</span> y pixeles
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
