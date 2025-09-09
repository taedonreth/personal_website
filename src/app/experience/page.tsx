"use client";

import { motion } from "framer-motion";

export default function ExperiencePage() {
  const achievements = [
    { icon: "🏆", title: "AMD INTERNSHIP COMPLETE", description: "Master of Infrastructure Optimization", rarity: "[RARE]" },
    { icon: "⚡", title: "TESLA DATA PLATFORM HERO", description: "Shipped optimization across platforms", rarity: "[EPIC]" },
    { icon: "🧬", title: "GENENTECH BACKEND MASTER", description: "Built robust backend systems", rarity: "[LEGENDARY]" },
    { icon: "🎓", title: "UCSB CS DEGREE", description: "Academic Excellence Achievement", rarity: "[IN PROGRESS]" },
  ];

  return (
    <div className="mx-auto max-w-6xl px-6 py-12">
      <section className="minecraft-panel">
        <div className="minecraft-panel-title">ACHIEVEMENTS UNLOCKED</div>
        <div className="space-y-4">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.title}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              className="minecraft-achievement"
            >
              <div className="flex items-center gap-3 mb-2">
                <span className="text-2xl">{achievement.icon}</span>
                <div>
                  <div className="minecraft-achievement-title">{achievement.title}</div>
                  <div className="minecraft-achievement-rarity">{achievement.rarity}</div>
                </div>
              </div>
              <div className="minecraft-achievement-description">"{achievement.description}"</div>
              {achievement.title === "UCSB CS DEGREE" && (
                <div className="mt-2">
                  <div className="minecraft-text text-sm mb-1">Progress: ████████░░ 75% Complete</div>
                  <div className="minecraft-progress">
                    <div className="minecraft-progress-fill" style={{ width: '75%' }} />
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}


