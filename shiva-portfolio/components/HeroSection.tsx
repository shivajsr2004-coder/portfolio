'use client';
import { motion } from 'framer-motion';
import GradientBlob from './GradientBlob';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen bg-[#f0eeea] overflow-hidden flex flex-col">
      {/* Header label */}
      <div className="flex justify-between items-center px-8 md:px-12 pt-8 z-10 relative">
        <span className="text-xs font-medium tracking-widest text-[#2d2d2d] uppercase">SHIVA</span>
        <span className="text-xs font-medium tracking-widest text-[#2d2d2d] uppercase">CREATIVE PRESENTATION</span>
      </div>

      {/* Gradient blobs - top right area */}
      <GradientBlob
        colors={['#fbbf24', '#fb923c', '#f9a8d4']}
        size={520}
        top="-80px"
        right="-60px"
        delay={0}
      />
      <GradientBlob
        colors={['#f472b6', '#c084fc', '#fcd34d']}
        size={350}
        top="60px"
        right="200px"
        delay={3}
      />

      {/* Main title */}
      <div className="flex-1 flex flex-col justify-center px-8 md:px-12 lg:px-16 z-10 relative">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut', delay: 0.2 }}
        >
          <h1
            className="font-black text-[#2d2d2d] leading-[0.9] tracking-tight"
            style={{ fontSize: 'clamp(80px, 16vw, 200px)' }}
          >
            Creative
          </h1>
          <h1
            className="font-black text-[#2d2d2d] leading-[0.9] tracking-tight"
            style={{ fontSize: 'clamp(80px, 16vw, 200px)' }}
          >
            Portofolio
          </h1>
        </motion.div>
      </div>

      {/* Footer */}
      <motion.div
        className="flex justify-between items-center px-8 md:px-12 pb-8 z-10 relative"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        <span className="text-sm text-[#2d2d2d]">@shivavisuals_</span>
        <span className="text-sm text-[#2d2d2d]">Shiva Vaitunathan</span>
      </motion.div>
    </section>
  );
}
