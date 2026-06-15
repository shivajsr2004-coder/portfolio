'use client';
import { motion } from 'framer-motion';
import GradientBlob from './GradientBlob';

export default function ThankYouSection() {
  return (
    <section id="thankyou" className="relative min-h-screen bg-[#f0eeea] overflow-hidden flex flex-col">
      {/* Header */}
      <div className="flex justify-between items-center px-8 md:px-12 pt-8 z-10 relative">
        <span className="text-xs font-medium tracking-widest text-[#2d2d2d] uppercase">SHIVA</span>
        <span className="text-xs font-medium tracking-widest text-[#2d2d2d] uppercase">CREATIVE PRESENTATION</span>
      </div>

      {/* Gradient blobs - top right */}
      <GradientBlob colors={['#fbbf24', '#fb923c', '#f9a8d4']} size={520} top="-80px" right="-60px" delay={0} />
      <GradientBlob colors={['#f472b6', '#c084fc', '#fcd34d']} size={350} top="60px" right="200px" delay={3} />

      {/* Main text */}
      <div className="flex-1 flex flex-col justify-center px-8 md:px-12 lg:px-16 z-10 relative">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
        >
          <h2
            className="font-black text-[#2d2d2d] leading-[0.88] tracking-tight"
            style={{ fontSize: 'clamp(72px, 16vw, 200px)' }}
          >
            Thank You
          </h2>
          <h2
            className="font-black text-[#2d2d2d] leading-[0.88] tracking-tight"
            style={{ fontSize: 'clamp(72px, 16vw, 200px)', fontWeight: 900 }}
          >
            So Much!
          </h2>
        </motion.div>
      </div>
    </section>
  );
}
