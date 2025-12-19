"use client";
import React from "react";
import { motion } from "framer-motion";
import { 
  Terminal, Cpu, Globe, Briefcase, MapPin, Mail, Linkedin, 
  GraduationCap, ExternalLink, Zap, MousePointer2, Award 
} from "lucide-react";

const fadeIn = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8, ease: "easeOut" }
} as const;

export default function Portfolio() {
  const experiences = [
    {
      company: "Optum (UnitedHealth Group)",
      logo: "https://upload.wikimedia.org/wikipedia/commons/f/f0/Optum_logo.svg",
      role: "Sr. Front End Engineer",
      location: "Minnesota City, MN",
      duration: "Nov 2024 — Present",
      highlights: [
        "Technical lead for front-end initiatives, defining scalable design patterns for React, Next.js, and TypeScript architectures.",
        "Optimized UI component rendering and state management, improving cross-device compatibility by 40%.",
        "Orchestrated the migration of legacy interfaces to modern Tailwind CSS frameworks, reducing technical debt by 25%."
      ]
    },
    {
      company: "Walmart",
      logo: "https://upload.wikimedia.org/wikipedia/commons/c/ca/Walmart_logo.svg",
      role: "Software Engineer",
      location: "Sunnyvale, CA",
      duration: "July 2024 — Sept 2024",
      highlights: [
        "Engineered high-performance, client-facing interfaces using React and modern JavaScript for enterprise analytics.",
        "Achieved 85% code coverage for frontend modules by implementing comprehensive testing suites with Jest and RTL.",
        "Eliminated full-page reloads by implementing optimized navigation flows, increasing website engagement metrics by 80%."
      ]
    },
    {
      company: "Prime Therapeutics",
      logo: "https://upload.wikimedia.org/wikipedia/en/2/21/Prime_Therapeutics_Logo.png",
      role: "Software Engineer",
      location: "MN (Remote)",
      duration: "Jun 2023 — July 2024",
      highlights: [
        "Enhanced UI modularity using advanced design patterns, resulting in a 50% increase in code reusability.",
        "Spearheaded mobile-first, responsive designs ensuring 100% WCAG 2.1 accessibility compliance for pharmacy portals.",
        "Optimized asset loading and image rendering, leading to a 25% improvement in Time-to-Interactive (TTI)."
      ]
    },
    {
      company: "Arrka Infosec",
      logo: "https://media.licdn.com/dms/image/C4D0BAQG0Q8Z3z8_7Xg/company-logo_200_200/0/1630571644444?e=2147483647&v=beta&t=H3-f9iK0rXvYvLpD0zY9kZz5mU5z5z5z5z5z5z5z5z5",
      role: "Software Developer",
      location: "Pune, India",
      duration: "Jan 2020 — Nov 2021",
      highlights: [
        "Designed and implemented reactive front-end interfaces using Angular, focusing on intuitive user-centric flows.",
        "Reduced page load times by 1.5 seconds through lazy loading and sophisticated image rendering techniques.",
        "Collaborated with UX teams to translate wireframes into pixel-perfect, interactive production web applications."
      ]
    }
  ];

  const education = [
    {
      school: "University of North Texas",
      degree: "MS in Advanced Data Analytics",
      duration: "2022 — 2023",
      gpa: "3.875/4.0",
      logo: "https://identity.unt.edu/sites/default/files/unt_logo_stacked_green_rgb_0.png"
    },
    {
      school: "NIIT University",
      degree: "B.Tech in Computer Science & Engineering",
      duration: "2016 — 2020",
      gpa: "6.58/10",
      logo: "https://www.niituniversity.in/wp-content/themes/niit/images/logo.png"
    }
  ];

  const skills = [
    "TypeScript", "JavaScript", "React.js", "Next.js", "Angular", "Vue.js", 
    "Tailwind CSS", "Framer Motion", "Redux", "Jest", "AWS", "Vercel"
  ];

  return (
    <div className="min-h-screen bg-[#020202] text-zinc-100 selection:bg-blue-600/40 font-sans overflow-x-hidden">
      
      {/* Premium Navbar */}
      <nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-black/40 backdrop-blur-2xl px-8 py-5 flex justify-between items-center">
        <span className="font-black tracking-tighter text-2xl uppercase">
          RR<span className="text-blue-600 italic">G</span>.
        </span>
        <div className="flex gap-8 text-[10px] font-black uppercase tracking-[0.3em] text-zinc-500">
          <a href="#work" className="hover:text-blue-500 transition-colors">Experience</a>
          <a href="#edu" className="hover:text-blue-500 transition-colors">Education</a>
          <a href="mailto:rushikreddy22@gmail.com" className="text-white border-b border-blue-600 pb-1">Contact</a>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto px-6 pt-44 pb-20">
        
        {/* Hero Section */}
        <motion.section {...fadeIn} className="relative mb-52">
          <div className="absolute -top-32 left-0 w-[500px] h-[500px] bg-blue-600/10 blur-[120px] rounded-full -z-10" />
          <h1 className="text-6xl md:text-9xl font-black tracking-tighter mb-8 leading-[0.85]">
            Senior <br /> 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-400 to-zinc-800">Front End</span> <br /> 
            Engineer.
          </h1>
          <p className="text-xl md:text-2xl text-zinc-500 max-w-2xl font-medium leading-relaxed mb-12">
            Specializing in high-performance UI architecture and immersive digital experiences for global industry leaders.
          </p>
          <div className="flex gap-4">
            <motion.a whileHover={{ scale: 1.05 }} href="#work" className="px-8 py-4 bg-white text-black font-black uppercase text-xs tracking-widest rounded-full">
              Explore Work
            </motion.a>
          </div>
        </motion.section>

        {/* Skill Marquee */}
        <section className="mb-52 border-y border-white/5 py-12 -mx-20 overflow-hidden bg-white/[0.02]">
          <div className="flex animate-marquee whitespace-nowrap">
            {skills.concat(skills).map((skill, i) => (
              <span key={i} className="text-5xl md:text-7xl font-black text-zinc-900 mx-10 hover:text-blue-600/40 transition-colors cursor-default uppercase italic tracking-tighter">
                {skill}
              </span>
            ))}
          </div>
        </section>

        {/* Experience Grid */}
        <section id="work" className="mb-52">
          <h2 className="text-xs font-black uppercase tracking-[0.5em] text-blue-600 mb-24">Professional Experience</h2>
          <div className="space-y-40">
            {experiences.map((exp, idx) => (
              <motion.div key={idx} {...fadeIn} className="grid grid-cols-1 md:grid-cols-12 gap-12 group">
                <div className="md:col-span-4 flex flex-col items-start">
                   <img src={exp.logo} alt={exp.company} className="h-10 w-auto grayscale brightness-200 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-700 mb-10" />
                   <h3 className="text-2xl font-bold mb-1 text-white">{exp.company}</h3>
                   <p className="text-blue-600 font-black text-xs uppercase tracking-widest mb-4">{exp.role}</p>
                   <div className="flex items-center gap-4 text-zinc-600 text-[10px] font-bold uppercase tracking-tighter">
                      <span className="flex items-center gap-1"><Calendar size={12}/> {exp.duration}</span>
                      <span className="flex items-center gap-1"><MapPin size={12}/> {exp.location}</span>
                   </div>
                </div>
                <div className="md:col-span-8 space-y-6 border-l border-white/5 pl-10 group-hover:border-blue-600 transition-colors duration-500">
                  {exp.highlights.map((h, i) => (
                    <p key={i} className="text-lg md:text-xl text-zinc-500 leading-relaxed group-hover:text-zinc-200 transition-colors">
                      {h}
                    </p>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Education Section */}
        <section id="edu" className="mb-52 relative">
          <div className="absolute -right-20 top-0 w-96 h-96 bg-blue-600/5 blur-[100px] rounded-full" />
          <h2 className="text-xs font-black uppercase tracking-[0.5em] text-zinc-600 mb-24 text-center">Academic Foundation</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {education.map((edu, idx) => (
              <motion.div 
                key={idx} 
                whileHover={{ y: -10, borderColor: "rgba(37, 99, 235, 0.3)" }}
                className="p-10 rounded-[3rem] bg-zinc-900/20 border border-white/5 backdrop-blur-3xl group overflow-hidden"
              >
                <img src={edu.logo} alt={edu.school} className="h-14 w-auto mb-10 grayscale group-hover:grayscale-0 transition-all duration-500" />
                <h3 className="text-2xl font-bold text-white mb-2">{edu.school}</h3>
                <p className="text-blue-600 font-bold mb-8 text-sm uppercase tracking-wide">{edu.degree}</p>
                <div className="flex justify-between items-end border-t border-white/5 pt-8">
                   <div>
                      <p className="text-[10px] uppercase font-black text-zinc-700 tracking-[0.2em] mb-1">Cumulative GPA</p>
                      <p className="text-2xl font-black text-white">{edu.gpa}</p>
                   </div>
                   <p className="text-[10px] font-black text-zinc-600 uppercase tracking-widest mb-1">{edu.duration}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer className="pt-32 border-t border-white/5 flex flex-col md:flex-row justify-between items-end gap-12">
          <div className="max-w-xl">
            <h2 className="text-5xl font-black text-white mb-6">Let&apos;s build something <span className="text-blue-600 italic font-outline-1">exceptional</span>.</h2>
            <p className="text-zinc-500 font-bold text-sm uppercase tracking-widest">Available for Senior Engineering roles worldwide.</p>
          </div>
          <div className="flex gap-6">
            <a href="mailto:rushikreddy22@gmail.com" className="p-6 rounded-full bg-white text-black hover:bg-blue-600 hover:text-white transition-all">
              <Mail size={28} />
            </a>
            <a href="https://www.linkedin.com/in/rushikreddy/" target="_blank" className="p-6 rounded-full bg-zinc-900 border border-white/10 text-white hover:bg-zinc-800 transition-all">
              <Linkedin size={28} />
            </a>
          </div>
        </footer>
      </main>

      {/* Global CSS for Marquee */}
      <style jsx global>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 40s linear infinite;
        }
        .font-outline-1 {
          -webkit-text-stroke: 1px white;
          color: transparent;
        }
      `}</style>
    </div>
  );
}

// Sub-component for icons/calendar (Importing missing icons)
function Calendar({ size }: { size: number }) {
  return <Briefcase size={size} />;
}