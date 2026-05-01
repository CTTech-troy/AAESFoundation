import { motion } from 'framer-motion';
import { ArrowRightIcon } from 'lucide-react';

export function FounderSpotlight() {
  return (
    <section className="bg-white py-28 md:py-32">
      <div className="section-shell grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.75 }}
          className="relative">
          <img
            src="/founder.jpeg"
            alt="Mr. Akin Adeyanju"
            className="aspect-[4/5] w-full object-cover "
            style={{ borderRadius: 8 }} />
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-charcoal/90 to-transparent p-7 text-white">
            <p className="font-serif text-3xl font-bold">Mr. Akin Adeyanju</p>
            <p className="mt-2 text-xs font-bold uppercase tracking-[0.18em] text-accent-light">
              Founder and Visionary
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 28 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.75, delay: 0.1 }}>
          <div className="section-kicker mb-5">Founder spotlight</div>
          <h2 className="font-serif text-4xl font-bold leading-tight text-charcoal md:text-6xl">
            A legacy designed to outlast the first ceremony.
          </h2>
          <div className="mt-8 space-y-6 text-base leading-8 text-slate md:text-lg">
            <p>
              "Financial constraints should never be the reason academic
              brilliance stalls. The foundation exists to make support feel
              structured, dignified, and repeatable."
            </p>
            <p>
              "The first 26 WAEC scholarships are the beginning of a wider
              commitment: partner with schools, identify potential early, and
              make excellence easier to sustain."
            </p>
          </div>

          <div className="mt-10 flex flex-col gap-5 border-t border-charcoal/10 pt-8 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="font-serif text-3xl italic text-charcoal">
                Akin Adeyanju
              </p>
              <p className="mt-2 text-xs font-bold uppercase tracking-[0.18em] text-slate">
                Founder, AAESF
              </p>
            </div>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.16em] text-charcoal transition-colors hover:text-accent">
              Build With Us
              <ArrowRightIcon className="h-4 w-4" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
