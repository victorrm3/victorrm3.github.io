
import { useEffect, useState } from 'react';

const Hero = () => {
  const [text, setText] = useState('');
  const fullText = 'Desarrollador Web Full Stack';
  const [cursorVisible, setCursorVisible] = useState(true);
  
  useEffect(() => {
    if (text.length < fullText.length) {
      const timeout = setTimeout(() => {
        setText(fullText.slice(0, text.length + 1));
      }, 100);
      
      return () => clearTimeout(timeout);
    }
  }, [text]);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCursorVisible(v => !v);
    }, 500);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="inicio" className="min-h-[92vh] flex flex-col items-center justify-center relative overflow-hidden bg-pixel-grid py-16">
      <div className="absolute inset-0 opacity-40 bg-pixel-pattern"></div>
      
      <div className="container relative z-10 px-4 text-center">
        <div className="mb-8 flex justify-center">
          <div className="w-32 h-32 md:w-40 md:h-40 border-4 border-pixel-blue bg-pixel-darkBlue rounded-none overflow-hidden relative">
            <div className="absolute inset-0 flex items-center justify-center text-6xl">
              {''}
            </div>
          </div>
        </div>
        
        <h1 className="text-xl md:text-3xl mb-4 text-pixel-skyBlue font-pixel">
          Víctor Rico Martínez
        </h1>
        
        <h2 className="text-2xl md:text-4xl mb-8 text-pixel-yellow font-pixel animate-pixel-float">
          {text}
          <span className={`inline-block ml-1 ${cursorVisible ? 'opacity-100' : 'opacity-0'}`}>_</span>
        </h2>
        
        <p className="text-xl md:text-2xl mb-12 text-pixel-lightGray max-w-2xl mx-auto font-pixelated">
          Java • Python • JavaScript • PHP • React • Laravel
        </p>
        
        <div className="flex flex-col md:flex-row gap-6 justify-center">
          <a href="#proyectos" className="pixel-btn bg-pixel-blue">Ver Proyectos</a>
          <a href="#contacto" className="pixel-btn bg-pixel-purple">Contactar</a>
        </div>
      </div>
      
      <div className="absolute bottom-8 w-full flex justify-center">
        <div className="animate-pixel-bounce">
          <svg width="24" height="24" viewBox="0 0 24 24" className="text-pixel-skyBlue">
            <path fill="currentColor" d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Hero;
