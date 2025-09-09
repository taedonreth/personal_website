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
    { name: "Backend Development", level: 90, color: "from-accent-primary to-accent-secondary" },
    { name: "Data Platforms", level: 85, color: "from-accent-primary to-accent-secondary" },
    { name: "AI/ML Systems", level: 75, color: "from-accent-primary to-accent-secondary" },
    { name: "Infrastructure", level: 88, color: "from-accent-primary to-accent-secondary" },
    { name: "Problem Solving", level: 95, color: "from-highlight to-yellow-400" }
  ];

  const achievements = [
    {
      icon: <Star className="w-6 h-6 text-highlight" />,
      title: "Triple Internship Master",
      description: "Completed internships at 3 major tech companies in different domains. Rare achievement!",
      rarity: "LEGENDARY"
    },
    {
      icon: <Zap className="w-6 h-6 text-accent-primary" />,
      title: "Data Platform Architect",
      description: "Successfully shipped optimization and infrastructure improvements across multiple companies",
      rarity: "EPIC"
    },
    {
      icon: <GraduationCap className="w-6 h-6 text-accent-secondary" />,
      title: "Academic Warrior",
      description: "Maintained excellence while gaining real-world experience. Progress: 75% to graduation",
      rarity: "RARE"
    }
  ];

  return (
    <div className="min-h-screen overflow-hidden">
      <div className="relative mx-auto max-w-6xl px-6 py-16 space-y-12">
        
        {/* Character Sheet Header */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="character-sheet p-8 text-center"
        >
          <div className="relative mb-6">
            <div className="absolute -inset-3 rounded-2xl bg-gradient-to-b from-accent-primary/40 to-transparent blur-lg animate-pulse" />
            <div className="relative mx-auto w-40 h-40 rounded-2xl overflow-hidden border-2 border-accent-primary/50">
              <Image src="/avatar.png" alt="Taedon Reth" width={160} height={160} className="w-full h-full object-cover" />
            </div>
          </div>
          <h1 className="character-name mb-4">TAEDON RETH</h1>
          <p className="character-class mb-2">Class: Full-Stack Developer</p>
          <p className="text-rpg-body text-lg mb-2">Level 26 • 4th Year CS Student</p>
          <p className="text-rpg-body text-base text-text-muted">Leveraging data and technology to solve real-world challenges</p>
        </motion.section>

        {/* Character Profile Stats */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="character-sheet p-8"
        >
          <h2 className="section-header mb-6">Character Profile</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-rpg-accent text-lg font-semibold mb-4">Personal Info</h3>
              <div className="space-y-2">
                <div className="stat-item">
                  <span className="stat-label">Name:</span>
                  <span className="stat-value">Taedon Reth</span>
                </div>
                <div className="stat-item">
                  <span className="stat-label">Class:</span>
                  <span className="stat-value">Software Engineer</span>
                </div>
                <div className="stat-item">
                  <span className="stat-label">Level:</span>
                  <span className="stat-value">26</span>
                </div>
                <div className="stat-item">
                  <span className="stat-label">Location:</span>
                  <span className="stat-value">UC Santa Barbara</span>
                </div>
                <div className="stat-item">
                  <span className="stat-label">Status:</span>
                  <span className="stat-value">Final Year Student</span>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-rpg-accent text-lg font-semibold mb-4">Skill Trees</h3>
              <div className="space-y-3">
                {skillTrees.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                    className="space-y-1"
                  >
                    <div className="flex justify-between text-sm">
                      <span className="text-text-primary">{skill.name}</span>
                      <span className="text-rpg-accent">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <div 
                        className={`skill-progress bg-gradient-to-r ${skill.color}`}
                        style={{ '--progress-width': `${skill.level}%` } as React.CSSProperties}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.section>

        {/* Achievement Gallery */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="character-sheet p-8"
        >
          <h2 className="section-header mb-6">Achievements Unlocked</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                className="achievement-badge"
              >
                <div className="flex items-center gap-3 mb-3">
                  {achievement.icon}
                  <div>
                    <div className="achievement-title">{achievement.title}</div>
                    <div className="text-xs text-rpg-highlight font-semibold">[{achievement.rarity}]</div>
                  </div>
                </div>
                <div className="achievement-description">{achievement.description}</div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Skills Section */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="character-sheet p-8"
        >
          <h2 className="section-header mb-6">Technical Arsenal</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {skills.map((skill, index) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 0.8 + index * 0.02 }}
                whileHover={{ scale: 1.05 }}
                className="skill-badge cursor-pointer"
              >
                {skill}
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Contact Section */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="character-sheet p-8"
        >
          <h2 className="section-header mb-6">Contact</h2>
          <div className="flex flex-wrap gap-4 justify-center">
            <motion.a
              href="https://linkedin.com/in/taedonreth"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onMouseEnter={() => play("hover")}
              onClick={() => play("click")}
              className="flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-blue-600 to-blue-500 text-white font-medium hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300"
            >
              <Linkedin size={20} />
              LinkedIn
            </motion.a>
            
            <motion.a
              href="https://github.com/taedonreth"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onMouseEnter={() => play("hover")}
              onClick={() => play("click")}
              className="flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-gray-800 to-gray-700 text-white font-medium hover:shadow-lg hover:shadow-gray-500/30 transition-all duration-300"
            >
              <Github size={20} />
              GitHub
            </motion.a>
            
            <motion.a
              href="mailto:taedonreth@ucsb.edu"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onMouseEnter={() => play("hover")}
              onClick={() => play("click")}
              className="flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-accent-primary to-accent-secondary text-white font-medium hover:shadow-lg hover:shadow-accent-primary/30 transition-all duration-300"
            >
              <Mail size={20} />
              Email
            </motion.a>
            
            <motion.a
              href="tel:+1234567890"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onMouseEnter={() => play("hover")}
              onClick={() => play("click")}
              className="flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-highlight to-yellow-400 text-white font-medium hover:shadow-lg hover:shadow-highlight/30 transition-all duration-300"
            >
              <Phone size={20} />
              Phone
            </motion.a>
          </div>
        </motion.section>

      </div>
    </div>
  );
}
