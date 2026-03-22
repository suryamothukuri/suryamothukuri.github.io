"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { experiences } from "@/lib/data";

export default function Experience() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="experience" ref={ref} className="py-24 px-6 md:px-12 lg:px-24 bg-surface/30">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-4 mb-16"
        >
          <span className="font-mono text-accent text-sm tracking-widest">02.</span>
          <h2 className="text-3xl md:text-4xl font-bold theme-text">Experience</h2>
          <div className="flex-1 h-px bg-gradient-to-r from-[rgba(var(--accent-rgb),0.22)] to-transparent ml-4" />
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <motion.div
            initial={{ scaleY: 0 }}
            animate={inView ? { scaleY: 1 } : {}}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            className="absolute left-4 md:left-8 top-0 bottom-0 w-px origin-top experience-line"
          />

          <div className="space-y-10">
            {experiences.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -40 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.2 + i * 0.15, duration: 0.6, ease: "easeOut" }}
                className="relative pl-12 md:pl-20"
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-4 top-1 flex items-center justify-center">
                  <div
                    className="w-8 h-8 rounded-full border-2 flex items-center justify-center z-10"
                    style={
                      exp.current
                        ? {
                            borderColor: "rgba(var(--accent-rgb), 0.9)",
                            background: "rgba(var(--accent-rgb), 0.16)",
                            boxShadow:
                              "0 0 0 10px rgba(var(--accent-rgb), 0.05), 0 0 28px rgba(var(--accent-rgb), 0.12)",
                          }
                        : undefined
                    }
                  >
                    {exp.current ? (
                      <span
                        className="w-2.5 h-2.5 rounded-full"
                        style={{ background: "rgb(var(--accent-rgb))" }}
                      />
                    ) : (
                      <span className="w-2 h-2 rounded-full theme-bg-soft" />
                    )}
                  </div>
                </div>

                {/* Card */}
                <div className="glass rounded-2xl p-6 md:p-8 hover:border-accent/20 transition-all duration-300 group">
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                    <div>
                      <div className="flex items-center gap-3 flex-wrap">
                        <h3 className="text-xl font-bold theme-text experience-title-hover transition-colors">
                          {exp.title}
                        </h3>
                        {exp.current && (
                          <span
                            className="text-xs font-mono px-2 py-0.5 rounded-full"
                            style={{
                              background: "rgba(var(--accent-rgb), 0.12)",
                              color: "rgb(var(--accent-rgb))",
                              border: "1px solid rgba(var(--accent-rgb), 0.28)",
                            }}
                          >
                            Current
                          </span>
                        )}
                      </div>
                      <p
                        className="font-medium mt-1"
                        style={{ color: "rgba(var(--accent-rgb), 0.82)" }}
                      >
                        {exp.company}
                      </p>
                      <p className="text-text-secondary text-sm mt-1">{exp.location}</p>
                    </div>
                    <div className="text-right">
                      <div className="text-text-secondary text-sm font-mono">{exp.period}</div>
                    </div>
                  </div>

                  {exp.bullets.length > 0 && (
                    <ul className="space-y-2 mb-5">
                      {exp.bullets.map((b, bi) => (
                        <motion.li
                          key={bi}
                          initial={{ opacity: 0, x: -10 }}
                          animate={inView ? { opacity: 1, x: 0 } : {}}
                          transition={{ delay: 0.4 + i * 0.15 + bi * 0.05 }}
                          className="flex items-start gap-3 text-text-secondary text-sm leading-relaxed"
                        >
                          <span className="text-accent leading-[1.4] flex-shrink-0 pt-[2px]">
                            ▸
                          </span>
                          <span>{b}</span>
                        </motion.li>
                      ))}
                    </ul>
                  )}

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {exp.tags.map((tag) => (
                      <span key={tag} className="tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
