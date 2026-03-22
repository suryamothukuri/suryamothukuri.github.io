"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { skills } from "@/lib/data";

const categoryIcons: Record<string, string> = {
  "Languages & Libraries": "⚡",
  "AI & NLP": "🧠",
  "Machine Learning & Modeling": "🔧",
  "Data Handling & Analysis": "📈",
  "BI & Visualization": "📊",
  "Databases & Tools": "🗄️",
};

const categoryStyles: Record<string, { color: string; rgb: string }> = {
  "Languages & Libraries": {
    color: "var(--accent)",
    rgb: "var(--accent-rgb)",
  },
  "AI & NLP": {
    color: "#7c3aed",
    rgb: "124, 58, 237",
  },
  "Machine Learning & Modeling": {
    color: "#f59e0b",
    rgb: "245, 158, 11",
  },
  "Data Handling & Analysis": {
    color: "#10b981",
    rgb: "16, 185, 129",
  },
  "BI & Visualization": {
    color: "#f43f5e",
    rgb: "244, 63, 94",
  },
  "Databases & Tools": {
    color: "#8b5cf6",
    rgb: "139, 92, 246",
  },
};

const allSkillsFlat = Object.entries(skills).flatMap(([cat, list]) =>
  list.map((skill) => ({
    skill,
    style: categoryStyles[cat] || {
      color: "var(--accent)",
      rgb: "var(--accent-rgb)",
    },
  })),
);

export default function Skills() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="skills" ref={ref} className="py-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-4 mb-16"
        >
          <span className="font-mono text-accent text-sm tracking-widest">03.</span>
          <h2 className="text-3xl md:text-4xl font-bold theme-text">Skills</h2>
          <div className="flex-1 h-px bg-gradient-to-r from-[rgba(var(--accent-rgb),0.22)] to-transparent ml-4" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mb-16">
          {Object.entries(skills).map(([category, skillList], ci) => {
            const style = categoryStyles[category] || {
              color: "var(--accent)",
              rgb: "var(--accent-rgb)",
            };
            const icon = categoryIcons[category] || "◆";

            return (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: ci * 0.08, duration: 0.5 }}
                whileHover={{ y: -4 }}
                className="glass rounded-2xl p-6 transition-all duration-300 group"
              >
                <div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    background: `radial-gradient(ellipse at top left, rgba(${style.rgb}, 0.08) 0%, transparent 60%)`,
                  }}
                />

                <div
                  className="absolute top-0 left-6 right-6 h-px rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: `linear-gradient(90deg, transparent, rgba(${style.rgb}, 0.38), transparent)`,
                  }}
                />

                <div className="flex items-center gap-3 mb-5 relative z-10">
                  <div
                    className="w-9 h-9 rounded-xl flex items-center justify-center text-lg flex-shrink-0 transition-transform duration-300 group-hover:scale-110"
                    style={{
                      background: `rgba(${style.rgb}, 0.1)`,
                      border: `1px solid rgba(${style.rgb}, 0.22)`,
                      color: style.color,
                    }}
                  >
                    {icon}
                  </div>
                  <h3 className="font-semibold theme-text text-sm">{category}</h3>
                </div>

                <div className="flex flex-wrap gap-2 relative z-10">
                  {skillList.map((skill, si) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.75 }}
                      animate={inView ? { opacity: 1, scale: 1 } : {}}
                      transition={{
                        delay: ci * 0.08 + si * 0.035 + 0.15,
                        duration: 0.3,
                      }}
                      whileHover={{ scale: 1.1, y: -2 }}
                      className="text-xs font-mono px-2.5 py-1 rounded-lg cursor-default transition-all duration-200 border"
                      style={{
                        color: style.color,
                        background: `rgba(${style.rgb}, 0.08)`,
                        borderColor: `rgba(${style.rgb}, 0.24)`,
                      }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="relative overflow-hidden"
        >
          <div
            className="absolute left-0 top-0 bottom-0 w-20 z-10 pointer-events-none"
            style={{
              background: "linear-gradient(90deg, var(--bg), transparent)",
            }}
          />
          <div
            className="absolute right-0 top-0 bottom-0 w-20 z-10 pointer-events-none"
            style={{
              background: "linear-gradient(270deg, var(--bg), transparent)",
            }}
          />

          <div className="marquee-track flex gap-0 w-max py-2">
            {[...allSkillsFlat, ...allSkillsFlat].map(({ skill, style }, i) => (
              <div key={i} className="flex items-center gap-0 whitespace-nowrap">
                <span
                  className="text-sm font-mono px-4 py-1.5 rounded-full mx-2 transition-all duration-200 border"
                  style={{
                    color: style.color,
                    background: `rgba(${style.rgb}, 0.08)`,
                    borderColor: `rgba(${style.rgb}, 0.24)`,
                  }}
                >
                  {skill}
                </span>
                <span className="theme-text-muted text-xs mx-1">◆</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
