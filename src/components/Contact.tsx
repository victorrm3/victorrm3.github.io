
import React, { useState } from 'react';

const Contact = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormState({ name: '', email: '', message: '' });
      
      // Reset the submission status after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }, 1500);
  };

  return (
    <section id="contacto" className="py-20 bg-pixel-dark">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl text-pixel-yellow font-pixel mb-12 text-center">
          Contacto<span className="animate-pixel-blink">_</span>
        </h2>
        
        <div className="max-w-2xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div>
              <h3 className="font-pixel text-lg text-pixel-lightBlue mb-6">Hablemos</h3>
              <div className="space-y-6 font-pixelated">
                <p className="flex items-start space-x-3">
                  <span className="text-pixel-yellow">@</span>
                  <span>victoricomar3@gmail.com</span>
                </p>
                <p className="flex items-start space-x-3">
                  <span className="text-pixel-yellow">☎</span>
                  <span>+34 633 56 80 85</span>
                </p>
                <p className="flex items-start space-x-3">
                  <span className="text-pixel-yellow">⌂</span>
                  <span>España</span>
                </p>
                
                <div className="pt-4">
                  <h4 className="font-pixel text-sm text-pixel-skyBlue mb-4">Redes Sociales</h4>
                  <div className="flex space-x-4">
                    <a href="https://www.instagram.com/victor_rm3/" className="text-pixel-lightGray hover:text-pixel-skyBlue transition-colors" target='_blank'>
                      Instagram
                    </a>
                    <a href="https://www.linkedin.com/in/v%C3%ADctor-rico-868b69329/" className="text-pixel-lightGray hover:text-pixel-skyBlue transition-colors" target='_blank'>
                      LinkedIn
                    </a>
                    <a href="https://x.com/victor_rm3" className="text-pixel-lightGray hover:text-pixel-skyBlue transition-colors" target='_blank'>
                      Twitter
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="font-pixel text-lg text-pixel-lightBlue mb-6">Envíame un Mensaje</h3>
              
              {isSubmitted ? (
                <div className="pixel-card bg-pixel-green text-pixel-white">
                  <p className="font-pixel text-sm">¡Mensaje enviado correctamente!</p>
                  <p className="font-pixelated mt-2">Me pondré en contacto contigo pronto.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="mb-4">
                    <input
                      type="text"
                      name="name"
                      placeholder="Nombre"
                      value={formState.name}
                      onChange={handleChange}
                      required
                      className="w-full bg-pixel-darkGray border-2 border-pixel-gray p-3 text-pixel-white font-pixelated"
                    />
                  </div>
                  <div className="mb-4">
                    <input
                      type="email"
                      name="email"
                      placeholder="Email"
                      value={formState.email}
                      onChange={handleChange}
                      required
                      className="w-full bg-pixel-darkGray border-2 border-pixel-gray p-3 text-pixel-white font-pixelated"
                    />
                  </div>
                  <div className="mb-4">
                    <textarea
                      name="message"
                      placeholder="Mensaje"
                      rows={5}
                      value={formState.message}
                      onChange={handleChange}
                      required
                      className="w-full bg-pixel-darkGray border-2 border-pixel-gray p-3 text-pixel-white font-pixelated resize-none"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`pixel-btn bg-pixel-blue w-full ${isSubmitting ? 'opacity-50' : ''}`}
                  >
                    {isSubmitting ? 'Enviando...' : 'Enviar Mensaje'}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
