import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

const socials = [
  {
    name: 'GitHub',
    handle: '@shabermohamadb',
    url: 'https://github.com/shabermohamadb',
    color: '#00f5ff',
    icon: '⌂',
  },
  {
    name: 'LinkedIn',
    handle: 'b-shaber-mohamad',
    url: 'https://www.linkedin.com/in/b-shaber-mohamad-73a612318',
    color: '#bf00ff',
    icon: '◈',
  },
  {
    name: 'Instagram',
    handle: '@zeni7zu._.x',
    url: 'https://instagram.com/zeni7zu._.x',
    color: '#ff006e',
    icon: '◇',
  },
  {
    name: 'Email',
    handle: 'shabermohamed.ai25',
    url: 'mailto:shabermohamed.ai25@stellamaryscoe.edu.in',
    color: '#00ff88',
    icon: '⬡',
  },
]

export default function Contact() {
  const ref = useRef()
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [formState, setFormState] = useState({ name: '', email: '', subject: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [sending, setSending] = useState(false)

  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSending(true)
    setTimeout(() => {
      setSending(false)
      setSubmitted(true)
    }, 2000)
  }

  return (
    <section id="contact" className="relative py-32 px-6">
      {/* BG glow */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#00f5ff]/3 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="mb-16 text-center"
        >
          <span className="section-tag block mb-3">// 07 CONTACT.SYS</span>
          <h2 className="font-orbitron text-4xl md:text-5xl font-black text-[#e0f7ff] tracking-widest">
            OPEN <span className="neon-text-cyan">CHANNEL</span>
          </h2>
          <div className="w-32 h-px bg-gradient-to-r from-transparent via-[#00f5ff] to-transparent mx-auto mt-4" />
          <p className="font-rajdhani text-[#e0f7ff]/50 mt-4 tracking-wide">
            Initiating communication protocol — all signals welcome
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left: Social links + info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="space-y-6"
          >
            <div className="glass p-6 border border-[#00f5ff]/10">
              <div className="font-mono text-xs text-[#00f5ff]/50 mb-4 tracking-widest">// DIRECT CONTACT</div>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <span className="text-[#00ff88]">⬡</span>
                  <a
                    href="mailto:shabermohamed.ai25@stellamaryscoe.edu.in"
                    className="font-rajdhani text-[#e0f7ff]/70 hover:text-[#00f5ff] transition-colors text-sm break-all"
                  >
                    shabermohamed.ai25@stellamaryscoe.edu.in
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-[#00f5ff]">◈</span>
                  <a
                    href="tel:+919345425483"
                    className="font-rajdhani text-[#e0f7ff]/70 hover:text-[#00f5ff] transition-colors text-sm"
                  >
                    +91 93454 25483
                  </a>
                </div>
              </div>
            </div>

            {/* Social cards */}
            <div className="grid grid-cols-2 gap-4">
              {socials.map((social, i) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target={social.name !== 'Email' ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  whileHover={{ y: -4 }}
                  className="glass p-4 relative overflow-hidden group text-left"
                  style={{ border: `1px solid ${social.color}20` }}
                  onMouseEnter={e => {
                    e.currentTarget.style.borderColor = `${social.color}50`
                    e.currentTarget.style.boxShadow = `0 0 20px ${social.color}15`
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.borderColor = `${social.color}20`
                    e.currentTarget.style.boxShadow = 'none'
                  }}
                >
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    style={{ background: `radial-gradient(circle at 30% 30%, ${social.color}10, transparent)` }} />
                  <div style={{ color: social.color }} className="text-2xl mb-2">{social.icon}</div>
                  <div className="font-orbitron font-bold text-sm text-[#e0f7ff]">{social.name}</div>
                  <div className="font-mono text-[10px] mt-1" style={{ color: `${social.color}60` }}>
                    {social.handle}
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Status card */}
            <div className="glass p-4 border border-[#00ff88]/20">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-[#00ff88] animate-pulse" />
                <span className="font-mono text-xs text-[#00ff88]">OPEN TO OPPORTUNITIES</span>
              </div>
              <p className="font-rajdhani text-[#e0f7ff]/50 text-sm mt-2">
                Available for freelance projects, full-time roles, and game jam collaborations.
              </p>
            </div>
          </motion.div>

          {/* Right: Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3 }}
          >
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="glass p-12 text-center h-full flex flex-col items-center justify-center border border-[#00f5ff]/20"
              >
                <div className="w-16 h-16 border-2 border-[#00f5ff] rounded-full flex items-center justify-center mb-6">
                  <span className="text-[#00f5ff] text-2xl">✓</span>
                </div>
                <h3 className="font-orbitron text-2xl text-[#00f5ff] mb-4">TRANSMISSION SENT</h3>
                <p className="font-rajdhani text-[#e0f7ff]/60">
                  Message received. Will respond within 24 hours.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="glass p-8 border border-[#00f5ff]/10 space-y-5">
                <div className="font-mono text-xs text-[#00f5ff]/50 mb-6 tracking-widest">// SEND TRANSMISSION</div>

                {[
                  { name: 'name', label: 'CALL SIGN', type: 'text', placeholder: 'Your name' },
                  { name: 'email', label: 'COMM FREQUENCY', type: 'email', placeholder: 'your@email.com' },
                  { name: 'subject', label: 'MISSION TYPE', type: 'text', placeholder: 'Project / Collaboration / Job' },
                ].map(field => (
                  <div key={field.name}>
                    <label className="font-mono text-[10px] text-[#00f5ff]/50 tracking-widest block mb-1.5">
                      {field.label}
                    </label>
                    <input
                      type={field.type}
                      name={field.name}
                      value={formState[field.name]}
                      onChange={handleChange}
                      placeholder={field.placeholder}
                      required
                      className="w-full bg-[#00f5ff]/3 border border-[#00f5ff]/20 text-[#e0f7ff] font-rajdhani text-sm px-4 py-3 outline-none focus:border-[#00f5ff]/60 focus:shadow-[0_0_15px_rgba(0,245,255,0.1)] transition-all placeholder-[#e0f7ff]/20"
                      style={{ backdropFilter: 'blur(8px)' }}
                    />
                  </div>
                ))}

                <div>
                  <label className="font-mono text-[10px] text-[#00f5ff]/50 tracking-widest block mb-1.5">
                    MESSAGE PAYLOAD
                  </label>
                  <textarea
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project..."
                    rows={5}
                    required
                    className="w-full bg-[#00f5ff]/3 border border-[#00f5ff]/20 text-[#e0f7ff] font-rajdhani text-sm px-4 py-3 outline-none focus:border-[#00f5ff]/60 focus:shadow-[0_0_15px_rgba(0,245,255,0.1)] transition-all resize-none placeholder-[#e0f7ff]/20"
                    style={{ backdropFilter: 'blur(8px)' }}
                  />
                </div>

                <button
                  type="submit"
                  disabled={sending}
                  className="w-full btn-cyber-solid py-4 font-orbitron text-sm tracking-widest relative overflow-hidden disabled:opacity-70"
                >
                  {sending ? (
                    <span className="flex items-center justify-center gap-3">
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                        className="w-4 h-4 border-2 border-[#020408] border-t-transparent rounded-full"
                      />
                      TRANSMITTING...
                    </span>
                  ) : (
                    'SEND TRANSMISSION →'
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
