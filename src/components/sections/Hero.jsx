import { Suspense, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Stars, Float, Torus } from '@react-three/drei'
import { motion } from 'framer-motion'
import * as THREE from 'three'

function HeroGeometry() {
  const torusRef = useRef()
  const torusRef2 = useRef()
  const icosaRef = useRef()

  useFrame((state) => {
    const t = state.clock.getElapsedTime()
    if (torusRef.current) {
      torusRef.current.rotation.x = t * 0.3
      torusRef.current.rotation.y = t * 0.2
    }
    if (torusRef2.current) {
      torusRef2.current.rotation.x = -t * 0.2
      torusRef2.current.rotation.z = t * 0.3
    }
    if (icosaRef.current) {
      icosaRef.current.rotation.y = t * 0.15
      icosaRef.current.rotation.x = t * 0.1
    }
  })

  return (
    <>
      <Stars radius={80} depth={50} count={3000} factor={4} saturation={0} fade speed={1} />

      {/* Outer torus */}
      <Float speed={1.5} rotationIntensity={0.5} floatIntensity={1}>
        <mesh ref={torusRef} position={[0, 0, -5]}>
          <torusGeometry args={[3.5, 0.02, 16, 100]} />
          <meshBasicMaterial color="#00f5ff" transparent opacity={0.4} />
        </mesh>
      </Float>

      {/* Inner torus */}
      <Float speed={2} rotationIntensity={0.8} floatIntensity={1.5}>
        <mesh ref={torusRef2} position={[0, 0, -5]}>
          <torusGeometry args={[2.5, 0.02, 16, 100]} />
          <meshBasicMaterial color="#bf00ff" transparent opacity={0.3} />
        </mesh>
      </Float>

      {/* Center icosahedron */}
      <Float speed={1} rotationIntensity={0.3} floatIntensity={0.5}>
        <mesh ref={icosaRef} position={[0, 0, -5]}>
          <icosahedronGeometry args={[1.2, 1]} />
          <meshBasicMaterial
            color="#00f5ff"
            wireframe
            transparent
            opacity={0.15}
          />
        </mesh>
      </Float>

      {/* Ambient light particles - floating orbs */}
      {[...Array(6)].map((_, i) => (
        <Float key={i} speed={1 + i * 0.3} floatIntensity={2} rotationIntensity={0.5}>
          <mesh
            position={[
              Math.cos((i / 6) * Math.PI * 2) * 4,
              Math.sin((i / 6) * Math.PI * 2) * 2,
              -6
            ]}
          >
            <sphereGeometry args={[0.04, 8, 8]} />
            <meshBasicMaterial color={i % 2 === 0 ? '#00f5ff' : '#bf00ff'} />
          </mesh>
        </Float>
      ))}
    </>
  )
}

const titleVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
}

const letterVariants = {
  hidden: { opacity: 0, y: 60, rotateX: -90 },
  visible: { opacity: 1, y: 0, rotateX: 0, transition: { duration: 0.6 } },
}

export default function Hero() {
  const name = 'SHABER'

  return (
    <section
      id="hero"
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      {/* 3D Canvas */}
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 5], fov: 60 }}>
          <Suspense fallback={null}>
            <HeroGeometry />
          </Suspense>
        </Canvas>
      </div>

      {/* Grid overlay */}
      <div className="absolute inset-0 grid-overlay opacity-30 z-1" />

      {/* Radial glow */}
      <div className="absolute inset-0 z-1 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#00f5ff]/5 blur-[100px]" />
        <div className="absolute top-1/3 left-1/3 w-[300px] h-[300px] rounded-full bg-[#bf00ff]/5 blur-[80px]" />
      </div>

      {/* Corner HUD decorations */}
      <div className="absolute top-20 left-6 md:left-12 z-10">
        <div className="text-[#00f5ff]/40 font-mono text-xs leading-5">
          <div>SYS.STATUS :: ONLINE</div>
          <div>PORTFOLIO.EXE :: RUNNING</div>
          <div className="flex gap-2 items-center mt-1">
            <span className="w-2 h-2 rounded-full bg-[#00ff88] animate-pulse" />
            <span>READY</span>
          </div>
        </div>
      </div>

      <div className="absolute top-20 right-6 md:right-12 z-10 text-right">
        <div className="text-[#00f5ff]/40 font-mono text-xs leading-5">
          <div>LOC :: INDIA</div>
          <div>SPEC :: GAME DEV</div>
          <div>ENGINE :: UNREAL 5</div>
        </div>
      </div>

      {/* Main content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        {/* Pre-title tag */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-6"
        >
          <span className="section-tag inline-block px-4 py-1 border border-[#00f5ff]/30 bg-[#00f5ff]/5">
            // PORTFOLIO LOADED
          </span>
        </motion.div>

        {/* Animated name */}
        <motion.h1
          className="font-orbitron font-black text-5xl md:text-7xl lg:text-8xl neon-text-cyan mb-6 tracking-widest"
          variants={titleVariants}
          initial="hidden"
          animate="visible"
        >
          {name.split('').map((char, i) => (
            <motion.span
              key={i}
              variants={letterVariants}
              style={{ display: 'inline-block' }}
              className={char === ' ' ? 'w-6' : ''}
            >
              {char}
            </motion.span>
          ))}
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4 }}
          className="font-rajdhani text-lg md:text-2xl text-[#e0f7ff]/70 tracking-widest mb-12"
        >
          Game Developer&nbsp;
          <span className="text-[#bf00ff]">|</span>&nbsp;
          Unity&nbsp;
          <span className="text-[#bf00ff]">|</span>&nbsp;
          Gameplay Programmer
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <a href="#projects" className="btn-cyber-solid font-orbitron text-xs px-8 py-4 tracking-widest">
            VIEW PROJECTS
          </a>
          <a href="/shabeer.pdf" download className="btn-cyber font-orbitron text-xs px-8 py-4 tracking-widest">
            DOWNLOAD RESUME
          </a>
        </motion.div>
      </div>

      {/* Bottom HUD elements */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
      >
        <span className="font-mono text-xs text-[#00f5ff]/50 tracking-widest">SCROLL TO EXPLORE</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-px h-10 bg-gradient-to-b from-[#00f5ff] to-transparent"
        />
      </motion.div>

      {/* Horizontal scan line */}
      <motion.div
        className="absolute left-0 w-full h-px bg-gradient-to-r from-transparent via-[#00f5ff]/20 to-transparent pointer-events-none z-10"
        animate={{ top: ['0%', '100%'] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'linear' }}
      />
    </section>
  )
}
