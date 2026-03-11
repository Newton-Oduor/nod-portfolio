'use client';

import { ExternalLink, Github } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      title: 'Music Lyrics Finder',
      description: 'A single-page application for searching and discovering music lyrics with an intuitive interface.',
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'API Integration'],
      highlights: 'Real-time search, responsive design',
      github: '#',
      link: '#',
    },
    {
      title: 'Chama Pay',
      description: 'A CLI-based financial management tool designed for group financial planning and expense tracking.',
      technologies: ['Python', 'Flask', 'PostgreSQL', 'CLI'],
      highlights: 'Group finance tracking, secure database',
      github: '#',
      link: '#',
    },
    {
      title: 'Expense & Budgeting App',
      description: 'A full-stack MVP for personal finance management with real-time tracking and analytics.',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'Tailwind CSS'],
      highlights: 'Real-time updates, beautiful UI',
      github: '#',
      link: '#',
    },
    {
      title: 'Smart Goal Planner',
      description: 'A collaborative tool for setting, tracking, and achieving personal and professional goals.',
      technologies: ['React', 'Firebase', 'Tailwind CSS', 'Real-time Sync'],
      highlights: 'Collaborative features, progress tracking',
      github: '#',
      link: '#',
    },
    {
      title: 'Hike Kenya',
      description: 'A travel platform for discovering hiking trails and outdoor adventures across Kenya.',
      technologies: ['Next.js', 'PostgreSQL', 'Maps API', 'Tailwind CSS'],
      highlights: 'Trail discovery, interactive maps',
      github: '#',
      link: '#',
    },
    {
      title: 'Food Court App',
      description: 'A mobile-friendly application for browsing and ordering food from various restaurants.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Payment Integration'],
      highlights: 'Order management, responsive design',
      github: '#',
      link: '#',
    },
  ];

  return (
    <section id="projects" className="relative z-10 py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 text-center">
          Featured Projects
        </h2>
        <p className="text-slate-400 text-center mb-12 max-w-2xl mx-auto">
          A selection of projects showcasing my full-stack development capabilities
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="bg-slate-800/50 border border-slate-700 rounded-lg p-6 hover:border-blue-500 hover:shadow-lg hover:shadow-blue-500/10 transition-all group"
            >
              <h3 className="text-xl font-bold text-blue-400 mb-3 group-hover:text-blue-300 transition-colors">
                {project.title}
              </h3>

              <p className="text-slate-300 text-sm mb-4">
                {project.description}
              </p>

              <div className="mb-4">
                <p className="text-slate-500 text-xs font-semibold mb-2">HIGHLIGHTS</p>
                <p className="text-slate-300 text-sm">
                  {project.highlights}
                </p>
              </div>

              <div className="mb-6">
                <p className="text-slate-500 text-xs font-semibold mb-2">TECH STACK</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, tidx) => (
                    <span
                      key={tidx}
                      className="text-xs px-2 py-1 rounded bg-blue-900/30 text-blue-300 border border-blue-800"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex gap-3">
                <a
                  href={project.github}
                  className="flex items-center gap-2 text-slate-400 hover:text-blue-400 transition-colors text-sm"
                >
                  <Github size={16} />
                  Code
                </a>
                <a
                  href={project.link}
                  className="flex items-center gap-2 text-slate-400 hover:text-blue-400 transition-colors text-sm"
                >
                  <ExternalLink size={16} />
                  Live
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}