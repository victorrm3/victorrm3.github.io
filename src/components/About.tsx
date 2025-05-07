
import React from 'react';

const About = () => {
  return (
    <section id="sobre-mi" className="py-20 bg-pixel-darkGray">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl text-pixel-yellow font-pixel mb-12 text-center">
            Sobre_Mi<span className="animate-pixel-blink">_</span>
          </h2>
          
          <div className="pixel-card">
            <div className="space-y-6 text-xl font-pixelated">
              <p>
                Soy un desarrollador web full stack motivado por crear aplicaciones web 
                atractivas y funcionales para los usuarios. Mi formación en <span className="text-pixel-yellow">Desarrollo de Aplicaciones Web (DAW) </span> 
                en el IES ENRIC VALOR de Mónovar me ha proporcionado conocimientos en el desarrollo tanto de frontend como backend.
              </p>
              
              <p>
                Me especializo en crear aplicaciones web modernas utilizando tecnologías como 
                <span className="text-pixel-lightBlue"> React</span>, 
                <span className="text-pixel-orange"> Java</span>, 
                <span className="text-pixel-yellow"> JavaScript</span>, 
                <span className="text-pixel-skyBlue"> Python</span>, 
                <span className="text-pixel-purple"> PHP</span> y 
                <span className="text-pixel-red"> Laravel</span>, 
                siempre buscando soluciones eficientes para desafíos técnicos complejos. Sin embargo, también he desarollado aplicaciones en dipositivos móviles utilizando 
                <span className="text-pixel-lightBlue"> React Native</span> y<span className="text-pixel-orange"> Java</span>, lo que me ha permitido adquirir conocimientos en el desarrollo de aplicaciones multiplataforma.
              </p>
              
              <p>
                También tengo experiencia con servidores <span className="text-pixel-lightGreen">Apache</span> y 
                <span className="text-pixel-green"> Nginx</span>, así como administración de bases de datos 
                <span className="text-pixel-blue"> MySQL</span>.
              </p>
              
              <p>
                Mi objetivo es crear aplicaciones útiles, escalables y con interfaces de usuario sencillas que 
                proporcionen una buena experiencia al usuario final.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
