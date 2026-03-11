'use client';

import { FiCode } from 'react-icons/fi';
import {
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiJavascript,
  SiTypescript,
  SiPython,
  SiFlask,
  SiPostgresql,
  SiGit,
  SiGithub,
  SiNodedotjs,
  SiHtml5,
} from 'react-icons/si';

const technologies = [
  { name: 'React', icon: SiReact, color: 'text-blue-400' },
  { name: 'Next.js', icon: SiNextdotjs, color: 'text-white' },
  { name: 'TypeScript', icon: SiTypescript, color: 'text-blue-500' },
  { name: 'JavaScript', icon: SiJavascript, color: 'text-yellow-400' },
  { name: 'Tailwind CSS', icon: SiTailwindcss, color: 'text-cyan-400' },
  { name: 'Node.js', icon: SiNodedotjs, color: 'text-green-500' },
  { name: 'Python', icon: SiPython, color: 'text-blue-600' },
  { name: 'Flask', icon: SiFlask, color: 'text-red-400' },
  { name: 'PostgreSQL', icon: SiPostgresql, color: 'text-blue-300' },
  { name: 'HTML5', icon: SiHtml5, color: 'text-orange-500' },
  { name: 'CSS3', icon: FiCode, color: 'text-blue-400' },
  { name: 'Git', icon: SiGit, color: 'text-orange-600' },
  { name: 'GitHub', icon: SiGithub, color: 'text-white' },
];

export default function TechStack() {
  return (
    <section id="tech" className="relative z-10 py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 text-center">
          Tech Stack
        </h2>
        <p className="text-slate-400 text-center mb-12 max-w-2xl mx-auto">
          A collection of technologies I work with to build modern web applications
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {technologies.map((tech) => {
            const IconComponent = tech.icon;
            return (
              <div
                key={tech.name}
                className="group bg-slate-800/50 border border-slate-700 rounded-lg p-6 flex flex-col items-center justify-center hover:border-blue-500 hover:bg-slate-800/80 transition-all cursor-pointer"
              >
                <IconComponent className={`${tech.color} text-4xl mb-3 group-hover:scale-110 transition-transform`} />
                <p className="text-white text-sm font-semibold text-center">{tech.name}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}