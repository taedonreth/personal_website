"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useSound } from "@/providers/SoundProvider";
import { Github, Linkedin, Mail, Phone, Star, Zap, GraduationCap } from "lucide-react";

export default function Home() {
  const { play } = useSound();
  
  const skills = [
    "Python", "JavaScript", "TypeScript", "C++", "Java", "CSS", "HTML", "SQL",
    "React", "Next.js", "FastAPI", "Node.js", "Express", "Tailwind CSS",
    "Spark", "Airflow", "Git", "PostgreSQL", "MongoDB", "Firebase", "MySQL",
    "Microsoft SQL Server", "AWS", "Azure", "Snowflake", "Docker"
  ];

  const skillTrees = [
    { name: "Backend Development", level: 90 },
    { name: "Data Platforms", level: 85 },
    { name: "AI/ML Systems", level: 75 },
    { name: "Infrastructure", level: 88 },
    { name: "Problem Solving", level: 95 }
  ];

  const achievements = [
    {
      icon: "🏆",
      title: "AMD INTERNSHIP COMPLETE",
      description: "Master of Infrastructure Optimization",
      rarity: "[RARE]"
    },
    {
      icon: "⚡",
      title: "TESLA DATA PLATFORM HERO",
      description: "Shipped optimization across platforms",
      rarity: "[EPIC]"
    },
    {
      icon: "🧬",
      title: "GENENTECH BACKEND MASTER",
      description: "Built robust backend systems",
      rarity: "[LEGENDARY]"
    },
    {
      icon: "🎓",
      title: "UCSB CS DEGREE",
      description: "Academic Excellence Achievement",
      rarity: "[IN PROGRESS]"
    }
  ];

  return (
    <div className="min-h-screen overflow-hidden">
      <div className="relative mx-auto max-w-6xl px-6 py-16">
        
        {/* Simple Minecraft Header */}
        <header className="minecraft-header">
          <div className="minecraft-title">
            <h1>TAEDON RETH</h1>
            <p className="subtitle">Full-Stack Developer</p>
          </div>
        </header>

        {/* Main Menu Buttons */}
        <div className="minecraft-main-menu">
          
          <button className="minecraft-menu-btn" onClick={() => window.location.href = '/experience'}>
            Experience
          </button>
          
          <button className="minecraft-menu-btn" onClick={() => window.location.href = '/projects'}>
            Projects
          </button>
          
          <button className="minecraft-menu-btn" onClick={() => window.location.href = '/interests'}>
            Interests
          </button>

          <button className="minecraft-menu-btn" onClick={() => window.location.href = '/newsletter'}>
            Newsletter
          </button>
          
          <div className="minecraft-menu-row">
            <button className="minecraft-menu-btn small" onClick={() => window.location.href = '#contact'}>
              Contact
            </button>
            
            <button className="minecraft-menu-btn small" onClick={() => window.open('/resume.pdf', '_blank')}>
              Resume
            </button>
          </div>

        </div>

        {/* Profile + Skills side-by-side */}
        <section className="mt-16 grid md:grid-cols-2 gap-5">
          <motion.div
            id="about"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="minecraft-panel"
          >
            <div className="minecraft-panel-title">PLAYER PROFILE</div>
            <div className="grid grid-cols-1 gap-6">
              <div className="text-center">
                <Image src="/avatar.png" alt="Taedon Reth" width={64} height={64} className="mx-auto mb-4 pixelated" style={{imageRendering: 'pixelated'}} />
                <div className="minecraft-text text-lg font-bold">TAEDON RETH</div>
                <div className="minecraft-text">Level 26 Developer</div>
                <div className="minecraft-text">Class: Full-Stack Engineer</div>
                <div className="minecraft-text">Location: UC Santa Barbara</div>
              </div>
              <div>
                <div className="minecraft-text font-bold mb-2">BIO:</div>
                <div className="minecraft-text mb-4">"4th year CS major leveraging data and technology to solve real-world challenges. Focused on backend, data platforms, and AI systems."</div>
                <div className="minecraft-text font-bold mb-2">CURRENT QUEST:</div>
                <div className="minecraft-text mb-2">"Building Scalable Systems"</div>
                <div className="minecraft-text font-bold mb-2">GUILD: "UCSB"</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            id="projects"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="minecraft-panel"
          >
            <div className="minecraft-panel-title">TECHNICAL ARSENAL</div>
            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-2">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.8 + index * 0.02 }}
                  className="minecraft-text text-center text-[11px] p-2 bg-gray-600 border border-gray-400 hover:bg-gray-500 transition-colors cursor-pointer"
                >
                  {skill}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Skill Crafting Table removed from hub */}

        {/* Experience section moved to its own page; intentionally empty here */}

        

        {/* Contact Section */}
        <motion.section 
          id="contact"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.3 }}
          className="minecraft-sign mt-8"
        >
          <h2 className="minecraft-sign-title">CONNECT WITH ME</h2>
          <div className="minecraft-sign-links">
            <a
              href="https://linkedin.com/in/taedonreth"
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() => play("hover")}
              onClick={() => play("click")}
              className="minecraft-sign-link minecraft-sign-chip"
            >
              LinkedIn
            </a>
            
            <a
              href="https://github.com/taedonreth"
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() => play("hover")}
              onClick={() => play("click")}
              className="minecraft-sign-link minecraft-sign-chip"
            >
              GitHub
            </a>
          </div>
          <div className="minecraft-sign-info">
            <span className="minecraft-sign-link">taedonreth@gmail.com</span>
            <span className="minecraft-sign-link">510-908-3944</span>
          </div>
        </motion.section>

        {/* Footer */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.5 }}
          className="text-center mt-12 minecraft-text text-sm"
        >
          <div>Taedon Reth Portfolio v1.0.0</div>
          <div>Not affiliated with Mojang Studios</div>
        </motion.div>

      </div>
    </div>
  );
}
