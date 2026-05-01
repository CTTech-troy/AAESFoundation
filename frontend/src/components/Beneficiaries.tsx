import { useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { AwardIcon, SearchIcon, StarIcon } from 'lucide-react';
import { students } from '../data/students';

export function Beneficiaries() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState<'all' | 'top'>('all');

  const filteredStudents = useMemo(
    () =>
      students
        .filter((student) => {
          const matchesSearch = student.name
            .toLowerCase()
            .includes(searchTerm.toLowerCase());
          const matchesFilter =
            filter === 'all' || (filter === 'top' && student.isTopPerformer);

          return matchesSearch && matchesFilter;
        })
        .sort((a, b) => {
          // Top performers first
          if (a.isTopPerformer !== b.isTopPerformer) {
            return a.isTopPerformer ? -1 : 1;
          }
          // Then sort by score descending (highest percentage first)
          return b.score - a.score;
        }),
    [filter, searchTerm]
  );

  return (
    <section id="beneficiaries" className="bg-porcelain py-28 md:py-32">
      <div className="section-shell">
        <div className="mb-12 grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
          <div className="max-w-3xl">
            <div className="section-kicker mb-5">Scholar profiles</div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-serif text-4xl font-bold leading-tight text-charcoal md:text-6xl">
              Excellence, made visible.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="mt-5 max-w-2xl text-base leading-8 text-slate md:text-lg">
              Search the published profiles and spotlight the distinction-level
              performers from the 2026 scholarship cohort.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="grid gap-3 sm:grid-cols-[minmax(0,18rem)_auto]">
            <label className="relative block">
              <SearchIcon className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate" />
              <input
                type="search"
                placeholder="Search scholars"
                value={searchTerm}
                onChange={(event) => setSearchTerm(event.target.value)}
                className="h-12 w-full border border-charcoal/10 bg-white pl-11 pr-4 text-sm text-charcoal outline-none transition-colors placeholder:text-slate focus:border-accent"
                style={{ borderRadius: 6 }} />
            </label>

            <div
              className="grid grid-cols-2 border border-charcoal/10 bg-white p-1"
              style={{ borderRadius: 6 }}>
              {[
                ['all', 'All'],
                ['top', 'Top']
              ].map(([value, label]) => (
                <button
                  key={value}
                  type="button"
                  onClick={() => setFilter(value as 'all' | 'top')}
                  className={`h-10 px-4 text-xs font-bold uppercase tracking-[0.16em] transition-colors ${
                    filter === value
                      ? 'bg-charcoal text-white'
                      : 'text-slate hover:text-charcoal'
                  }`}
                  style={{ borderRadius: 4 }}>
                  {label}
                </button>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          layout
          className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          <AnimatePresence>
            {filteredStudents.map((student) => (
              <motion.article
                layout
                key={student.id}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.25 }}
                className="premium-card p-5">
                <div className="mb-7 flex items-start justify-between">
                  <span className="flex h-11 w-11 items-center justify-center border border-charcoal/10 bg-porcelain">
                    {student.isTopPerformer ? (
                      <StarIcon className="h-5 w-5 fill-accent text-accent" />
                    ) : (
                      <AwardIcon className="h-5 w-5 text-slate" />
                    )}
                  </span>
                  <span className="text-right">
                    <span className="block text-[10px] font-bold uppercase tracking-[0.2em] text-slate">
                      Score
                    </span>
                    <span className="font-serif text-3xl font-bold text-charcoal">
                      {student.score}%
                    </span>
                  </span>
                </div>

                <h3 className="truncate text-lg font-bold text-charcoal">
                  {student.name}
                </h3>
                <p className="mt-2 text-xs font-bold uppercase tracking-[0.18em] text-slate">
                  Class of 2026
                </p>

                <div className="mt-6 flex items-center justify-between border-t border-charcoal/10 pt-4">
                  <span className="text-xs text-slate">WAEC support</span>
                  {student.isTopPerformer && (
                    <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-accent">
                      Distinction
                    </span>
                  )}
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredStudents.length === 0 && (
          <div className="border border-charcoal/10 bg-white py-16 text-center">
            <p className="text-sm font-semibold text-slate">
              No scholar profiles match that search.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
