"use client";
import React from "react";
import { motion } from "framer-motion";
import { Code2, ExternalLink, Mail, Linkedin, Terminal, Layers, Zap } from "lucide-react";

export default function Portfolio() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-zinc-100 selection:bg-blue-500/30 font-sans">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-[#0a0a0a]/80 backdrop-blur-md px-6 py-4 flex justify-between items-center">
        <span className="font-bold tracking-tighter text-xl">RR<span className="text-blue-500">G</span>.</span>
        <div className="flex gap-6 text-sm font-medium text-zinc-400">
          <a href="mailto:rushikreddy22@gmail.com" className="hover:text-white transition-colors">Contact</a>
          <a href="https://www.linkedin.com/in/rushikreddy/" target="_blank" className="hover:text-white transition-colors">LinkedIn</a>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto px-6 pt-32 pb-20">
        {/* Hero Section */}
        <motion.section {...fadeIn} className="mb-24">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
            Rushik Reddy <span className="text-zinc-500 underline decoration-blue-500">Gangam</span>
          </h1>
          <p className="text-xl text-zinc-400 max-w-3xl leading-relaxed">
            Sr. Front End Engineer [cite: 7] with 5 years of experience building scalable, 
            component-driven web applications[cite: 1, 13]. Specialist in React, Next.js, and TypeScript[cite: 4, 7].
          </p>
        </motion.section>

        {/* Impact Bento Grid */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-24">
          <motion.div whileHover={{ scale: 1.02 }} className="md:col-span-2 p-8 rounded-3xl bg-zinc-900 border border-white/5 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-blue-400 mb-4"><Zap size={20} /> <span className="text-xs font-bold uppercase tracking-widest">Recent Impact</span></div>
              <h3 className="text-2xl font-bold mb-2 text-white">Optum (UnitedHealth Group)</h3>
              <p className="text-zinc-400">Led front-end initiatives for OCM applications, improving cross-device compatibility by 40%.</p>
            </div>
            <div className="mt-8 flex gap-3 flex-wrap">
              {['React', 'Next.js', 'TypeScript', 'GraphQL', 'PostgreSQL'].map(tech => (
                <span key={tech} className="px-3 py-1 rounded-full bg-white/5 text-xs text-zinc-300 border border-white/10">{tech}</span>
              ))}
            </div>
          </motion.div>

          <motion.div whileHover={{ scale: 1.02 }} className="p-8 rounded-3xl bg-blue-600 text-white">
            <Layers className="mb-6" />
            <h3 className="text-4xl font-black mb-2">50%</h3>
            <p className="font-medium">Increase in code reusability engineered at Prime Therapeutics.</p>
          </motion.div>

          <motion.div whileHover={{ scale: 1.02 }} className="p-8 rounded-3xl bg-zinc-900 border border-white/5">
            <Terminal className="text-zinc-500 mb-6" />
            <h3 className="text-xl font-bold mb-2 text-white">1.5s Faster</h3>
            <p className="text-zinc-400 text-sm">Reduced page load times through optimized image rendering and lazy loading[cite: 19].</p>
          </motion.div>

          <motion.div whileHover={{ scale: 1.02 }} className="md:col-span-2 p-8 rounded-3xl bg-zinc-900 border border-white/5">
            <h3 className="text-xl font-bold mb-4 text-white">Full Stack Expertise</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              <div className="space-y-1">
                <p className="text-xs text-zinc-500 uppercase font-bold">Frontend</p>
                <p className="text-sm text-zinc-300">React, Angular, Vue, Next.js </p>
              </div>
              <div className="space-y-1">
                <p className="text-xs text-zinc-500 uppercase font-bold">Backend</p>
                <p className="text-sm text-zinc-300">PostgreSQL, MongoDB, GraphQL [cite: 5]</p>
              </div>
              <div className="space-y-1">
                <p className="text-xs text-zinc-500 uppercase font-bold">Cloud</p>
                <p className="text-sm text-zinc-300">AWS, GCP, Docker [cite: 5]</p>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Footer Contact */}
        <footer className="border-t border-white/5 pt-12 flex flex-col md:flex-row justify-between items-center gap-8">
          <div>
            <h2 className="text-2xl font-bold text-white mb-2">Let&apos;s build the next big thing.</h2>
            <p className="text-zinc-500">Based in Texas. Open to global opportunities.</p>
          </div>
          <div className="flex gap-4">
            <a href="mailto:rushikreddy22@gmail.com" className="p-4 rounded-full bg-white text-black hover:bg-zinc-200 transition-colors">
              <Mail size={24} />
            </a>
            <a href="https://www.linkedin.com/in/rushikreddy/" className="p-4 rounded-full bg-zinc-800 text-white hover:bg-zinc-700 transition-colors">
              <Linkedin size={24} />
            </a>
          </div>
        </footer>
      </main>
    </div>
  );
}