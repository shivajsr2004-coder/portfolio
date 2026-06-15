'use client';
import { motion } from 'framer-motion';

interface BlobProps {
  colors: string[];
  size?: number;
  top?: string;
  left?: string;
  right?: string;
  bottom?: string;
  delay?: number;
  className?: string;
}

export default function GradientBlob({
  colors,
  size = 400,
  top,
  left,
  right,
  bottom,
  delay = 0,
  className = '',
}: BlobProps) {
  return (
    <motion.div
      className={`absolute rounded-full pointer-events-none ${className}`}
      style={{
        width: size,
        height: size,
        top,
        left,
        right,
        bottom,
        background: `radial-gradient(circle at 40% 40%, ${colors[0]}, ${colors[1]}, ${colors[2] || 'transparent'})`,
        filter: 'blur(60px)',
        opacity: 0.85,
      }}
      animate={{
        x: [0, 18, -10, 8, 0],
        y: [0, -12, 20, -8, 0],
        scale: [1, 1.04, 0.97, 1.02, 1],
      }}
      transition={{
        duration: 25,
        repeat: Infinity,
        ease: 'easeInOut',
        delay,
      }}
    />
  );
}
