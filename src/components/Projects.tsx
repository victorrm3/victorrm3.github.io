
import React from 'react';

interface ProjectProps {
  title: string;
  description: string;
  techStack: string[];
  bgColor: string;
}

const Project: React.FC<ProjectProps> = ({ title, description, techStack, bgColor }) => {
  return (
    <div className={`pixel-card ${bgColor} text-pixel-white`}>
      <h3 className="font-pixel text-lg mb-4">{title}</h3>
      <p className="font-pixelated mb-4">{description}</p>
      <div className="flex flex-wrap gap-2 mt-auto">
        {techStack.map((tech) => (
          <span key={tech} className="bg-pixel-dark px-2 py-1 text-xs font-pixelated">
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
};

const Projects = () => {
  const projects: ProjectProps[] = [
    {
      title: "Sistema de Gestión Académica",
      description: "Plataforma web para administración de estudiantes, cursos y calificaciones con panel administrativo.",
      techStack: ["Java", "Spring Boot", "MySQL", "JavaScript", "Bootstrap"],
      bgColor: "bg-pixel-darkBlue"
    },
    {
      title: "E-commerce Responsivo",
      description: "Tienda online completa con catálogo, carrito, pasarela de pagos y panel de administración.",
      techStack: ["PHP", "Laravel", "MySQL", "React", "Tailwind CSS"],
      bgColor: "bg-pixel-purple"
    },
    {
      title: "API RESTful de Gestión",
      description: "API para integración con aplicaciones de gestión empresarial con autenticación OAuth.",
      techStack: ["Python", "Django", "PostgreSQL", "Docker"],
      bgColor: "bg-pixel-green"
    },
    {
      title: "Aplicación de Análisis de Datos",
      description: "Dashboard interactivo para visualización y análisis de datos empresariales.",
      techStack: ["React", "Node.js", "D3.js", "MongoDB"],
      bgColor: "bg-pixel-red"
    }
  ];

  return (
    <section id="proyectos" className="py-20 bg-pixel-darkGray">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl text-pixel-yellow font-pixel mb-12 text-center">
          Proyectos_Destacados<span className="animate-pixel-blink">_</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {projects.map((project) => (
            <Project key={project.title} {...project} />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a href="#contacto" className="pixel-btn bg-pixel-blue inline-block">
            ¿Interesado? Contáctame
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
