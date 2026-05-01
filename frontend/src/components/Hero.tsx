import { motion } from 'framer-motion';
import {
  ArrowRightIcon,
  GraduationCapIcon,
  SchoolIcon,
  UsersIcon
} from 'lucide-react';
import { ThreeScene } from './ThreeScene';

const stats = [
  { icon: UsersIcon, value: '46', label: 'Candidates assessed' },
  { icon: GraduationCapIcon, value: '26', label: 'WAEC fees funded' },
  { icon: SchoolIcon, value: '01', label: 'School supported' }
];

export function Hero() {
  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 28
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1] as const
      }
    }
  };

  return (
    <section
      id="home"
      className="relative flex min-h-[92svh] items-end overflow-hidden pt-16 text-white"
      style={{ backgroundImage: 'url(/hero.jpeg)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'fixed' }}>
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/60 to-black/40"></div>

      <ThreeScene />

      <div className="section-shell relative z-20 pb-8 md:pb-10">
        <motion.div
          initial="hidden"
          animate="visible"
          transition={{ staggerChildren: 0.15 }}
          className="max-w-4xl">
          <motion.div variants={itemVariants} className="section-kicker mb-6">
            Abeokuta Grammar School &middot; 2026 WAEC Scholarship
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="max-w-4xl font-serif text-5xl font-bold leading-[1.02] text-white md:text-7xl">
            AAESF Foundation
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="mt-6 max-w-2xl text-base leading-8 text-white/80 md:text-xl">
            A precision-built education support platform funding examination
            access for high-potential students and turning philanthropy into a
            measurable academic advantage.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href="#scholarship"
              className="inline-flex items-center justify-center gap-3 bg-white px-6 py-4 text-sm font-bold uppercase tracking-[0.16em] text-charcoal shadow-[0_24px_60px_rgba(0,0,0,0.22)] transition-colors hover:bg-accent-light"
              style={{ borderRadius: 6 }}>
              Explore Program
              <ArrowRightIcon className="h-4 w-4" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center border border-white/40 px-6 py-4 text-sm font-bold uppercase tracking-[0.16em] text-white transition-colors hover:border-accent hover:text-accent-light"
              style={{ borderRadius: 6 }}>
              Partner With Us
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-12 grid border border-white/20 bg-white/10 backdrop-blur-[2px] md:grid-cols-3">
          {stats.map((stat) => {
            const Icon = stat.icon;

            return (
              <div
                key={stat.label}
                className="flex items-center gap-4 border-white/20 px-5 py-5 md:border-r last:md:border-r-0">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center border border-accent/50 text-accent">
                  <Icon className="h-5 w-5" />
                </span>
                <span>
                  <span className="block font-serif text-3xl font-bold text-white">
                    {stat.value}
                  </span>
                  <span className="text-xs font-semibold uppercase tracking-[0.18em] text-white/60">
                    {stat.label}
                  </span>
                </span>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
