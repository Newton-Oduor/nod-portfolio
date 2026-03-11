'use client';

import { Mail, Github, Linkedin, Twitter } from 'lucide-react';

export default function Contact() {
  const socialLinks = [
    { icon: Mail, label: 'Email', href: 'mailto:your.email@example.com', color: 'hover:text-red-400' },
    { icon: Github, label: 'GitHub', href: 'https://github.com/Newton-Oduor', color: 'hover:text-white' },
    { icon: Linkedin, label: 'LinkedIn', href: 'https://linkedin.com', color: 'hover:text-blue-500' },
    { icon: Twitter, label: 'Twitter', href: 'https://twitter.com', color: 'hover:text-blue-400' },
  ];

  return (
    <section id="contact" className="relative z-10 py-20 px-4 bg-slate-900/30 backdrop-blur">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Get In Touch
        </h2>
        <p className="text-slate-400 text-lg mb-12 max-w-2xl mx-auto">
          I'm always open to discussing new projects, creative ideas, or opportunities to build something amazing together. Feel free to reach out!
        </p>

        <div className="flex flex-col md:flex-row gap-4 justify-center mb-12">
          <a
            href="mailto:your.email@example.com"
            className="px-8 py-3 rounded-lg bg-blue-500 text-white hover:bg-blue-600 transition-colors font-semibold"
          >
            Send Me an Email
          </a>
          <a
            href="#"
            className="px-8 py-3 rounded-lg border border-slate-600 text-slate-300 hover:border-blue-400 hover:text-blue-400 transition-colors font-semibold"
          >
            Schedule a Call
          </a>
        </div>

        <div className="flex justify-center gap-8">
          {socialLinks.map((social) => {
            const Icon = social.icon;
            return (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`text-slate-400 transition-colors ${social.color}`}
                aria-label={social.label}
              >
                <Icon size={28} />
              </a>
            );
          })}
        </div>

        <div className="mt-12 pt-8 border-t border-slate-800">
          <p className="text-slate-500 text-sm">
            Looking forward to hearing from you! 🚀
          </p>
        </div>
      </div>
    </section>
  );
}