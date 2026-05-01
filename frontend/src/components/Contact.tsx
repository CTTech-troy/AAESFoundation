import { motion } from 'framer-motion';
import { MailIcon, MapPinIcon, PhoneIcon, SendIcon } from 'lucide-react';

const contactItems = [
  {
    icon: MapPinIcon,
    title: 'Foundation base',
    lines: ['Abeokuta, Ogun State', 'Nigeria']
  },
  {
    icon: PhoneIcon,
    title: 'Phone',
    lines: ['+234 811 424 6384', 'Mon - Fri, 9am - 5pm']
  },
  {
    icon: MailIcon,
    title: 'Email',
    lines: ['info@aaesf.com.ng', 'support@aaesf.com.ng']
  }
];

export function Contact() {
  return (
    <section id="contact" className="bg-porcelain py-28 md:py-32">
      <div className="section-shell">
        <div className="mb-14 max-w-3xl">
          <div className="section-kicker mb-5">Contact</div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-serif text-4xl font-bold leading-tight text-charcoal md:text-6xl">
            Start a serious conversation.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-5 text-base leading-8 text-slate md:text-lg">
            Reach out for partnership, sponsorship, school collaboration, or
            scholarship program enquiries.
          </motion.p>
        </div>

        <div className="grid gap-5 lg:grid-cols-[0.78fr_1.22fr]">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7 }}
            className="grid gap-4">
            {contactItems.map((item) => {
              const Icon = item.icon;

              return (
                <div key={item.title} className="premium-card p-6">
                  <Icon className="mb-7 h-6 w-6 text-accent" />
                  <h3 className="text-lg font-bold text-charcoal">
                    {item.title}
                  </h3>
                  <div className="mt-3 text-sm leading-7 text-slate">
                    {item.lines.map((line) => (
                      <p key={line}>{line}</p>
                    ))}
                  </div>
                </div>
              );
            })}
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="premium-card p-6 md:p-8">
            <div className="grid gap-5 md:grid-cols-2">
              <label className="block">
                <span className="mb-2 block text-xs font-bold uppercase tracking-[0.16em] text-slate">
                  Full Name
                </span>
                <input
                  type="text"
                  className="h-12 w-full border border-charcoal/10 bg-white px-4 text-sm text-charcoal outline-none transition-colors placeholder:text-slate focus:border-accent"
                  style={{ borderRadius: 6 }}
                  placeholder="Your name" />
              </label>
              <label className="block">
                <span className="mb-2 block text-xs font-bold uppercase tracking-[0.16em] text-slate">
                  Email Address
                </span>
                <input
                  type="email"
                  className="h-12 w-full border border-charcoal/10 bg-white px-4 text-sm text-charcoal outline-none transition-colors placeholder:text-slate focus:border-accent"
                  style={{ borderRadius: 6 }}
                  placeholder="you@example.com" />
              </label>
            </div>

            <label className="mt-5 block">
              <span className="mb-2 block text-xs font-bold uppercase tracking-[0.16em] text-slate">
                Subject
              </span>
              <input
                type="text"
                className="h-12 w-full border border-charcoal/10 bg-white px-4 text-sm text-charcoal outline-none transition-colors placeholder:text-slate focus:border-accent"
                style={{ borderRadius: 6 }}
                placeholder="Partnership, support, or enquiry" />
            </label>

            <label className="mt-5 block">
              <span className="mb-2 block text-xs font-bold uppercase tracking-[0.16em] text-slate">
                Message
              </span>
              <textarea
                rows={6}
                className="w-full resize-none border border-charcoal/10 bg-white px-4 py-3 text-sm text-charcoal outline-none transition-colors placeholder:text-slate focus:border-accent"
                style={{ borderRadius: 6 }}
                placeholder="Tell us what you would like to build with AAESF." />
            </label>

            <button
              type="button"
              className="mt-6 inline-flex w-full items-center justify-center gap-3 bg-charcoal px-6 py-4 text-sm font-bold uppercase tracking-[0.16em] text-white transition-colors hover:bg-deep-light"
              style={{ borderRadius: 6 }}>
              Send Message
              <SendIcon className="h-4 w-4" />
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
