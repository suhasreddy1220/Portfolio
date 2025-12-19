"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer 
} from "recharts";
import { 
  Terminal, Cpu, Globe, Briefcase, MapPin, Mail, Linkedin, 
  Zap, PieChart, Activity, Layers, Code2, ChevronDown, ChevronUp, Calendar
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
      company: "Optum UHC",
      logo: "/logos/optum.jpeg",
      role: "Senior Front end Engineer",
      duration: "Nov 2024 — Present",
      color: "from-orange-500/20",
      details: [
        "Developed a scalable Deployment Service with Docker and RESTful APIs, boosting maintainability by 85%.",
        "Built end-to-end web applications using Angular 17 and Node JS, increasing website usage by 80%.",
        "Enhanced CI/CD pipelines with Jenkins and AWS, cutting feature delivery time by 40%."
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
        "Implemented Kafka streaming applications for efficient customer screening using EKS."
      ]
    },
    {
      company: "Prime Therapeutics",
      logo: "/logos/prime.jpg",
      role: "Software Engineer",
      duration: "Jun 2023 — July 2024",
      color: "from-cyan-500/20",
      details: [
        "Constructed a custom ORM application using Spring Data JPA and Hibernate for automated testing.",
        "Optimized data storage with MongoDB and SQL, improving retrieval speeds by 25%.",
        "Strengthened API security with OAuth and JWT, reducing vulnerabilities by 95%."
      ]
    },
    {
      company: "Arrka Infosec PVT LTD",
      logo: "/logos/arrka.jpg",
      role: "Software Developer",
      duration: "Jan 2020 — Nov 2021",
      color: "from-cyan-500/20",
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
    'Java', 'JavaScript', 'TypeScript', 'SQL', 'HTML5', 'CSS3', 
    'Spring Boot', 'Angular 17', 'React JS', 'Node JS', 'Express JS', 
    'Docker', 'Kubernetes', 'AWS', 'Jenkins', 'Kafka', 'Terraform', 'Git'
  ];

  return (
    <div className="min-h-screen bg-[#0a0f14] text-zinc-100 selection:bg-blue-500/40 overflow-x-hidden font-sans">
      
      {/* PEACEFUL DYNAMIC BACKGROUND */}
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
        <motion.section {...fadeIn} className="mb-24 relative">
          <h1 className="text-6xl md:text-9xl font-black tracking-tighter mb-8 leading-[0.85]">
            Full Stack <br /> 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-200">Engineer.</span>
          </h1>
          
          {/* PROFESSIONAL SUMMARY */}
          <div className="max-w-3xl p-8 rounded-[2rem] bg-white/[0.02] border border-white/5 backdrop-blur-sm">
            <h2 className="text-xs font-black uppercase tracking-[0.3em] text-blue-500 mb-4">Professional Summary</h2>
            <p className="text-lg text-zinc-400 leading-relaxed font-light">
              Results-driven Full Stack Engineer with extensive experience in architecting scalable microservices and interactive user interfaces for industry leaders like Optum and Walmart Labs. Expert in leveraging Java, Spring Boot, and modern JavaScript frameworks to optimize performance and deployment frequency in cloud-native environments.
            </p>
          </div>
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

        {/* REVERTED ANALYTICS DESCRIPTION */}
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
          <div className="space-y-8">
            <h3 className="text-4xl font-bold tracking-tight leading-tight">Measured Excellence in <span className="text-blue-500">Modern Web</span> Technologies.</h3>
            <p className="text-zinc-500 text-lg">
              Beyond writing code, I analyze performance bottlenecks and architectural scalability. My expertise is balanced across high-speed rendering, state logic, and design systems.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {['100% UI Focus', 'Cloud Native', 'Performance Tuning', 'Scalable Arch'].map((item) => (
                <div key={item} className="flex items-center gap-2 text-xs font-bold text-zinc-300">
                  <Zap size={14} className="text-blue-500" /> {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* INDIVIDUAL SKILL BOXES WITH HIGHLIGHT HOVER */}
        <section id="skills" className="mb-40">
          <h2 className="text-xs font-black uppercase tracking-[0.5em] text-zinc-600 mb-12 text-center">Tech Stack</h2>
           <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {skills.map((skill) => (
                <motion.div 
                  key={skill}
                  whileHover={{ 
                    y: -5,
                    backgroundColor: "rgba(59, 130, 246, 0.15)",
                    borderColor: "rgba(59, 130, 246, 0.6)",
                    boxShadow: "0 0 20px rgba(59, 130, 246, 0.2)"
                  }}
                  className="p-6 rounded-2xl border border-white/10 bg-zinc-900/40 text-center cursor-pointer transition-all duration-200"
                >
                  <span className="text-[10px] font-black uppercase tracking-widest text-zinc-300 group-hover:text-white">
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
                            <Code2 size={18} className="text-blue-500 shrink-0" />
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
        <section id="edu" className="mb-40 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-10 rounded-[3rem] bg-white/[0.02] border border-white/5 flex items-center gap-8 group hover:bg-white/[0.04] transition-all">
               <img src="/logos/unt.png" className="h-16 w-16 object-contain" alt="UNT" />
               <div>
                  <p className="text-blue-500 text-[10px] font-black uppercase tracking-widest mb-1">Master of Science</p>
                  <h4 className="text-xl font-bold">University of North Texas</h4>
                  <p className="text-zinc-500 text-xs italic">Advanced Data Analytics • Denton, TX</p>
               </div>
            </div>
            <div className="p-10 rounded-[3rem] bg-white/[0.02] border border-white/5 flex items-center gap-8 group hover:bg-white/[0.04] transition-all">
               <img src="/logos/niit.png" className="h-16 w-16 object-contain" alt="NIIT" />
               <div>
                  <p className="text-blue-500 text-[10px] font-black uppercase tracking-widest mb-1">Bachelor of Technology</p>
                  <h4 className="text-xl font-bold">NIIT University</h4>
                  <p className="text-zinc-500 text-xs italic">Computer Science & Engineering • Hyderabad, India</p>
               </div>
            </div>
        </section>

        {/* CONTACT SECTION */}
        <section className="mb-40">
          <h2 className="text-xs font-black uppercase tracking-[0.5em] text-zinc-600 mb-12 text-center">Get in Touch</h2>
          <div className="flex flex-col items-center gap-6">
            <motion.a 
              href="mailto: rushikreddy22@gmail.com" 
              whileHover={{ y: -5, backgroundColor: "rgba(59, 130, 246, 0.15)", borderColor: "rgba(59, 130, 246, 0.6)", boxShadow: "0 0 20px rgba(59, 130, 246, 0.2)" }}
              className="p-6 rounded-2xl border border-white/10 bg-zinc-900/40 text-center cursor-pointer transition-all duration-200"
            >
              <Mail size={24} className="text-blue-500" />
              <span className="text-lg font-bold text-white mt-2">Email Me</span>
            </motion.a>
                        <motion.a 
                          href="https://www.linkedin.com/in/rushik-reddy/" 
                          whileHover={{ y: -5, backgroundColor: "rgba(59, 130, 246, 0.15)", borderColor: "rgba(59, 130, 246, 0.6)", boxShadow: "0 0 20px rgba(59, 130, 246, 0.2)" }}
                          className="p-6 rounded-2xl border border-white/10 bg-zinc-900/40 text-center cursor-pointer transition-all duration-200"
                        >
                          <Linkedin size={24} className="text-blue-500" />
                          <span className="text-lg font-bold text-white mt-2">Connect on LinkedIn</span>
                        </motion.a>
                      </div>
                    </section>
                  </main>
                </div>
              );
            }