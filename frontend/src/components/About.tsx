import { motion } from 'framer-motion';
import { CheckCircle2Icon, QuoteIcon } from 'lucide-react';

const principles = [
  'Full WAEC examination fee coverage',
  'Merit and need-led selection',
  'Direct school administration payment'
];

export function About() {
  return (
    <section id="about" className="bg-porcelain py-28 md:py-32">
      <div className="section-shell grid gap-14 lg:grid-cols-[1fr_1.08fr] lg:items-center">
        <motion.div
          initial={{ opacity: 0, x: -28 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="relative">
          <div className="overflow-hidden border border-charcoal/10 shadow-[0_30px_90px_rgba(16,17,20,0.12)]">
            <img
              src="/about.jpeg"
              alt="Teacher speaking with students in a classroom"
              className="aspect-[4/5] w-full object-cover md:aspect-[5/6]" />
          </div>
          <div className="absolute -bottom-6 right-6 border border-accent/40 bg-charcoal px-6 py-5 text-white shadow-[0_24px_60px_rgba(16,17,20,0.24)]">
            <span className="block text-xs font-bold uppercase tracking-[0.18em] text-accent">
              Established
            </span>
            <span className="mt-1 block font-serif text-4xl font-bold">
              2025
            </span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, ease: 'easeOut' }}>
          <div className="section-kicker mb-5">Foundation thesis</div>
          <h2 className="max-w-3xl font-serif text-4xl font-bold leading-tight text-charcoal md:text-6xl">
            Education support with the discipline of an institution.
          </h2>
          <div className="mt-8 space-y-6 text-base leading-8 text-slate md:text-lg">
            <p>
              The Akin Adeyanju Educational Support Foundation was built to make
              high-stakes examination access less fragile for deserving
              students. The first cohort began with 46 candidates, a structured
              assessment, and 26 finalists selected for WAEC fee support.
            </p>
            <p>
              The model is simple: identify promise, remove the immediate
              financial barrier, and keep the process transparent enough for
              schools, parents, and partners to trust.
            </p>
          </div>

          <div className="mt-9 grid gap-3">
            {principles.map((principle) => (
              <div
                key={principle}
                className="flex items-center gap-3 border-b border-charcoal/10 pb-3 text-sm font-semibold text-charcoal">
                <CheckCircle2Icon className="h-5 w-5 text-accent" />
                {principle}
              </div>
            ))}
          </div>

          <div className="mt-10 border-l border-accent/60 pl-6">
            <QuoteIcon className="mb-4 h-8 w-8 text-accent" />
            <p className="font-serif text-2xl leading-snug text-charcoal">
              "Education is the most durable way to return value to the
              community."
            </p>
            <p className="mt-4 text-xs font-bold uppercase tracking-[0.18em] text-slate">
              &mdash; Mr. Akin Adeyanju, Founder
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
