import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  CalendarIcon,
  GraduationCapIcon,
  SchoolIcon,
  UsersIcon
} from 'lucide-react';

interface CounterProps {
  end: number;
  duration?: number;
}

function Counter({ end, duration = 1.8 }: CounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  useEffect(() => {
    if (!isInView) return;

    let startTime: number | undefined;
    let animationFrame = 0;

    const animate = (timestamp: number) => {
      startTime ??= timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);

      setCount(Math.floor(end * progress));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [duration, end, isInView]);

  return <span ref={ref}>{count}</span>;
}

const stats = [
  {
    icon: UsersIcon,
    value: 46,
    label: 'Candidates assessed',
    detail: 'Academic and need-based review'
  },
  {
    icon: GraduationCapIcon,
    value: 26,
    label: 'Beneficiaries funded',
    detail: 'Full WAEC examination fees'
  },
  {
    icon: SchoolIcon,
    value: 1,
    label: 'School supported',
    detail: 'Abeokuta Grammar School'
  },
  {
    icon: CalendarIcon,
    value: 2026,
    label: 'Next edition',
    detail: 'Program expansion in view',
    isYear: true
  }
];

export function ImpactStats() {
  return (
    <section className="bg-charcoal py-20 text-white">
      <div className="section-shell">
        <div className="mb-12 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div>
            <div className="section-kicker mb-4">Measured impact</div>
            <h2 className="max-w-2xl font-serif text-4xl font-bold leading-tight md:text-5xl">
              Clear numbers. Clear obligation.
            </h2>
          </div>
          <p className="max-w-xl text-sm leading-7 text-white/60 md:text-base">
            Every scholarship is tracked as an academic intervention, not a
            one-off gesture.
          </p>
        </div>

        <div className="grid border border-white/20 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => {
            const Icon = stat.icon;

            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.65, delay: index * 0.08 }}
                className="border-b border-white/20 p-7 md:border-r lg:border-b-0 last:md:border-r-0">
                <Icon className="mb-8 h-7 w-7 text-accent" />
                <p className="font-serif text-5xl font-bold text-white">
                  {stat.isYear ? stat.value : <Counter end={stat.value} />}
                </p>
                <p className="mt-4 text-xs font-bold uppercase tracking-[0.18em] text-accent-light">
                  {stat.label}
                </p>
                <p className="mt-3 text-sm leading-6 text-white/60">
                  {stat.detail}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
