"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { 
  Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer 
} from "recharts";
import { 
   Mail, Linkedin, 
  Zap, Code2, ChevronDown, ChevronUp, Bug, Terminal, GraduationCap
} from "lucide-react";
import Image from 'next/image';
import Lottie from 'lottie-react';

const fadeIn = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.9, ease: "easeOut" }
} as const;

const headline = "Front End Engineer.";
const headlineContainer = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08 }
  }
} as const;
const word = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 , transition: { duration: 0.45, ease: "easeOut" } }
} as const;

const chartData = [
  { subject: 'UI Architecture', A: 100 },
  { subject: 'Performance', A: 95 },
  { subject: 'Testing', A: 85 },
  { subject: 'State Management', A: 98 },
  { subject: 'Accessibility', A: 90 },
  { subject: 'Agentic AI', A: 85 },
];

export default function Portfolio() {
  const [expandedClient, setExpandedClient] = useState<number | null>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isDebug, setIsDebug] = useState(false);

  // Spotlight Effect Logic
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // scroll progress for top bar
  const { scrollYProgress } = useScroll();
  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);

  // hero lottie animation data
  const [heroAnim, setHeroAnim] = useState<Record<string, unknown> | null>(null);
  useEffect(() => {
    // sample Lottie from LottieFiles — replace with your own JSON if you prefer
    fetch("https://assets7.lottiefiles.com/packages/lf20_jcikwtux.json")
      .then((r) => r.json())
      .then((data) => setHeroAnim(data))
      .catch(() => {});
  }, []);

  const clients = [
    {
      company: "Optum UHC",
      logo: "/logos/optum.jpg",
      role: "Senior Front end Engineer",
      duration: "Nov 2024 — Present",
      color: "from-orange-500/20",
      details: [
        "Served as technical lead for front-end initiatives, defining design patterns and best practices for React, Next.js and TypeScript based OCM application.",
        "Built end-to-end web applications using React and Next.js with TypeScript, increasing website usage by 80%.",
        "Implemented a robust state management solution using Redux Toolkit, enhancing application performance by 25%.",
        "Collaborated with cross-functional teams to deliver high-quality software solutions, achieving a 95% customer satisfaction rate.",
        "Writing test cases using Jest and Cypress using github copilot, ensuring a 98% test coverage, 95% bug-free deployment and saving development time.",
      ]
    },
    {
      company: "Walmart Labs",
      logo: "/logos/walmart.png",
      role: "Software Engineer",
      duration: "July 2024 — Sept 2024",
      color: "from-blue-600/20",
      details: [
        "Engineered secure Spring Boot RESTful microservices integrated with PostgreSQL.",
        "Expanded code coverage to 85% through comprehensive unit and integration testing with Junit.",
        "Implemented Kafka streaming applications for efficient customer screening using EKS.",
        "Collaborated with DevOps team to automate deployment pipelines, reducing deployment time by 75%.",
        "Conducted code reviews and pair programming sessions to maintain high coding standards and improve team productivity.",
        "Used grafana and prometheus to monitor the health of the application and alert on any issues and splunk to debug and analyze logs."
      ]
    },
    {
      company: "Prime Therapeutics",
      logo: "/logos/prime.jpg",
      role: "Software Engineer",
      duration: "Jun 2023 — July 2024",
      color: "from-cyan-500/20",
      details: [
        "Led UI development efforts using React, Bootstrap to implement responsive and visually consistent frontend interfaces.",
        "Engineered a component-driven React architecture that boosted code reusability by 50% and cut front-end development time by 25% across multiple projects.",
        "Built component-based React architectures using Context API for scalable state sharing.",
        "Implemented component-driven architecture with React Router, lifecycle methods, state management, and event handling."
      ]
    },
    {
      company: "Arrka Infosec PVT LTD",
      logo: "/logos/arrka.jpg",
      role: "Software Developer",
      duration: "Jan 2020 — Nov 2021",
      color: "from-emerald-500/20",
      details: [
        "Reactive UI Engineering: Designed and developed highly responsive user interfaces using Angular and JavaScript, implementing real-time data binding to ensure security dashboards updated dynamically without manual refreshes.",  
        "Frontend Architecture: Engineered a library of reusable UI components—including complex data tables, modals, and secure form inputs—using HTML5 and CSS3 to maintain 100% design consistency across the platform.",
        "Microservices Integration: Developed and maintained web applications using Java as a backend and implemented REST-based Microservices with Spring Boot, seamlessly connecting the frontend with robust MVC architecture.",
        "Data Visualization & Performance: Performed database modeling and implemented performance metrics, integrating frontend views with complex SQL stored procedures and multi-table joins to visualize robust data operations.",
        "Real-time Monitoring: Collaborated with team members to build SQL-based metrics for real-time monitoring and performance insights, surfacing system health directly to the user through the interface"
      ]
    }
  ];

  const skills = [
     { name: 'JavaScript', level: 'Expert' }, { name: 'TypeScript', level: 'Expert' }, { name: 'Tailwind CSS', level: 'Expert' }, 
     { name: 'HTML5', level: 'Expert' }, { name: 'CSS3', level: 'Expert' }, { name: 'React JS', level: 'Expert' }, 
     { name: 'Redux', level: 'Advanced' }, { name: 'Node JS', level: 'Advanced' }, { name: 'Express JS', level: 'Advanced' }, 
     { name: 'SQL', level: 'Advanced' }, { name: 'GraphQL', level: 'Intermediate' }, { name: 'AWS', level: 'Advanced' },
     { name: 'Jest', level: 'Expert' }, { name: 'Cypress', level: 'Advanced' }
  ];

  return (
    <div className={`min-h-screen bg-[#0a0f14] text-zinc-100 selection:bg-blue-500/40 overflow-x-hidden font-sans transition-all duration-500 ${isDebug ? "debug-mode" : ""}`}>
      
      {/* SPOTLIGHT OVERLAY */}
      <div 
        className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-300"
        style={{
          background: `radial-gradient(600px at ${mousePos.x}px ${mousePos.y}px, rgba(59, 130, 246, 0.08), transparent 80%)`
        }}
      />
      {/* CURSOR FOLLOWER */}
      <motion.div
        className="pointer-events-none fixed z-40 w-36 h-36 rounded-full blur-3xl bg-gradient-to-r from-blue-400/40 to-indigo-400/20"
        animate={{ x: mousePos.x - 72, y: mousePos.y - 72 }}
        transition={{ type: "spring", stiffness: 200, damping: 30 }}
      />

      {/* DYNAMIC BACKGROUND */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,#16202a_0%,#0a0f14_100%)]" />
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              x: [0, i % 2 === 0 ? -20 : 20, 0],
              y: [0, i % 2 === 0 ? -10 : 10, 0],
              opacity: [0.25, 0.6, 0.25],
              scale: [1, 1.04, 1]
            }}
            transition={{ duration: 8 + i * 2, repeat: Infinity, ease: "easeInOut" }}
            className={`absolute ${i===0? 'top-[-20%] right-[-10%] w-[70%] h-[70%]' : i===1 ? 'bottom-[-10%] left-[-20%] w-[40%] h-[40%]' : i===2 ? 'top-[-5%] left-[-10%] w-[30%] h-[30%]' : 'bottom-[10%] right-[-5%] w-[20%] h-[20%]'} bg-blue-900/10 blur-[120px] rounded-full`} 
          />
        ))}
      </div>

      {/* NAVBAR */}
      <nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-[#0a0f14]/80 backdrop-blur-2xl px-10 py-5 flex justify-between items-center">
        <div className="flex flex-col">
          <span className="font-black tracking-tighter text-xl uppercase leading-none">Rushik Reddy</span>
          <span className="text-[10px] text-blue-500 font-bold tracking-[0.2em] uppercase">Gangam</span>
        </div>
        
        <div className="flex items-center gap-8">
          <button 
            onClick={() => setIsDebug(!isDebug)}
            className={`flex items-center gap-2 px-3 py-1 rounded-full border transition-all ${isDebug ? "bg-blue-500 border-blue-400 text-white" : "border-white/10 text-zinc-500 hover:text-white"}`}
          >
            <Bug size={14} />
            <span className="text-[10px] font-black uppercase tracking-widest">{isDebug ? "Debug: ON" : "Debug Mode"}</span>
          </button>
          
          <div className="hidden md:flex gap-8 text-[10px] font-black uppercase tracking-[0.3em] text-zinc-500">
            <motion.a href="#work" whileHover={{ y: -3, scale: 1.03 }} className="transition-colors">Experience</motion.a>
            <motion.a href="#skills" whileHover={{ y: -3, scale: 1.03 }} className="transition-colors">Skills</motion.a>
            <motion.a href="mailto:rushikreddy22@gmail.com" whileHover={{ y: -3, scale: 1.03 }} className="text-white border-b border-blue-500">Contact</motion.a>
          </div>
        </div>
      </nav>
      {/* SCROLL PROGRESS */}
      <motion.div style={{ scaleX }} className="fixed top-0 left-0 right-0 h-1 z-60 origin-left bg-gradient-to-r from-blue-400 to-indigo-400" />
      
      <main className="max-w-6xl mx-auto px-6 pt-44 pb-20">
        
        {/* HERO SECTION */}
        <motion.section {...fadeIn} className="mb-24 relative">
          <div className="relative inline-block overflow-hidden">
            <motion.h1 variants={headlineContainer} initial="hidden" animate="show" className="text-6xl md:text-9xl font-black tracking-tighter mb-8 leading-[0.85]">
              {headline.split(' ').map((w, idx) => (
                <motion.span key={idx} variants={word} className="inline-block mr-3">
                  {w === 'Engineer.' ? <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-200">{w}</span> : w}
                </motion.span>
              ))}
              <motion.span className="inline-block ml-4 w-12 h-3 rounded-full bg-gradient-to-r from-white/80 to-white/20" initial={{opacity:0}} animate={{opacity:[0,1,0]}} transition={{ repeat: Infinity, duration: 2 }} />
            </motion.h1>
          </div>
          
          <div className={`max-w-3xl p-8 rounded-[2rem] bg-white/[0.02] border transition-all duration-500 ${isDebug ? "border-blue-500 shadow-[0_0_20px_rgba(59,130,246,0.2)]" : "border-white/5"} backdrop-blur-sm`}>
            <h2 className="text-xs font-black uppercase tracking-[0.3em] text-blue-500 mb-4 flex items-center gap-2">
              <Terminal size={14} /> Professional Summary
            </h2>
            <p className="text-lg text-zinc-400 leading-relaxed font-light">
              Dynamic, results-driven Front-End Engineer with extensive experience in building responsive, scalable, and component-driven web applications. Proficient across modern frontend HTML, CSS, TypeScript & JavaScript with frameworks (React JS, Next.js, Angular JS).
            </p>
          </div>
        </motion.section>

        {/* BENTO SKILLS GRID */}
        <section id="skills" className="mb-40">
          <h2 className="text-xs font-black uppercase tracking-[0.5em] text-zinc-600 mb-12 text-center">Engineered Stack</h2>
           <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {skills.map((skill, i) => (
                <motion.div 
                  key={skill.name}
                  layout
                  whileHover={{ scale: 1.03, rotate: 1.5, boxShadow: "0 10px 30px rgba(59,130,246,0.08)", borderColor: "rgba(59, 130, 246, 0.5)", backgroundColor: "rgba(59, 130, 246, 0.05)" }}
                  className={`relative p-8 rounded-3xl border border-white/10 bg-zinc-900/40 overflow-hidden group transition-all ${isDebug ? "border-blue-500/50" : ""}`} 
                >
                  <div className="relative z-10">
                    <span className="text-[10px] font-black uppercase tracking-widest text-blue-500 mb-2 block opacity-0 group-hover:opacity-100 transition-opacity">
                      {skill.level}
                    </span>
                    <span className="text-lg font-bold text-zinc-300 group-hover:text-white">
                      {skill.name}
                    </span>
                  </div>
                  <div className="absolute bottom-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                    <Code2 size={60} />
                  </div>
                </motion.div>
              ))}
           </div>
        </section>

        {/* ANALYTICS SECTION */}
        <section className="mb-40 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className={`h-[400px] bg-white/[0.02] border rounded-[3rem] p-6 backdrop-blur-3xl transition-all duration-700 ${isDebug ? "border-blue-500 scale-[1.02]" : "border-white/5"}`}>
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart cx="50%" cy="50%" outerRadius="65%" data={chartData}>
                <PolarGrid stroke={isDebug ? "#3b82f6" : "#333"} />
                <PolarAngleAxis dataKey="subject" tick={{ fill: '#666', fontSize: 10, fontWeight: 'bold' }} />
                <Radar name="Rushik" dataKey="A" stroke="#3b82f6" fill="#3b82f6" fillOpacity={isDebug ? 0.6 : 0.3} />
              </RadarChart>
            </ResponsiveContainer>
          </div>
          <div className="space-y-8">
            <h3 className="text-4xl font-bold tracking-tight leading-tight">Measured Excellence in <span className="text-blue-500">Modern Web</span> Technologies.</h3>
            <p className="text-zinc-500 text-lg">
              Beyond writing code, I analyze performance bottlenecks and architectural scalability. My expertise is balanced across high-speed rendering, state logic, and design systems.
            </p>
          </div>
        </section>

        {/* EXPERIENCE */}
        <section id="work" className="mb-40">
          <h2 className="text-xs font-black uppercase tracking-[0.5em] text-blue-500 mb-16">Client Engagements</h2>
          <div className="space-y-6">
            {clients.map((client, idx) => (
              <div 
                key={idx} 
                className={`group rounded-[2.5rem] border border-white/5 bg-gradient-to-br ${client.color} to-transparent overflow-hidden transition-all duration-500 hover:border-white/20`}
              >
                <button 
                  onClick={() => setExpandedClient(expandedClient === idx ? null : idx)}
                  className="w-full p-8 flex flex-col md:flex-row justify-between items-center text-left"
                >
                  <div className="flex items-center gap-6">
                    <Image src={client.logo} alt={client.company} className="h-8 w-auto grayscale brightness-200 group-hover:grayscale-0 transition-all" />
                    <div>
                      <h4 className="text-2xl font-bold text-white">{client.company}</h4>
                      <p className="text-zinc-500 text-xs font-bold uppercase tracking-widest">{client.role}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 mt-4 md:mt-0">
                    <span className="text-zinc-600 font-mono text-xs">{client.duration}</span>
                    <motion.div animate={{ rotate: expandedClient === idx ? 180 : 0 }} transition={{ duration: 0.25 }}>
                      {expandedClient === idx ? <ChevronUp size={20}/> : <ChevronDown size={20}/>} 
                    </motion.div>
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
                          <motion.div 
                            initial={{ x: -20, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: i * 0.1 }}
                            key={i} 
                            className="flex gap-4 p-4 rounded-xl bg-black/20 border border-white/5 hover:border-blue-500/30 transition-colors"
                          >
                            <Code2 size={18} className="text-blue-500 shrink-0" />
                            <p className="text-zinc-400 text-sm leading-relaxed">{detail}</p>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </section>

        {/* EDUCATION SECTION WITH BLUE HIGHLIGHT ON HOVER */}
        <section id="edu" className="mb-40 grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div 
              whileHover={{ y: -5, scale: 1.02, borderColor: "rgba(59, 130, 246, 0.5)", backgroundColor: "rgba(59, 130, 246, 0.05)" }}
              className="p-10 rounded-[3rem] bg-white/[0.02] border border-white/5 flex items-center gap-8 group transition-all duration-300 shadow-xl"
            >
               <div className="h-16 w-16 bg-white/10 rounded-2xl flex items-center justify-center p-2 group-hover:bg-blue-500/20 transition-colors">
                  <Image src="/logos/unt.png" className="w-full h-full object-contain" alt="UNT" />
               </div>
               <div>
                  <p className="text-blue-500 text-[10px] font-black uppercase tracking-widest mb-1">Master of Science</p>
                  <h4 className="text-xl font-bold group-hover:text-white transition-colors">University of North Texas</h4>
                  <p className="text-zinc-500 text-xs italic">Advanced Data Analytics • Denton, TX</p>
               </div>
            </motion.div>

            <motion.div 
              whileHover={{ y: -5, scale: 1.02, borderColor: "rgba(59, 130, 246, 0.5)", backgroundColor: "rgba(59, 130, 246, 0.05)" }}
              className="p-10 rounded-[3rem] bg-white/[0.02] border border-white/5 flex items-center gap-8 group transition-all duration-300 shadow-xl"
            >
               <div className="h-16 w-16 bg-white/10 rounded-2xl flex items-center justify-center p-2 group-hover:bg-blue-500/20 transition-colors">
                  <Image src="/logos/niit.png" className="w-full h-full object-contain" alt="NIIT" />
               </div>
               <div>
                  <p className="text-blue-500 text-[10px] font-black uppercase tracking-widest mb-1">Bachelor of Technology</p>
                  <h4 className="text-xl font-bold group-hover:text-white transition-colors">NIIT University</h4>
                  <p className="text-zinc-500 text-xs italic">Computer Science & Engineering • Rajasthan, India</p>
               </div>
            </motion.div>
        </section>

        {/* CONTACT */}
        <section className="mb-40">
          <h2 className="text-xs font-black uppercase tracking-[0.5em] text-zinc-600 mb-12 text-center">Get in Touch</h2>
          <div className="flex flex-col md:flex-row justify-center items-center gap-6">
            <motion.a 
              href="mailto:rushikreddy22@gmail.com" 
              whileHover={{ y: -5, scale: 1.05, borderColor: "rgba(59, 130, 246, 0.6)", backgroundColor: "rgba(59, 130, 246, 0.1)" }}
              className="flex items-center gap-4 px-8 py-6 rounded-3xl border border-white/10 bg-zinc-900/40 transition-all group"
            >
              <Mail className="text-blue-500 group-hover:scale-110 transition-transform" />
              <span className="text-lg font-bold">Email Me</span>
            </motion.a>
            <motion.a 
              href="https://www.linkedin.com/in/rushik-reddy/" 
              target="_blank"
              whileHover={{ y: -5, scale: 1.05, borderColor: "rgba(59, 130, 246, 0.6)", backgroundColor: "rgba(59, 130, 246, 0.1)" }}
              className="flex items-center gap-4 px-8 py-6 rounded-3xl border border-white/10 bg-zinc-900/40 transition-all group"
            >
              <Linkedin className="text-blue-500 group-hover:scale-110 transition-transform" />
              <span className="text-lg font-bold">LinkedIn</span>
            </motion.a>
          </div>
        </section>
      </main>

      <style jsx global>{`
        .debug-mode * {
          outline: 1px solid rgba(59, 130, 246, 0.2);
        }
      `}</style>
    </div>
  );
}