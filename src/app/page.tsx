"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useSound } from "@/providers/SoundProvider";
import { Github, Linkedin, Mail, Phone, Star, Zap, GraduationCap } from "lucide-react";

export default function Home() {
  const { play } = useSound();
  
  const skillsData = [
    // Languages
    { name: "Python", tier: "advanced", context: "3+ years", category: "Languages" },
    { name: "JS/TS", tier: "Beginner", context: "Frontend + Node", category: "Languages" },
    { name: "C++", tier: "intermediate", context: "Coursework/Projects", category: "Languages" },
    { name: "SQL", tier: "advanced", context: "Postgres/MySQL/MSSQL", category: "Languages" },
    { name: "HTML/CSS", tier: "intermediate", context: "Semantic UI", category: "Languages" },

    // Frameworks & Libraries
    { name: "React", tier: "intermediate", context: "Multiple projects", category: "Frameworks" },
    { name: "Next.js", tier: "intermediate", context: "App Router", category: "Frameworks" },
    { name: "FastAPI", tier: "intermediate", context: "ML/Services", category: "Frameworks" },

    // Backend & Infra
    { name: "Node.js", tier: "intermediate", context: "Services/Workers", category: "Backend/Infra" },
    { name: "Docker", tier: "beginner", context: "Dev/Deploy", category: "Backend/Infra" },
    { name: "AWS", tier: "beginner", context: "Infra", category: "Backend/Infra" },
    { name: "GCP", tier: "beginner", context: "Cloud", category: "Backend/Infra" },
    { name: "Git", tier: "advanced", context: "Daily driver", category: "Backend/Infra" },

    // Data Platforms
    { name: "Spark", tier: "intermediate", context: "Data processing", category: "Data" },
    { name: "Databricks", tier: "beginner", context: "Warehouse", category: "Data" },
    { name: "PostgreSQL", tier: "intermediate", context: "Prod usage", category: "Data" }
  ] as const;

  const categoryOrder = ["Languages", "Frameworks", "Data", "Backend/Infra"] as const;
  const orderedSkills = skillsData
    .slice()
    .sort((a, b) => categoryOrder.indexOf(a.category as any) - categoryOrder.indexOf(b.category as any));
  const columns = 4;
  const rows = 4;
  const totalSlots = rows * columns; // 16 slots
  const limitedSkills = orderedSkills.slice(0, totalSlots);
  const paddedSkills = Array.from({ length: totalSlots }, (_, i) => limitedSkills[i] || null);

  return (
    <div className="min-h-screen overflow-hidden">
      <div className="relative mx-auto max-w-6xl px-6 py-16">
        
        {/* Simple Minecraft Header */}
        <header className="minecraft-header">
          <div className="minecraft-title">
            <h1>TAEDON RETH</h1>
            <p className="subtitle">Software Engineer!</p>
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
            
            <a className="minecraft-menu-btn small" href="/resume.pdf" download="Taedon_Reth_Resume.pdf">
              Resume
            </a>
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
                <div className="minecraft-text">Class: Software Engineer</div>
                <div className="minecraft-text">Location: Bay Area </div>
              </div>
              <div>
                <div className="minecraft-text mb-4 text-center">"4th year CS major who loves to explore new technology and build meaningful applications. When I'm not coding, I love to get outside, exercise, and try new foods."</div>
                <div className="minecraft-text font-bold mb-2">CURRENT QUEST:</div>
                <div className="minecraft-text mb-2">"Optimization and Scalability"</div>
                <div className="minecraft-text font-bold mb-2">GUILD: UCSB</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            id="projects"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="minecraft-panel mc-inventory-panel"
          >
            <div className="minecraft-panel-title">TECHNICAL INVENTORY</div>
            <div className="mc-chest">
              <div className="mc-chest-grid" style={{ gridTemplateColumns: `repeat(${columns}, 1fr)` }}>
                {paddedSkills.map((skill, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.2, delay: 0.4 + (index % columns) * 0.03 }}
                    className={`mc-slot ${skill ? `mc-slot--tier-${skill.tier}` : 'mc-slot--empty'}`}
                  >
                    {skill && (
                      <>
                        <div className="mc-slot-label">{skill.name}</div>
                        <div className="mc-tooltip">
                          {`${skill.name} • ${skill.tier[0].toUpperCase()}${skill.tier.slice(1)} • ${skill.context}`}
                        </div>
                      </>
                    )}
                  </motion.div>
                ))}
              </div>
              <div className="mc-chest-legend">
                <span className="legend-item legend-beginner">Beginner</span>
                <span className="legend-item legend-intermediate">Intermediate</span>
                <span className="legend-item legend-advanced">Advanced</span>
              </div>
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