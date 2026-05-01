import { motion } from 'framer-motion';
import {
  AwardIcon,
  CheckCircleIcon,
  ClipboardCheckIcon,
  CreditCardIcon,
  FileTextIcon,
  UsersIcon
} from 'lucide-react';

const steps = [
  {
    title: 'Application',
    description:
      'Eligible students enter the pipeline through a documented scholarship application.',
    icon: FileTextIcon
  },
  {
    title: 'Assessment',
    description:
      'Academic performance, need, and readiness are reviewed before shortlisting.',
    icon: ClipboardCheckIcon
  },
  {
    title: 'Selection',
    description:
      'Finalists are selected from the candidate pool using a transparent scorecard.',
    icon: UsersIcon
  },
  {
    title: 'Approval',
    description:
      'The board reviews the beneficiary list before commitments are confirmed.',
    icon: CheckCircleIcon
  },
  {
    title: 'Payment',
    description:
      'WAEC fees are paid directly through school administration channels.',
    icon: CreditCardIcon
  },
  {
    title: 'Presentation',
    description:
      'A formal award moment reinforces dignity, accountability, and aspiration.',
    icon: AwardIcon
  }
];

export function ScholarshipProgram() {
  return (
    <section id="scholarship" className="bg-white py-28 md:py-32">
      <div className="section-shell">
        <div className="mb-16 grid gap-8 lg:grid-cols-[0.85fr_1fr] lg:items-end">
          <div>
            <div className="section-kicker mb-5">Scholarship architecture</div>
            <h2 className="font-serif text-4xl font-bold leading-tight text-charcoal md:text-6xl">
              A premium process for a serious opportunity.
            </h2>
          </div>
          <p className="max-w-2xl text-base leading-8 text-slate md:text-lg">
            The program is designed to feel rigorous and humane: enough
            structure for fairness, enough care for students to feel seen.
          </p>
        </div>

        <div className="grid gap-px overflow-hidden border border-charcoal/10 bg-charcoal/10 md:grid-cols-2 lg:grid-cols-3">
          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <motion.article
                key={step.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.55, delay: index * 0.06 }}
                className="bg-porcelain p-7 md:p-8">
                <div className="mb-8 flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-[0.2em] text-slate">
                    Step {String(index + 1).padStart(2, '0')}
                  </span>
                  <span className="flex h-11 w-11 items-center justify-center border border-accent/50 bg-white text-accent">
                    <Icon className="h-5 w-5" />
                  </span>
                </div>
                <h3 className="font-serif text-2xl font-bold text-charcoal">
                  {step.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-slate">
                  {step.description}
                </p>
              </motion.article>
            );
          })}
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-charcoal/10 pt-8 md:flex-row md:items-center md:justify-between">
          <p className="max-w-2xl text-sm leading-7 text-slate">
            The inaugural award presentation was held on January 19, 2026 at
            Abeokuta Grammar School.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center justify-center bg-charcoal px-6 py-4 text-sm font-bold uppercase tracking-[0.16em] text-white transition-colors hover:bg-deep-light"
            style={{ borderRadius: 6 }}>
            Apply For Support
          </a>
        </div>
      </div>
    </section>
  );
}
