'use client';
import FadeIn from './FadeIn';
import GradientBlob from './GradientBlob';

const skills = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="2">
        <rect x="2" y="3" width="20" height="14" rx="2"/><polyline points="8 21 12 17 16 21"/>
      </svg>
    ),
    title: 'USER INTERFACE DESIGN',
    desc: 'Designing intuitive and engaging user experiences.',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="2">
        <circle cx="12" cy="12" r="2"/><path d="M12 10V4M12 20v-6M4 12H2M22 12h-2M6.34 6.34 4.93 4.93M19.07 19.07l-1.41-1.41M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"/>
      </svg>
    ),
    title: 'VISUAL STORYTELLING',
    desc: 'Communicating ideas through compelling visuals.',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="2">
        <polygon points="5 3 19 12 5 21 5 3"/>
      </svg>
    ),
    title: 'VIDEO EDITING',
    desc: 'Crafting impactful edits that tell a story.',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="2">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
      </svg>
    ),
    title: 'BRAND AESTHETIC DEVELOPMENT',
    desc: 'Building strong, recognizable visual identities.',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="2">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
      </svg>
    ),
    title: 'RAPID EXECUTION',
    desc: 'Turning ideas into high-quality results—fast and efficiently.',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="2">
        <line x1="12" y1="2" x2="12" y2="6"/><line x1="12" y1="18" x2="12" y2="22"/><line x1="4.93" y1="4.93" x2="7.76" y2="7.76"/><line x1="16.24" y1="16.24" x2="19.07" y2="19.07"/><line x1="2" y1="12" x2="6" y2="12"/><line x1="18" y1="12" x2="22" y2="12"/><line x1="4.93" y1="19.07" x2="7.76" y2="16.24"/><line x1="16.24" y1="7.76" x2="19.07" y2="4.93"/>
      </svg>
    ),
    title: 'CONCEPT DEVELOPMENT',
    desc: 'Creating original concepts that solve real problems.',
  },
];

const tools = [
  { name: 'FIGMA', color: '#f24e1e', icon: '🎨' },
  { name: 'FRAMER', color: '#0055ff', icon: '⚡' },
  { name: 'CHATGPT AI', color: '#10a37f', icon: '🤖' },
  { name: 'DAVINCI RESOLVE', color: '#e4a800', icon: '🎬' },
];

export default function SkillsSection() {
  return (
    <section id="skills" className="relative min-h-screen bg-[#f0eeea] overflow-hidden flex flex-col">
      <GradientBlob colors={['#fbbf24', '#fb923c', '#f9a8d4']} size={420} top="-80px" right="-60px" delay={0} />
      <GradientBlob colors={['#93c5fd', '#818cf8', '#c084fc']} size={300} bottom="80px" right="200px" delay={6} />

      {/* Content */}
      <div className="flex-1 flex flex-col lg:flex-row px-8 md:px-12 lg:px-16 pt-16 pb-12 z-10 relative gap-12">
        {/* Left: Skills grid + Tools */}
        <div className="flex-1 max-w-2xl">
          <FadeIn>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#1a1a1a] mb-2 leading-tight">
              Personal Skills
            </h2>
            <div className="w-12 h-[3px] bg-[#2563eb] mb-10" />
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
            {skills.map((skill, i) => (
              <FadeIn key={skill.title} delay={0.1 + i * 0.07}>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-xl border border-[#e5e5e5] bg-white flex items-center justify-center shadow-sm">
                    {skill.icon}
                  </div>
                  <div>
                    <p className="text-xs font-bold text-[#1a1a1a] tracking-wider mb-1">{skill.title}</p>
                    <p className="text-xs text-[#666] leading-relaxed">{skill.desc}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>

          {/* Tools */}
          <FadeIn delay={0.6} className="mt-12">
            <div className="border-t border-[#d5d5d5] pt-8">
              <p className="text-xl font-semibold text-[#1a1a1a] mb-6">Tools I Work With</p>
              <div className="flex flex-wrap gap-3">
                {tools.map((tool) => (
                  <div
                    key={tool.name}
                    className="flex items-center gap-2 px-4 py-3 bg-white border border-[#e5e5e5] rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200"
                  >
                    <span className="text-lg">{tool.icon}</span>
                    <span className="text-xs font-bold text-[#1a1a1a] tracking-wider">{tool.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>

        {/* Right: Character image */}
        <FadeIn delay={0.3} className="lg:w-[420px] xl:w-[480px] relative">
          <div
            className="w-full h-full min-h-[400px] rounded-2xl overflow-hidden flex items-center justify-center relative"
            style={{ background: 'linear-gradient(135deg, #f9a8d4 0%, #93c5fd 50%, #fcd34d 100%)' }}
          >
            <div className="text-center px-8">
              <div className="text-6xl mb-3">👨‍💻</div>
              <p className="text-xs text-white/80">
                Place <code className="bg-white/20 px-1 rounded">public/skills-character.png</code><br />
                (the designer illustration from PDF page 5)
              </p>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
