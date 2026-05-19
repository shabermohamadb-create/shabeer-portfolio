import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const achievements = [
  {
    icon: '⬡',
    title: 'HACKATHON FINALIST',
    subtitle: 'College Tech Fest 2024',
    desc: 'Top 5 finalist with AI-powered Smart Home IoT system among 200+ teams.',
    color: '#00f5ff',
    badge: 'TOP 5',
  },
  {
    icon: '◈',
    title: 'GAME JAM WINNER',
    subtitle: 'Local Game Dev Competition',
    desc: 'Best Horror Game award at 72-hour game jam with atmospheric escape room experience.',
    color: '#bf00ff',
    badge: 'WINNER',
  },
  {
    icon: '◇',
    title: 'UE5 CERTIFICATION',
    subtitle: 'Unreal Online Learning',
    desc: 'Completed advanced Unreal Engine 5 development curriculum covering Blueprint & C++.',
    color: '#00ff88',
    badge: 'CERTIFIED',
  },
  {
    icon: '⬢',
    title: 'OPEN SOURCE',
    subtitle: 'GitHub Contributions',
    desc: '15+ open source contributions across game dev tools, Unity plugins, and AI utilities.',
    color: '#ff006e',
    badge: '15+ CONTRIBS',
  },
  {
    icon: '◈',
    title: 'AI/ML PROJECT',
    subtitle: 'Deep Learning Emotion AI',
    desc: 'Built and deployed real-time emotion detection achieving 89% accuracy on FER2013 dataset.',
    color: '#00f5ff',
    badge: '89% ACC',
  },
  {
    icon: '⬡',
    title: 'PUBLISHED TITLES',
    subtitle: 'itch.io Platform',
    desc: 'Published 3 playable game demos on itch.io with combined 500+ downloads.',
    color: '#bf00ff',
    badge: '500+ DL',
  },
]

export default function Achievements() {
  const ref = useRef()
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="achievements" className="relative py-32 px-6">
      {/* Background */}
      <div className="absolute left-0 top-1/2 w-72 h-72 bg-[#00f5ff]/4 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="mb-16"
        >
          <span className="section-tag block mb-3">// 05 ACHIEVEMENTS.DAT</span>
          <h2 className="font-orbitron text-4xl md:text-5xl font-black text-[#e0f7ff] tracking-widest">
            UNLOCKED <span className="neon-text-cyan">TROPHIES</span>
          </h2>
          <div className="w-32 h-px bg-gradient-to-r from-[#00f5ff] to-transparent mt-4" />
        </motion.div>

        {/* Achievement grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              whileHover={{ y: -6 }}
              className="glass relative overflow-hidden p-6 group hologram"
              style={{ border: `1px solid ${item.color}20` }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = `${item.color}50`
                e.currentTarget.style.boxShadow = `0 0 25px ${item.color}15`
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = `${item.color}20`
                e.currentTarget.style.boxShadow = 'none'
              }}
            >
              {/* Badge */}
              <div
                className="absolute top-4 right-4 font-mono text-[10px] px-2 py-0.5"
                style={{
                  border: `1px solid ${item.color}50`,
                  color: item.color,
                  background: `${item.color}10`,
                  boxShadow: `0 0 8px ${item.color}20`,
                }}
              >
                {item.badge}
              </div>

              {/* Corner */}
              <div className="absolute top-0 left-0 w-6 h-6 border-l-2 border-t-2" style={{ borderColor: `${item.color}50` }} />

              {/* Icon */}
              <div
                className="w-14 h-14 flex items-center justify-center mb-4 text-2xl glass"
                style={{ border: `1px solid ${item.color}30` }}
              >
                <span style={{ color: item.color }}>{item.icon}</span>
              </div>

              {/* Content */}
              <h3 className="font-orbitron font-bold text-lg text-[#e0f7ff] mb-1">{item.title}</h3>
              <p className="font-mono text-xs mb-3" style={{ color: `${item.color}70` }}>{item.subtitle}</p>
              <p className="font-rajdhani text-[#e0f7ff]/60 text-sm leading-relaxed">{item.desc}</p>

              {/* Hover glow */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{ background: `radial-gradient(circle at 20% 80%, ${item.color}08, transparent 60%)` }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
