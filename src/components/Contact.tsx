"use client";
import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const links = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/surya-mothukuri/",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
    color: "#0077b5",
    desc: "Connect with me",
  },
  {
    label: "GitHub",
    href: "https://github.com/suryamothukuri",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
      </svg>
    ),
    color: "var(--text)",
    desc: "View my projects",
  },
  {
    label: "Email",
    href: "mailto:suryamothuk23@gmail.com",
    icon: (
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    ),
    color: "var(--accent)",
    desc: "Send me a message",
  },
];

export default function Contact() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const res = await fetch("https://formspree.io/f/mojkradr", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" ref={ref} className="py-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-4 mb-16"
        >
          <span className="font-mono text-accent text-sm tracking-widest">08.</span>
          <h2 className="text-3xl md:text-4xl font-bold theme-text">Contact Me</h2>
          <div className="flex-1 h-px bg-gradient-to-r from-[rgba(var(--accent-rgb),0.22)] to-transparent ml-4" />
        </motion.div>

        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="inline-flex items-center gap-2 font-mono text-xs mb-4 tracking-widest"
            style={{ color: "rgba(var(--accent-rgb), 0.52)" }}
          >
            <span style={{ color: "rgba(var(--accent-rgb), 0.32)" }}>$</span>
            <span>
              build.intelligence(domain=&quot;real_world&quot;, candidate=&quot;surya&quot;)
            </span>
            <span
              className="w-2 h-4 animate-pulse"
              style={{ background: "rgba(var(--accent-rgb), 0.4)" }}
            />
          </motion.div>
          <span className="w-2.5 h-2.5 rounded-full bg-accent animate-pulse" />

          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-4xl md:text-5xl font-black mb-6 leading-tight"
          >
            Ready to build real-world <span className="gradient-text">intelligence</span>?
            <br />
            Let&apos;s build systems that matter.
          </motion.h3>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-text-secondary text-lg mb-12 leading-relaxed"
          >
            I&apos;m seeking opportunities in{" "}
            <span className="theme-text-secondary">Data Science</span>,{" "}
            <span className="theme-text-secondary">AI Engineering</span>, and{" "}
            <span className="theme-text-secondary">ML Engineering</span> to build meaningful
            products, solve complex problems, and contribute to teams creating lasting impact. If
            you&apos;re building something exciting and want to connect, I&apos;d be glad to talk.
          </motion.p>

          <div className="flex flex-wrap items-center justify-center gap-4 mb-16">
            {links.map((link, i) => (
              <motion.a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4 + i * 0.1, duration: 0.5 }}
                whileHover={{ y: -4, scale: 1.05 }}
                className="flex items-center gap-3 px-6 py-4 glass rounded-2xl transition-all duration-200 group"
                style={{ "--link-color": link.color } as React.CSSProperties}
              >
                <span className="transition-colors" style={{ color: link.color }}>
                  {link.icon}
                </span>
                <div className="text-left">
                  <div className="theme-text font-semibold text-sm">{link.label}</div>
                  <div className="text-text-secondary text-xs">{link.desc}</div>
                </div>
              </motion.a>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="inline-flex items-center gap-3 px-6 py-3 rounded-full glass border border-accent/20"
          >
            <span
              className="w-2.5 h-2.5 rounded-full animate-pulse"
              style={{ background: "rgb(var(--accent-rgb))" }}
            />
            <span className="text-sm theme-text-secondary font-mono">
              status: <span className="text-accent font-semibold">&quot;open_to_work&quot;</span>
              <span className="theme-text-muted mx-2">·</span>
              <span className="theme-text-muted">DS · DE · AI Eng · ML Eng</span>
            </span>
          </motion.div>

          <div className="mt-12 max-w-3xl mx-auto glass rounded-2xl p-6 md:p-8">
            <div className="mb-6 text-center">
              <h3 className="text-xl md:text-2xl font-semibold theme-text">Send me a message</h3>
              <p className="text-text-secondary mt-2">
                Whether it&apos;s a role, project, or idea, I&apos;d be glad to connect.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-text-secondary mb-2">Name</label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your name"
                    required
                    className="w-full rounded-xl theme-input border px-4 py-3 outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/30 transition"
                  />
                </div>

                <div>
                  <label className="block text-sm text-text-secondary mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="your@email.com"
                    required
                    className="w-full rounded-xl theme-input border px-4 py-3 outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/30 transition"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm text-text-secondary mb-2">Subject</label>
                <input
                  type="text"
                  name="subject"
                  placeholder="Opportunity, project, or quick hello"
                  className="w-full rounded-xl theme-input border px-4 py-3 outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/30 transition"
                />
              </div>

              <div>
                <label className="block text-sm text-text-secondary mb-2">Message</label>
                <textarea
                  name="message"
                  rows={6}
                  placeholder="Tell me about the role, project, or idea you’d like to discuss."
                  required
                  className="w-full rounded-xl theme-input border px-4 py-3 outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/30 transition"
                />
              </div>

              <input
                type="hidden"
                name="_subject"
                value="New portfolio message from Surya Mothukuri"
              />

              <div className="pt-2 flex flex-col items-start gap-3">
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="w-full md:w-auto rounded-xl contact-submit-btn px-8 py-3.5 font-semibold transition disabled:opacity-60"
                >
                  {status === "sending" ? "Sending..." : "Send Message"}
                </button>

                {status === "success" && (
                  <p className="text-sm text-green-400 text-left">
                    Message sent successfully. I&apos;ll get back to you soon.
                  </p>
                )}

                {status === "error" && (
                  <p className="text-sm text-red-400 text-left">
                    Something went wrong. Please try again.
                  </p>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>

      <motion.footer
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ delay: 1, duration: 0.6 }}
        className="mt-24 pt-8 border-t theme-border text-center"
      >
        <p className="text-text-secondary text-sm font-mono">
          Designed &amp; built by
          <span className="text-accent"> Surya Teja Mothukuri</span>
          {" · "}
          <span className="theme-text-muted">{new Date().getFullYear()}</span>
          <span className="theme-text-faint mx-2">·</span>
          <span className="theme-text-faint text-xs">no_grad() · no_bugs() 🤞</span>
        </p>
      </motion.footer>
    </section>
  );
}
