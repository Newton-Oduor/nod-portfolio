'use client';

export default function Experience() {
  const experiences = [
    {
      role: 'Full-Stack Developer',
      company: 'Self-Employed (Freelance)',
      period: '2023 - Present',
      description: 'Building end-to-end web applications with React, Next.js, and Node.js for various clients.',
      achievements: [
        'Developed 6+ production-ready web applications',
        'Worked with fintech, travel, and productivity domains',
        'Implemented responsive design and RESTful APIs',
      ],
    },
    {
      role: 'Web Developer Intern',
      company: 'Tech Startup Incubator',
      period: '2023 - 2023',
      description: 'Contributed to multiple projects and learned agile development practices.',
      achievements: [
        'Built frontend components using React and Tailwind CSS',
        'Collaborated with cross-functional teams',
        'Learned industry best practices and coding standards',
      ],
    },
  ];

  return (
    <section id="experience" className="relative z-10 py-20 px-4 bg-slate-900/30 backdrop-blur">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 text-center">
          Experience
        </h2>

        <div className="space-y-8">
          {experiences.map((exp, idx) => (
            <div
              key={idx}
              className="bg-slate-800/50 border border-slate-700 rounded-lg p-8 hover:border-blue-500 transition-colors"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-blue-400">{exp.role}</h3>
                  <p className="text-slate-400">{exp.company}</p>
                </div>
                <p className="text-slate-500 text-sm md:text-right mt-2 md:mt-0">{exp.period}</p>
              </div>

              <p className="text-slate-300 mb-4">{exp.description}</p>

              <ul className="space-y-2">
                {exp.achievements.map((achievement, aidx) => (
                  <li key={aidx} className="flex gap-3 text-slate-300">
                    <span className="text-green-400 flex-shrink-0">•</span>
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}