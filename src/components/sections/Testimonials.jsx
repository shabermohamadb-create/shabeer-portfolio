import { useRef, useState, useEffect } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'

const testimonials = [
  {
    name: 'Naveen M',
    role: 'Lead Developer @ Nexus Games',
    avatar: 'AC',
    color: '#00f5ff',
    text: 'Shaber delivered an outstanding AI enemy system for our FPS prototype. The behavior trees were incredibly well-structured and the difficulty scaling was exactly what we needed. Highly recommend.',
  },
  {
    name: 'Siva Sankar',
    role: 'Project Manager @ TechVentures',
    avatar: 'PN',
    color: '#bf00ff',
    text: 'We hired Shaber for a game prototype and he went above and beyond. His Unreal Engine expertise is top-notch and he delivered a complete multiplayer demo in record time.',
  },
  {
    name: 'Bose',
    role: 'Indie Game Developer',
    avatar: 'RS',
    color: '#00ff88',
    text: 'Collaborated with Shaber on a game jam and it was an incredible experience. His rapid prototyping skills and creative problem solving under pressure are unmatched.',
  },
  {
    name: 'Rajesh',
    role: 'Professor, CS Dept.',
    avatar: 'MK',
    color: '#ff006e',
    text: 'Shaber is one of the most technically gifted students I have mentored. His AI emotion detection project was research-grade work. A true innovator in game technology.',
  },
  {
    name: 'Masav',
    role: 'Unity Developer',
    avatar: 'JK',
    color: '#00f5ff',
    text: 'Clean code, great communication, deep technical knowledge. Shaber helped us optimize our game rendering pipeline and cut build times by 40%. Outstanding developer.',
  },
]

export default function Testimonials() {
  const ref = useRef()
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    if (!inView) return
    const interval = setInterval(() => {
      setCurrent(c => (c + 1) % testimonials.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [inView])

  return (
    <section className="relative py-32 px-6">
      <div className="max-w-4xl mx-auto" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="mb-16 text-center"
        >
          <span className="section-tag block mb-3">// 06 COMM.LOGS</span>
          <h2 className="font-orbitron text-4xl md:text-5xl font-black text-[#e0f7ff] tracking-widest">
            FIELD <span className="neon-text-purple">REPORTS</span>
          </h2>
          <div className="w-32 h-px bg-gradient-to-r from-transparent via-[#bf00ff] to-transparent mx-auto mt-4" />
        </motion.div>

        {/* Main testimonial slider */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 0.2 }}
          className="glass p-8 md:p-12 relative overflow-hidden mb-8"
          style={{ border: '1px solid rgba(0,245,255,0.15)' }}
        >
          {/* Decorative quote */}
          <div className="absolute top-4 left-8 font-orbitron text-8xl text-[#00f5ff]/5 font-black leading-none select-none">
            "
          </div>
          <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#00f5ff]/30 to-transparent" />

          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="relative z-10"
            >
              <p className="font-rajdhani text-xl text-[#e0f7ff]/80 leading-relaxed mb-8 italic">
                "{testimonials[current].text}"
              </p>

              <div className="flex items-center gap-4">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center font-orbitron font-black text-sm"
                  style={{
                    border: `2px solid ${testimonials[current].color}50`,
                    color: testimonials[current].color,
                    boxShadow: `0 0 15px ${testimonials[current].color}30`,
                  }}
                >
                  {testimonials[current].avatar}
                </div>
                <div>
                  <div className="font-orbitron font-bold text-[#e0f7ff]">{testimonials[current].name}</div>
                  <div className="font-mono text-xs" style={{ color: `${testimonials[current].color}80` }}>
                    {testimonials[current].role}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </motion.div>

        {/* Dots navigation */}
        <div className="flex justify-center gap-3">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className="transition-all duration-300"
              aria-label={`Testimonial ${i + 1}`}
            >
              <div
                className="rounded-full transition-all duration-300"
                style={{
                  width: i === current ? '24px' : '6px',
                  height: '6px',
                  background: i === current ? '#00f5ff' : 'rgba(0,245,255,0.2)',
                  boxShadow: i === current ? '0 0 8px #00f5ff' : 'none',
                }}
              />
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
