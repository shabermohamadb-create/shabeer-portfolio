import { motion } from 'framer-motion'

const navLinks = ['About', 'Skills', 'Projects', 'Experience', 'Contact']

export default function Footer() {
  return (
    <footer className="relative border-t border-[#00f5ff]/10 py-12 px-6">
      {/* Neon divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00f5ff]/40 to-transparent" />

      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 items-center mb-8">
          {/* Logo */}
          <div>
            <div className="font-orbitron text-2xl font-black neon-text-cyan tracking-widest mb-2">
              SM<span className="text-[#bf00ff]">.</span>
            </div>
            <p className="font-mono text-xs text-[#e0f7ff]/30 tracking-wide">
              GAME DEVELOPER // UNREAL ENGINE
            </p>
          </div>

          {/* Nav links */}
          <nav className="flex flex-wrap gap-x-6 gap-y-2 justify-center">
            {navLinks.map(link => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="font-mono text-xs text-[#e0f7ff]/40 hover:text-[#00f5ff] transition-colors tracking-widest"
              >
                {link}
              </a>
            ))}
          </nav>

          {/* Social icons */}
          <div className="flex gap-4 justify-end">
            {[
              { icon: 'GH', url: 'https://github.com/shabermohamadb', color: '#00f5ff' },
              { icon: 'LI', url: 'https://www.linkedin.com/in/b-shaber-mohamad-73a612318', color: '#bf00ff' },
              { icon: 'IG', url: 'https://instagram.com/zeni7zu._.x', color: '#ff006e' },
            ].map(s => (
              <a
                key={s.icon}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 glass flex items-center justify-center font-orbitron text-xs font-bold transition-all duration-300 hover:-translate-y-1"
                style={{ border: `1px solid ${s.color}30`, color: s.color }}
                onMouseEnter={e => {
                  e.currentTarget.style.boxShadow = `0 0 15px ${s.color}40`
                  e.currentTarget.style.borderColor = s.color
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.boxShadow = 'none'
                  e.currentTarget.style.borderColor = `${s.color}30`
                }}
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-[#00f5ff]/5 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-mono text-xs text-[#e0f7ff]/20 tracking-widest">
            © 2025 SHABER MOHAMAD. ALL RIGHTS RESERVED.
          </p>
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-[#00ff88] animate-pulse" />
            <span className="font-mono text-xs text-[#e0f7ff]/20">SYSTEM ONLINE</span>
          </div>
          <p className="font-mono text-xs text-[#e0f7ff]/15">
            BUILT WITH REACT + VITE + THREE.JS
          </p>
        </div>
      </div>
    </footer>
  )
}
