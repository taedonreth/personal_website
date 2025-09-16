"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { useSound } from "@/providers/SoundProvider";

interface Experience {
  id: string;
  icon: string;
  title: string;
  position: string;
  location: string;
  dates: string;
  rarity: string;
  description: string;
  details: string[];
}

export default function ExperiencePage() {
  const { play } = useSound();
  const [selectedExperience, setSelectedExperience] = useState<Experience | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const experiences = [
    {
      id: "zoox",
      icon: "🚗",
      title: "ZOOX",
      position: "Software Engineer",
      location: "Foster City, CA",
      dates: "June 2025 – Present",
      rarity: "[LEGENDARY]",
      description: "Testing and Integration Pipelines",
      details: [
        "Engineered a unified, Python-based workflow that automates master health validation, saving 12 hours of manual effort weekly. Managing automated test execution, triaging failures, and reverting PRs that introduce regressions in real-time.",
        "Overhauled the CI pipeline by eliminating low-value tests while optimizing coverage, which cut PR validation time by 60% and significantly increased code throughput."
      ]
    },
    {
      id: "benioff",
      icon: "🌊",
      title: "BENIOFF OCEAN SCIENCE LABORATORY",
      position: "Software Engineer Intern",
      location: "Santa Barbara, CA",
      dates: "January 2025 – June 2025",
      rarity: "[EPIC]",
      description: "Educational Technology Development",
      details: [
        "Developed a React-based single-page application (SPA) with Tailwind CSS and Canvas API, creating interactive minigames to teach children key computer vision concepts such as data quality, annotation, and model accuracy.",
        "Showcased the game at the UN Ocean Conference in France; integrated into classrooms and clubs at Goleta Elementary School to teach over 500 students computer vision concepts, demonstrating real-world educational impact and global reach."
      ]
    },
    {
      id: "ucsb-cs",
      icon: "🎓",
      title: "UCSB COMPUTER SCIENCE DEPARTMENT",
      position: "Undergraduate Learning Assistant (CS 16: Intro to C++)",
      location: "Santa Barbara, CA",
      dates: "September 2024 – December 2024",
      rarity: "[RARE]",
      description: "Computer Science Education",
      details: [
        "Assisted 100+ students in understanding core C++ concepts, debugging code, and developing problem-solving strategies in lab sections. Led additional exam preparation study sessions, improving student grades, engagement, and programming progress.",
        "Held lab and drop-in sessions to further reinforce class material such as: frequent testing, avoiding repetition, and consistency."
      ]
    },
    {
      id: "ucsb-stats",
      icon: "📊",
      title: "UCSB STATISTICS DEPARTMENT",
      position: "Data Science Research Assistant (Under Dario Ochoa)",
      location: "Santa Barbara, CA",
      dates: "November 2022 – June 2023",
      rarity: "[RARE]",
      description: "Data Science Research",
      details: [
        "Collaborated with PhD student to conduct a data collection experiment of 150+ participants. Analyzed relationships between economic decisions and player psychology using R Studio and linear regression, yielding 10% more accurate predictions.",
        "Utilized excel to organize, format, and accentuate information from survey results, alleviated weeks of manual parsing."
      ]
    }
  ];

  const handleExperienceClick = (experience: Experience) => {
    setSelectedExperience(experience);
    setIsModalOpen(true);
    play("click");
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedExperience(null);
    play("hover");
  };

  return (
    <div className="mx-auto max-w-[70rem] px-6 py-12">
      <section className="minecraft-panel">
        <div className="minecraft-panel-title">EXPERIENCE LOG</div>
        <div className="space-y-4">
          {experiences.map((experience, index) => (
            <motion.div
              key={experience.id}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              className="minecraft-achievement cursor-pointer hover:scale-105 transition-transform duration-200"
              onClick={() => handleExperienceClick(experience)}
              onMouseEnter={() => play("hover")}
            >
              <div className="flex items-center gap-3 mb-2">
                <span className="text-2xl">{experience.icon}</span>
                <div className="flex-1">
                  <div className="minecraft-achievement-title">{experience.title}</div>
                  <div className="minecraft-achievement-rarity">{experience.rarity}</div>
                </div>
                <div className="text-right text-sm minecraft-text">
                  <div className="text-yellow-400">{experience.dates}</div>
                  <div className="text-gray-300">{experience.location}</div>
                </div>
              </div>
              <div className="minecraft-achievement-description mb-2">&ldquo;{experience.description}&rdquo;</div>
              <div className="text-sm minecraft-text text-gray-300">
                {experience.position}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Experience Detail Modal */}
      {isModalOpen && selectedExperience && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          onClick={closeModal}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />
          
          {/* Modal Content */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0, y: 50 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.8, opacity: 0, y: 50 }}
            transition={{ 
              type: "spring", 
              stiffness: 300, 
              damping: 30,
              duration: 0.4 
            }}
            className="relative minecraft-panel minecraft-modal max-w-[70rem] w-full max-h-[85vh] overflow-y-auto p-8"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-white hover:text-yellow-400 transition-colors text-xl z-10"
              onMouseEnter={() => play("hover")}
            >
              ✕
            </button>

            {/* Modal Header */}
            <div className="flex items-center gap-3 mb-4">
              <span className="text-3xl">{selectedExperience.icon}</span>
              <div>
                <div className="minecraft-achievement-title text-xl">{selectedExperience.title}</div>
                <div className="minecraft-achievement-rarity">{selectedExperience.rarity}</div>
              </div>
            </div>

            {/* Position and Dates */}
            <div className="mb-4 space-y-2">
              <div className="minecraft-text text-lg font-semibold text-yellow-400">
                {selectedExperience.position}
              </div>
              <div className="minecraft-text text-gray-300">
                {selectedExperience.location} • {selectedExperience.dates}
              </div>
            </div>

            {/* Description */}
            <div className="minecraft-achievement-description mb-6">
              &ldquo;{selectedExperience.description}&rdquo;
            </div>

            {/* Details */}
            <div className="space-y-4">
              <div className="minecraft-text font-semibold text-yellow-400 mb-4">
                KEY ACHIEVEMENTS:
              </div>
              {selectedExperience.details.map((detail: string, index: number) => (
                <div key={index} className="minecraft-text text-lg leading-relaxed flex items-start gap-3 p-4 bg-gray-800/30 rounded">
                  <span className="text-yellow-400 mt-1 text-lg">•</span>
                  <span className="flex-1">{detail}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}


