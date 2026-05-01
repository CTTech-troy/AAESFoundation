import { AwardIcon, StarIcon } from 'lucide-react';
import { students } from '../data/students';

export function WinnersMarquee() {
  const marqueeStudents = [...students, ...students];

  return (
    <section className="relative overflow-hidden border-y border-charcoal/10 bg-offWhite py-20">
      <div className="section-shell mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <div className="section-kicker mb-4">Scholar roll</div>
          <h2 className="font-serif text-4xl font-bold text-charcoal md:text-5xl">
            Published beneficiaries
          </h2>
        </div>
        <p className="max-w-md text-sm leading-7 text-slate">
          A living record of students recognized through the foundation's WAEC
          support program.
        </p>
      </div>

      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-offWhite to-transparent md:w-40"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-offWhite to-transparent md:w-40"></div>

      <div className="flex w-max animate-marquee gap-4 px-6">
        {marqueeStudents.map((student, index) => (
          <article
            key={`${student.id}-${index}`}
            className="premium-card w-72 shrink-0 p-5">
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
              Abeokuta Grammar School
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
