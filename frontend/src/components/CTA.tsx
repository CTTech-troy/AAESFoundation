import { motion } from 'framer-motion';
import { HandshakeIcon, HeartIcon } from 'lucide-react';

export function CTA() {
  return (
    <section className="relative overflow-hidden bg-charcoal py-28 text-white md:py-32">
      <img
        src="/hero.jpeg"
        alt="Students participating in a community education session"
        className="absolute inset-0 h-full w-full object-cover opacity-20 mix-blend-luminosity" />
      <div className="absolute inset-0 bg-gradient-to-r from-charcoal via-charcoal/90 to-charcoal/60"></div>

      <div className="section-shell relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl">
          <div className="section-kicker mb-5">Partner invitation</div>
          <h2 className="font-serif text-5xl font-bold leading-tight md:text-7xl">
            Fund the next examination breakthrough.
          </h2>
          <p className="mt-7 max-w-2xl text-base leading-8 text-white/70 md:text-lg">
            Help AAESF scale a scholarship model that is transparent enough for
            institutions and personal enough for families.
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-3 bg-accent px-6 py-4 text-sm font-bold uppercase tracking-[0.16em] text-charcoal transition-colors hover:bg-accent-light"
              style={{ borderRadius: 6 }}>
              <HeartIcon className="h-5 w-5" />
              Support The Foundation
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-3 border border-white/25 px-6 py-4 text-sm font-bold uppercase tracking-[0.16em] text-white transition-colors hover:border-accent hover:text-accent-light"
              style={{ borderRadius: 6 }}>
              <HandshakeIcon className="h-5 w-5" />
              Become A Partner
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
