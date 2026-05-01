import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MenuIcon, XIcon } from 'lucide-react';

const navLinks = [
  { name: 'Overview', href: '#about' },
  { name: 'Program', href: '#scholarship' },
  { name: 'Scholars', href: '#beneficiaries' },
  { name: 'Contact', href: '#contact' }
];

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 32);

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -96, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] as const }}
      className="fixed inset-x-0 top-0 z-50 px-4 py-4 md:px-6">
      <div
        className={`section-shell flex h-16 items-center justify-between border px-4 transition-all duration-300 md:px-5 ${
          isScrolled
            ? 'border-white/70 bg-white/90 shadow-[0_18px_60px_rgba(16,17,20,0.12)] backdrop-blur-xl'
            : 'border-white/30 bg-white backdrop-blur-md'
        }`}
        style={{ borderRadius: 8 }}>
        <a href="#home" className="flex min-w-0 items-center gap-3">
          <span className="flex h-10 w-10 shrink-0 items-center justify-center border border-accent/40 bg-white text-accent">
            <img src="/logo.png" alt="" className='w-10 h-10'/>
          </span>
          <span className="flex min-w-0 flex-col">
            <span className="truncate text-sm font-extrabold uppercase tracking-[0.2em] text-charcoal">
              AAESF
            </span>
            <span className="hidden text-[10px] font-semibold uppercase tracking-[0.28em] text-slate sm:block">
              Foundation
            </span>
          </span>
        </a>

        <div className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-graphite transition-colors hover:text-accent">
              {link.name}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href="#contact"
            className="px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-charcoal transition-colors hover:text-accent">
            Partner
          </a>
          <a
            href="#contact"
            className="bg-charcoal px-5 py-3 text-xs font-bold uppercase tracking-[0.18em] text-white shadow-[0_16px_34px_rgba(16,17,20,0.22)] transition-colors hover:bg-deep-light"
            style={{ borderRadius: 6 }}>
            Donate
          </a>
        </div>

        <button
          type="button"
          aria-label="Toggle navigation"
          className="flex h-10 w-10 items-center justify-center border border-charcoal/10 bg-white text-charcoal lg:hidden"
          style={{ borderRadius: 6 }}
          onClick={() => setIsMobileMenuOpen((value) => !value)}>
          {isMobileMenuOpen ? (
            <XIcon className="h-5 w-5" />
          ) : (
            <MenuIcon className="h-5 w-5" />
          )}
        </button>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.2 }}
            className="section-shell mt-3 border border-white/70 bg-white/95 p-4 shadow-[0_22px_70px_rgba(16,17,20,0.14)] backdrop-blur-xl lg:hidden"
            style={{ borderRadius: 8 }}>
            <div className="grid gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="px-3 py-3 text-sm font-semibold uppercase tracking-[0.16em] text-charcoal transition-colors hover:text-accent">
                  {link.name}
                </a>
              ))}
            </div>
            <div className="mt-4 grid grid-cols-2 gap-3 border-t border-charcoal/10 pt-4">
              <a
                href="#contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="border border-charcoal/15 px-4 py-3 text-center text-xs font-bold uppercase tracking-[0.16em] text-charcoal"
                style={{ borderRadius: 6 }}>
                Partner
              </a>
              <a
                href="#contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="bg-charcoal px-4 py-3 text-center text-xs font-bold uppercase tracking-[0.16em] text-white"
                style={{ borderRadius: 6 }}>
                Donate
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
