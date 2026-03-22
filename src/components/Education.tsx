"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { education } from "@/lib/data";

export default function Education() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="education" ref={ref} className="py-24 px-6 md:px-12 lg:px-24 bg-surface/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-4 mb-16"
        >
          <span className="font-mono text-accent text-sm tracking-widest">05.</span>
          <h2 className="text-3xl md:text-4xl font-bold theme-text">Education</h2>
          <div className="flex-1 h-px bg-gradient-to-r from-[rgba(var(--accent-rgb),0.22)] to-transparent ml-4" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {education.map((edu, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.2, duration: 0.6 }}
              whileHover={{ y: -4 }}
              className="glass rounded-2xl p-8 relative overflow-hidden group cursor-default"
            >
              {/* Gradient accent bar */}
              <div
                className="absolute top-0 left-0 right-0 h-1 rounded-t-2xl transition-all duration-300 group-hover:h-1.5"
                style={{ background: `linear-gradient(90deg, ${edu.color}, transparent)` }}
              />

              {/* Logo badge */}
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 font-bold theme-text text-sm overflow-hidden"
                style={{ background: `${edu.color}20`, border: `1px solid ${edu.color}40` }}
              >
                {"logoImage" in edu && edu.logoImage ? (
                  <img
                    src={edu.logoImage}
                    alt={`${edu.school} logo`}
                    className="w-9 h-9 object-contain"
                  />
                ) : (
                  edu.logo
                )}
              </div>

              <div className="flex items-start justify-between gap-4 mb-1">
                <h3 className="text-xl font-bold theme-text leading-snug">{edu.degree}</h3>
                <span className="text-text-secondary text-xs md:text-sm font-mono whitespace-nowrap mt-1">
                  {edu.period}
                </span>
              </div>

              <p className="font-medium mb-1" style={{ color: edu.color }}>
                {edu.school}
              </p>
              <p className="text-text-secondary text-sm mb-1">{edu.subtitle}</p>
              <p className="text-text-secondary text-xs font-mono mb-5">📍 {edu.location}</p>

              {/* Skills */}
              <div className="flex flex-wrap gap-2">
                {edu.skills.map((s) => (
                  <span
                    key={s}
                    className="text-xs font-mono px-2 py-1 rounded"
                    style={{
                      color: edu.color,
                      background: `${edu.color}10`,
                      border: `1px solid ${edu.color}20`,
                    }}
                  >
                    {s}
                  </span>
                ))}
              </div>

              {/* Background glow */}
              <div
                className="absolute bottom-0 right-0 w-40 h-40 rounded-full blur-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none"
                style={{ background: edu.color }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
