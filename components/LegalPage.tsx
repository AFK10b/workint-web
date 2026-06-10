import { ReactNode } from "react";
import { Mail } from "lucide-react";

export interface LegalSection {
  id: string;
  heading: string;
  body: ReactNode;
}

interface LegalPageProps {
  title: string;
  lastUpdated: string;
  intro?: ReactNode;
  sections: LegalSection[];
}

export default function LegalPage({
  title,
  lastUpdated,
  intro,
  sections,
}: LegalPageProps) {
  return (
    <main className="min-h-screen">
      {/* Top bar */}
      <header className="border-b border-surface-border/50 bg-surface-raised/30">
        <div className="max-w-[860px] mx-auto px-4 py-4 flex items-center justify-between">
          <a href="/" className="inline-flex items-center" aria-label="WorkInt home">
            <span className="font-display font-bold text-xl text-white">Work</span>
            <span className="font-display font-bold text-xl text-brand-teal">Int</span>
          </a>
          <a
            href="/"
            className="text-sm text-white/45 hover:text-white transition-colors duration-200"
          >
            ← Back to home
          </a>
        </div>
      </header>

      {/* Hero */}
      <div className="relative overflow-hidden border-b border-surface-border/40">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 70% 90% at 50% -20%, rgba(30,202,184,0.1) 0%, transparent 70%)",
          }}
          aria-hidden="true"
        />
        <div className="relative max-w-[860px] mx-auto px-4 py-14 sm:py-20">
          <h1 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-white leading-tight">
            {title}
          </h1>
          <p className="mt-4 text-sm text-white/40">
            Last Updated: <span className="text-white/60">{lastUpdated}</span>
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-[860px] mx-auto px-4 py-12 sm:py-16">
        {/* Table of contents */}
        <nav
          className="mb-12 rounded-2xl p-6 glow-border bg-surface-raised"
          aria-label="Table of contents"
        >
          <p className="text-xs font-semibold uppercase tracking-widest text-brand-teal mb-4">
            On this page
          </p>
          <ol className="space-y-2 list-none">
            {sections.map(({ id, heading }, i) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  className="text-sm text-white/55 hover:text-brand-teal transition-colors duration-200"
                >
                  {i + 1}. {heading}
                </a>
              </li>
            ))}
          </ol>
        </nav>

        {intro && (
          <div className="mb-10 text-white/60 text-base leading-relaxed space-y-4">
            {intro}
          </div>
        )}

        {/* Sections */}
        <div className="space-y-12">
          {sections.map(({ id, heading, body }, i) => (
            <section key={id} id={id} className="scroll-mt-24">
              <h2 className="font-display font-bold text-xl sm:text-2xl text-white mb-4">
                {i + 1}. {heading}
              </h2>
              <div className="legal-body text-white/60 text-base leading-relaxed space-y-4">
                {body}
              </div>
            </section>
          ))}
        </div>

        {/* Contact section */}
        <div className="mt-16 rounded-2xl p-6 sm:p-8 glow-border bg-surface-raised">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-brand-teal/15 flex items-center justify-center flex-shrink-0">
              <Mail size={18} className="text-brand-teal" aria-hidden="true" />
            </div>
            <div>
              <h2 className="font-display font-semibold text-white text-base mb-2">
                Questions?
              </h2>
              <p className="text-sm text-white/50 leading-relaxed">
                If you have questions, concerns, or requests regarding this
                document, contact us at{" "}
                <a
                  href="mailto:support@workint.com"
                  className="text-brand-teal hover:underline"
                >
                  support@workint.com
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer bar */}
      <footer className="border-t border-surface-border/40 py-8 px-4">
        <div className="max-w-[860px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/25">
          <p>© {new Date().getFullYear()} WorkInt. All rights reserved.</p>
          <div className="flex items-center gap-5">
            <a href="/terms" className="hover:text-white/60 transition-colors duration-200">
              Terms of Service
            </a>
            <a href="/privacy" className="hover:text-white/60 transition-colors duration-200">
              Privacy Policy
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
