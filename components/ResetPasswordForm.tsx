"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import {
  Lock,
  Eye,
  EyeOff,
  CheckCircle2,
  XCircle,
  Loader2,
  ShieldAlert,
  Check,
  X,
} from "lucide-react";

// Backend endpoint that verifies the token and updates the password.
// Replace with the deployed API URL once the server is on the cloud.
const RESET_API_ENDPOINT = "https://REPLACE_ME/api/auth/reset-password";

type Status = "idle" | "loading" | "success" | "error";

const rules = [
  { id: "length", label: "At least 8 characters", test: (p: string) => p.length >= 8 },
  { id: "letter", label: "Contains a letter", test: (p: string) => /[a-zA-Z]/.test(p) },
  { id: "number", label: "Contains a number", test: (p: string) => /\d/.test(p) },
];

export default function ResetPasswordForm() {
  const searchParams = useSearchParams();
  const token = searchParams.get("token");

  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  // No token in the URL — link is invalid (bare URL typed or copy-pasted
  // without the token, or the email link was truncated).
  if (!token) {
    return (
      <div className="w-full max-w-md mx-auto text-center">
        <div className="glow-border rounded-3xl p-8 sm:p-10 bg-surface-raised">
          <div className="w-14 h-14 rounded-2xl bg-red-500/10 border border-red-500/25 flex items-center justify-center mx-auto mb-6">
            <ShieldAlert size={26} className="text-red-400" aria-hidden="true" />
          </div>
          <h1 className="font-display font-bold text-2xl text-white mb-3">
            Invalid or expired link
          </h1>
          <p className="text-sm text-white/50 leading-relaxed mb-6">
            This page can only be opened from a password reset link sent to
            your email. The link may have expired or is incomplete.
          </p>
          <p className="text-sm text-white/40">
            Open the WorkInt app and tap{" "}
            <span className="text-brand-teal font-medium">Forgot password</span>{" "}
            to request a new link.
          </p>
        </div>
      </div>
    );
  }

  if (status === "success") {
    return (
      <div className="w-full max-w-md mx-auto text-center">
        <div className="glow-border rounded-3xl p-8 sm:p-10 bg-surface-raised">
          <div className="w-14 h-14 rounded-2xl bg-brand-teal/10 border border-brand-teal/25 flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 size={26} className="text-brand-teal" aria-hidden="true" />
          </div>
          <h1 className="font-display font-bold text-2xl text-white mb-3">
            Password updated
          </h1>
          <p className="text-sm text-white/50 leading-relaxed">
            Your password has been changed successfully. Open the WorkInt app
            and sign in with your new password.
          </p>
        </div>
      </div>
    );
  }

  const passwordValid = rules.every((r) => r.test(password));
  const confirmValid = confirm.length > 0 && confirm === password;
  const canSubmit = passwordValid && confirmValid && status !== "loading";

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!canSubmit) return;
    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch(RESET_API_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token, password }),
      });

      if (res.ok) {
        setStatus("success");
      } else {
        const data = await res.json().catch(() => null);
        setErrorMsg(
          data?.message ||
            "This reset link is invalid or has expired. Please request a new one from the app."
        );
        setStatus("error");
      }
    } catch {
      setErrorMsg("Couldn't reach the server. Check your connection and try again.");
      setStatus("error");
    }
  }

  return (
    <div className="w-full max-w-md mx-auto">
      <div className="glow-border rounded-3xl p-8 sm:p-10 bg-surface-raised">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="w-14 h-14 rounded-2xl bg-brand-teal/10 border border-brand-teal/25 flex items-center justify-center mx-auto mb-5">
            <Lock size={24} className="text-brand-teal" aria-hidden="true" />
          </div>
          <h1 className="font-display font-bold text-2xl sm:text-3xl text-white mb-2">
            Reset your password
          </h1>
          <p className="text-sm text-white/45">
            Choose a new password for your WorkInt account.
          </p>
        </div>

        <form onSubmit={handleSubmit} noValidate>
          {/* New password */}
          <label htmlFor="new-password" className="block text-xs font-semibold uppercase tracking-widest text-white/40 mb-2">
            New password
          </label>
          <div className="relative mb-4">
            <input
              id="new-password"
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => { setPassword(e.target.value); if (status === "error") setStatus("idle"); }}
              autoComplete="new-password"
              required
              placeholder="Enter new password"
              className="w-full px-4 py-3.5 pr-12 rounded-xl bg-surface-base border border-surface-border text-white text-sm placeholder:text-white/25 focus:border-brand-teal/60 focus:outline-none transition-colors duration-200"
            />
            <button
              type="button"
              onClick={() => setShowPassword((s) => !s)}
              aria-label={showPassword ? "Hide password" : "Show password"}
              className="absolute right-3.5 top-1/2 -translate-y-1/2 text-white/30 hover:text-white/60 transition-colors"
            >
              {showPassword ? <EyeOff size={17} /> : <Eye size={17} />}
            </button>
          </div>

          {/* Password rules */}
          <ul className="space-y-1.5 mb-5">
            {rules.map(({ id, label, test }) => {
              const ok = test(password);
              return (
                <li key={id} className="flex items-center gap-2 text-xs">
                  {ok ? (
                    <Check size={13} className="text-brand-teal flex-shrink-0" aria-hidden="true" />
                  ) : (
                    <X size={13} className="text-white/20 flex-shrink-0" aria-hidden="true" />
                  )}
                  <span className={ok ? "text-white/60" : "text-white/30"}>{label}</span>
                </li>
              );
            })}
          </ul>

          {/* Confirm password */}
          <label htmlFor="confirm-password" className="block text-xs font-semibold uppercase tracking-widest text-white/40 mb-2">
            Confirm password
          </label>
          <div className="relative mb-2">
            <input
              id="confirm-password"
              type={showConfirm ? "text" : "password"}
              value={confirm}
              onChange={(e) => { setConfirm(e.target.value); if (status === "error") setStatus("idle"); }}
              autoComplete="new-password"
              required
              placeholder="Re-enter new password"
              className="w-full px-4 py-3.5 pr-12 rounded-xl bg-surface-base border border-surface-border text-white text-sm placeholder:text-white/25 focus:border-brand-teal/60 focus:outline-none transition-colors duration-200"
            />
            <button
              type="button"
              onClick={() => setShowConfirm((s) => !s)}
              aria-label={showConfirm ? "Hide password" : "Show password"}
              className="absolute right-3.5 top-1/2 -translate-y-1/2 text-white/30 hover:text-white/60 transition-colors"
            >
              {showConfirm ? <EyeOff size={17} /> : <Eye size={17} />}
            </button>
          </div>

          {/* Mismatch hint */}
          <div className="min-h-[20px] mb-4">
            {confirm.length > 0 && !confirmValid && (
              <p className="text-xs text-red-400/80 flex items-center gap-1.5">
                <X size={12} aria-hidden="true" /> Passwords don&apos;t match
              </p>
            )}
            {confirmValid && (
              <p className="text-xs text-brand-teal flex items-center gap-1.5">
                <Check size={12} aria-hidden="true" /> Passwords match
              </p>
            )}
          </div>

          {/* Error */}
          {status === "error" && (
            <div className="flex items-start gap-2.5 p-3.5 rounded-xl bg-red-500/10 border border-red-500/25 mb-4">
              <XCircle size={16} className="text-red-400 flex-shrink-0 mt-0.5" aria-hidden="true" />
              <p className="text-xs text-red-300/90 leading-relaxed">{errorMsg}</p>
            </div>
          )}

          {/* Submit */}
          <button
            type="submit"
            disabled={!canSubmit}
            className="w-full py-3.5 rounded-xl font-display font-semibold text-sm text-surface-base transition-all duration-200 enabled:hover:brightness-110 enabled:hover:-translate-y-0.5 disabled:opacity-40 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            style={{ background: "linear-gradient(135deg, #1ECAB8 0%, #2563EB 100%)" }}
          >
            {status === "loading" ? (
              <>
                <Loader2 size={16} className="animate-spin" aria-hidden="true" />
                Updating password...
              </>
            ) : (
              "Update password"
            )}
          </button>
        </form>
      </div>

      <p className="text-center text-xs text-white/25 mt-6">
        Didn&apos;t request this? You can safely ignore the email — your
        password won&apos;t change.
      </p>
    </div>
  );
}
