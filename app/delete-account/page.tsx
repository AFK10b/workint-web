import type { Metadata } from "next";
import {
  Trash2,
  Database,
  Shield,
  AlertTriangle,
  LifeBuoy,
  ArrowLeft,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Delete Your WorkInt Account | WorkInt",
  description:
    "Learn how to permanently delete your WorkInt account and what data is removed. Full control over your account and personal data.",
};

const deletionSteps = [
  "Open the WorkInt app.",
  "Go to Profile.",
  "Open Settings.",
  "Tap Delete Account.",
  "Confirm that you want to permanently delete your account.",
  "Your account and all associated data will be permanently deleted.",
];

const deletedData = [
  "User account",
  "Public profile",
  "Profile photo",
  "Capabilities",
  "Services offered",
  "Availability and work preferences",
  "WorkLinks",
  "Conversations",
  "Messages",
  "Any other information associated with your account",
];

const notRetained = [
  "Profile",
  "Conversations",
  "Messages",
  "WorkLinks",
  "Capabilities",
  "Services",
];

const retentionReasons = [
  "Legal obligations",
  "Fraud prevention",
  "Abuse prevention",
  "Security purposes",
];

export default function DeleteAccountPage() {
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
            <span className="mono-label">[ Account ]</span>
            <span className="flex-1 h-px bg-gradient-to-r from-brand-teal/40 to-transparent" aria-hidden="true" />
          </div>

          <h1 className="font-display font-bold uppercase text-4xl sm:text-5xl lg:text-6xl leading-[0.95] tracking-tight">
            <span className="text-white">Delete your</span>
            <br />
            <span className="text-outline">WorkInt account.</span>
          </h1>

          <p className="mt-8 text-lg text-white/70 font-medium">
            Your privacy matters.
          </p>
          <p className="mt-3 text-base text-white/50 leading-relaxed max-w-xl">
            WorkInt gives you complete control over your account and personal
            data. You can permanently delete your account directly from the app
            at any time.
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-[900px] mx-auto px-4 py-14 sm:py-20 space-y-6">
        {/* Section 1 — How to delete */}
        <section className="border border-white/10 bg-surface-raised/40 p-7 sm:p-9">
          <div className="flex items-center gap-4 mb-8">
            <span className="mono-label">[01]</span>
            <Trash2 size={16} className="text-brand-teal" aria-hidden="true" />
            <span className="flex-1 h-px bg-white/10" aria-hidden="true" />
          </div>
          <h2 className="font-display font-bold uppercase text-2xl sm:text-3xl text-white leading-tight tracking-tight mb-7">
            How to delete your account
          </h2>
          <p className="text-sm text-white/50 mb-6">
            To permanently delete your WorkInt account:
          </p>
          <ol className="space-y-px bg-white/10 border border-white/10">
            {deletionSteps.map((step, i) => (
              <li
                key={step}
                className="flex items-start gap-4 bg-surface-base p-4 sm:p-5"
              >
                <span className="font-mono text-xs text-brand-teal flex-shrink-0 pt-0.5">
                  0{i + 1}
                </span>
                <span className="text-sm text-white/70 leading-relaxed">
                  {step}
                </span>
              </li>
            ))}
          </ol>
        </section>

        {/* Section 2 — What data is deleted */}
        <section className="border border-white/10 bg-surface-raised/40 p-7 sm:p-9">
          <div className="flex items-center gap-4 mb-8">
            <span className="mono-label">[02]</span>
            <Database size={16} className="text-brand-teal" aria-hidden="true" />
            <span className="flex-1 h-px bg-white/10" aria-hidden="true" />
          </div>
          <h2 className="font-display font-bold uppercase text-2xl sm:text-3xl text-white leading-tight tracking-tight mb-7">
            What data will be deleted
          </h2>
          <p className="text-sm text-white/50 mb-6 leading-relaxed">
            Deleting your WorkInt account permanently removes all information
            associated with your account, including:
          </p>
          <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-3 mb-8">
            {deletedData.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span
                  className="w-1 h-1 rounded-full bg-brand-teal flex-shrink-0 mt-2"
                  aria-hidden="true"
                />
                <span className="text-sm text-white/65">{item}</span>
              </li>
            ))}
          </ul>

          {/* Warning callout */}
          <div className="flex items-start gap-4 border border-red-500/25 bg-red-500/[0.07] p-5">
            <AlertTriangle
              size={18}
              className="text-red-400 flex-shrink-0 mt-0.5"
              aria-hidden="true"
            />
            <div>
              <p className="font-mono text-[11px] uppercase tracking-widest text-red-400 mb-1.5">
                Important
              </p>
              <p className="text-sm text-white/70 leading-relaxed">
                Once deleted, this information cannot be recovered.
              </p>
            </div>
          </div>
        </section>

        {/* Section 3 — Data retention */}
        <section className="border border-white/10 bg-surface-raised/40 p-7 sm:p-9">
          <div className="flex items-center gap-4 mb-8">
            <span className="mono-label">[03]</span>
            <Shield size={16} className="text-brand-teal" aria-hidden="true" />
            <span className="flex-1 h-px bg-white/10" aria-hidden="true" />
          </div>
          <h2 className="font-display font-bold uppercase text-2xl sm:text-3xl text-white leading-tight tracking-tight mb-7">
            Data retention
          </h2>
          <p className="text-sm text-white/50 leading-relaxed mb-7">
            WorkInt permanently deletes your account and associated data when
            you confirm account deletion.
          </p>

          <p className="text-sm text-white/70 font-medium mb-4">
            We do not retain copies of your:
          </p>
          <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-3 mb-8">
            {notRetained.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span
                  className="w-1 h-1 rounded-full bg-brand-teal flex-shrink-0 mt-2"
                  aria-hidden="true"
                />
                <span className="text-sm text-white/65">{item}</span>
              </li>
            ))}
          </ul>

          <p className="text-sm text-white/70 font-medium mb-4">
            Limited technical information may be retained only when required
            for:
          </p>
          <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-3">
            {retentionReasons.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span
                  className="w-1 h-1 rounded-full bg-white/30 flex-shrink-0 mt-2"
                  aria-hidden="true"
                />
                <span className="text-sm text-white/50">{item}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Section 4 — Recovery */}
        <section className="border border-white/10 bg-surface-raised/40 p-7 sm:p-9">
          <div className="flex items-center gap-4 mb-8">
            <span className="mono-label">[04]</span>
            <AlertTriangle size={16} className="text-brand-teal" aria-hidden="true" />
            <span className="flex-1 h-px bg-white/10" aria-hidden="true" />
          </div>
          <h2 className="font-display font-bold uppercase text-2xl sm:text-3xl text-white leading-tight tracking-tight mb-7">
            Can I recover my account?
          </h2>
          <p className="font-display font-bold uppercase text-4xl sm:text-5xl text-outline leading-none mb-6">
            No.
          </p>
          <p className="text-sm text-white/65 leading-relaxed">
            Account deletion is permanent. If you wish to use WorkInt again in
            the future, you will need to create a new account.
          </p>
        </section>

        {/* Section 5 — Need help */}
        <section className="border border-white/10 bg-surface-raised/40 p-7 sm:p-9">
          <div className="flex items-center gap-4 mb-8">
            <span className="mono-label">[05]</span>
            <LifeBuoy size={16} className="text-brand-teal" aria-hidden="true" />
            <span className="flex-1 h-px bg-white/10" aria-hidden="true" />
          </div>
          <h2 className="font-display font-bold uppercase text-2xl sm:text-3xl text-white leading-tight tracking-tight mb-7">
            Need help?
          </h2>
          <p className="text-sm text-white/50 leading-relaxed mb-7">
            If you are unable to access your account or need assistance with
            account deletion, please contact us.
          </p>
          <a
            href="mailto:support@workint.in"
            className="group inline-flex items-center gap-3 px-6 py-4 bg-brand-teal text-surface-base font-display font-semibold text-sm uppercase tracking-wider hover:bg-brand-teal-light transition-colors duration-200"
          >
            support@workint.in
          </a>
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
          </div>
        </div>
      </footer>
    </main>
  );
}
