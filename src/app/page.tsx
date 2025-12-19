"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer 
} from "recharts";
import { 
  Terminal, Cpu, Globe, Briefcase, MapPin, Mail, Linkedin, 
  Zap, PieChart, Activity, Layers, Code2, ChevronDown, ChevronUp 
} from "lucide-react";

const fadeIn = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: "easeOut" }
} as const;

const chartData = [
  { subject: 'UI Architecture', A: 100 },
  { subject: 'Performance', A: 95 },
  { subject: 'Testing', A: 85 },
  { subject: 'State Mgmt', A: 98 },
  { subject: 'Accessibility', A: 90 },
  { subject: 'Cloud/CI-CD', A: 80 },
];

export default function Portfolio() {
  const [expandedClient, setExpandedClient] = useState<number | null>(null);

  const clients = [
    {
      company: "Optum (UHG)",
      logo: "/logos/optum.jpeg",
      role: "Sr. Front End Engineer",
      duration: "Nov 2024 — Present",
      color: "from-orange-500/20",
      details: [
        "Technical lead for front-end initiatives, defining scalable design patterns for React, Next.js, and TypeScript architectures.",
        "Engineered high-performance UI components resulting in a 40% improvement in cross-device fluidity.",
        "Architected a standardized design system across healthcare clouds, reducing UI technical debt by 25%."
      ]
    },
    {
      company: "Walmart",
      logo: "/logos/walmart.png",
      role: "Software Engineer",
      duration: "July 2024 — Sept 2024",
      color: "from-blue-600/20",
      details: [
        "Developed enterprise-grade interfaces using React and modern JavaScript for internal analytics teams.",
        "Achieved 85% code coverage for frontend modules by implementing unit and integration testing with Jest.",
        "Optimized web application flows with custom CSS and Bootstrap, eliminating full-page reloads."
      ]
    },
    {
      company: "Prime Therapeutics",
      logo: "/logos/prime.jpeg",
      role: "Software Engineer",
      duration: "Jun 2023 — July 2024",
      color: "from-cyan-500/20",
      details: [
        "Enhanced UI modularity using advanced design patterns, increasing component reusability by 50%.",
        "Spearheaded mobile-first, responsive web designs ensuring 100% WCAG 2.1 accessibility compliance.",
        "Optimized front-end asset loading, leading to a 25% improvement in Time-to-Interactive (TTI)."
      ]
    }
  ];

  const skills = ['React JS', 'Next.js', 'Angular JS', 'TypeScript', 'JavaScript', 'Material UI', 'Tailwind', 'Framer', 'Redux', 'Jest', 'Node.js', 'GraphQL', 'SOAP', 'REST API', 'AWS', 'GCP', 'Git'];

  return (
    <div className="min-h-screen bg-[#0a0f14] text-zinc-100 selection:bg-blue-500/40 overflow-x-hidden font-sans">
      
      {/* 1. PEACEFUL DYNAMIC BACKGROUND */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,#16202a_0%,#0a0f14_100%)]" />
        <motion.div 
          animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute top-[-20%] right-[-10%] w-[70%] h-[70%] bg-blue-900/10 blur-[120px] rounded-full" 
        />
      </div>

      {/* NAVBAR WITH NAME AT TOP */}
      <nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-[#0a0f14]/80 backdrop-blur-2xl px-10 py-5 flex justify-between items-center">
        <div className="flex flex-col">
          <span className="font-black tracking-tighter text-xl uppercase leading-none">Rushik Reddy</span>
          <span className="text-[10px] text-blue-500 font-bold tracking-[0.2em] uppercase">Gangam</span>
        </div>
        <div className="flex gap-8 text-[10px] font-black uppercase tracking-[0.3em] text-zinc-500">
          <a href="#work" className="hover:text-blue-400 transition-colors">Experience</a>
          <a href="#skills" className="hover:text-blue-400 transition-colors">Skills</a>
          <a href="mailto:rushikreddy22@gmail.com" className="text-white border-b border-blue-500">Contact</a>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto px-6 pt-44 pb-20">
        
        {/* HERO SECTION */}
        <motion.section {...fadeIn} className="mb-40 relative">
          <h1 className="text-6xl md:text-9xl font-black tracking-tighter mb-8 leading-[0.85]">
            Senior <br /> 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-200">Front End</span> <br /> 
            Engineer.
          </h1>
          <p className="text-xl md:text-2xl text-zinc-400 max-w-2xl font-light leading-relaxed">
            Building high-performance digital experiences with precision and creative functionality.
          </p>
        </motion.section>

        {/* MARQUEE ANIMATION */}
        <section className="mb-40 border-y border-white/5 py-10 overflow-hidden bg-white/[0.02]">
          <div className="flex animate-marquee whitespace-nowrap">
            {skills.concat(skills).map((skill, i) => (
              <span key={i} className="text-4xl md:text-6xl font-black text-zinc-800/40 mx-10 uppercase italic tracking-tighter hover:text-blue-500/50 transition-colors">
                {skill}
              </span>
            ))}
          </div>
        </section>

        {/* ANALYTICS SECTION */}
        <section className="mb-40 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="h-[400px] bg-white/[0.02] border border-white/5 rounded-[3rem] p-6 backdrop-blur-3xl">
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart cx="50%" cy="50%" outerRadius="65%" data={chartData}>
                <PolarGrid stroke="#333" />
                <PolarAngleAxis dataKey="subject" tick={{ fill: '#666', fontSize: 10, fontWeight: 'bold' }} />
                <Radar name="Rushik" dataKey="A" stroke="#3b82f6" fill="#3b82f6" fillOpacity={0.3} />
              </RadarChart>
            </ResponsiveContainer>
          </div>
          <div className="space-y-6">
            <h2 className="text-4xl font-bold italic tracking-tight text-white">Technical Mastery.</h2>
            <p className="text-zinc-500 text-lg">My engineering approach balances aesthetic precision with mathematical performance tuning.</p>
          </div>
        </section>

        {/* INSTANT REACTIVE SKILLS */}
        <section id="skills" className="mb-40">
           <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {skills.map((skill) => (
                <motion.div 
                  key={skill}
                  whileHover={{ 
                    scale: 1.05, 
                    backgroundColor: "rgba(59, 130, 246, 0.2)",
                    borderColor: "rgba(59, 130, 246, 0.5)",
                    transition: { duration: 0.1 } // Instant reaction
                  }}
                  className="p-6 rounded-2xl border border-white/5 bg-zinc-900/20 text-center cursor-pointer group"
                >
                  <span className="text-[10px] font-black uppercase tracking-widest text-zinc-500 group-hover:text-white transition-colors">
                    {skill}
                  </span>
                </motion.div>
              ))}
           </div>
        </section>

        {/* EXPANDABLE CLIENTS SECTION */}
        <section id="work" className="mb-40">
          <h2 className="text-xs font-black uppercase tracking-[0.5em] text-blue-500 mb-16">Client Engagements</h2>
          <div className="space-y-6">
            {clients.map((client, idx) => (
              <div 
                key={idx} 
                className={`rounded-[2.5rem] border border-white/5 bg-gradient-to-br ${client.color} to-transparent overflow-hidden transition-all duration-500`}
              >
                <button 
                  onClick={() => setExpandedClient(expandedClient === idx ? null : idx)}
                  className="w-full p-8 flex flex-col md:flex-row justify-between items-center text-left"
                >
                  <div className="flex items-center gap-6">
                    <img src={client.logo} alt={client.company} className="h-8 w-auto grayscale brightness-200" />
                    <div>
                      <h4 className="text-2xl font-bold text-white">{client.company}</h4>
                      <p className="text-zinc-500 text-xs font-bold uppercase tracking-widest">{client.role}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 mt-4 md:mt-0">
                    <span className="text-zinc-600 font-mono text-xs">{client.duration}</span>
                    {expandedClient === idx ? <ChevronUp size={20}/> : <ChevronDown size={20}/>}
                  </div>
                </button>
                
                <AnimatePresence>
                  {expandedClient === idx && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="px-8 pb-10"
                    >
                      <div className="grid grid-cols-1 gap-4 border-t border-white/5 pt-8">
                        {client.details.map((detail, i) => (
                          <div key={i} className="flex gap-4 p-4 rounded-xl bg-black/20 border border-white/5">
                            <Zap size={18} className="text-blue-500 shrink-0" />
                            <p className="text-zinc-400 text-sm leading-relaxed">{detail}</p>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </section>

        {/* EDUCATION SECTION (BRANDED CARDS) */}
        <section className="mb-40 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-10 rounded-[3rem] bg-white/[0.02] border border-white/5 flex items-center gap-8 group hover:bg-white/[0.04] transition-all">
               <img src="/logos/unt.png" className="h-16 w-16 object-contain" alt="UNT" />
               <div>
                  <p className="text-blue-500 text-[10px] font-black uppercase tracking-widest mb-1">Master of Science</p>
                  <h4 className="text-xl font-bold">University of North Texas</h4>
                  <p className="text-zinc-500 text-xs italic">Advanced Data Analytics • GPA 3.875</p>
               </div>
            </div>
            <div className="p-10 rounded-[3rem] bg-white/[0.02] border border-white/5 flex items-center gap-8 group hover:bg-white/[0.04] transition-all">
               <img src="/logos/niit.png" className="h-16 w-16 object-contain" alt="NIIT" />
               <div>
                  <p className="text-blue-500 text-[10px] font-black uppercase tracking-widest mb-1">Bachelor of Technology</p>
                  <h4 className="text-xl font-bold">NIIT University</h4>
                  <p className="text-zinc-500 text-xs italic">Computer Science • GPA 6.58</p>
               </div>
            </div>
        </section>

        <footer className="pt-20 border-t border-white/5 flex justify-between items-center opacity-50 text-[10px] font-bold uppercase tracking-widest">
           <p>© 2025 Dallas, Texas</p>
           <div className="flex gap-4">
              <a href="https://linkedin.com/in/rushikreddy" className="hover:text-blue-500">LinkedIn</a>
              <a href="mailto:rushikreddy22@gmail.com" className="hover:text-blue-500">Email</a>
           </div>
        </footer>
      </main>

      <style jsx global>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
      `}</style>
    </div>
  );
}