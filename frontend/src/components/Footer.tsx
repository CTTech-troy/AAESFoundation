import { GraduationCapIcon, Share2, MessageCircle, Heart, Briefcase } from 'lucide-react';

const footerLinks = [
  { label: 'Overview', href: '#about' },
  { label: 'Program', href: '#scholarship' },
  { label: 'Scholars', href: '#beneficiaries' },
  { label: 'Contact', href: '#contact' }
];

const socialLinks = [
  { label: 'Facebook', icon: Share2, href: 'https://facebook.com' },
  { label: 'X', icon: MessageCircle, href: 'https://x.com' },
  { label: 'Instagram', icon: Heart, href: 'https://instagram.com' },
  { label: 'LinkedIn', icon: Briefcase, href: 'https://linkedin.com' }
];

export function Footer() {
  return (
    <footer className="border-t border-charcoal/10 bg-charcoal text-white">
      <div className="section-shell py-14">
        <div className="grid gap-10 md:grid-cols-[1.2fr_0.8fr_0.8fr]">
          <div>
            <a href="#home" className="inline-flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center border border-accent/40 bg-white text-accent">
                <img src="/logo.png" alt="" />
              </span>
              <span>
                <span className="block text-sm font-extrabold uppercase tracking-[0.2em]">
                  AAESF
                </span>
                <span className="mt-1 block text-[10px] font-bold uppercase tracking-[0.28em] text-white/50">
                  Foundation
                </span>
              </span>
            </a>
            <p className="mt-6 max-w-md text-sm leading-7 text-white/60">
              Funding examination access for high-potential students through a
              disciplined, transparent, and partner-ready scholarship model.
            </p>
          </div>

          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-accent-light">
              Navigate
            </h3>
            <ul className="mt-5 grid gap-3">
              {footerLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-white/60 transition-colors hover:text-accent-light">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-accent-light">
              Connect
            </h3>
            <p className="mt-5 text-sm leading-7 text-white/60">
              info@aaesf.com.ng
              <br />
              +234 811 424 6384
              <br />
              Abeokuta, Ogun State
            </p>

            <div className="mt-6 flex gap-2">
              {socialLinks.map(({ label, icon: Icon, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center border border-white/20 text-white/70 transition-colors hover:border-accent hover:text-accent-light">
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-white/40 md:flex-row md:items-center md:justify-between">
          <p>&copy; 2026 AAESF Foundation. All rights reserved.</p>
          <p>Built for scholarship transparency and educational impact.</p>
        </div>
      </div>
    </footer>
  );
}
