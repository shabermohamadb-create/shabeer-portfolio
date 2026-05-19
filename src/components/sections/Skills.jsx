import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const skills = [

  { name: 'Unity', level: 78, color: '#00ff88', icon: '⬢' },
  { name: 'Multiplayer Networking', level: 75, color: '#bf00ff', icon: '◇' },
  { name: 'Blender 3D', level: 70, color: '#00f5ff', icon: '⬡' },
  { name: 'Game Physics', level: 83, color: '#00ff88', icon: '◈' },
  { name: 'IoT', level: 88, color: '#ff006e', icon: '◇' },
  { name: 'Python / AI/ML', level: 76, color: '#00f5ff', icon: '◈' },
  { name: 'Web Development', level: 68, color: '#00ff88', icon: '◇' },
]

function SkillCard({ skill, index, inView }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.07, duration: 0.5 }}
      whileHover={{ y: -6, scale: 1.02 }}
      className="glass glow-border p-5 relative overflow-hidden group hologram"
    >
      {/* Corner decorations */}
      <div className="absolute top-0 left-0 w-4 h-4 border-l-2 border-t-2 border-[#00f5ff]/60" />
      <div className="absolute bottom-0 right-0 w-4 h-4 border-r-2 border-b-2 border-[#00f5ff]/60" />

      {/* Hover glow */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{ background: `radial-gradient(circle at 50% 50%, ${skill.color}10, transparent 70%)` }}
      />

      <div className="flex items-center gap-3 mb-4">
        <span style={{ color: skill.color }} className="text-xl">{skill.icon}</span>
        <span className="font-rajdhani font-bold text-[#e0f7ff] tracking-wide">{skill.name}</span>
        <span className="ml-auto font-mono text-xs" style={{ color: skill.color }}>{skill.level}%</span>
      </div>

      {/* Progress bar */}
      <div className="h-1.5 bg-[#00f5ff]/10 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${skill.level}%` } : {}}
          transition={{ delay: index * 0.07 + 0.3, duration: 1, ease: 'easeOut' }}
          className="h-full rounded-full relative"
          style={{ background: `linear-gradient(90deg, ${skill.color}80, ${skill.color})` }}
        >
          <div
            className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full animate-pulse"
            style={{ background: skill.color, boxShadow: `0 0 8px ${skill.color}` }}
          />
        </motion.div>
      </div>

      {/* Category badges */}
      <div className="mt-3 flex gap-2">
        <span
          className="font-mono text-[10px] px-2 py-0.5 rounded-sm"
          style={{ border: `1px solid ${skill.color}40`, color: `${skill.color}80` }}
        >
          ACTIVE
        </span>
      </div>
    </motion.div>
  )
}

export default function Skills() {
  const ref = useRef()
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="skills" className="relative py-32 px-6">
      <div className="max-w-7xl mx-auto" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="mb-16"
        >
          <span className="section-tag block mb-3">// 02 SKILLS.DAT</span>
          <h2 className="font-orbitron text-4xl md:text-5xl font-black text-[#e0f7ff] tracking-widest">
            TECH <span className="neon-text-purple">ARSENAL</span>
          </h2>
          <div className="w-32 h-px bg-gradient-to-r from-[#bf00ff] to-transparent mt-4" />
        </motion.div>

        {/* Skills grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {skills.map((skill, i) => (
            <SkillCard key={skill.name} skill={skill} index={i} inView={inView} />
          ))}
        </div>

        {/* Bottom tech stack badges */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 1 }}
          className="mt-16 text-center"
        >
          <p className="font-mono text-xs text-[#00f5ff]/40 tracking-widest mb-4">// ALSO FAMILIAR WITH</p>
          <div className="flex flex-wrap justify-center gap-3">
            {['Git', 'Linux', 'Python', 'OpenCV', 'TensorFlow', 'Arduino'].map(tech => (
              <span key={tech} className="font-mono text-xs px-3 py-1.5 border border-[#00f5ff]/15 text-[#e0f7ff]/40 glass">
                {tech}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
