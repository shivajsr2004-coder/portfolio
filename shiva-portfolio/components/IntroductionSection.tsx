'use client';
import FadeIn from './FadeIn';

const whatIDo = [
  { icon: '⊞', label: 'UI/UX\nDesign' },
  { icon: '▶', label: 'Video\nEditing' },
  { icon: '◇', label: 'Brand\nAesthetic' },
  { icon: '🚀', label: 'Rapid\nExecution' },
];

const highlights = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#f97316" strokeWidth="2">
        <path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z"/>
      </svg>
    ),
    text: (
      <>I create <strong>digital experiences</strong> that blend functionality, aesthetics, and storytelling.</>
    ),
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#6366f1" strokeWidth="2">
        <rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/>
      </svg>
    ),
    text: (
      <>From <strong>intuitive app interfaces</strong> and striking visual compositions to motion-driven content.</>
    ),
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#a855f7" strokeWidth="2">
        <circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/>
      </svg>
    ),
    text: (
      <><strong>My work is focused on making</strong> every interaction visually memorable and strategically effective.</>
    ),
  },
];

const contacts = [
  { icon: 'in', label: 'Shiva Vaitunathan', color: '#0077b5' },
  { icon: '📷', label: '@shivavisuals_', color: '#e1306c' },
  { icon: '✉', label: 'shivajsr2004@gmail.com', color: '#555' },
  { icon: '📞', label: '+91 7759855212', color: '#25d366' },
];

export default function IntroductionSection() {
  return (
    <section id="introduction" className="relative bg-[#f8f8f6] overflow-hidden py-0">
      <div className="max-w-[1400px] mx-auto flex flex-col lg:flex-row min-h-screen">
        {/* Left content */}
        <div className="flex-1 px-8 md:px-12 lg:px-16 py-16 flex flex-col justify-center">
          {/* Section eyebrow */}
          <FadeIn>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-2 h-2 rounded-full bg-orange-500" />
              <span className="text-xs font-semibold tracking-widest text-orange-500 uppercase">Introduction</span>
            </div>
          </FadeIn>

          {/* Name */}
          <FadeIn delay={0.1}>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1a1a1a] mb-1">
              Hello, I&apos;m
            </h2>
            <h2
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
              style={{
                background: 'linear-gradient(90deg, #2563eb 0%, #a855f7 40%, #f97316 80%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Shiva Vaitunathan
            </h2>
          </FadeIn>

          <FadeIn delay={0.15}>
            <p className="text-base text-[#444] mb-1 font-medium">Creative Designer &amp; Visual Storyteller</p>
            <div className="w-16 h-[2px] bg-orange-500 mb-8" />
          </FadeIn>

          {/* Highlights */}
          <div className="flex flex-col gap-5 mb-10">
            {highlights.map((h, i) => (
              <FadeIn key={i} delay={0.2 + i * 0.08}>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-white shadow-sm flex items-center justify-center">
                    {h.icon}
                  </div>
                  <p className="text-sm text-[#444] leading-relaxed pt-2">{h.text}</p>
                </div>
                <div className="h-px bg-[#e5e5e5] mt-5" />
              </FadeIn>
            ))}
          </div>

          {/* What I Do */}
          <FadeIn delay={0.5}>
            <div className="bg-white rounded-xl p-5 shadow-sm">
              <p className="text-sm font-semibold text-[#1a1a1a] mb-4">What I Do</p>
              <div className="grid grid-cols-4 gap-3">
                {whatIDo.map((w) => (
                  <div key={w.label} className="flex flex-col items-center gap-2">
                    <div className="w-10 h-10 rounded-xl border border-[#e5e5e5] flex items-center justify-center bg-[#f8f8f8] text-[#555] text-lg">
                      {w.icon}
                    </div>
                    <span className="text-[10px] text-[#555] text-center whitespace-pre-line leading-tight font-medium">
                      {w.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>

          {/* Contact strip */}
          <FadeIn delay={0.6}>
            <div className="flex flex-wrap gap-5 mt-8 border-t border-[#e5e5e5] pt-6">
              {contacts.map((c) => (
                <div key={c.label} className="flex items-center gap-2">
                  <div
                    className="w-7 h-7 rounded-md flex items-center justify-center text-white text-xs font-bold"
                    style={{ backgroundColor: c.color }}
                  >
                    {c.icon === 'in' ? 'in' : c.icon}
                  </div>
                  <span className="text-xs text-[#444]">{c.label}</span>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>

        {/* Right side - hero image placeholder */}
        <div className="lg:w-[500px] xl:w-[580px] relative flex items-center justify-center overflow-hidden">
          {/* Colored circle background */}
          <div className="relative w-full h-full min-h-[420px] flex items-center justify-center">
            {/* The circle */}
            <div
              className="absolute w-[420px] h-[420px] rounded-full"
              style={{
                background: 'conic-gradient(from 180deg, #2563eb 0deg, #2563eb 180deg, #f97316 180deg, #f97316 360deg)',
                right: '-40px',
                top: '50%',
                transform: 'translateY(-50%)',
              }}
            />
            {/* Illustration placeholder */}
            <div className="relative z-10 w-full h-full flex items-end justify-center pb-8">
              {/* Welcome text */}
              <div className="absolute top-12 right-8 bg-transparent">
                <div
                  className="text-2xl font-black leading-tight"
                  style={{ fontFamily: 'cursive', color: '#1a1a1a' }}
                >
                  Welcome<br />
                  <span className="text-[#1a1a1a]">to my</span><br />
                  <span style={{ color: '#f97316' }}>World</span>
                </div>
              </div>
            </div>
          </div>

          {/* Asset note */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 m-8 text-center shadow-sm">
              <p className="text-xs text-[#888] leading-relaxed">
                📌 Place <code className="bg-[#f0f0f0] px-1 rounded">public/intro-hero.png</code><br />
                (the illustrated character from PDF page 3)
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
