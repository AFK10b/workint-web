import type { Metadata } from "next";
import {
  ShieldAlert,
  UserX,
  Ban,
  Flag,
  Gavel,
  Landmark,
  UserMinus,
  RefreshCw,
  Mail,
  ArrowLeft,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Child Safety Standards | WorkInt",
  description:
    "WorkInt's standards against child sexual abuse and exploitation (CSAE). Zero-tolerance policy, prohibited content, reporting, moderation, and enforcement.",
};

const prohibited = [
  "Uploading, sharing, requesting, distributing, or promoting child sexual abuse material (CSAM).",
  "Sexual content involving or sexualizing minors.",
  "Grooming or sexual solicitation involving minors.",
  "Attempts to arrange sexual contact with a minor.",
  "Inappropriate sexual communication or interaction with minors.",
  "Any other content or behavior that facilitates or promotes the sexual exploitation or abuse of children.",
];

const enforcementActions = [
  "Removing or restricting access to prohibited content.",
  "Suspending or permanently terminating accounts.",
  "Preventing repeated violations.",
  "Preserving relevant information where permitted or required by law.",
  "Reporting suspected illegal activity to appropriate authorities when required by applicable law.",
];

export default function ChildSafetyPage() {
  return (
    <main className="min-h-screen">
      {/* Top bar */}
      <header className="border-b border-white/10 bg-surface-raised/30">
        <div className="max-w-[900px] mx-auto px-4 py-4 flex items-center justify-between">
          <a href="/" className="inline-flex items-center" aria-label="WorkInt home">
            <span className="font-display font-bold text-xl text-white">Work</span>
            <span className="font-display font-bold text-xl text-brand-teal">Int</span>
          </a>
          <a
            href="/"
            className="font-mono text-xs uppercase tracking-widest text-white/45 hover:text-brand-teal transition-colors duration-200 inline-flex items-center gap-2"
          >
            <ArrowLeft size={13} aria-hidden="true" />
            Back to home
          </a>
        </div>
      </header>

      {/* Hero */}
      <div className="relative overflow-hidden border-b border-white/10">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 70% 90% at 50% -20%, rgba(30,202,184,0.1) 0%, transparent 70%)",
          }}
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 opacity-[0.035] pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(rgba(30,202,184,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(30,202,184,0.8) 1px, transparent 1px)",
            backgroundSize: "72px 72px",
          }}
          aria-hidden="true"
        />
        <div className="relative max-w-[900px] mx-auto px-4 py-16 sm:py-24">
          <div className="flex items-center gap-4 mb-8">
            <span className="mono-label">[ Safety ]</span>
            <span
              className="flex-1 h-px bg-gradient-to-r from-brand-teal/40 to-transparent"
              aria-hidden="true"
            />
          </div>

          <h1 className="font-display font-bold uppercase text-4xl sm:text-5xl lg:text-6xl leading-[0.95] tracking-tight">
            <span className="text-white">Child safety</span>
            <br />
            <span className="text-outline">standards.</span>
          </h1>

          <p className="mt-8 text-base sm:text-lg text-white/60 leading-relaxed max-w-2xl">
            Against child sexual abuse and exploitation (CSAE).
          </p>

          <div className="mt-8 flex flex-wrap gap-x-8 gap-y-2 font-mono text-[11px] uppercase tracking-widest text-white/35">
            <span>
              Effective: <span className="text-white/60">8 August 2026</span>
            </span>
            <span>
              App: <span className="text-white/60">WorkInt</span>
            </span>
            <span>
              Contact:{" "}
              <a
                href="mailto:connect@workint.in"
                className="text-brand-teal hover:underline normal-case tracking-normal"
              >
                connect@workint.in
              </a>
            </span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-[900px] mx-auto px-4 py-14 sm:py-20 space-y-6">
        {/* 01 — Zero tolerance */}
        <section className="border border-white/10 bg-surface-raised/40 p-7 sm:p-9">
          <div className="flex items-center gap-4 mb-8">
            <span className="mono-label">[01]</span>
            <ShieldAlert size={16} className="text-brand-teal" aria-hidden="true" />
            <span className="flex-1 h-px bg-white/10" aria-hidden="true" />
          </div>
          <h2 className="font-display font-bold uppercase text-2xl sm:text-3xl text-white leading-tight tracking-tight mb-7">
            Zero-tolerance policy
          </h2>
          <div className="space-y-4 text-sm text-white/65 leading-relaxed">
            <p>
              WorkInt maintains a strict zero-tolerance policy against child
              sexual abuse and exploitation (CSAE), including child sexual abuse
              material (CSAM).
            </p>
            <p>
              WorkInt does not permit content or behavior that sexually
              exploits, abuses, or endangers children. Any content or activity
              that violates these standards may be removed, and the associated
              account may be suspended or permanently terminated.
            </p>
          </div>
        </section>

        {/* 02 — Age restriction */}
        <section className="border border-white/10 bg-surface-raised/40 p-7 sm:p-9">
          <div className="flex items-center gap-4 mb-8">
            <span className="mono-label">[02]</span>
            <UserX size={16} className="text-brand-teal" aria-hidden="true" />
            <span className="flex-1 h-px bg-white/10" aria-hidden="true" />
          </div>
          <h2 className="font-display font-bold uppercase text-2xl sm:text-3xl text-white leading-tight tracking-tight mb-7">
            Age restriction
          </h2>
          <p className="font-display font-bold uppercase text-3xl sm:text-4xl text-outline leading-none mb-6">
            18+ only
          </p>
          <div className="space-y-4 text-sm text-white/65 leading-relaxed">
            <p>
              WorkInt is intended for individuals 18 years of age or older.
            </p>
            <p>
              Minors are not permitted to create or maintain an account or use
              the WorkInt platform. We take reasonable measures to help prevent
              underage users from accessing the service.
            </p>
          </div>
        </section>

        {/* 03 — Prohibited */}
        <section className="border border-white/10 bg-surface-raised/40 p-7 sm:p-9">
          <div className="flex items-center gap-4 mb-8">
            <span className="mono-label">[03]</span>
            <Ban size={16} className="text-brand-teal" aria-hidden="true" />
            <span className="flex-1 h-px bg-white/10" aria-hidden="true" />
          </div>
          <h2 className="font-display font-bold uppercase text-2xl sm:text-3xl text-white leading-tight tracking-tight mb-7">
            Prohibited content and behavior
          </h2>
          <ul className="space-y-px bg-white/10 border border-white/10">
            {prohibited.map((item) => (
              <li
                key={item}
                className="flex items-start gap-4 bg-surface-base p-4 sm:p-5"
              >
                <Ban
                  size={14}
                  className="text-red-400/70 flex-shrink-0 mt-0.5"
                  aria-hidden="true"
                />
                <span className="text-sm text-white/65 leading-relaxed">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </section>

        {/* 04 — Reporting */}
        <section className="border border-white/10 bg-surface-raised/40 p-7 sm:p-9">
          <div className="flex items-center gap-4 mb-8">
            <span className="mono-label">[04]</span>
            <Flag size={16} className="text-brand-teal" aria-hidden="true" />
            <span className="flex-1 h-px bg-white/10" aria-hidden="true" />
          </div>
          <h2 className="font-display font-bold uppercase text-2xl sm:text-3xl text-white leading-tight tracking-tight mb-7">
            User reporting and safety
          </h2>
          <div className="space-y-4 text-sm text-white/65 leading-relaxed mb-7">
            <p>
              Users can report harmful, abusive, or potentially illegal content
              or behavior through the reporting functionality available in the
              WorkInt app.
            </p>
            <p>Users may also contact us regarding child-safety concerns at:</p>
          </div>

          <a
            href="mailto:connect@workint.in"
            className="inline-flex items-center gap-3 px-6 py-4 bg-brand-teal text-surface-base font-display font-semibold text-sm uppercase tracking-wider hover:bg-brand-teal-light transition-colors duration-200 mb-7"
          >
            <Mail size={15} aria-hidden="true" />
            connect@workint.in
          </a>

          <p className="text-sm text-white/65 leading-relaxed">
            We prioritize reports involving suspected child sexual abuse or
            exploitation and take appropriate action, which may include content
            removal, account restrictions, account suspension, or permanent
            account termination.
          </p>
        </section>

        {/* 05 — Moderation */}
        <section className="border border-white/10 bg-surface-raised/40 p-7 sm:p-9">
          <div className="flex items-center gap-4 mb-8">
            <span className="mono-label">[05]</span>
            <Gavel size={16} className="text-brand-teal" aria-hidden="true" />
            <span className="flex-1 h-px bg-white/10" aria-hidden="true" />
          </div>
          <h2 className="font-display font-bold uppercase text-2xl sm:text-3xl text-white leading-tight tracking-tight mb-7">
            Moderation and enforcement
          </h2>
          <p className="text-sm text-white/65 leading-relaxed mb-6">
            When WorkInt identifies or receives a report concerning prohibited
            CSAE/CSAM content or behavior, we may take appropriate enforcement
            action. Depending on the circumstances, this may include:
          </p>
          <ul className="space-y-3">
            {enforcementActions.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span
                  className="w-1 h-1 rounded-full bg-brand-teal flex-shrink-0 mt-2"
                  aria-hidden="true"
                />
                <span className="text-sm text-white/65 leading-relaxed">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </section>

        {/* 06 — Law enforcement */}
        <section className="border border-white/10 bg-surface-raised/40 p-7 sm:p-9">
          <div className="flex items-center gap-4 mb-8">
            <span className="mono-label">[06]</span>
            <Landmark size={16} className="text-brand-teal" aria-hidden="true" />
            <span className="flex-1 h-px bg-white/10" aria-hidden="true" />
          </div>
          <h2 className="font-display font-bold uppercase text-2xl sm:text-3xl text-white leading-tight tracking-tight mb-7">
            Cooperation with law enforcement
          </h2>
          <div className="space-y-4 text-sm text-white/65 leading-relaxed">
            <p>
              WorkInt cooperates with appropriate law-enforcement and
              child-protection authorities in accordance with applicable laws
              and legal requirements.
            </p>
            <p>
              Where legally required, we may report suspected child sexual
              exploitation, CSAM, or other illegal activity to the appropriate
              authorities and provide relevant information as legally permitted
              or required.
            </p>
          </div>
        </section>

        {/* 07 — Account termination */}
        <section className="border border-white/10 bg-surface-raised/40 p-7 sm:p-9">
          <div className="flex items-center gap-4 mb-8">
            <span className="mono-label">[07]</span>
            <UserMinus size={16} className="text-brand-teal" aria-hidden="true" />
            <span className="flex-1 h-px bg-white/10" aria-hidden="true" />
          </div>
          <h2 className="font-display font-bold uppercase text-2xl sm:text-3xl text-white leading-tight tracking-tight mb-7">
            Account termination
          </h2>
          <div className="space-y-4 text-sm text-white/65 leading-relaxed">
            <p>
              Any user found to be engaging in, promoting, requesting,
              distributing, or attempting to distribute CSAE/CSAM content may
              have their WorkInt account permanently terminated.
            </p>
            <p>
              We may also take additional measures to prevent repeated
              violations or attempts to circumvent enforcement.
            </p>
          </div>
        </section>

        {/* 08 — Ongoing commitment */}
        <section className="border border-white/10 bg-surface-raised/40 p-7 sm:p-9">
          <div className="flex items-center gap-4 mb-8">
            <span className="mono-label">[08]</span>
            <RefreshCw size={16} className="text-brand-teal" aria-hidden="true" />
            <span className="flex-1 h-px bg-white/10" aria-hidden="true" />
          </div>
          <h2 className="font-display font-bold uppercase text-2xl sm:text-3xl text-white leading-tight tracking-tight mb-7">
            Ongoing commitment
          </h2>
          <div className="space-y-4 text-sm text-white/65 leading-relaxed">
            <p>
              WorkInt regularly reviews its safety standards, moderation
              processes, reporting mechanisms, and community guidelines to help
              maintain a safe environment for users and to comply with
              applicable laws and platform requirements.
            </p>
            <p>
              We may update these Child Safety Standards when necessary to
              reflect changes to WorkInt, applicable laws, or our safety
              practices.
            </p>
          </div>
        </section>

        {/* 09 — Contact */}
        <section className="border border-white/10 bg-surface-raised/40 p-7 sm:p-9">
          <div className="flex items-center gap-4 mb-8">
            <span className="mono-label">[09]</span>
            <Mail size={16} className="text-brand-teal" aria-hidden="true" />
            <span className="flex-1 h-px bg-white/10" aria-hidden="true" />
          </div>
          <h2 className="font-display font-bold uppercase text-2xl sm:text-3xl text-white leading-tight tracking-tight mb-7">
            Contact
          </h2>
          <p className="text-sm text-white/65 leading-relaxed mb-7">
            For child-safety concerns, suspected CSAE/CSAM, or questions
            regarding these standards, please contact:
          </p>
          <dl className="space-y-4 font-mono text-sm">
            <div className="flex flex-wrap gap-x-4">
              <dt className="text-white/35 uppercase text-[11px] tracking-widest pt-1 w-20">
                Email
              </dt>
              <dd>
                <a
                  href="mailto:connect@workint.in"
                  className="text-brand-teal hover:underline"
                >
                  connect@workint.in
                </a>
              </dd>
            </div>
            <div className="flex flex-wrap gap-x-4">
              <dt className="text-white/35 uppercase text-[11px] tracking-widest pt-1 w-20">
                Website
              </dt>
              <dd>
                <a href="/" className="text-white/65 hover:text-brand-teal transition-colors">
                  https://www.workint.in/
                </a>
              </dd>
            </div>
          </dl>
        </section>
      </div>

      {/* Footer bar */}
      <footer className="border-t border-white/10 py-8 px-4">
        <div className="max-w-[900px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 font-mono text-[11px] uppercase tracking-widest text-white/25">
          <p>© {new Date().getFullYear()} WorkInt</p>
          <div className="flex items-center gap-6">
            <a href="/terms" className="hover:text-brand-teal transition-colors duration-200">
              Terms
            </a>
            <a href="/privacy" className="hover:text-brand-teal transition-colors duration-200">
              Privacy
            </a>
            <a
              href="/delete-account"
              className="hover:text-brand-teal transition-colors duration-200"
            >
              Delete Account
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
