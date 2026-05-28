import { createFileRoute, Link } from "@tanstack/react-router";
import {
  CircleDot, Shield, Lock, KeyRound, Fingerprint, EyeOff, ServerCog,
  HardDrive, CheckCircle2, AlertTriangle, FileText, ExternalLink,
} from "lucide-react";

export const Route = createFileRoute("/security")({
  head: () => ({
    meta: [
      { title: "F.R.I.D.A.Y Security — Privacy & Security Model" },
      { name: "description", content: "How F.R.I.D.A.Y keeps your data, credentials, and AI interactions private and secure — local-first by design." },
    ],
  }),
  component: SecurityPage,
});

const PILLARS = [
  {
    icon: HardDrive,
    title: "Local-First Architecture",
    color: "text-crimson-glow",
    iconBg: "bg-crimson/10 border-crimson/30",
    desc: "Models, memory, and indexes run on-device by default. No data leaves your machine unless you explicitly enable a cloud feature. Your conversation history, files, and automations stay local.",
    points: [
      "All AI inference runs on-device via local or self-hosted models",
      "Memory vector store is stored in ~/.friday/memory/ (encrypted)",
      "No telemetry or analytics without explicit opt-in",
      "Network requests only made for API keys you configure",
    ],
  },
  {
    icon: Lock,
    title: "Encrypted Credential Vault",
    color: "text-amber-sys",
    iconBg: "bg-amber-sys/10 border-amber-sys/30",
    desc: "All credentials, API keys, and sensitive tokens are stored in an AES-256-GCM encrypted vault. Each application has its own isolated key namespace to prevent cross-app credential leakage.",
    points: [
      "AES-256-GCM encryption at rest for all stored secrets",
      "Per-app credential isolation with capability-scoped tokens",
      "Vault is locked at system sleep / screen lock",
      "Memory wiped on vault lock — no plaintext in RAM",
    ],
  },
  {
    icon: KeyRound,
    title: "Bring Your Own Keys",
    color: "text-cyan-sys",
    iconBg: "bg-cyan-sys/10 border-cyan-sys/30",
    desc: "F.R.I.D.A.Y never proxies your API requests through our servers. When you configure a Gemini or Groq key, calls go directly from your machine to the provider. We never see your keys or responses.",
    points: [
      "Direct API calls from your device to providers — zero proxying",
      "Keys stored encrypted in ~/.friday/.env vault",
      "Keys visible only to you — never logged or transmitted",
      "Revoke access anytime by removing keys from ~/.friday/.env",
    ],
  },
  {
    icon: EyeOff,
    title: "Permission Transparency",
    color: "text-emerald-sys",
    iconBg: "bg-emerald-sys/10 border-emerald-sys/30",
    desc: "Every action F.R.I.D.A.Y takes is logged with its scope, target, and revocable grant. You can see exactly what the system did, when, and why — with full audit trail export.",
    points: [
      "Every action logged: scope, target, timestamp, agent",
      "Human-in-the-loop checkpoints for sensitive operations",
      "Audit log exportable as JSON from Settings → Logs",
      "Granular permission revocation per agent or automation",
    ],
  },
  {
    icon: Fingerprint,
    title: "Biometric Authentication",
    color: "text-cyan-sys",
    iconBg: "bg-cyan-sys/10 border-cyan-sys/30",
    desc: "Sensitive vault access and privileged automation flows require biometric or hardware key authentication. F.R.I.D.A.Y integrates with Windows Hello, Touch ID, and FIDO2 hardware keys.",
    points: [
      "Windows Hello (fingerprint, face, PIN) for vault unlock",
      "Touch ID on macOS for privileged operations",
      "FIDO2 / YubiKey support for hardware-backed auth",
      "Configurable timeout before re-auth is required",
    ],
  },
  {
    icon: ServerCog,
    title: "Sandboxed Action Runners",
    color: "text-amber-sys",
    iconBg: "bg-amber-sys/10 border-amber-sys/30",
    desc: "Each automation agent runs in a sandboxed process with capability-scoped tokens. Agents cannot access resources outside their declared scope — filesystem, network, or system APIs.",
    points: [
      "Per-agent capability tokens with minimum-privilege scope",
      "Sandbox escape attempts logged and blocked",
      "Signed execution plans — tamper-evident action chains",
      "Agent processes isolated via OS-level sandboxing",
    ],
  },
];

const COMPLIANCE = [
  { label: "AES-256-GCM", desc: "Vault encryption at rest", status: "active" },
  { label: "TLS 1.3", desc: "All outbound API calls", status: "active" },
  { label: "Certificate Pinning", desc: "Provider API endpoints", status: "active" },
  { label: "Hardware Key Storage", desc: "OS keychain integration", status: "active" },
  { label: "Reproducible Builds", desc: "Signed installer verification", status: "active" },
  { label: "SOC 2 Type II", desc: "Audit in progress", status: "pending" },
];

function SecurityPage() {
  return (
    <div className="relative min-h-screen bg-background text-foreground font-sans">
      {/* nav */}
      <header className="fixed top-0 z-50 w-full border-b border-border bg-[oklch(0.13_0.005_270/0.85)] backdrop-blur-xl">
        <div className="mx-auto max-w-7xl px-6 py-3 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2.5">
            <div className="relative h-7 w-7">
              <div className="absolute inset-0 rounded-md bg-crimson/20 blur-md" />
              <div className="relative grid h-7 w-7 place-items-center rounded-md border border-crimson/40 bg-[oklch(0.18_0.02_22)]">
                <CircleDot className="h-3.5 w-3.5 text-crimson" />
              </div>
            </div>
            <span className="font-semibold tracking-[0.18em] text-sm">F.R.I.D.A.Y</span>
          </Link>
          <div className="flex items-center gap-4 text-xs text-muted-foreground">
            <Link to="/docs" className="hover:text-foreground transition-colors">Docs</Link>
            <Link to="/changelog" className="hover:text-foreground transition-colors">Changelog</Link>
            <Link to="/" className="hover:text-foreground transition-colors">← Back to Home</Link>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-6 pt-28 pb-24 space-y-24">

        {/* hero */}
        <div className="relative rounded-3xl overflow-hidden glass-panel p-12 md:p-20">
          <div className="absolute inset-0 bg-gradient-radial-crimson opacity-20" />
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-emerald-sys/50 to-transparent" />
          <div className="relative max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-sys/30 bg-emerald-sys/10 px-3 py-1 text-xs font-medium tracking-widest uppercase text-emerald-sys">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-sys animate-pulse-slow" />
              Security & Privacy
            </div>
            <h1 className="text-4xl md:text-6xl font-light tracking-tight text-balance leading-[1.05]">
              Trust is the<br />
              <span className="font-semibold bg-gradient-to-br from-foreground to-emerald-sys bg-clip-text text-transparent">
                operating system.
              </span>
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl">
              F.R.I.D.A.Y runs on-device first. Every model call, every action, every byte is scoped, logged, and revocable.
              Your data doesn't leave your machine unless you decide it should.
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              {[
                { label: "Local-first by default", color: "text-emerald-sys border-emerald-sys/30 bg-emerald-sys/10" },
                { label: "Zero server telemetry", color: "text-cyan-sys border-cyan-sys/30 bg-cyan-sys/10" },
                { label: "Keys never proxied", color: "text-amber-sys border-amber-sys/30 bg-amber-sys/10" },
                { label: "Full audit trail", color: "text-crimson-glow border-crimson/30 bg-crimson/10" },
              ].map((b) => (
                <span key={b.label} className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-mono ${b.color}`}>
                  <CheckCircle2 className="h-3 w-3" />
                  {b.label}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* compliance strip */}
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <div className="grid h-8 w-8 place-items-center rounded-lg bg-emerald-sys/10 border border-emerald-sys/30">
              <Shield className="h-4 w-4 text-emerald-sys" />
            </div>
            <h2 className="text-2xl font-semibold tracking-tight">Security Standards</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {COMPLIANCE.map((c) => (
              <div key={c.label} className="glass-panel rounded-xl px-5 py-4 flex items-center justify-between gap-4">
                <div className="space-y-0.5">
                  <div className="font-mono text-sm font-semibold">{c.label}</div>
                  <div className="text-xs text-muted-foreground">{c.desc}</div>
                </div>
                <span className={`shrink-0 text-[10px] font-mono uppercase tracking-widest border rounded-full px-2.5 py-0.5 ${c.status === "active" ? "text-emerald-sys border-emerald-sys/40 bg-emerald-sys/10" : "text-amber-sys border-amber-sys/40 bg-amber-sys/10"}`}>
                  {c.status === "active" ? "Active" : "Pending"}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* pillars grid */}
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold tracking-tight">Security Model</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {PILLARS.map((p) => (
              <div key={p.title} className="glass-panel rounded-2xl p-6 space-y-4 hover:-translate-y-0.5 transition-all duration-300 hover:border-white/10">
                <div className={`grid h-11 w-11 place-items-center rounded-xl border ${p.iconBg}`}>
                  <p.icon className={`h-5 w-5 ${p.color}`} />
                </div>
                <div>
                  <h3 className={`font-semibold text-base tracking-tight mb-2 ${p.color}`}>{p.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
                </div>
                <ul className="space-y-1.5 pt-1">
                  {p.points.map((pt, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs text-muted-foreground">
                      <CheckCircle2 className={`h-3 w-3 mt-0.5 shrink-0 ${p.color}`} />
                      {pt}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* disclosure */}
        <div className="glass-panel rounded-2xl p-8 border border-amber-sys/20 space-y-5">
          <div className="flex items-center gap-3">
            <div className="grid h-10 w-10 place-items-center rounded-lg bg-amber-sys/10 border border-amber-sys/30">
              <AlertTriangle className="h-5 w-5 text-amber-sys" />
            </div>
            <h2 className="text-xl font-semibold tracking-tight">Responsible Disclosure</h2>
          </div>
          <p className="text-muted-foreground leading-relaxed text-sm max-w-3xl">
            Found a security vulnerability in F.R.I.D.A.Y? Please report it responsibly. We take all security reports seriously and aim to respond within 48 hours. Do not disclose publicly until we have had a chance to investigate and patch.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href="mailto:security@friday.ai"
              className="inline-flex items-center gap-2 rounded-xl bg-amber-sys/10 border border-amber-sys/30 px-5 py-2.5 text-sm font-semibold text-amber-sys hover:brightness-110 transition-all"
            >
              <FileText className="h-4 w-4" />
              security@friday.ai
            </a>
          </div>
          <div className="grid sm:grid-cols-3 gap-3 pt-2">
            {[
              { label: "Initial Response", value: "< 48 hours" },
              { label: "Patch Target", value: "< 14 days" },
              { label: "Disclosure Window", value: "90 days" },
            ].map((s) => (
              <div key={s.label} className="rounded-lg border border-border bg-[oklch(0.15_0.005_270/0.6)] px-4 py-3">
                <div className="text-[10px] uppercase tracking-widest text-muted-foreground">{s.label}</div>
                <div className="font-mono text-sm mt-1 text-amber-sys">{s.value}</div>
              </div>
            ))}
          </div>
        </div>

      </main>

      {/* footer */}
      <footer className="border-t border-border py-8">
        <div className="mx-auto max-w-7xl px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <CircleDot className="h-3.5 w-3.5 text-crimson" />
            <span className="font-semibold tracking-[0.18em]">F.R.I.D.A.Y</span>
            <span className="ml-2">© 2026 · Built for power users.</span>
          </div>
          <div className="flex items-center gap-6 text-xs text-muted-foreground">
            <Link to="/docs" className="hover:text-foreground transition-colors">Docs</Link>
            <Link to="/changelog" className="hover:text-foreground transition-colors">Changelog</Link>
            <Link to="/security" className="hover:text-foreground transition-colors">Security</Link>
            <a href="https://piyushpaul.in/" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">Portfolio</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
