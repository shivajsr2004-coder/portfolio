'use client';
import { motion } from 'framer-motion';
import FadeIn from './FadeIn';

const projects = [
  {
    id: 'astronaut',
    title: 'Motivational Poster',
    desc: '"The sky is NOT our limit…" — Social media visual with astronaut illustration',
    bg: '#f5b942',
    textColor: '#1a1a1a',
    assetFile: 'public/creation-astronaut.png',
    content: (
      <div className="w-full h-full bg-[#f5b942] p-6 relative overflow-hidden flex flex-col gap-3">
        {/* Doodles */}
        <div className="absolute top-4 left-4 text-[#c8922a] text-2xl opacity-40">〰〰</div>
        <div className="absolute top-6 right-6 text-[#c8922a] opacity-40">✦ ✦</div>
        <div className="absolute bottom-6 left-6 text-[#c8922a] text-2xl opacity-40">✦</div>
        
        <div className="flex gap-4 mt-4">
          <div className="flex-1">
            <p className="text-sm font-medium text-[#5a3a00] mb-2">Our motto is clear...</p>
            <p className="text-3xl font-black text-[#1a1a1a] leading-tight">
              The sky is{' '}
              <span className="bg-[#2563eb] text-white px-2 rounded">NOT</span>
              {' '}our limit...
            </p>
            <p className="text-sm text-[#5a3a00] mt-2">And it should not be yours...</p>
          </div>
          {/* Astronaut box */}
          <div className="w-28 h-36 bg-[#2196f3] rounded flex items-center justify-center text-4xl flex-shrink-0">
            🧑‍🚀
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 'controlx',
    title: 'control.x — Gaming UI',
    desc: 'Dark-themed gaming controller e-commerce landing page',
    bg: '#0d0d0d',
    textColor: '#ffffff',
    assetFile: 'public/creation-controlx.png',
    content: (
      <div className="w-full h-full bg-[#0d0d0d] p-5 relative overflow-hidden">
        {/* Nav */}
        <div className="flex items-center justify-between mb-5">
          <span className="text-white font-bold text-sm">✕ control.x</span>
          <div className="flex gap-3 text-xs text-white/50">
            <span>Home</span><span>Controllers</span><span>Contact</span>
          </div>
          <span className="bg-white text-black text-xs px-2 py-1 rounded font-medium">Sign up</span>
        </div>
        <div className="flex gap-4">
          <div className="flex-1">
            <p className="text-white/40 text-lg font-bold leading-tight">
              Unleash <span className="text-white font-black">Your</span><br />
              Game. <span className="text-white font-black">Feel</span><br />
              <span className="text-white font-black">Every Moment.</span>
            </p>
            <p className="text-white/40 text-[10px] mt-2 leading-relaxed">
              Precision. Comfort. Unrivaled control. The Xbox Wireless Controller brings your games to life.
            </p>
            <div className="flex gap-2 mt-3">
              <span className="border border-white/30 text-white/70 text-[10px] px-2 py-1 rounded">Explore Controllers</span>
              <span className="text-white/50 text-[10px] px-2 py-1">Shop Now</span>
            </div>
          </div>
          <div className="w-24 flex flex-col gap-1">
            <div className="bg-[#1a1a1a] rounded h-10 flex items-center justify-center text-xl">🎮</div>
            <div className="bg-[#1a1a1a] rounded h-10 flex items-center justify-center text-xl">🕹️</div>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 'sam',
    title: 'Sam. — Web Designer Portfolio',
    desc: 'Dark orange-themed portfolio with 3D character hero section',
    bg: '#1a0a00',
    textColor: '#ffffff',
    assetFile: 'public/creation-sam.png',
    content: (
      <div className="w-full h-full relative overflow-hidden rounded-xl" style={{ background: 'radial-gradient(ellipse at 30% 50%, #7c2d00 0%, #1a0a00 70%)' }}>
        <div className="p-5">
          <div className="flex items-center justify-between mb-4">
            <span className="text-white font-bold text-sm">Sam.</span>
            <div className="flex gap-3 text-xs text-white/50">
              <span>Home</span><span>Skill</span><span>Experience</span>
            </div>
            <span className="bg-[#f97316] text-white text-xs px-3 py-1 rounded-full font-medium">Download Resume</span>
          </div>
          <p className="text-white/60 text-xs mb-1">Hey, I am <span className="text-[#f97316]">Sam</span></p>
          <p className="text-white font-black text-3xl mb-2">Web Designer</p>
          <button className="bg-[#f97316] text-white text-xs px-4 py-2 rounded-full font-medium">Hire me</button>
          <div className="absolute right-4 bottom-4 text-5xl">👨‍🎨</div>
        </div>
      </div>
    ),
  },
  {
    id: 'monk',
    title: 'monk. — Meditation Platform',
    desc: 'Dark atmospheric UI for a meditation courses platform',
    bg: '#0a0a0f',
    textColor: '#ffffff',
    assetFile: 'public/creation-monk.png',
    content: (
      <div className="w-full h-full relative overflow-hidden rounded-xl bg-[#0a0a12]">
        <div className="p-5">
          <div className="flex items-center justify-between mb-4">
            <span className="text-white font-semibold text-sm">monk.</span>
            <div className="flex gap-3 text-xs text-white/40">
              <span>Home</span><span>Courses</span><span>About</span>
            </div>
            <span className="bg-[#f97316] text-white text-xs px-3 py-1 rounded font-medium">Sign Up</span>
          </div>
          <span className="text-xs bg-[#1a1a2e] text-white/50 px-2 py-1 rounded">New · Flat 40% off for all users</span>
          <p className="text-white font-black text-2xl mt-3 leading-tight">Find your<br />Inner Monastery</p>
          <p className="text-white/40 text-xs mt-2">Learn timeless art of meditation practiced by monks for centuries.</p>
          <div className="flex gap-3 mt-3">
            <span className="bg-[#f97316] text-white text-xs px-3 py-2 rounded">Get Started</span>
            <span className="text-white/60 text-xs px-3 py-2">View Courses</span>
          </div>
          <div className="flex gap-6 mt-4 border-t border-white/10 pt-3">
            {[['240', 'Courses'], ['200k', 'Practitioners'], ['20+', 'Instructors']].map(([n, l]) => (
              <div key={l}>
                <p className="text-white font-bold text-sm">{n}</p>
                <p className="text-white/40 text-[10px]">{l}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="absolute right-4 top-16 text-5xl">🧘</div>
      </div>
    ),
  },
];

export default function CreationsSection() {
  return (
    <section id="creations" className="relative bg-[#e8e4e0] overflow-hidden py-0">
      {/* Section header slide */}
      <div
        className="relative flex items-end justify-end px-8 md:px-12 lg:px-16 py-20"
        style={{ background: '#f0eeea' }}
      >
        <FadeIn className="text-right">
          <p className="text-xs tracking-widest text-[#888] uppercase mb-2">04</p>
          <h2
            className="font-black text-[#1a1a1a] tracking-tight leading-tight"
            style={{ fontSize: 'clamp(40px, 8vw, 100px)' }}
          >
            MY CREATIONS
          </h2>
        </FadeIn>
      </div>

      {/* Projects grid */}
      <div
        className="grid grid-cols-1 md:grid-cols-2 gap-0 relative"
        style={{ backgroundImage: "url('/wood-texture.jpg')", backgroundSize: 'cover' }}
      >
        {/* Subtle wood-plank texture overlay */}
        <div className="absolute inset-0 bg-[#d4c9bc]/60 pointer-events-none z-0" />

        {projects.map((project, i) => (
          <FadeIn key={project.id} delay={i * 0.1} className="relative z-10 p-6">
            <motion.div
              className="rounded-2xl overflow-hidden shadow-xl cursor-default"
              style={{ aspectRatio: '16/10' }}
              whileHover={{ scale: 1.01 }}
              transition={{ duration: 0.3 }}
            >
              {project.content}
            </motion.div>
          </FadeIn>
        ))}
      </div>

      {/* Asset notes */}
      <div className="bg-[#f0eeea] px-8 md:px-12 py-8">
        <p className="text-xs text-[#999] font-medium mb-3">📌 Asset Placement for My Creations section:</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {projects.map((p) => (
            <div key={p.id} className="bg-white rounded-lg p-3 shadow-sm">
              <p className="text-[10px] font-mono text-[#666]">{p.assetFile}</p>
              <p className="text-[10px] text-[#999] mt-1">{p.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
