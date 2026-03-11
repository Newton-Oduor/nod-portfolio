'use client';

import { ChevronDown } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative z-10 min-h-screen flex items-center justify-center px-4 pt-20">
      <div className="max-w-4xl w-full text-center">
        <div className="mb-6 inline-block">
          <span className="text-blue-400 text-sm font-mono font-semibold bg-blue-900/20 px-3 py-1 rounded-full border border-blue-800">
            console.log('Hello, World!')
          </span>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
          Newton Oduor
        </h1>

        <p className="text-xl md:text-2xl text-slate-300 mb-4">
          Full-Stack Developer
        </p>

        <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto mb-12">
          Building scalable solutions for African tech with a focus on fintech, productivity, and modern web applications.
        </p>

        <div className="flex flex-col md:flex-row gap-4 justify-center mb-16">
          <a
            href="#projects"
            className="px-8 py-3 rounded-lg bg-blue-500 text-white hover:bg-blue-600 transition-colors font-semibold"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="px-8 py-3 rounded-lg border border-slate-600 text-slate-300 hover:border-blue-400 hover:text-blue-400 transition-colors font-semibold"
          >
            Get In Touch
          </a>
        </div>

        <div className="flex justify-center animate-bounce">
          <ChevronDown size={32} className="text-blue-400" />
        </div>
      </div>
    </section>
  );
}