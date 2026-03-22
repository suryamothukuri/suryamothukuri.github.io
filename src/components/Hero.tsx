"use client";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%";

// Floating ML code snippets
const ML_SNIPPETS = [
  "model.fit(X_train, y_train)",
  "loss: 0.0231 ↓",
  "accuracy: 98.47%",
  "gradient_descent(lr=1e-3)",
  "epoch 47/100",
  "F.softmax(logits, dim=-1)",
  "import torch",
  "nn.TransformerEncoder()",
  "optimizer.zero_grad()",
  "loss.backward()",
  "XGBClassifier(n_estimators=300)",
  "df.groupby('cluster').agg()",
  "precision: 0.94 | recall: 0.91",
  "wandb.log({'val_loss': 0.02})",
  "checkpoint.save('best_model')",
  "pipeline.fit_transform(X)",
  "GridSearchCV(cv=5)",
  "confusion_matrix(y_test, ŷ)",
  "torch.cuda.is_available()",
  "scaler.fit_transform(X_train)",
];

const LAYERS = [4, 6, 8, 8, 6, 4];

const DARK_LAYER_COLORS = ["#00d4ff", "#38b6ff", "#7c3aed", "#9333ea", "#c026d3", "#f59e0b"];

const LIGHT_LAYER_COLORS = ["#c2410c", "#d97706", "#8b5cf6", "#a78bfa", "#ec4899", "#f59e0b"];

function scramble(el: HTMLElement, finalText: string, duration = 1200) {
  let frame = 0;
  const totalFrames = Math.round(duration / 16);

  const interval = setInterval(() => {
    el.textContent = finalText
      .split("")
      .map((char, i) => {
        if (char === " ") return " ";
        if (frame / totalFrames > i / finalText.length) return char;
        return CHARS[Math.floor(Math.random() * CHARS.length)];
      })
      .join("");

    frame++;

    if (frame >= totalFrames) {
      el.textContent = finalText;
      clearInterval(interval);
    }
  }, 16);
}

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const nameRef = useRef<HTMLSpanElement>(null);
  const titleRef = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    window.history.scrollRestoration = "manual";
    window.scrollTo(0, 0);
  }, []);
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId = 0;

    const getCssVar = (name: string) =>
      getComputedStyle(document.documentElement).getPropertyValue(name).trim();

    const getThemeColors = () => {
      const isLight = document.documentElement.classList.contains("light");

      return {
        isLight,
        layerColors: isLight ? LIGHT_LAYER_COLORS : DARK_LAYER_COLORS,
        snippetColor: isLight ? "rgba(177, 90, 22, 0.19)" : "rgba(0, 212, 255, 0.15)",
        lineColorBase: isLight ? [148, 163, 184] : [124, 58, 237],
        labelAlpha: isLight ? 0.22 : 0.18,
        accent: getCssVar("--accent") || (isLight ? "#b15a16" : "#00d4ff"),
      };
    };

    interface Node {
      x: number;
      y: number;
      layer: number;
      color: string;
      glow: number;
      glowDecay: number;
      breath: number;
      breathSpeed: number;
    }

    interface Pulse {
      fromLayer: number;
      fromIdx: number;
      toIdx: number;
      t: number;
      speed: number;
      color: string;
      alpha: number;
    }

    interface Snippet {
      text: string;
      x: number;
      y: number;
      vy: number;
      size: number;
    }

    let nodeGrid: Node[][] = [];
    const pulses: Pulse[] = [];

    const buildNodes = (): Node[][] => {
      const grid: Node[][] = [];
      const { layerColors } = getThemeColors();

      const padX = canvas.width * 0.1;
      const usableW = canvas.width - padX * 2;
      const layerGap = usableW / (LAYERS.length - 1);

      for (let l = 0; l < LAYERS.length; l++) {
        const count = LAYERS[l];
        const layerNodes: Node[] = [];
        const cx = padX + l * layerGap;
        const nodeGap = Math.min((canvas.height * 0.62) / (count + 1), 72);
        const totalH = nodeGap * (count - 1);
        const startY = canvas.height / 2 - totalH / 2;

        for (let n = 0; n < count; n++) {
          layerNodes.push({
            x: cx,
            y: startY + n * nodeGap,
            layer: l,
            color: layerColors[l],
            glow: Math.random() * 0.3,
            glowDecay: 0.014 + Math.random() * 0.008,
            breath: Math.random() * Math.PI * 2,
            breathSpeed: 0.008 + Math.random() * 0.006,
          });
        }

        grid.push(layerNodes);
      }

      return grid;
    };

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      nodeGrid = buildNodes();
      pulses.length = 0;
    };

    resize();
    window.addEventListener("resize", resize);

    const snippets: Snippet[] = ML_SNIPPETS.map((text) => ({
      text,
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vy: -(0.18 + Math.random() * 0.22),
      size: 9 + Math.random() * 4,
    }));

    const spawnCascade = () => {
      if (nodeGrid.length === 0) return;

      const { layerColors } = getThemeColors();
      const fromIdx = Math.floor(Math.random() * LAYERS[0]);
      const toIdx = Math.floor(Math.random() * LAYERS[1]);

      nodeGrid[0][fromIdx].glow = 1;

      pulses.push({
        fromLayer: 0,
        fromIdx,
        toIdx,
        t: 0,
        speed: 0.015 + Math.random() * 0.012,
        color: layerColors[0],
        alpha: 0.9,
      });
    };

    const initTimers = [0, 700, 1400, 2100].map((delay) => setTimeout(spawnCascade, delay));

    const spawnInterval = setInterval(() => {
      if (pulses.length < 18) spawnCascade();
    }, 900);

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const themeColors = getThemeColors();

      // keep node colors synced with theme toggle
      for (let l = 0; l < nodeGrid.length; l++) {
        for (let n = 0; n < nodeGrid[l].length; n++) {
          nodeGrid[l][n].color = themeColors.layerColors[l];
        }
      }

      // Floating snippets
      ctx.font = `11px "JetBrains Mono", monospace`;
      for (const s of snippets) {
        s.y += s.vy;
        if (s.y < -24) {
          s.y = canvas.height + 20;
          s.x = Math.random() * canvas.width;
        }
        ctx.fillStyle = themeColors.snippetColor;
        ctx.globalAlpha = 1;
        ctx.font = `${s.size}px "JetBrains Mono", monospace`;
        ctx.fillText(s.text, s.x, s.y);
      }
      ctx.globalAlpha = 1;

      // Connection lines
      for (let l = 0; l < LAYERS.length - 1; l++) {
        for (let n = 0; n < LAYERS[l]; n++) {
          for (let m = 0; m < LAYERS[l + 1]; m++) {
            const from = nodeGrid[l]?.[n];
            const to = nodeGrid[l + 1]?.[m];
            if (!from || !to) continue;

            const activation = (from.glow + to.glow) * 0.5;
            const baseAlpha = 0.035 + activation * 0.09;

            ctx.beginPath();
            ctx.moveTo(from.x, from.y);
            ctx.lineTo(to.x, to.y);

            const [r, g, b] = themeColors.lineColorBase;
            const alpha = themeColors.isLight ? Math.min(baseAlpha * 0.8, 0.16) : baseAlpha;

            ctx.strokeStyle = `rgba(${r}, ${g}, ${b}, ${alpha})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      // Pulses
      for (let i = pulses.length - 1; i >= 0; i--) {
        const p = pulses[i];
        p.t += p.speed;

        const from = nodeGrid[p.fromLayer]?.[p.fromIdx];
        const to = nodeGrid[p.fromLayer + 1]?.[p.toIdx];
        if (!from || !to) {
          pulses.splice(i, 1);
          continue;
        }

        const px = from.x + (to.x - from.x) * p.t;
        const py = from.y + (to.y - from.y) * p.t;
        const fade = 1 - p.t * 0.25;

        ctx.beginPath();
        ctx.moveTo(from.x, from.y);
        ctx.lineTo(px, py);
        ctx.strokeStyle = p.color;
        ctx.lineWidth = 1.2;
        ctx.globalAlpha = 0.18 * fade;
        ctx.stroke();
        const pulseRadius = themeColors.isLight ? 5 : 7;

        const gr = ctx.createRadialGradient(px, py, 0, px, py, pulseRadius);
        gr.addColorStop(0, p.color);
        gr.addColorStop(0.4, p.color);
        gr.addColorStop(1, "transparent");

        ctx.beginPath();
        ctx.arc(px, py, pulseRadius, 0, Math.PI * 2);
        ctx.fillStyle = gr;
        ctx.globalAlpha = themeColors.isLight ? p.alpha * fade * 0.62 : p.alpha * fade;
        ctx.fill();
        ctx.globalAlpha = 1;

        if (p.t >= 1) {
          const destNode = nodeGrid[p.fromLayer + 1][p.toIdx];
          destNode.glow = Math.min(1, destNode.glow + 0.85);

          if (p.fromLayer + 1 < LAYERS.length - 1 && pulses.length < 22) {
            const numForward = Math.random() < 0.45 ? 2 : 1;

            for (let k = 0; k < numForward; k++) {
              const nextTo = Math.floor(Math.random() * LAYERS[p.fromLayer + 2]);
              pulses.push({
                fromLayer: p.fromLayer + 1,
                fromIdx: p.toIdx,
                toIdx: nextTo,
                t: 0,
                speed: 0.01 + Math.random() * 0.006,
                color: themeColors.layerColors[p.fromLayer + 1],
                alpha: p.alpha * 0.88,
              });
            }
          }

          pulses.splice(i, 1);
        }
      }

      // Nodes
      for (let l = 0; l < LAYERS.length; l++) {
        for (let n = 0; n < LAYERS[l]; n++) {
          const nd = nodeGrid[l]?.[n];
          if (!nd) continue;

          nd.glow = Math.max(0, nd.glow - nd.glowDecay);
          nd.breath += nd.breathSpeed;

          const breathVal = (Math.sin(nd.breath) * 0.5 + 0.5) * 0.12;
          const totalGlow = Math.max(nd.glow, breathVal);

          const baseR = 3.5;
          const glowR = baseR + totalGlow * 14;

          if (totalGlow > 0.02) {
            const aura = ctx.createRadialGradient(nd.x, nd.y, 0, nd.x, nd.y, glowR * 3);
            aura.addColorStop(0, nd.color);
            aura.addColorStop(1, "transparent");

            ctx.beginPath();
            ctx.arc(nd.x, nd.y, glowR * 3, 0, Math.PI * 2);
            ctx.fillStyle = aura;
            ctx.globalAlpha = themeColors.isLight
              ? Math.min(totalGlow * 0.08, 0.04)
              : Math.min(totalGlow * 0.18, 0.1);
            ctx.fill();
            ctx.globalAlpha = 1;
          }

          const coreR = baseR + nd.glow * 5;
          const core = ctx.createRadialGradient(nd.x, nd.y, 0, nd.x, nd.y, coreR);
          core.addColorStop(0, nd.color);
          core.addColorStop(0.5, nd.color);
          core.addColorStop(1, "transparent");

          ctx.beginPath();
          ctx.arc(nd.x, nd.y, coreR, 0, Math.PI * 2);
          ctx.fillStyle = core;
          ctx.globalAlpha = themeColors.isLight
            ? Math.min(0.62, 0.36 + nd.glow * 0.08)
            : Math.min(0.82, 0.5 + nd.glow * 0.16);
          ctx.fill();
          ctx.globalAlpha = 1;
        }
      }

      // Labels
      const labelNames = ["input", "h₁", "h₂", "h₃", "h₄", "output"];
      for (let l = 0; l < LAYERS.length; l++) {
        const topNode = nodeGrid[l]?.[0];
        if (!topNode) continue;

        ctx.globalAlpha = themeColors.labelAlpha;
        ctx.fillStyle = themeColors.layerColors[l];
        ctx.font = `9px "JetBrains Mono", monospace`;
        ctx.textAlign = "center";
        ctx.fillText(labelNames[l], topNode.x, topNode.y - 22);
      }

      ctx.textAlign = "left";
      ctx.globalAlpha = 1;
      animId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animId);
      clearInterval(spawnInterval);
      initTimers.forEach(clearTimeout);
      window.removeEventListener("resize", resize);
    };
  }, []);

  useEffect(() => {
    const t1 = setTimeout(() => {
      if (nameRef.current) scramble(nameRef.current, "Surya Teja Mothukuri", 1400);
    }, 400);

    const t2 = setTimeout(() => {
      if (titleRef.current) scramble(titleRef.current, "Data Scientist & AI Engineer", 1000);
    }, 900);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  const scrollToAbout = () => {
    document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none" />

      <div className="hero-grid absolute inset-0 pointer-events-none" />

      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
        <div className="scanline absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
      </div>

      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="relative inline-flex items-center gap-2 mt-20 md:mt-0 mb-8 px-4 py-2 rounded-full text-accent text-sm font-mono overflow-hidden"
          style={{
            border: "1px solid rgba(var(--accent-rgb), 0.3)",
            background: "rgba(var(--accent-rgb), 0.04)",
          }}
        >
          <motion.div
            className="absolute inset-0 pointer-events-none"
            animate={{ x: ["-100%", "200%"] }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear", repeatDelay: 2 }}
            style={{
              background:
                "linear-gradient(90deg, transparent, rgba(var(--accent-rgb), 0.12), transparent)",
              width: "50%",
            }}
          />
          <span
            className="w-2 h-2 rounded-full animate-pulse relative z-10"
            style={{ background: "rgb(var(--accent-rgb))" }}
          />
          <span className="relative z-10">
            {'{ status: "open_to_work", roles: ["DS", "ML Eng", "AI Eng"] }'}
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.4 }}
          className="text-5xl md:text-6xl lg:text-7xl font-black mb-4 leading-none tracking-tight"
        >
          <span ref={nameRef} className="hero-name-sharp">
            {"S#ry@ T#j# M#th#k#ri"}
          </span>
        </motion.h1>
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.4 }}
          className="text-xl md:text-3xl font-light text-text-secondary mb-6 font-mono tracking-widest uppercase"
        >
          <span ref={titleRef}>{"D@ta $c!ent!st & A! Eng!neer"}</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="text-text-secondary text-base md:text-lg max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Built on 3+ years of experience across <span className="text-accent font-mono">AI</span>,{" "}
          <span className="text-accent font-mono">data engineering</span>,{" "}
          <span className="text-accent font-mono">predictive and data analytics</span>, creating
          production-ready systems in healthcare, operations, and enterprise automation using{" "}
          <span className="text-accent font-mono">Python</span>,{" "}
          <span className="text-accent font-mono">SQL</span>,{" "}
          <span className="text-accent font-mono">AWS</span>,{" "}
          <span className="text-accent font-mono">Snowflake</span> &amp;{" "}
          <span className="text-accent font-mono">LLM</span> workflows.{" "}
          <span className="theme-text-faint font-mono text-sm">val_loss → 0.0000 ✓</span>
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 0.6 }}
          className="flex flex-wrap justify-center gap-10 mb-12"
        >
          {[
            { v: "3+", l: "years exp" },
            { v: "40%↓", l: "refresh latency" },
            { v: "180 hrs", l: "MONTHLY EFFORT SAVED" },
            { v: "18%↓", l: "Excess Procurement" },
          ].map((s) => (
            <div key={s.l} className="text-center group">
              <div className="text-2xl font-bold text-accent font-mono group-hover:text-glow transition-all duration-300">
                {s.v}
              </div>
              <div className="text-xs text-text-secondary mt-1 tracking-wide uppercase font-mono">
                {s.l}
              </div>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6, duration: 0.6 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <button
            onClick={scrollToAbout}
            className="relative px-8 py-3.5 rounded-xl theme-primary-btn font-semibold text-sm tracking-wide overflow-hidden group"
          >
            <span className="relative z-10 group-hover:theme-text transition-colors">
              View My Work
            </span>
            <motion.div
              className="absolute inset-0 theme-bg-solid opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{ borderRadius: "inherit" }}
            />
            <div className="absolute inset-0 glow-cyan opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />
          </button>

          <a
            href="/Resume_SuryaTeja_Mothukuri.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="theme-resume-btn px-8 py-3.5 rounded-xl font-semibold text-sm tracking-wide flex items-center gap-2 transition-all duration-300 group"
          >
            <svg
              width="15"
              height="15"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="group-hover:translate-y-0.5 transition-transform"
            >
              <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            <span>Resume</span>
          </a>

          <a
            href="https://www.linkedin.com/in/surya-mothukuri/"
            target="_blank"
            rel="noopener noreferrer"
            className="theme-linkedin-btn px-8 py-3.5 rounded-xl font-semibold text-sm tracking-wide hover:border-accent/50 hover:text-accent transition-all duration-300"
          >
            LinkedIn →
          </a>
        </motion.div>
      </div>

      <motion.button
        onClick={scrollToAbout}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.6 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-text-secondary hover:text-accent transition-colors group"
      >
        <span className="text-xs font-mono tracking-widest uppercase opacity-60">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-px h-12 scroll-indicator-line"
        />
      </motion.button>
    </section>
  );
}
