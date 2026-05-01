import { motion } from 'framer-motion';
import { ArrowRightIcon, CalendarIcon, TagIcon } from 'lucide-react';

const sideNotes = [
  {
    title: 'Foundation board reviews expansion pathway',
    date: 'Jan 10, 2026',
    tag: 'Planning'
  },
  {
    title: 'Community partners invited for the next scholarship cycle',
    date: 'Feb 03, 2026',
    tag: 'Partnership'
  }
];

export function NewsEvents() {
  return (
    <section id="news" className="bg-porcelain py-28 md:py-32">
      <div className="section-shell">
        <div className="mb-14 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <div className="section-kicker mb-5">Updates</div>
            <h2 className="font-serif text-4xl font-bold text-charcoal md:text-6xl">
              Signals from the field.
            </h2>
          </div>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.16em] text-charcoal transition-colors hover:text-accent">
            Request briefing
            <ArrowRightIcon className="h-4 w-4" />
          </a>
        </div>

        <div className="grid gap-5 lg:grid-cols-[1.35fr_0.75fr]">
          <motion.article
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.75 }}
            className="grid overflow-hidden border border-charcoal/10 bg-white shadow-[0_30px_90px_rgba(16,17,20,0.1)] md:grid-cols-[0.9fr_1fr]"
            style={{ borderRadius: 8 }}>
            <div className="relative min-h-[22rem]">
              <img
                src="/img2.jpeg"
                alt="Students gathering on campus"
                className="absolute inset-0 h-full w-full object-cover" />
              <div className="absolute left-5 top-5 border border-accent/50 bg-charcoal px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-accent-light">
                Scholarship
              </div>
            </div>

            <div className="flex flex-col justify-center p-7 md:p-10">
              <div className="mb-5 flex flex-wrap gap-4 text-xs font-bold uppercase tracking-[0.16em] text-slate">
                <span className="flex items-center gap-2">
                  <CalendarIcon className="h-4 w-4 text-accent" />
                  Jan 19, 2026
                </span>
                <span className="flex items-center gap-2">
                  <TagIcon className="h-4 w-4 text-accent" />
                  Scholarship
                </span>
              </div>
              <h3 className="font-serif text-3xl font-bold leading-tight text-charcoal md:text-4xl">
                AAESF pays WAEC fees for 26 students at Abeokuta Grammar School.
              </h3>
              <p className="mt-5 text-base leading-8 text-slate">
                The foundation completed its inaugural scholarship commitment
                after assessing 46 candidates and selecting finalists for full
                examination fee support.
              </p>
              <a
                href="#contact"
                className="mt-8 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.16em] text-charcoal transition-colors hover:text-accent">
                Learn More
                <ArrowRightIcon className="h-4 w-4" />
              </a>
            </div>
          </motion.article>

          <div className="grid gap-5">
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.65, delay: 0.1 }}
              className="border border-accent/40 bg-charcoal p-7 text-white"
              style={{ borderRadius: 8 }}>
              <CalendarIcon className="mb-8 h-7 w-7 text-accent" />
              <h4 className="font-serif text-2xl font-bold">
                Second edition in planning.
              </h4>
              <p className="mt-4 text-sm leading-7 text-white/60">
                The next WAEC scholarship cycle is being structured for a wider
                partner network and stronger school reporting.
              </p>
            </motion.div>

            {sideNotes.map((note, index) => (
              <motion.article
                key={note.title}
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.65, delay: 0.18 + index * 0.08 }}
                className="border border-charcoal/10 bg-white p-6"
                style={{ borderRadius: 8 }}>
                <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-accent">
                  {note.tag}
                </span>
                <h4 className="mt-3 font-serif text-xl font-bold leading-snug text-charcoal">
                  {note.title}
                </h4>
                <p className="mt-4 text-xs font-bold uppercase tracking-[0.16em] text-slate">
                  {note.date}
                </p>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
