import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const experiences = [

  {
    period: '2024 – 2025',
    role: 'AI/ML Projects',
    org: 'Stella Maris College',
    color: '#bf00ff',
    icon: '⬡',
    desc: 'Developed real-time emotion detection system, IoT home automation platform, and Discord automation bots. Worked with TensorFlow, OpenCV, and MQTT.',
    tags: ['Python', 'TensorFlow', 'OpenCV', 'IoT'],
  },
  
]

export default function Experience() {
  const ref = useRef()
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="experience" className="relative py-32 px-6">
      {/* Background glow */}
      <div className="absolute right-0 top-1/2 w-64 h-64 bg-[#bf00ff]/5 rounded-full blur-[80px] pointer-events-none" />

      <div className="max-w-5xl mx-auto" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="mb-16"
        >
          <span className="section-tag block mb-3">// 04 EXPERIENCE.LOG</span>
          <h2 className="font-orbitron text-4xl md:text-5xl font-black text-[#e0f7ff] tracking-widest">
            MISSION <span className="neon-text-purple">HISTORY</span>
          </h2>
          <div className="w-32 h-px bg-gradient-to-r from-[#bf00ff] to-transparent mt-4" />
        </motion.div>

        {/* Timeline */}
        <div className="relative pl-8 md:pl-16">
          {/* Vertical line */}
          <motion.div
            initial={{ scaleY: 0 }}
            animate={inView ? { scaleY: 1 } : {}}
            transition={{ duration: 1.2, ease: 'easeOut' }}
            className="absolute left-3 md:left-7 top-0 bottom-0 w-px origin-top timeline-line"
          />

          <div className="space-y-10">
            {experiences.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: i * 0.15 + 0.3, duration: 0.6 }}
                className="relative group"
              >
                {/* Timeline dot */}
                <div
                  className="absolute -left-[25px] md:-left-[53px] top-5 w-4 h-4 rounded-full border-2 bg-[#020408] flex items-center justify-center"
                  style={{ borderColor: exp.color, boxShadow: `0 0 12px ${exp.color}80` }}
                >
                  <div
                    className="w-1.5 h-1.5 rounded-full"
                    style={{ background: exp.color }}
                  />
                </div>

                {/* Card */}
                <div
                  className="glass p-6 relative overflow-hidden transition-all duration-300 group-hover:border-opacity-60"
                  style={{
                    border: `1px solid ${exp.color}20`,
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.borderColor = `${exp.color}50`
                    e.currentTarget.style.boxShadow = `0 0 20px ${exp.color}10`
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.borderColor = `${exp.color}20`
                    e.currentTarget.style.boxShadow = 'none'
                  }}
                >
                  {/* Glow line top */}
                  <div
                    className="absolute top-0 left-0 w-0 h-[1px] group-hover:w-full transition-all duration-500"
                    style={{ background: exp.color }}
                  />

                  {/* Header */}
                  <div className="flex flex-col md:flex-row md:items-center gap-2 mb-3">
                    <span className="font-mono text-xs text-[#e0f7ff]/30">{exp.period}</span>
                    <span className="hidden md:block text-[#e0f7ff]/20">·</span>
                    <div className="flex items-center gap-2">
                      <span style={{ color: exp.color }}>{exp.icon}</span>
                      <h3 className="font-orbitron font-bold text-lg text-[#e0f7ff]">{exp.role}</h3>
                    </div>
                  </div>
                  <p className="font-mono text-xs mb-3" style={{ color: `${exp.color}80` }}>
                    @ {exp.org}
                  </p>
                  <p className="font-rajdhani text-[#e0f7ff]/60 text-sm leading-relaxed mb-4">
                    {exp.desc}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {exp.tags.map(tag => (
                      <span
                        key={tag}
                        className="font-mono text-[10px] px-2 py-0.5"
                        style={{ border: `1px solid ${exp.color}30`, color: `${exp.color}70` }}
                      >
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
  )
}
