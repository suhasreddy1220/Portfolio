"use client";
import React from "react";
import { motion } from "framer-motion";
import { 
  Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer 
} from "recharts";
import { 
  Terminal, Cpu, Globe, Briefcase, MapPin, Mail, Linkedin, 
  Zap, PieChart, Activity, Layers, Code2 
} from "lucide-react";

const fadeIn = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: "easeOut" }
} as const;

// Data for the "Senior Engineer" Radar Chart
const chartData = [
  { subject: 'UI Architecture', A: 100, fullMark: 100 },
  { subject: 'Performance', A: 95, fullMark: 100 },
  { subject: 'Testing', A: 85, fullMark: 100 },
  { subject: 'State Management', A: 98, fullMark: 100 },
  { subject: 'Accessibility', A: 90, fullMark: 100 },
  { subject: 'Cloud/CI-CD', A: 80, fullMark: 100 },
];

export default function Portfolio() {
  const experiences = [
    {
      company: "Optum (UHG)",
      logo: "/logos/optum.jpeg",
      role: "Sr. Front End Engineer",
      duration: "Nov 2024 — Present",
      color: "from-orange-500/20",
      highlights: ["Leading React/Next.js Architecture", "40% Performance Fluidity Increase", "Design System Implementation"]
    },
    {
      company: "Walmart",
      logo: "/logos/walmart.png",
      role: "Software Engineer",
      duration: "July 2024 — Sept 2024",
      color: "from-blue-600/20",
      highlights: ["Enterprise Analytics Dashboard", "High-coverage Unit Testing", "User Engagement Optimization"]
    },
    {
      company: "Prime Therapeutics",
      logo: "/logos/prime.jpeg",
      role: "Software Engineer",
      duration: "Jun 2023 — July 2024",
      color: "from-cyan-500/20",
      highlights: ["Reusable Component Libraries", "WCAG 2.1 Compliance", "Optimized TTI Metrics"]
    }
  ];

  return (
    <div className="min-h-screen bg-[#050505] text-zinc-100 selection:bg-blue-500/40 overflow-x-hidden">
      
      {/* 1. DYNAMIC COLORFUL BACKGROUND */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,#1e1b4b_0%,#050505_100%)]" />
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            x: [0, 100, 0],
            y: [0, 50, 0]
          }}
          transition={{ duration: 20, repeat: Infinity }}
          className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-blue-600/10 blur-[140px] rounded-full" 
        />
        <motion.div 
          animate={{ 
            scale: [1, 1.3, 1],
            x: [0, -80, 0],
            y: [0, -50, 0]
          }}
          transition={{ duration: 15, repeat: Infinity, delay: 2 }}
          className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-indigo-600/10 blur-[140px] rounded-full" 
        />
      </div>

      <nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-black/40 backdrop-blur-2xl px-10 py-5 flex justify-between items-center">
        <span className="font-black tracking-tighter text-2xl uppercase">RR<span className="text-blue-500 italic">G</span>.</span>
        <div className="flex gap-8 text-[10px] font-black uppercase tracking-[0.3em] text-zinc-500">
          <a href="#work" className="hover:text-blue-400 transition-colors">Experience</a>
          <a href="#skills" className="hover:text-blue-400 transition-colors">Expertise</a>
          <a href="mailto:rushikreddy22@gmail.com" className="text-white border-b border-blue-500">Contact</a>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto px-6 pt-44 pb-20">
        
        {/* HERO SECTION */}
        <motion.section {...fadeIn} className="mb-40 relative">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/30 bg-blue-500/5 text-blue-400 text-[10px] font-bold uppercase tracking-widest mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            Available for New Opportunities
          </div>
          <h1 className="text-6xl md:text-9xl font-black tracking-tighter mb-8 leading-[0.85]">
            Senior <br /> 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-200 to-zinc-600">Front End</span> <br /> 
            Engineer.
          </h1>
          <p className="text-xl md:text-2xl text-zinc-500 max-w-2xl font-medium leading-relaxed">
            Architecting modern, scalable interfaces with a focus on performance and interactive user experiences.
          </p>
        </motion.section>

        {/* 2. EYE-CATCHING CHARTS SECTION */}
        <section id="skills" className="mb-40 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="h-[400px] w-full bg-white/[0.02] border border-white/5 rounded-[3rem] p-6 backdrop-blur-3xl relative overflow-hidden group">
            <div className="absolute top-0 left-0 p-8">
                <h3 className="text-xs font-black uppercase tracking-[0.3em] text-blue-500 mb-2">Technical Mastery</h3>
                <p className="text-zinc-500 text-xs">Core Competencies Radar</p>
            </div>
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart cx="50%" cy="55%" outerRadius="65%" data={chartData}>
                <PolarGrid stroke="#333" />
                <PolarAngleAxis dataKey="subject" tick={{ fill: '#666', fontSize: 10, fontWeight: 'bold' }} />
                <Radar
                  name="Rushik"
                  dataKey="A"
                  stroke="#3b82f6"
                  fill="#3b82f6"
                  fillOpacity={0.3}
                />
              </RadarChart>
            </ResponsiveContainer>
          </div>
          <div className="space-y-8">
            <h3 className="text-4xl font-bold tracking-tight leading-tight">Measured Excellence in <span className="text-blue-500">Modern Web</span> Technologies.</h3>
            <p className="text-zinc-500 text-lg">
              Beyond writing code, I analyze performance bottlenecks and architectural scalability. My expertise is balanced across high-speed rendering, state logic, and design systems.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {['100% UI Focus', 'Next.js Expert', 'Performance Tuning', 'TypeScript Mastery'].map((item) => (
                <div key={item} className="flex items-center gap-2 text-xs font-bold text-zinc-300">
                  <Zap size={14} className="text-blue-500" /> {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 3. NEW SKILLS COMPONENT (Hover Tiles) */}
        <section className="mb-40">
           <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {['React', 'Next.js', 'Angular', 'TypeScript', 'Tailwind', 'Framer', 'Redux', 'Jest', 'Node.js', 'AWS', 'GCP', 'Git'].map((skill) => (
                <motion.div 
                  key={skill}
                  whileHover={{ y: -5, backgroundColor: "rgba(59, 130, 246, 0.1)", borderColor: "rgba(59, 130, 246, 0.4)" }}
                  className="p-6 rounded-2xl border border-white/5 bg-zinc-900/20 text-center transition-all cursor-default group"
                >
                  <span className="text-[10px] font-black uppercase tracking-widest text-zinc-500 group-hover:text-blue-400">{skill}</span>
                </motion.div>
              ))}
           </div>
        </section>

        {/* 4. WORK EXPERIENCE WITH HD LOGOS */}
        <section id="work" className="mb-40">
          <h2 className="text-xs font-black uppercase tracking-[0.5em] text-zinc-600 mb-20 text-center">Engineering History</h2>
          <div className="space-y-12">
            {experiences.map((exp, idx) => (
              <motion.div 
                key={idx} {...fadeIn} 
                className={`p-1 bg-gradient-to-br ${exp.color} to-transparent rounded-[3.2rem]`}
              >
                <div className="bg-[#080808] rounded-[3rem] p-10 flex flex-col md:flex-row gap-12 items-start">
                   <div className="md:w-1/3">
                      <img src={exp.logo} alt={exp.company} className="h-10 w-auto object-contain mb-8 brightness-200" />
                      <h4 className="text-2xl font-bold text-white mb-1">{exp.company}</h4>
                      <p className="text-blue-500 font-black text-xs uppercase tracking-widest">{exp.role}</p>
                      <p className="text-zinc-600 text-[10px] font-bold mt-4 uppercase tracking-tighter">{exp.duration}</p>
                   </div>
                   <div className="md:w-2/3 grid grid-cols-1 gap-4">
                      {exp.highlights.map((h, i) => (
                        <div key={i} className="flex gap-4 p-4 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-white/10 transition-colors">
                           <Code2 className="text-blue-500 shrink-0" size={20} />
                           <p className="text-zinc-400 text-md leading-relaxed">{h}</p>
                        </div>
                      ))}
                   </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* 5. EDUCATION SECTION */}
        <section className="mb-40">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-10 rounded-[3rem] bg-white/[0.02] border border-white/5 flex items-center gap-8 group">
               <img src="/logos/unt.png" className="h-20 w-20 object-contain brightness-125" alt="UNT" />
               <div>
                  <p className="text-blue-500 text-[10px] font-black uppercase tracking-widest mb-2">Master of Science</p>
                  <h4 className="text-xl font-bold leading-tight">University of North Texas</h4>
                  <p className="text-zinc-500 text-sm mt-1">Advanced Data Analytics • GPA 3.875</p>
               </div>
            </div>
            <div className="p-10 rounded-[3rem] bg-white/[0.02] border border-white/5 flex items-center gap-8 group">
               <img src="/logos/niit.png" className="h-20 w-20 object-contain brightness-125" alt="NIIT" />
               <div>
                  <p className="text-blue-500 text-[10px] font-black uppercase tracking-widest mb-2">Bachelor of Technology</p>
                  <h4 className="text-xl font-bold leading-tight">NIIT University</h4>
                  <p className="text-zinc-500 text-sm mt-1">Computer Science • GPA 6.58</p>
               </div>
            </div>
          </div>
        </section>

        <footer className="pt-20 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
           <h2 className="text-2xl font-black italic tracking-tighter">RUSHIK REDDY GANGAM.</h2>
           <div className="flex gap-6">
              <a href="mailto:rushikreddy22@gmail.com" className="p-4 rounded-full bg-white text-black hover:bg-blue-600 hover:text-white transition-all"><Mail size={20}/></a>
              <a href="https://linkedin.com/in/rushikreddy" className="p-4 rounded-full bg-zinc-900 text-white border border-white/10 hover:bg-blue-600 transition-all"><Linkedin size={20}/></a>
           </div>
        </footer>
      </main>
    </div>
  );
}