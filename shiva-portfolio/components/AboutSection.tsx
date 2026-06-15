'use client';
import FadeIn from './FadeIn';
import GradientBlob from './GradientBlob';

const bullets = [
  'DESIGNING DIGITAL EXPERIENCES THAT MAKE USERS STOP AND ENGAGE.',
  'CREATING INTUITIVE UI/UX WITH CLEAN AND IMPACTFUL VISUAL STORYTELLING.',
  'PRODUCING AI-GENERATED VISUALS AND MOTION EDITS WITH CINEMATIC APPEAL.',
  'BLENDING AESTHETICS, STRATEGY, AND USABILITY INTO SEAMLESS USER EXPERIENCES.',
];

export default function AboutSection() {
  return (
    <section id="about" className="relative min-h-screen overflow-hidden flex flex-col" style={{ background: '#e8e4f0' }}>
      {/* Purple gradient background blobs */}
      <GradientBlob colors={['#c084fc', '#a78bfa', '#e879f9']} size={500} top="-100px" right="-100px" delay={1} />
      <GradientBlob colors={['#818cf8', '#c4b5fd', '#f0abfc']} size={400} bottom="-80px" left="-80px" delay={4} />

      {/* Noise overlay */}
      <div
        className="absolute inset-0 pointer-events-none z-[1]"
        style={{ backgroundImage: 'url("/noise.svg")', opacity: 0.06 }}
      />

      {/* Header */}
      <div className="flex justify-between items-center px-8 md:px-12 pt-8 z-10 relative">
        <span className="text-xs font-medium tracking-widest text-[#2d2d2d] uppercase">SHIVA</span>
        <span className="text-xs font-medium tracking-widest text-[#2d2d2d] uppercase">CREATIVE PRESENTATION</span>
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col lg:flex-row items-center gap-8 lg:gap-16 px-8 md:px-12 lg:px-16 py-12 z-10 relative">
        {/* Left: Text */}
        <div className="flex-1 max-w-lg">
          <FadeIn>
            <h2
              className="font-black text-[#2d2d2d] leading-none tracking-tight mb-10"
              style={{ fontSize: 'clamp(72px, 12vw, 140px)' }}
            >
              SHIVA
            </h2>
          </FadeIn>
          <div className="flex flex-col gap-5">
            {bullets.map((b, i) => (
              <FadeIn key={i} delay={0.1 + i * 0.1}>
                <p className="text-sm md:text-base font-semibold text-[#2d2d2d] leading-snug tracking-wide">
                  • {b}
                </p>
              </FadeIn>
            ))}
          </div>
        </div>

        {/* Right: Image area */}
        <FadeIn delay={0.3} className="flex-1 w-full max-w-xl relative">
          {/* Image container with dark background */}
          <div className="relative rounded-2xl overflow-hidden aspect-video bg-[#1a1a2e] shadow-2xl">
            {/* Asset placeholder */}
            <div className="absolute inset-0 flex items-center justify-center flex-col gap-3">
              <div className="text-white/40 text-5xl">🎨</div>
              <p className="text-white/40 text-xs text-center px-6">
                Place <code className="bg-white/10 px-1 rounded">public/about-neon.png</code><br />
                (the neon "Break rules. Keep taste." image from PDF page 4)
              </p>
            </div>
            {/* Neon text overlay replica */}
            <div className="absolute top-4 right-4 text-right">
              <p className="font-black text-2xl md:text-3xl leading-tight" style={{ fontFamily: 'cursive', color: '#ff2db2', textShadow: '0 0 20px #ff2db2, 0 0 40px #ff2db2' }}>
                Break rules.
              </p>
              <p className="font-black text-2xl md:text-3xl leading-tight" style={{ fontFamily: 'cursive', color: '#00f0ff', textShadow: '0 0 20px #00f0ff, 0 0 40px #00f0ff' }}>
                Keep taste.
              </p>
            </div>
          </div>
        </FadeIn>
      </div>

      {/* Footer */}
      <div className="flex justify-between items-center px-8 md:px-12 pb-8 z-10 relative">
        <span className="text-sm text-[#2d2d2d]">@shivavisuals_</span>
        <span className="text-sm text-[#2d2d2d]">Shiva Vaitunathan</span>
      </div>
    </section>
  );
}
