'use client';
import { motion } from 'framer-motion';
import FadeIn from './FadeIn';
import GradientBlob from './GradientBlob';

const contacts = [
  {
    icon: (
      <div className="w-10 h-10 rounded-xl bg-[#0077b5] flex items-center justify-center text-white font-bold text-sm">in</div>
    ),
    platform: 'LinkedIn',
    value: 'Shiva Vaitunathan',
    href: 'https://linkedin.com/in/shiva-vaitunathan',
  },
  {
    icon: (
      <div className="w-10 h-10 rounded-xl flex items-center justify-center text-white text-lg" style={{ background: 'radial-gradient(circle at 30% 110%, #fdf497 0%, #fd5949 45%, #d6249f 60%, #285AEB 90%)' }}>
        📷
      </div>
    ),
    platform: 'Instagram',
    value: '@shivavisuals_',
    href: 'https://instagram.com/shivavisuals_',
  },
  {
    icon: (
      <div className="w-10 h-10 rounded-xl bg-[#4f8ef7] flex items-center justify-center text-white text-lg">✉</div>
    ),
    platform: 'Email',
    value: 'shivajsr2004@gmail.com',
    href: 'mailto:shivajsr2004@gmail.com',
  },
  {
    icon: (
      <div className="w-10 h-10 rounded-xl bg-[#25d366] flex items-center justify-center text-white text-lg">📞</div>
    ),
    platform: 'Phone',
    value: '+91 7759855212',
    href: 'tel:+917759855212',
  },
];

const footerSkills = ['UI/UX Design', 'Video Editing', 'Brand Aesthetic', 'Rapid Execution'];

export default function ContactSection() {
  return (
    <section id="contact" className="relative min-h-screen bg-[#f8f8f6] overflow-hidden flex flex-col">
      <GradientBlob colors={['#fbbf24', '#fb923c', '#f9a8d4']} size={400} top="-80px" right="-60px" delay={0} />
      <GradientBlob colors={['#93c5fd', '#c4b5fd']} size={300} bottom="80px" right="50px" delay={3} />

      <div className="flex-1 flex flex-col lg:flex-row gap-0 z-10 relative">
        {/* Left: Contact info */}
        <div className="flex-1 px-8 md:px-12 lg:px-16 py-16 flex flex-col justify-center max-w-xl">
          <FadeIn>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-2 h-2 rounded-full bg-orange-400" />
              <span className="text-xs font-semibold tracking-widest text-orange-500 uppercase">Let&apos;s Connect</span>
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#1a1a1a] mb-2 leading-tight">Contact Me</h2>
            <div className="w-24 h-[3px] mb-6" style={{ background: 'linear-gradient(90deg, #2563eb, #a855f7, #f97316)' }} />
          </FadeIn>

          <FadeIn delay={0.15}>
            <p className="text-sm text-[#666] mb-8 leading-relaxed max-w-sm">
              I&apos;m always open to discussing new opportunities, creative ideas, or collaborations.
            </p>
          </FadeIn>

          {/* Contact items */}
          <div className="flex flex-col gap-3 mb-10">
            {contacts.map((c, i) => (
              <FadeIn key={c.platform} delay={0.2 + i * 0.08}>
                <motion.a
                  href={c.href}
                  className="flex items-center gap-4 bg-white rounded-2xl px-5 py-4 shadow-sm border border-[#f0f0f0] hover:shadow-md transition-shadow duration-200 group"
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.2 }}
                >
                  {c.icon}
                  <div>
                    <p className="text-xs text-[#888] mb-0.5">{c.platform}</p>
                    <p className="text-sm font-semibold text-[#1a1a1a]">{c.value}</p>
                  </div>
                </motion.a>
              </FadeIn>
            ))}
          </div>

          {/* CTA */}
          <FadeIn delay={0.6}>
            <div className="flex items-center gap-4 bg-[#f5f5f3] rounded-xl px-5 py-4">
              <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center text-orange-500 text-lg">↗</div>
              <div>
                <p className="text-sm font-semibold text-[#1a1a1a]">Let&apos;s create something amazing together.</p>
                <p className="text-xs text-[#888] mt-0.5">Feel free to reach out!</p>
              </div>
            </div>
          </FadeIn>
        </div>

        {/* Right: Phone mockup */}
        <FadeIn delay={0.3} className="flex-1 flex items-center justify-center p-8 lg:p-12">
          <div className="relative flex items-center gap-6">
            {/* Phone mockup */}
            <div className="relative">
              <div
                className="w-[220px] rounded-[36px] overflow-hidden shadow-2xl border-[6px] border-[#1a1a1a]"
                style={{ background: '#f8f8f6' }}
              >
                {/* Phone top notch */}
                <div className="h-6 bg-[#1a1a1a] rounded-b-xl mx-auto w-16 mb-4" />

                {/* Phone content */}
                <div className="px-5 pb-6">
                  <div className="flex justify-center mb-3">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#93c5fd] to-[#f97316] flex items-center justify-center text-2xl shadow-lg">
                      😎
                    </div>
                  </div>
                  <p className="text-center font-bold text-sm text-[#1a1a1a] mb-0.5">Shiva Vaitunathan</p>
                  <p className="text-center text-[9px] text-[#888] mb-4">Creative Designer &amp;<br />Visual Storyteller</p>

                  <div className="flex flex-col gap-2 mb-4">
                    {[
                      { icon: '🔷', label: 'LinkedIn', val: 'Shiva Vaitunathan' },
                      { icon: '📷', label: 'Instagram', val: '@shivavisuals_' },
                      { icon: '✉', label: 'Email', val: 'shivajsr2004@gmail.com' },
                      { icon: '📞', label: 'Phone', val: '+91 7759855212' },
                    ].map((item) => (
                      <div key={item.label} className="flex items-center gap-2">
                        <span className="text-xs">{item.icon}</span>
                        <div>
                          <p className="text-[8px] text-[#888]">{item.label}</p>
                          <p className="text-[9px] font-semibold text-[#1a1a1a] truncate max-w-[120px]">{item.val}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div
                    className="w-full py-2.5 rounded-full text-white text-[10px] font-bold text-center"
                    style={{ background: 'linear-gradient(90deg, #f97316, #2563eb)' }}
                  >
                    Let&apos;s Work Together ↗
                  </div>
                </div>
              </div>
            </div>

            {/* Business card */}
            <div
              className="w-48 h-28 rounded-2xl shadow-2xl flex flex-col justify-between p-4"
              style={{ background: '#1a1a1a' }}
            >
              <div />
              <div>
                <p className="text-white/30 text-[8px] tracking-widest">Shiva</p>
                <p
                  className="text-white/80 text-2xl font-black"
                  style={{ fontFamily: 'cursive' }}
                >
                  Shiva
                </p>
              </div>
              <p className="text-white/30 text-[7px] tracking-[0.2em]">DESIGN | CREATE | INSPIRE</p>
            </div>
          </div>
        </FadeIn>
      </div>

      {/* Footer strip */}
      <FadeIn delay={0.4} className="z-10 relative">
        <div className="border-t border-[#e5e5e5] px-8 md:px-12 lg:px-16 py-6 flex flex-col md:flex-row items-start md:items-center gap-6">
          {/* Signature + title */}
          <div className="flex items-center gap-4 flex-1">
            <div>
              <p
                className="text-3xl font-black text-[#1a1a1a] leading-none"
                style={{ fontFamily: 'cursive' }}
              >
                Shiva
              </p>
            </div>
            <div className="h-8 w-px bg-[#d5d5d5]" />
            <div>
              <p className="text-sm font-bold text-[#1a1a1a]">Shiva Vaitunathan</p>
              <p className="text-xs text-[#888]">Creative Designer &amp; Visual Storyteller</p>
            </div>
          </div>

          {/* Skill icons */}
          <div className="flex gap-6">
            {footerSkills.map((s) => (
              <div key={s} className="flex flex-col items-center gap-1">
                <div className="w-8 h-8 rounded-full border border-[#d5d5d5] flex items-center justify-center text-[#555] text-sm">
                  ✦
                </div>
                <span className="text-[9px] text-[#888] text-center">{s}</span>
              </div>
            ))}
          </div>

          {/* Steve Jobs quote */}
          <div className="max-w-xs bg-[#f5f5f3] rounded-xl p-4">
            <p className="text-[#2563eb] text-2xl font-bold leading-none mb-2">"</p>
            <p className="text-xs text-[#444] leading-relaxed italic">
              Good design is not just what it looks like and feels like. Design is how it works.
            </p>
            <p className="text-xs font-semibold text-[#2563eb] mt-2">– Steve Jobs</p>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
