
import React from 'react';

interface SkillProps {
  name: string;
  level: number;
  color: string;
}

const SkillBar: React.FC<SkillProps> = ({ name, level, color }) => {
  return (
    <div className="mb-6">
      <div className="flex justify-between items-center mb-2">
        <span className="font-pixel text-sm">{name}</span>
        <span className="font-pixelated text-sm text-pixel-lightGray">{level}/10</span>
      </div>
      <div className="h-6 bg-pixel-darkGray border-2 border-pixel-darkGray relative">
        <div 
          className={`h-full ${color}`} 
          style={{ width: `${level * 10}%` }}
        ></div>
        {Array.from({ length: 10 }).map((_, i) => (
          <div 
            key={i}
            className="absolute top-0 bottom-0 border-r-2 border-pixel-darkGray"
            style={{ left: `${(i + 1) * 10}%` }}
          ></div>
        ))}
      </div>
    </div>
  );
};

const Skills = () => {
  const frontendSkills: SkillProps[] = [
    { name: 'HTML/CSS', level: 9, color: 'bg-pixel-red' },
    { name: 'JavaScript', level: 8, color: 'bg-pixel-yellow' },
    { name: 'React', level: 8, color: 'bg-pixel-lightBlue' },
    { name: 'Responsive', level: 9, color: 'bg-pixel-purple' },
  ];

  const backendSkills: SkillProps[] = [
    { name: 'Java', level: 8, color: 'bg-pixel-orange' },
    { name: 'PHP/Laravel', level: 7, color: 'bg-pixel-red' },
    { name: 'Python', level: 7, color: 'bg-pixel-skyBlue' },
    { name: 'MySQL', level: 8, color: 'bg-pixel-blue' },
  ];

  const serverSkills: SkillProps[] = [
    { name: 'Apache', level: 7, color: 'bg-pixel-lightGreen' },
    { name: 'Nginx', level: 6, color: 'bg-pixel-green' },
    { name: 'Git', level: 8, color: 'bg-pixel-orange' },
    { name: 'Docker', level: 6, color: 'bg-pixel-blue' },
  ];

  return (
    <section id="habilidades" className="py-20 bg-pixel-dark">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl text-pixel-yellow font-pixel mb-12 text-center">
          Habilidades_Técnicas<span className="animate-pixel-blink">_</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="pixel-card">
            <h3 className="font-pixel text-lg mb-6 text-pixel-lightBlue">Frontend</h3>
            {frontendSkills.map((skill) => (
              <SkillBar key={skill.name} {...skill} />
            ))}
          </div>
          
          <div className="pixel-card">
            <h3 className="font-pixel text-lg mb-6 text-pixel-lightBlue">Backend</h3>
            {backendSkills.map((skill) => (
              <SkillBar key={skill.name} {...skill} />
            ))}
          </div>
          
          <div className="pixel-card">
            <h3 className="font-pixel text-lg mb-6 text-pixel-lightBlue">Servidores/DevOps</h3>
            {serverSkills.map((skill) => (
              <SkillBar key={skill.name} {...skill} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
