import type { Metadata } from "next";
import { Suspense } from "react";
import ResetPasswordForm from "@/components/ResetPasswordForm";

export const metadata: Metadata = {
  title: "Reset Password | WorkInt",
  description: "Set a new password for your WorkInt account.",
  robots: { index: false, follow: false },
};

export default function ResetPasswordPage() {
  return (
    <main className="relative min-h-screen flex flex-col">
      {/* Background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% -10%, rgba(30,202,184,0.12) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      {/* Top bar */}
      <header className="relative border-b border-surface-border/50 bg-surface-raised/30">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-center">
          <a href="/" className="inline-flex items-center" aria-label="WorkInt home">
            <span className="font-display font-bold text-xl text-white">Work</span>
            <span className="font-display font-bold text-xl text-brand-teal">Int</span>
          </a>
        </div>
      </header>

      {/* Form */}
      <div className="relative flex-1 flex items-center justify-center px-4 py-16">
        <Suspense fallback={null}>
          <ResetPasswordForm />
        </Suspense>
      </div>

      {/* Footer bar */}
      <footer className="relative border-t border-surface-border/40 py-6 px-4">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/25">
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
