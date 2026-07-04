"use client";

import { Instagram, Linkedin, Twitter, Mail, Heart } from "lucide-react";

const socials = [
  {
    icon: Instagram,
    href: "https://www.instagram.com/workint_/",
    label: "Follow WorkInt on Instagram",
  },
  { icon: Linkedin, href: "#", label: "Connect with WorkInt on LinkedIn" },
  { icon: Twitter, href: "#", label: "Follow WorkInt on X" },
  { icon: Mail, href: "mailto:connect@workint.in", label: "Email WorkInt" },
];

const links = [
  { label: "Features", href: "#features" },
  { label: "How it works", href: "#how-it-works" },
  { label: "FAQ", href: "#faq" },
  { label: "Early Access", href: "#early-access" },
  { label: "Terms of Service", href: "/terms" },
  { label: "Privacy Policy", href: "/privacy" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-surface-border/50 bg-surface-raised/30 px-4 pt-12 pb-8 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Giant wordmark */}
        <div className="mb-14 select-none" aria-hidden="true">
          <span className="block font-display font-bold uppercase leading-none tracking-tight text-[18vw] lg:text-[11rem] whitespace-nowrap">
            <span className="text-outline-white">Work</span>
            <span className="text-outline">Int</span>
          </span>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <a href="#" className="inline-flex items-center mb-1" aria-label="WorkInt home">
              <span className="font-display font-bold text-xl text-white">Work</span>
              <span className="font-display font-bold text-xl text-brand-teal">Int</span>
            </a>
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/25 mb-4">
              Work Intelligence
            </p>
            <p className="text-sm text-white/45 leading-relaxed max-w-[240px]">
              Where skills get seen. Built for every worker — tradesperson,
              labourer, or professional.
            </p>
            {/* Socials */}
            <div className="flex items-center gap-3 mt-6">
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                  aria-label={label}
                  className="w-9 h-9 rounded-xl bg-surface-overlay border border-surface-border/50 flex items-center justify-center text-white/50 hover:text-brand-teal hover:border-brand-teal/40 transition-all duration-200"
                >
                  <Icon size={15} aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-display font-semibold text-sm text-white/70 uppercase tracking-widest mb-5">
              Navigation
            </h3>
            <ul className="space-y-3">
              {links.map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    className="text-sm text-white/45 hover:text-white transition-colors duration-200"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-display font-semibold text-sm text-white/70 uppercase tracking-widest mb-5">
              Get in touch
            </h3>
            <div className="space-y-3">
              <a
                href="mailto:connect@workint.in"
                className="block text-sm text-white/45 hover:text-white transition-colors duration-200"
              >
                connect@workint.in
              </a>
              <a
                href="https://www.instagram.com/workint_/"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-sm text-white/45 hover:text-white transition-colors duration-200"
              >
                @workint_ on Instagram
              </a>
            </div>

            <a
              href="#early-access"
              className="inline-flex items-center gap-2 mt-6 px-4 py-2.5 rounded-xl bg-brand-teal/10 border border-brand-teal/25 text-brand-teal text-sm font-medium hover:bg-brand-teal/20 transition-all duration-200"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-brand-teal animate-pulse" aria-hidden="true" />
              Join waitlist
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-surface-border/40 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/25">
          <p>© {year} WorkInt. All rights reserved.</p>
          <p className="flex items-center gap-1.5">
            Made with{" "}
            <Heart size={11} className="text-brand-teal fill-brand-teal" aria-hidden="true" />{" "}
            in India
          </p>
        </div>
      </div>
    </footer>
  );
}
