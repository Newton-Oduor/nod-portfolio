'use client';

export default function About() {
  return (
    <section id="about" className="relative z-10 py-20 px-4 bg-slate-900/30 backdrop-blur">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              About Me
            </h2>
            <div className="space-y-4 text-slate-300">
              <p>
                I'm an entry-level full-stack developer with a passion for building practical solutions that make a real impact. My journey in software development has focused on creating efficient, scalable applications with clean code and exceptional user experiences.
              </p>
              <p>
                Specializing in the African tech ecosystem, I'm particularly interested in fintech solutions, travel platforms, and productivity tools. I believe technology can solve meaningful problems and drive economic growth across the continent.
              </p>
              <p>
                When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or learning about emerging trends in web development and entrepreneurship.
              </p>
            </div>
          </div>

          <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-8">
            <h3 className="text-xl font-bold text-blue-400 mb-6">Quick Facts</h3>
            <div className="space-y-4">
              <div>
                <p className="text-slate-400 text-sm">Location</p>
                <p className="text-white font-semibold">Kenya, Africa</p>
              </div>
              <div>
                <p className="text-slate-400 text-sm">Expertise</p>
                <p className="text-white font-semibold">Full-Stack Development</p>
              </div>
              <div>
                <p className="text-slate-400 text-sm">Focus Areas</p>
                <p className="text-white font-semibold">Fintech, Travel Tech, Productivity Apps</p>
              </div>
              <div>
                <p className="text-slate-400 text-sm">Current Goal</p>
                <p className="text-white font-semibold">Building Scalable African Tech Solutions</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}