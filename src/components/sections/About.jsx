import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

function AnimatedCounter({ target, label, suffix = '+' }) {
  const [count, setCount] = useState(0)
  const ref = useRef()
  const inView = useInView(ref, { once: true })

  useEffect(() => {
    if (!inView) return
    let start = 0
    const duration = 1800
    const step = (timestamp) => {
      if (!start) start = timestamp
      const progress = Math.min((timestamp - start) / duration, 1)
      setCount(Math.floor(progress * target))
      if (progress < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }, [inView, target])

  return (
    <div ref={ref} className="glass glow-border p-6 text-center hologram relative overflow-hidden">
      <div className="absolute top-0 left-0 w-3 h-3 border-l border-t border-[#00f5ff]" />
      <div className="absolute top-0 right-0 w-3 h-3 border-r border-t border-[#00f5ff]" />
      <div className="absolute bottom-0 left-0 w-3 h-3 border-l border-b border-[#00f5ff]" />
      <div className="absolute bottom-0 right-0 w-3 h-3 border-r border-b border-[#00f5ff]" />
      <div className="font-orbitron text-4xl font-black neon-text-cyan mb-1">
        {count}{suffix}
      </div>
      <div className="font-mono text-xs text-[#e0f7ff]/50 tracking-widest uppercase">{label}</div>
    </div>
  )
}

const timelineItems = [
  { year: '2022', title: 'First Game', desc: 'Built first 2D game using Unity — fell in love with game physics and interactive systems.' },
  { year: '2023', title: 'Unreal Engine', desc: 'Mastered Unreal Engine 5 Blueprints and C++. Built open-world prototypes and AI systems.' },
  { year: '2024', title: 'Multiplayer & AI', desc: 'Deep-dived into multiplayer networking, AI enemy systems, and procedural level generation.' },
  { year: '2025', title: 'Full Stack Dev', desc: 'Expanded into web + IoT projects while continuing AAA game development experiments.' },
]

export default function About() {
  const ref = useRef()
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="about" className="relative py-32 px-6 max-w-7xl mx-auto">
      <motion.div
        ref={ref}
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.6 }}
      >
        {/* Section header */}
        <div className="mb-16">
          <span className="section-tag block mb-3">// 01 ABOUT.EXE</span>
          <h2 className="font-orbitron text-4xl md:text-5xl font-black text-[#e0f7ff] tracking-widest">
            THE <span className="neon-text-cyan">DEVELOPER</span>
          </h2>
          <div className="w-32 h-px bg-gradient-to-r from-[#00f5ff] to-transparent mt-4" />
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Left: Bio */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={inView ? { x: 0, opacity: 1 } : {}}
            transition={{ delay: 0.2, duration: 0.7 }}
          >
            {/* Profile placeholder */}
            <div className="relative mb-8 w-48 h-48 mx-auto md:mx-0">
              <div className="absolute inset-0 rounded-full border-2 border-[#00f5ff]/40 animate-spin-slow" />
              <div className="absolute inset-2 rounded-full border border-[#bf00ff]/30 animate-spin-slow" style={{ animationDirection: 'reverse' }} />
              <div className="absolute inset-4 rounded-full glass flex items-center justify-center">
                <span className="font-orbitron text-4xl font-black neon-text-cyan">SM</span>
              </div>
              <div className="absolute -bottom-2 -right-2 px-3 py-1 glass border border-[#00ff88]/30">
                <span className="font-mono text-xs text-[#00ff88]">● AVAILABLE</span>
              </div>
            </div>

            <div className="space-y-4 font-rajdhani text-lg text-[#e0f7ff]/70 leading-relaxed">
              <p>
                I'm <span className="text-[#00f5ff] font-semibold">Shaber Mohamad</span> — a passionate Game Developer specializing in creating immersive gaming experiences that push the boundaries of interactive entertainment.
              </p>
              <p>
                My expertise spans <span className="text-[#bf00ff]">Unreal Engine 5</span>, gameplay systems design, AI-driven enemy behavior, and multiplayer networking. I approach every project like crafting a world where players lose themselves.
              </p>
              <p>
                Beyond games, I build intelligent systems — from IoT smart home solutions to ML-powered emotion detection — always with an engineering-first mindset.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              {['Unreal Engine 5', 'C++', 'Blueprints', 'Unity', 'AI Systems'].map(tag => (
                <span key={tag} className="px-3 py-1 font-mono text-xs border border-[#00f5ff]/30 text-[#00f5ff]/80 glass">
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Right: Timeline */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={inView ? { x: 0, opacity: 1 } : {}}
            transition={{ delay: 0.4, duration: 0.7 }}
          >
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-4 top-0 bottom-0 w-px timeline-line" />

              <div className="space-y-8 pl-12">
                {timelineItems.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.5 + i * 0.15 }}
                    className="relative"
                  >
                    {/* Dot */}
                    <div className="absolute -left-[42px] top-1 w-3 h-3 rounded-full border-2 border-[#00f5ff] bg-[#020408]">
                      <div className="absolute inset-0.5 rounded-full bg-[#00f5ff] animate-pulse" />
                    </div>

                    <div className="glass glow-border p-4">
                      <div className="flex gap-3 items-center mb-2">
                        <span className="font-mono text-xs text-[#00f5ff]/60">{item.year}</span>
                        <span className="font-orbitron text-sm font-bold text-[#e0f7ff]">{item.title}</span>
                      </div>
                      <p className="font-rajdhani text-[#e0f7ff]/60 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Stat cards */}
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-20"
        >
          <AnimatedCounter target={10} label="Games Built" />
          <AnimatedCounter target={15} label="Technologies" />
          <AnimatedCounter target={20} label="Projects Done" />
          <AnimatedCounter target={3} label="Years Exp" />
        </motion.div>
      </motion.div>
    </section>
  )
}
