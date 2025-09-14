"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { useSound } from "@/providers/SoundProvider";

interface Project {
  id: string;
  icon: string;
  title: string;
  techStack: string;
  dates: string;
  rarity: string;
  description: string;
  details: string[];
  githubUrl: string;
}


export default function ProjectsPage() {
  const { play } = useSound();

  const projects: Project[] = [
    {
      id: "gaucho-graduate",
      icon: "🎓",
      title: "GAUCHO GRADUATE",
      techStack: "React, Next.js, TypeScript, Node.js, Prisma ORM, PostgreSQL",
      dates: "",
      rarity: "[LEGENDARY]",
      description: "Full-stack course planning app with automated catalog processing, drag-and-drop scheduling, and OAuth integration for UCSB students.",
      details: [],
      githubUrl: "https://github.com/ucsb-cs148-w25/pj03-gauchograduate"
    },
    {
      id: "traveler",
      icon: "✈️",
      title: "TRAVELER",
      techStack: "React, JavaScript, Node.js, OpenAI API, OpenWeather API",
      dates: "",
      rarity: "[RARE]",
      description: "AI-powered travel planning web app with drag-and-drop itinerary building, real-time weather integration, and intelligent travel recommendations.",
      details: [],
      githubUrl: "https://github.com/taedonreth/Traveler"
    },
    {
      id: "personal-website",
      icon: "🌐",
      title: "PERSONAL WEBSITE",
      techStack: "Next.js, React, TypeScript, Tailwind CSS, Framer Motion",
      dates: "",
      rarity: "[RARE]",
      description: "Personal website displaying my past and current experiences and projects including personal thoughts about my journey to becoming the best engineer possible.",
      details: [],
      githubUrl: "https://github.com/taedonreth/personal_website"
    },
    {
      id: "digit-recognition",
      icon: "🧠",
      title: "DIGIT RECOGNITION",
      techStack: "Python, NumPy, Matplotlib, Jupyter Notebook",
      dates: "",
      rarity: "[RARE]",
      description: "Neural network built from scratch using Python for handwritten digit recognition, achieving 82% accuracy on MNIST dataset with data preprocessing and visualization.",
      details: [],
      githubUrl: "https://github.com/taedonreth/Digit-Recognition"
    }
  ];


  return (
    <div className="mx-auto max-w-[90rem] px-6 py-12">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h1 className="minecraft-title text-4xl mb-4">PROJECT ARSENAL</h1>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-16">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="group"
          >
            {/* Project Card */}
            <div className="minecraft-panel h-full hover:scale-102 transition-all duration-200 hover:shadow-lg hover:shadow-yellow-500/10">
              {/* Project Header */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <span className="text-3xl">{project.icon}</span>
                  <div>
                    <div className="minecraft-achievement-title text-lg">{project.title}</div>
                    <div className="minecraft-achievement-rarity text-sm">{project.rarity}</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-xs minecraft-text text-yellow-400">{project.dates}</div>
                </div>
              </div>

              {/* Tech Stack */}
              <div className="mb-4">
                <div className="minecraft-text text-sm font-semibold text-yellow-400 mb-2">
                  TECH STACK:
                </div>
                <div className="minecraft-text text-sm text-gray-300">
                  {project.techStack}
                </div>
              </div>

              {/* Project Description */}
              <div className="minecraft-achievement-description mb-6 text-sm leading-relaxed">
                {project.description} {project.details.join(' ')}
              </div>

              {/* GitHub Button */}
              <div className="text-center">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="minecraft-menu-btn small inline-block"
                  onMouseEnter={() => play("hover")}
                  onClick={() => play("click")}
                >
                  View on GitHub
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Stats Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="mt-32 minecraft-panel"
      >
        <div className="minecraft-panel-title mb-6">DEVELOPMENT STATS</div>
        <div className="space-y-6">
          {/* Frontend Skills */}
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="minecraft-text text-sm font-semibold text-yellow-400">FRONTEND</span>
              <span className="minecraft-text text-sm text-gray-300">40%</span>
            </div>
            <div className="minecraft-progress">
              <motion.div 
                className="minecraft-progress-fill"
                initial={{ width: 0 }}
                animate={{ width: '40%' }}
                transition={{ duration: 1.5, delay: 1.0 }}
              />
            </div>
          </div>

          {/* Backend Skills */}
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="minecraft-text text-sm font-semibold text-yellow-400">BACKEND</span>
              <span className="minecraft-text text-sm text-gray-300">60%</span>
            </div>
            <div className="minecraft-progress">
              <motion.div 
                className="minecraft-progress-fill"
                initial={{ width: 0 }}
                animate={{ width: '60%' }}
                transition={{ duration: 1.5, delay: 1.2 }}
              />
            </div>
          </div>

          {/* Databases Skills */}
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="minecraft-text text-sm font-semibold text-yellow-400">DATABASES</span>
              <span className="minecraft-text text-sm text-gray-300">55%</span>
            </div>
            <div className="minecraft-progress">
              <motion.div 
                className="minecraft-progress-fill"
                initial={{ width: 0 }}
                animate={{ width: '55%' }}
                transition={{ duration: 1.5, delay: 1.4 }}
              />
            </div>
          </div>

          {/* Deployment/Production Skills */}
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="minecraft-text text-sm font-semibold text-yellow-400">DEPLOYMENT/PRODUCTION</span>
              <span className="minecraft-text text-sm text-gray-300">50%</span>
            </div>
            <div className="minecraft-progress">
              <motion.div 
                className="minecraft-progress-fill"
                initial={{ width: 0 }}
                animate={{ width: '50%' }}
                transition={{ duration: 1.5, delay: 1.6 }}
              />
            </div>
          </div>
        </div>
      </motion.div>

    </div>
  );
}


