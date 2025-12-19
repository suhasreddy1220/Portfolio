"use client";
import React from "react";
import { motion } from "framer-motion";
import { 
  Terminal, Cpu, Globe, Briefcase, MapPin, Mail, Linkedin 
} from "lucide-react";

export default function Portfolio() {
  const fadeIn = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8, ease: "easeOut" }
  };

  const experiences = [
    {
      company: "Optum, UnitedHealth Group",
      role: "Sr. Front End Engineer",
      location: "Minnesota City, MN",
      duration: "Nov 2024 — Present",
      highlights: [
        "Served as technical lead for front-end initiatives, defining design patterns and best practices for React, Next.js, and TypeScript based OCM application architecture[cite: 1].",
        "Engineered high-performance UI components with a focus on 40% improvement in cross-device fluidity and responsive design consistency[cite: 1].",
        "Architected a standardized design system across healthcare clouds, reducing UI technical debt by 25% and accelerating feature delivery[cite: 1]."
      ]
    },
    {
      company: "Walmart",
      role: "Software Engineer",
      location: "Sunnyvale, CA",
      duration: "July 2024 — Sept 2024",
      highlights: [
        "Developed enterprise-grade, client-facing interfaces using React and modern JavaScript, ensuring seamless data visualization for internal analytics teams[cite: 4].",
        "Achieved 85% code coverage for frontend modules by implementing comprehensive unit and integration testing suites with Jest and React Testing Library[cite: 4].",
        "Optimized complex web application flows with custom CSS and Bootstrap, eliminating full-page reloads and boosting interaction metrics by 80%[cite: 4]."
      ]
    },
    {
      company: "Prime Therapeutics",
      role: "Software Engineer",
      location: "MN (Remote)",
      duration: "Jun 2023 — July 2024",
      highlights: [
        "Enhanced UI modularity using advanced design patterns, resulting in a 50% increase in component reusability across pharmacy benefit portals[cite: 4].",
        "Spearheaded the development of mobile-first, responsive web designs, ensuring 100% WCAG 2.1 accessibility compliance for diverse user groups[cite: 4].",
        "Optimized front-end asset loading and image rendering strategies, leading to a 25% improvement in Time-to-Interactive (TTI)[cite: 4]."
      ]
    },
    {
      company: "Arrka Infosec",
      role: "Software Developer",
      location: "Pune, India",
      duration: "Jan 2020 — Nov 2021",
      highlights: [
        "Designed and implemented reactive front-end interfaces using Angular and JavaScript, focusing on intuitive navigation and user-centric flows[cite: 4].",
        "Reduced page load times by 1.5 seconds through sophisticated image rendering techniques and lazy loading implementation[cite: 1].",
        "Collaborated with UX teams to translate wireframes into pixel-perfect, interactive web applications while maintaining high performance metrics[cite: 1]."
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-[#050505] text-zinc-100 selection:bg-blue-500/30 font-sans">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-[#050505]/90 backdrop-blur-xl px-8 py-4 flex justify-between items-center">
        <span className="font-black tracking-tighter text-2xl uppercase">
          RR<span className="text-blue-500 underline decoration-2 underline-offset-4">G</span>.
        </span>
        <div className="flex gap-6 text-xs font-bold uppercase tracking-widest text-zinc-500">
          <a href="#experience" className="hover:text-blue-400 transition-colors">Experience</a>
          <a href="#skills" className="hover:text-blue-400 transition-colors">Arsenal</a>
          <a href="mailto:rushikreddy22@gmail.com" className="text-white hover:text-blue-400 underline underline-offset-4">Hire Me</a>
        </div>
      </nav>

      <main className="max-w-5xl mx-auto px-6 pt-32 pb-20">
        {/* Professional Summary */}
        <motion.section {...fadeIn} className="mb-32">
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-8 leading-[0.9]">
            Rushik Reddy <span className="text-zinc-800 font-outline-2">Gangam</span>
          </h1>
          <div className="relative p-10 rounded-[2rem] bg-gradient-to-br from-zinc-900 to-black border border-white/10 overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 p-8 opacity-5">
              <Terminal size={150} />
            </div>
            <p className="text-xl md:text-2xl text-zinc-400 leading-relaxed font-light relative z-10">
              I am a <span className="text-white font-semibold">Senior Front End Architect</span> dedicated to building visually stunning and high-performance digital experiences. 
              My expertise focuses on <span className="text-blue-500">component-driven architecture</span> and scalable UI ecosystems[cite: 1]. 
              From healthcare clouds to retail giants, I ensure every pixel serves a purpose and every interaction feels like magic.
            </p>
          </div>
        </motion.section>

        {/* Experience Section */}
        <section id="experience" className="mb-32">
          <h2 className="text-xs font-bold uppercase tracking-[0.5em] text-zinc-500 mb-16 flex items-center gap-4">
            <div className="h-px w-12 bg-blue-500" /> Professional Journey
          </h2>
          <div className="space-y-24">
            {experiences.map((exp, idx) => (
              <motion.div key={idx} {...fadeIn} className="relative grid grid-cols-1 md:grid-cols-4 gap-4 group">
                <div className="md:col-span-1">
                  <p className="text-blue-500 font-mono text-xs font-bold">{exp.duration}</p>
                  <p className="text-zinc-600 text-[10px] uppercase font-black tracking-tighter mt-1">{exp.location}</p>
                </div>
                <div className="md:col-span-3 border-l border-zinc-800 pl-8 relative">
                  <div className="absolute -left-[1.5px] top-0 h-8 w-[3px] bg-blue-500 opacity-0 group-hover:opacity-100 transition-all duration-500" />
                  <h3 className="text-3xl font-bold text-white mb-1 group-hover:translate-x-2 transition-transform duration-300">{exp.company}</h3>
                  <p className="text-zinc-400 font-medium mb-6 text-lg italic">{exp.role}</p>
                  <ul className="space-y-4">
                    {exp.highlights.map((point, i) => (
                      <li key={i} className="text-zinc-500 leading-relaxed text-sm group-hover:text-zinc-300 transition-colors">
                        — {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Technical Arsenal */}
        <section id="skills" className="mb-32">
          <h2 className="text-xs font-bold uppercase tracking-[0.5em] text-zinc-500 mb-12 flex items-center gap-4 text-center justify-center">
            Technical Arsenal
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <SkillCard title="Core Design" skills={["TypeScript", "JavaScript", "HTML5", "CSS3"]} />
            <SkillCard title="UI Frameworks" skills={["React.js", "Next.js", "Angular", "Vue.js"]} />
            <SkillCard title="Styling" skills={["Tailwind CSS", "Bootstrap", "Framer Motion"]} />
            <SkillCard title="Tooling" skills={["Jest", "Cypress", "Git", "AWS Cloud"]} />
          </div>
        </section>

        {/* Footer */}
        <footer className="pt-20 border-t border-white/5 flex flex-col items-center text-center">
          <div className="flex gap-4">
            <a href="mailto:rushikreddy22@gmail.com" className="flex items-center gap-2 px-6 py-3 rounded-full bg-white text-black font-bold hover:bg-blue-500 hover:text-white transition-all">
              <Mail size={18} /> Email Me
            </a>
            <a href="https://www.linkedin.com/in/rushikreddy/" target="_blank" className="flex items-center gap-2 px-6 py-3 rounded-full bg-zinc-900 border border-white/10 font-bold hover:bg-zinc-800 transition-all">
              <Linkedin size={18} /> LinkedIn
            </a>
          </div>
          <p className="mt-12 text-zinc-600 text-[10px] uppercase tracking-widest">© 2025 Rushik Reddy Gangam • Built with Next.js</p>
        </footer>
      </main>
    </div>
  );
}

function SkillCard({ title, skills }: { title: string, skills: string[] }) {
  return (
    <div className="p-6 rounded-2xl bg-zinc-900/20 border border-white/5 hover:border-blue-500/20 transition-all group">
      <h3 className="text-zinc-500 text-[10px] font-black uppercase tracking-widest mb-4 group-hover:text-blue-500 transition-colors">{title}</h3>
      <div className="flex flex-wrap gap-2">
        {skills.map(s => (
          <span key={s} className="text-sm font-medium text-zinc-300">{s}</span>
        ))}
      </div>
    </div>
  );
}