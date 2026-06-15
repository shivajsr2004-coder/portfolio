'use client';
import GradientBlob from './GradientBlob';
import FadeIn from './FadeIn';

const items = [
  { num: '01', label: 'INTRODUCTION' },
  { num: '02', label: 'ABOUT ME' },
  { num: '03', label: 'PERSONAL SKILL' },
  { num: '04', label: 'MY CREATIONS' },
  { num: '05', label: 'CONTACT ME' },
  { num: '06', label: 'THANK YOU' },
];

const scrollTo = (id: string) => {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
};

const sectionIds = ['introduction', 'about', 'skills', 'creations', 'contact', 'thankyou'];

export default function TableOfContents() {
  return (
    <section id="toc" className="relative min-h-screen bg-[#f0eeea] overflow-hidden flex flex-col">
      {/* Header */}
      <div className="flex justify-between items-center px-8 md:px-12 pt-8 z-10 relative">
        <span className="text-xs font-medium tracking-widest text-[#2d2d2d] uppercase">SHIVA</span>
        <span className="text-xs font-medium tracking-widest text-[#2d2d2d] uppercase">CREATIVE PRESENTATION</span>
      </div>

      {/* Blue/teal blob - right side */}
      <GradientBlob
        colors={['#93c5fd', '#6ee7b7', '#c4b5fd']}
        size={480}
        top="50px"
        right="-80px"
        delay={2}
      />
      <GradientBlob
        colors={['#a5f3fc', '#7dd3fc', '#fde68a']}
        size={280}
        bottom="100px"
        right="100px"
        delay={5}
      />

      {/* Title */}
      <FadeIn className="px-8 md:px-12 lg:px-16 mt-12 z-10 relative">
        <h2
          className="font-bold text-[#2d2d2d] leading-[1.05] tracking-tight"
          style={{ fontSize: 'clamp(52px, 8vw, 100px)' }}
        >
          Table of
          <br />
          Contents
        </h2>
      </FadeIn>

      {/* Items grid */}
      <div className="flex-1 flex items-end pb-20 px-8 md:px-12 lg:px-16 z-10 relative">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-12 gap-y-8 w-full max-w-4xl">
          {items.map((item, i) => (
            <FadeIn key={item.num} delay={i * 0.08}>
              <button
                onClick={() => scrollTo(sectionIds[i])}
                className="text-left group"
              >
                <div className="text-sm text-[#666] mb-1">{item.num}</div>
                <div className="text-sm font-bold text-[#2d2d2d] tracking-wider group-hover:opacity-60 transition-opacity duration-200">
                  {item.label}
                </div>
              </button>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
