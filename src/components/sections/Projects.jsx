import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'

const projects = [
  {
    id: 1,
    title: '2D ARCADE GAMES',
    category: 'GAME DEV',
    color: '#00f5ff',
    description: 'Collection of classic-inspired 2D arcade games built with Unity, featuring physics-based gameplay, pixel art aesthetics, and score systems.',
    features: ['Physics-based mechanics', 'Pixel art design', 'Score leaderboard', 'Multiple levels'],
    tech: ['Unity', 'C#', 'Pixel Art', 'Game Design'],
    github: 'https://github.com/shabermohamadb',
    demo: '#',
    icon: '◈',
    status: 'SHIPPED',
  },
  {
    id: 2,
    title: 'BASH SELECTION SITE',
    category: 'WEB DEV',
    color: '#bf00ff',
    description: 'Interactive web-based Bash command selector and learning platform with real-time command previews and syntax highlighting.',
    features: ['Command database', 'Live syntax preview', 'Search & filter', 'Copy to clipboard'],
    tech: ['HTML', 'CSS', 'JavaScript', 'Bash'],
    github: 'https://github.com/shabermohamadb',
    demo: '#',
    icon: '⬡',
    status: 'LIVE',
  },
  {
    id: 3,
    title: 'TASK TRACKER BOT',
    category: 'AI / BOT',
    color: '#00ff88',
    description: 'Discord bot for team task management with natural language commands, Kanban-style tracking, reminders, and progress reporting.',
    features: ['NLP commands', 'Task boards', 'Due date alerts', 'Team progress'],
    tech: ['Python', 'Discord.py', 'SQLite', 'NLP'],
    github: 'https://github.com/shabermohamadb',
    demo: '#',
    icon: '◇',
    status: 'ACTIVE',
  },
  {
    id: 4,
    title: 'SMART HOME IoT',
    category: 'IOT / AI',
    color: '#ff006e',
    description: 'Comprehensive smart home automation system using MQTT protocol, real-time sensor monitoring, voice control, and a web dashboard.',
    features: ['MQTT messaging', 'Voice control', 'Sensor monitoring', 'Mobile dashboard'],
    tech: ['Python', 'MQTT', 'Arduino', 'React', 'Node.js'],
    github: 'https://github.com/shabermohamadb',
    demo: '#',
    icon: '⬢',
    status: 'LIVE',
  },
  {
    id: 5,
    title: 'EMOTION DETECTION',
    category: 'AI / ML',
    color: '#00f5ff',
    description: 'Real-time facial emotion recognition system using deep learning, OpenCV, and TensorFlow with 7-class classification.',
    features: ['Real-time detection', '7 emotion classes', 'Webcam streaming', 'Confidence scores'],
    tech: ['Python', 'TensorFlow', 'OpenCV', 'CNN'],
    github: 'https://github.com/shabermohamadb',
    demo: '#',
    icon: '◈',
    status: 'SHIPPED',
  },
  {
    id: 6,
    title: 'OPEN WORLD SURVIVAL',
    category: 'AAA GAME',
    color: '#bf00ff',
    description: 'Massive open-world survival RPG built in Unreal Engine 5 with dynamic weather, crafting systems, AI wildlife, and Nanite landscapes.',
    features: ['Nanite landscapes', 'Dynamic weather', 'Crafting system', 'AI ecosystems'],
    tech: ['Unreal Engine 5', 'C++', 'Blueprints', 'Houdini'],
    github: 'https://github.com/shabermohamadb',
    demo: '#',
    icon: '◇',
    status: 'IN DEV',
  },
  {
    id: 7,
    title: 'MULTIPLAYER FPS',
    category: 'AAA GAME',
    color: '#ff006e',
    description: 'Online multiplayer first-person shooter with dedicated server architecture, anti-cheat, lag compensation, and competitive matchmaking.',
    features: ['Dedicated servers', 'Lag compensation', 'Anti-cheat', 'Ranked matchmaking'],
    tech: ['Unreal Engine 5', 'C++', 'Steam SDK', 'EOS'],
    github: 'https://github.com/shabermohamadb',
    demo: '#',
    icon: '⬡',
    status: 'BETA',
  },
  {
    id: 8,
    title: 'HORROR ESCAPE ROOM',
    category: 'GAME DEV',
    color: '#00ff88',
    description: 'Atmospheric horror escape game with procedurally generated puzzles, dynamic scare events, spatial audio, and photorealistic lighting.',
    features: ['Procedural puzzles', 'Dynamic AI scares', 'Spatial audio', 'Lumen lighting'],
    tech: ['Unreal Engine 5', 'Blueprints', 'FMOD', 'MetaSound'],
    github: 'https://github.com/shabermohamadb',
    demo: '#',
    icon: '⬢',
    status: 'SHIPPED',
  },
  {
    id: 9,
    title: 'RACING SIMULATOR',
    category: 'AAA GAME',
    color: '#00f5ff',
    description: 'High-fidelity racing simulator with Chaos physics, realistic tire models, aerodynamic simulation, and online ghost racing.',
    features: ['Chaos physics', 'Tire simulation', 'Aerodynamics', 'Ghost racing'],
    tech: ['Unreal Engine 5', 'C++', 'Chaos Physics', 'Blueprints'],
    github: 'https://github.com/shabermohamadb',
    demo: '#',
    icon: '◈',
    status: 'IN DEV',
  },
  {
    id: 10,
    title: 'AI ENEMY SYSTEM',
    category: 'GAME AI',
    color: '#bf00ff',
    description: 'Advanced AI enemy framework with behavior trees, squad tactics, dynamic difficulty adjustment, and realistic perception systems.',
    features: ['Behavior trees', 'Squad AI tactics', 'Dynamic difficulty', 'Perception system'],
    tech: ['Unreal Engine 5', 'C++', 'AIModule', 'EQS'],
    github: 'https://github.com/shabermohamadb',
    demo: '#',
    icon: '◇',
    status: 'ACTIVE',
  },
]

const statusColors = {
  SHIPPED: '#00f5ff',
  LIVE: '#00ff88',
  ACTIVE: '#00ff88',
  'IN DEV': '#bf00ff',
  BETA: '#ff006e',
}

function ProjectCard({ project, index, inView }) {
  const [hovered, setHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.08, duration: 0.6 }}
      whileHover={{ y: -8, scale: 1.01 }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      className="relative group overflow-hidden glass hologram"
      style={{
        border: `1px solid ${project.color}20`,
        transition: 'border-color 0.3s, box-shadow 0.3s',
        ...(hovered && {
          borderColor: `${project.color}60`,
          boxShadow: `0 0 30px ${project.color}20, inset 0 0 30px ${project.color}05`,
        }),
      }}
    >
      {/* Animated top border */}
      <div
        className="absolute top-0 left-0 h-[2px] transition-all duration-500"
        style={{
          width: hovered ? '100%' : '30%',
          background: `linear-gradient(90deg, ${project.color}, transparent)`,
          boxShadow: `0 0 8px ${project.color}`,
        }}
      />

      {/* Corner decorations */}
      <div className="absolute top-0 right-0 w-6 h-6 border-r-2 border-t-2" style={{ borderColor: `${project.color}40` }} />
      <div className="absolute bottom-0 left-0 w-6 h-6 border-l-2 border-b-2" style={{ borderColor: `${project.color}40` }} />

      {/* Scan effect on hover */}
      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ top: '-5%' }}
            animate={{ top: '110%' }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: 'linear' }}
            className="absolute left-0 w-full h-[2px] pointer-events-none z-20"
            style={{
              background: `linear-gradient(90deg, transparent, ${project.color}80, transparent)`,
              boxShadow: `0 0 12px ${project.color}`,
            }}
          />
        )}
      </AnimatePresence>

      {/* Glow background */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
        style={{ background: `radial-gradient(ellipse at 50% 0%, ${project.color}08, transparent 70%)` }}
      />

      {/* Card content */}
      <div className="p-6 relative z-10">
        {/* Header row */}
        <div className="flex items-start justify-between mb-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span style={{ color: project.color }} className="text-lg">{project.icon}</span>
              <span className="font-mono text-xs" style={{ color: `${project.color}80` }}>
                {project.category}
              </span>
            </div>
            <h3 className="font-orbitron font-black text-xl text-[#e0f7ff] tracking-wide leading-tight">
              {project.title}
            </h3>
          </div>
          <div
            className="flex items-center gap-1.5 px-2 py-1 rounded-sm border"
            style={{
              borderColor: `${statusColors[project.status]}40`,
              background: `${statusColors[project.status]}10`,
            }}
          >
            <div
              className="w-1.5 h-1.5 rounded-full animate-pulse"
              style={{ background: statusColors[project.status] }}
            />
            <span className="font-mono text-[10px]" style={{ color: statusColors[project.status] }}>
              {project.status}
            </span>
          </div>
        </div>

        {/* Description */}
        <p className="font-rajdhani text-[#e0f7ff]/60 text-sm leading-relaxed mb-5">
          {project.description}
        </p>

        {/* Features */}
        <div className="mb-5 grid grid-cols-2 gap-1.5">
          {project.features.map(f => (
            <div key={f} className="flex items-center gap-2">
              <div className="w-1 h-1 rounded-full" style={{ background: project.color }} />
              <span className="font-mono text-[11px] text-[#e0f7ff]/50">{f}</span>
            </div>
          ))}
        </div>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tech.map(t => (
            <span
              key={t}
              className="font-mono text-[10px] px-2 py-0.5"
              style={{
                border: `1px solid ${project.color}30`,
                color: `${project.color}80`,
                background: `${project.color}08`,
              }}
            >
              {t}
            </span>
          ))}
        </div>

        {/* Action buttons */}
        <div className="flex gap-3">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 text-center py-2 font-mono text-xs border transition-all duration-300"
            style={{ borderColor: `${project.color}40`, color: `${project.color}90` }}
            onMouseEnter={e => {
              e.currentTarget.style.background = `${project.color}15`
              e.currentTarget.style.borderColor = project.color
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = 'transparent'
              e.currentTarget.style.borderColor = `${project.color}40`
            }}
          >
            ⌂ GITHUB
          </a>
          <a
            href={project.demo}
            className="flex-1 text-center py-2 font-mono text-xs transition-all duration-300"
            style={{ background: `${project.color}20`, color: project.color }}
            onMouseEnter={e => {
              e.currentTarget.style.background = `${project.color}35`
              e.currentTarget.style.boxShadow = `0 0 15px ${project.color}30`
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = `${project.color}20`
              e.currentTarget.style.boxShadow = 'none'
            }}
          >
            ◈ LIVE DEMO
          </a>
        </div>
      </div>

      {/* Project ID tag */}
      <div className="absolute bottom-2 right-3">
        <span className="font-mono text-[9px] text-[#e0f7ff]/15">
          PRJ-{String(project.id).padStart(3, '0')}
        </span>
      </div>
    </motion.div>
  )
}

export default function Projects() {
  const ref = useRef()
  const inView = useInView(ref, { once: true, margin: '-50px' })
  const [filter, setFilter] = useState('ALL')

  const categories = ['ALL', 'GAME DEV', 'AAA GAME', 'AI / ML', 'WEB DEV', 'IOT / AI']
  const filtered = filter === 'ALL' ? projects : projects.filter(p => p.category === filter)

  return (
    <section id="projects" className="relative py-32 px-6">
      <div className="max-w-7xl mx-auto" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="mb-8"
        >
          <span className="section-tag block mb-3">// 03 PROJECTS.DAT</span>
          <h2 className="font-orbitron text-4xl md:text-5xl font-black text-[#e0f7ff] tracking-widest">
            DEPLOYED <span className="neon-text-cyan">SYSTEMS</span>
          </h2>
          <div className="w-32 h-px bg-gradient-to-r from-[#00f5ff] to-transparent mt-4" />
        </motion.div>

        {/* Filter buttons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap gap-2 mb-12"
        >
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`font-mono text-xs px-4 py-2 border transition-all duration-300 ${
                filter === cat
                  ? 'border-[#00f5ff] text-[#00f5ff] bg-[#00f5ff]/10 shadow-[0_0_15px_rgba(0,245,255,0.3)]'
                  : 'border-[#00f5ff]/20 text-[#e0f7ff]/40 hover:border-[#00f5ff]/50 hover:text-[#00f5ff]/70'
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Projects grid */}
        <motion.div
          layout
          className="grid md:grid-cols-2 xl:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} inView={inView} />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* GitHub CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="text-center mt-16"
        >
          <a
            href="https://github.com/shabermohamadb"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-cyber inline-block"
          >
            VIEW ALL ON GITHUB →
          </a>
        </motion.div>
      </div>
    </section>
  )
}
