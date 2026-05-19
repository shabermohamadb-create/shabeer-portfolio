import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

export default function LoadingScreen() {
  const [progress, setProgress] = useState(0)
  const [statusText, setStatusText] = useState('INITIALIZING SYSTEMS')

  const statuses = [
    'INITIALIZING SYSTEMS',
    'LOADING ASSETS',
    'CALIBRATING HUD',
    'SYNCING DATABASE',
    'READY',
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        const next = prev + Math.random() * 15
        return next > 100 ? 100 : next
      })
    }, 200)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const idx = Math.floor((progress / 100) * (statuses.length - 1))
    setStatusText(statuses[Math.min(idx, statuses.length - 1)])
  }, [progress])

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.05 }}
      transition={{ duration: 0.6 }}
      className="fixed inset-0 z-[99999] bg-[#020408] flex flex-col items-center justify-center grid-overlay"
    >
      {/* Corner decorations */}
      <div className="absolute top-6 left-6 w-12 h-12 border-l-2 border-t-2 border-[#00f5ff]" />
      <div className="absolute top-6 right-6 w-12 h-12 border-r-2 border-t-2 border-[#00f5ff]" />
      <div className="absolute bottom-6 left-6 w-12 h-12 border-l-2 border-b-2 border-[#00f5ff]" />
      <div className="absolute bottom-6 right-6 w-12 h-12 border-r-2 border-b-2 border-[#00f5ff]" />

      {/* Logo / Name */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="mb-12 text-center"
      >
        <div className="font-mono text-xs text-[#00f5ff] letter-spacing-widest mb-2 tracking-[0.4em]">
          // PORTFOLIO OS v2.0
        </div>
        <h1 className="font-orbitron text-4xl md:text-6xl font-black neon-text-cyan tracking-widest">
          SHABER
        </h1>
        <p className="font-mono text-sm text-[#00f5ff]/60 tracking-[0.5em] mt-2">
          GAME DEVELOPER
        </p>
      </motion.div>

      {/* Hex circle loader */}
      <motion.div
        className="relative w-32 h-32 mb-10"
        animate={{ rotate: 360 }}
        transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
      >
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <polygon
            points="50,5 95,27.5 95,72.5 50,95 5,72.5 5,27.5"
            fill="none"
            stroke="#00f5ff"
            strokeWidth="1"
            opacity="0.3"
          />
          <polygon
            points="50,15 85,32.5 85,67.5 50,85 15,67.5 15,32.5"
            fill="none"
            stroke="#bf00ff"
            strokeWidth="1"
            opacity="0.5"
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="font-mono text-[#00f5ff] text-sm font-bold">
            {Math.floor(progress)}%
          </span>
        </div>
      </motion.div>

      {/* Progress bar */}
      <div className="w-64 md:w-96 mb-4">
        <div className="h-[2px] bg-[#00f5ff]/10 rounded-full overflow-hidden">
          <motion.div
            className="h-full loading-bar rounded-full"
            style={{ width: `${progress}%` }}
            transition={{ duration: 0.2 }}
          />
        </div>
      </div>

      {/* Status text */}
      <motion.p
        key={statusText}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="font-mono text-xs text-[#00f5ff]/70 tracking-[0.3em]"
      >
        {statusText}
      </motion.p>

      {/* Scan line */}
      <motion.div
        className="absolute left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#00f5ff]/40 to-transparent pointer-events-none"
        animate={{ top: ['0%', '100%'] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: 'linear' }}
      />
    </motion.div>
  )
}
