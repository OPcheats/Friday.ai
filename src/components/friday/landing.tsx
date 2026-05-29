import { useState } from "react";
import { Link } from "@tanstack/react-router";
import {
  Mic, Zap, Eye, Brain, Code2, Keyboard, Smartphone, Workflow, Sparkles,
  Plug, Activity, LayoutGrid, Shield, Lock, KeyRound, Fingerprint, EyeOff,
  ServerCog, Download, Play, Compass, ArrowRight, Cpu, Wifi, HardDrive,
  CircleDot, ChevronRight, Terminal as TerminalIcon, CheckCircle2, ExternalLink,
  Package, Key, AlertCircle, Star,
} from "lucide-react";
import { NeuralSphere, VoiceWave, TerminalPreview } from "@/components/friday/visuals";
import { AuthModal } from "@/components/friday/AuthModal";

const CAPABILITIES = [
  { icon: Mic, title: "Voice-Controlled Automation", desc: "Natural language commands trigger native OS actions across apps and files." },
  { icon: Zap, title: "Real-Time App Launching", desc: "Sub-200ms launch dispatch with context-aware window arrangement." },
  { icon: Eye, title: "Multimodal Vision", desc: "Continuous screen understanding — read UIs, extract data, act on what's visible." },
  { icon: Brain, title: "Persistent AI Memory", desc: "Episodic + semantic memory with vector recall across sessions and devices." },
  { icon: Code2, title: "Codebase Intelligence", desc: "RAG over your repos. Refactor, explain, generate — grounded in your code." },
  { icon: Keyboard, title: "Native Keyboard & Mouse", desc: "Low-level input control with deterministic playback and recording." },
  { icon: Smartphone, title: "Android ADB Bridge", desc: "Drive phones, scrape state, automate flows. USB or wireless." },
  { icon: Workflow, title: "Workflow Orchestration", desc: "Composable agents with retries, branching, and human-in-the-loop checkpoints." },
  { icon: Sparkles, title: "Smart Productivity", desc: "Meeting summaries, inbox triage, focus modes, smart paste, clipboard search." },
  { icon: Plug, title: "External API Integrations", desc: "OpenAI, Anthropic, Notion, GitHub, Slack, Linear, Stripe and 60+ more." },
  { icon: Activity, title: "System Monitoring", desc: "Live CPU, GPU, memory, thermal and network telemetry surfaced to the model." },
  { icon: LayoutGrid, title: "Floating Widgets", desc: "Pinnable HUDs for transcripts, tasks, system stats and active automations." },
];

const SECURITY = [
  { icon: HardDrive, title: "Local-First Architecture", desc: "Models, memory and indexes run on-device by default. No data leaves unless you say so." },
  { icon: Lock, title: "Encrypted Vault", desc: "AES-256 vault for credentials, tokens and traces. Per-app isolation." },
  { icon: KeyRound, title: "Bring Your Own Keys", desc: "Plug any provider key. F.R.I.D.A.Y never proxies through our servers." },
  { icon: EyeOff, title: "Permission Transparency", desc: "Every action shows scope, target and revocable grant. Full audit trail." },
  { icon: Fingerprint, title: "Biometric Security", desc: "Touch ID, Windows Hello and hardware key auth for sensitive operations." },
  { icon: ServerCog, title: "Secure AI Execution", desc: "Sandboxed action runners with capability-scoped tokens and signed plans." },
];

const ROADMAP = [
  { q: "Q3 · 2025", title: "Offline Wake Word", desc: "On-device wake detection with <30mW idle draw.", status: "shipping" },
  { q: "Q4 · 2025", title: "Plugin Ecosystem", desc: "Signed plugin marketplace with capability sandboxing.", status: "beta" },
  { q: "Q1 · 2026", title: "Memory Graph", desc: "Queryable knowledge graph spanning apps, files and people.", status: "design" },
  { q: "Q2 · 2026", title: "Multi-Agent Orchestration", desc: "Specialist agents collaborate under a planner with conflict resolution.", status: "research" },
  { q: "Q3 · 2026", title: "Hybrid Local + Cloud", desc: "Adaptive routing between on-device and frontier models per task.", status: "research" },
];

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-border bg-[oklch(0.15_0.005_270/0.6)] px-3 py-1 text-xs font-medium tracking-widest uppercase text-muted-foreground">
      <span className="h-1.5 w-1.5 rounded-full bg-crimson animate-pulse-slow" />
      {children}
    </div>
  );
}

function Nav({ onDownload }: { onDownload: () => void }) {
  return (
    <header className="fixed top-0 z-50 w-full">
      <div className="mx-auto mt-4 flex max-w-7xl items-center justify-between rounded-2xl glass-panel px-5 py-3">
        <div className="flex items-center gap-2.5">
          <div className="relative h-7 w-7">
            <div className="absolute inset-0 rounded-md bg-crimson/20 blur-md" />
            <div className="relative grid h-7 w-7 place-items-center rounded-md border border-crimson/40 bg-[oklch(0.18_0.02_22)]">
              <CircleDot className="h-3.5 w-3.5 text-crimson" />
            </div>
          </div>
          <span className="font-semibold tracking-[0.18em] text-sm">F.R.I.D.A.Y</span>
        </div>
        <nav className="hidden md:flex items-center gap-7 text-sm text-muted-foreground">
          <a href="#capabilities" className="hover:text-foreground transition-colors">Capabilities</a>
          <a href="#interface" className="hover:text-foreground transition-colors">Interface</a>
          <a href="#how" className="hover:text-foreground transition-colors">Architecture</a>
          <a href="#install" className="hover:text-foreground transition-colors">Install</a>
          <a href="#security" className="hover:text-foreground transition-colors">Security</a>
          <a href="#roadmap" className="hover:text-foreground transition-colors">Roadmap</a>
        </nav>
        <div className="flex items-center gap-2">
          <button className="hidden sm:inline-flex items-center gap-1.5 rounded-lg border border-border px-3 py-1.5 text-xs text-muted-foreground hover:text-foreground hover:border-crimson/40 transition-colors">
            <span className="font-mono">v1.2.6</span>
          </button>
          <button
            onClick={onDownload}
            className="inline-flex items-center gap-1.5 rounded-lg bg-crimson px-3.5 py-1.5 text-xs font-semibold text-primary-foreground shadow-[var(--shadow-glow-crimson)] hover:brightness-110 transition-all"
          >
            <Download className="h-3.5 w-3.5" /> Download
          </button>
        </div>
      </div>
    </header>
  );
}

function Hero({ onDownload }: { onDownload: () => void }) {
  return (
    <section className="relative overflow-hidden pt-40 pb-32">
      <div className="absolute inset-0 grid-bg [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />
      <div className="pointer-events-none absolute inset-x-0 top-20 mx-auto h-px max-w-5xl bg-gradient-to-r from-transparent via-crimson/50 to-transparent" />

      <div className="mx-auto max-w-7xl px-6">
        <div className="grid lg:grid-cols-[1.1fr_1fr] gap-16 items-center">
          <div className="space-y-8 animate-fade-up">
            <SectionLabel>Desktop intelligence · v1.2.6</SectionLabel>
            <h1 className="text-balance text-5xl md:text-7xl lg:text-[5.5rem] font-light leading-[0.95] tracking-tight">
              Meet{" "}
              <span className="font-semibold bg-gradient-to-br from-foreground via-foreground to-crimson-glow bg-clip-text text-transparent">
                F.R.I.D.A.Y
              </span>
              <span className="block text-muted-foreground text-2xl md:text-3xl mt-6 font-light tracking-normal max-w-xl">
                A real operating-system intelligence — voice, vision, and native control across your machine.
              </span>
            </h1>

            <div className="flex flex-wrap items-center gap-3 pt-4">
              <button
                onClick={onDownload}
                className="group inline-flex items-center gap-2 rounded-xl bg-crimson px-5 py-3 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-glow-crimson)] hover:brightness-110 transition-all"
              >
                <Download className="h-4 w-4" /> Download
                <span className="text-xs font-mono opacity-70 ml-1">macOS · Win · Linux</span>
              </button>
              <button className="inline-flex items-center gap-2 rounded-xl glass-panel px-5 py-3 text-sm font-medium hover:border-crimson/40 transition-colors">
                <Play className="h-4 w-4" /> Watch Demo
              </button>
              <button className="inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                <Compass className="h-4 w-4" /> Explore System <ArrowRight className="h-3.5 w-3.5" />
              </button>
            </div>

            {/* live telemetry strip */}
            <div className="grid grid-cols-3 gap-3 max-w-xl pt-6">
              {[
                { icon: Cpu, label: "Inference", value: "12.4 ms", color: "text-cyan-sys" },
                { icon: Activity, label: "Memory ctx", value: "84,201", color: "text-emerald-sys" },
                { icon: Wifi, label: "Local-first", value: "On", color: "text-crimson-glow" },
              ].map((s) => (
                <div key={s.label} className="glass-panel rounded-lg px-3 py-2.5">
                  <div className="flex items-center justify-between text-[10px] uppercase tracking-widest text-muted-foreground">
                    <span>{s.label}</span>
                    <s.icon className={`h-3 w-3 ${s.color}`} />
                  </div>
                  <div className={`font-mono text-sm mt-1 ${s.color}`}>{s.value}</div>
                </div>
              ))}
            </div>
          </div>

          {/* visual stack */}
          <div className="relative">
            <div className="absolute -inset-10 bg-gradient-radial-crimson opacity-50 blur-3xl pointer-events-none" />
            <div className="relative flex justify-center">
              <NeuralSphere />
            </div>
            <div className="mt-6 glass-panel rounded-xl p-4 animate-float">
              <div className="flex items-center gap-3">
                <div className="grid h-9 w-9 place-items-center rounded-full bg-crimson/15 border border-crimson/30">
                  <Mic className="h-4 w-4 text-crimson-glow" />
                </div>
                <div className="flex-1">
                  <div className="text-[10px] uppercase tracking-widest text-muted-foreground">Voice · listening</div>
                  <div className="text-sm font-medium">"Summarize my last meeting and draft a reply."</div>
                </div>
                <VoiceWave />
              </div>
            </div>
            <div className="mt-4">
              <TerminalPreview />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Capabilities() {
  return (
    <section id="capabilities" className="relative py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl mb-16 space-y-5">
          <SectionLabel>Capabilities</SectionLabel>
          <h2 className="text-4xl md:text-5xl font-light tracking-tight text-balance">
            Built for power users.<br />
            <span className="text-muted-foreground">Designed for developers.</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {CAPABILITIES.map((c, i) => (
            <div
              key={c.title}
              className="group relative glass-panel rounded-xl p-6 hover:border-crimson/40 transition-all duration-300 hover:-translate-y-0.5"
            >
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-crimson/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="flex items-start justify-between mb-5">
                <div className="grid h-10 w-10 place-items-center rounded-lg bg-[oklch(0.2_0.01_270)] border border-border group-hover:border-crimson/30 group-hover:bg-crimson/10 transition-colors">
                  <c.icon className="h-4.5 w-4.5 text-foreground/80 group-hover:text-crimson-glow transition-colors" />
                </div>
                <span className="font-mono text-[10px] text-muted-foreground">{String(i + 1).padStart(2, "0")}</span>
              </div>
              <h3 className="font-semibold text-base mb-1.5 tracking-tight">{c.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function InterfacePreview() {
  const logs = [
    { t: "12:04:18", lvl: "INFO", msg: "wake_word.detected confidence=0.97", c: "text-cyan-sys" },
    { t: "12:04:19", lvl: "PLAN", msg: "→ search_calendar('last meeting')", c: "text-foreground" },
    { t: "12:04:19", lvl: "EXEC", msg: "tool:calendar.read ok · 1 result", c: "text-emerald-sys" },
    { t: "12:04:20", lvl: "EXEC", msg: "tool:summarize.transcript ok · 312 tokens", c: "text-emerald-sys" },
    { t: "12:04:21", lvl: "PLAN", msg: "→ draft_email(to=team@, ref=meeting_842)", c: "text-foreground" },
    { t: "12:04:22", lvl: "WAIT", msg: "human_in_loop · review draft", c: "text-amber-sys" },
  ];
  return (
    <section id="interface" className="relative py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div className="space-y-5 max-w-2xl">
            <SectionLabel>Live Interface</SectionLabel>
            <h2 className="text-4xl md:text-5xl font-light tracking-tight text-balance">
              The operating-system dashboard, <span className="text-crimson-glow">always on.</span>
            </h2>
          </div>
          <div className="flex items-center gap-2 text-xs font-mono text-muted-foreground">
            <span className="h-2 w-2 rounded-full bg-emerald-sys animate-pulse" />
            session · friday.local · 00:14:22
          </div>
        </div>

        <div className="glass-panel rounded-2xl overflow-hidden">
          {/* top chrome */}
          <div className="flex items-center justify-between border-b border-border px-4 py-2.5 bg-[oklch(0.1_0.005_270)]">
            <div className="flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-[oklch(0.55_0.18_22)]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[oklch(0.7_0.15_60)]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[oklch(0.7_0.15_155)]" />
              <span className="ml-3 font-mono text-[11px] text-muted-foreground">~/friday/console</span>
            </div>
            <div className="hidden md:flex items-center gap-4 font-mono text-[11px] text-muted-foreground">
              <span><span className="text-cyan-sys">CPU</span> 18%</span>
              <span><span className="text-emerald-sys">MEM</span> 6.2/32G</span>
              <span><span className="text-amber-sys">GPU</span> 41°C</span>
              <span><span className="text-crimson-glow">●</span> rec</span>
            </div>
          </div>

          <div className="grid lg:grid-cols-[1fr_1.1fr_0.9fr] divide-y lg:divide-y-0 lg:divide-x divide-border">
            {/* left: voice + transcript */}
            <div className="p-5 space-y-5">
              <div>
                <div className="text-[10px] uppercase tracking-widest text-muted-foreground mb-3">Voice stream</div>
                <div className="rounded-lg border border-border bg-[oklch(0.1_0.005_270)] p-4">
                  <VoiceWave />
                  <div className="mt-3 font-mono text-xs text-muted-foreground">
                    <span className="text-crimson-glow">user</span>: "Summarize my last meeting and draft a reply."
                  </div>
                </div>
              </div>
              <div>
                <div className="text-[10px] uppercase tracking-widest text-muted-foreground mb-3">AI response</div>
                <div className="rounded-lg border border-border bg-[oklch(0.1_0.005_270)] p-4 text-sm leading-relaxed">
                  The Q3 sync covered three blockers: API rate limits, the migration ETA, and onboarding copy. I've drafted a reply addressing each
                  <span className="inline-block w-1.5 h-3.5 bg-crimson animate-blink align-middle ml-1" />
                </div>
              </div>
              <div>
                <div className="text-[10px] uppercase tracking-widest text-muted-foreground mb-3">Active devices</div>
                <div className="space-y-2">
                  {[
                    { name: "MacBook Pro M3", state: "active", c: "text-emerald-sys" },
                    { name: "Pixel 8 · ADB", state: "linked", c: "text-cyan-sys" },
                    { name: "Stream Deck", state: "idle", c: "text-muted-foreground" },
                  ].map((d) => (
                    <div key={d.name} className="flex items-center justify-between rounded-md border border-border bg-[oklch(0.12_0.005_270)] px-3 py-2 text-xs">
                      <span>{d.name}</span>
                      <span className={`font-mono ${d.c}`}>● {d.state}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* middle: logs */}
            <div className="p-5">
              <div className="flex items-center justify-between mb-3">
                <div className="text-[10px] uppercase tracking-widest text-muted-foreground flex items-center gap-2">
                  <TerminalIcon className="h-3 w-3" /> Live logs
                </div>
                <span className="font-mono text-[10px] text-muted-foreground">orchestrator.v3</span>
              </div>
              <div className="rounded-lg border border-border bg-[oklch(0.08_0.005_270)] font-mono text-[11px] overflow-hidden">
                <div className="max-h-[360px] overflow-hidden">
                  {logs.map((l, i) => (
                    <div key={i} className="grid grid-cols-[auto_auto_1fr] gap-3 px-3 py-1.5 border-b border-border/40 last:border-0">
                      <span className="text-muted-foreground">{l.t}</span>
                      <span className={`${l.c} font-semibold`}>{l.lvl}</span>
                      <span className="text-foreground/80">{l.msg}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-4 grid grid-cols-3 gap-2">
                {[
                  { l: "CPU", v: "18%", c: "text-cyan-sys", w: "18%" },
                  { l: "MEM", v: "19%", c: "text-emerald-sys", w: "19%" },
                  { l: "GPU", v: "44%", c: "text-amber-sys", w: "44%" },
                ].map((m) => (
                  <div key={m.l} className="rounded-md border border-border bg-[oklch(0.1_0.005_270)] p-2.5">
                    <div className="flex justify-between text-[10px] font-mono text-muted-foreground">
                      <span>{m.l}</span><span className={m.c}>{m.v}</span>
                    </div>
                    <div className="mt-2 h-1 rounded-full bg-[oklch(0.2_0.005_270)] overflow-hidden">
                      <div className={`h-full ${m.c}`} style={{ width: m.w, backgroundColor: "currentColor", opacity: 0.6 }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* right: automation feed */}
            <div className="p-5 space-y-4">
              <div className="text-[10px] uppercase tracking-widest text-muted-foreground">Automation feed</div>
              {[
                { t: "Opened VS Code · /repo/friday-os", time: "now", c: "border-crimson/40" },
                { t: "Resized window → left 60%", time: "2s", c: "border-border" },
                { t: "Started dev server :5173", time: "4s", c: "border-emerald-sys/40" },
                { t: "ADB · Pixel 8 mirror on", time: "12s", c: "border-cyan-sys/40" },
                { t: "Vault unlocked · biometric", time: "1m", c: "border-border" },
              ].map((a, i) => (
                <div key={i} className={`rounded-lg border ${a.c} bg-[oklch(0.1_0.005_270)] px-3 py-2.5`}>
                  <div className="flex items-center justify-between text-xs">
                    <span>{a.t}</span>
                    <span className="font-mono text-[10px] text-muted-foreground">{a.time}</span>
                  </div>
                </div>
              ))}
              <div className="rounded-lg border border-border bg-[oklch(0.1_0.005_270)] p-3">
                <div className="text-[10px] uppercase tracking-widest text-muted-foreground mb-2">Memory recall</div>
                <div className="flex flex-wrap gap-1.5">
                  {["meeting_842", "team@", "Q3-sync", "blockers", "draft_v2"].map((t) => (
                    <span key={t} className="font-mono text-[10px] rounded border border-border bg-[oklch(0.15_0.005_270)] px-1.5 py-0.5 text-muted-foreground">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function HowItWorks() {
  const steps = [
    { n: "01", title: "Voice Input", desc: "Wake word + streaming ASR with VAD and speaker ID.", icon: Mic, color: "text-crimson-glow" },
    { n: "02", title: "AI Processing", desc: "Planner decomposes intent into tool calls and constraints.", icon: Brain, color: "text-foreground" },
    { n: "03", title: "Native Actions", desc: "Capability-scoped runners execute OS-level commands.", icon: Keyboard, color: "text-cyan-sys" },
    { n: "04", title: "Local + Cloud", desc: "Adaptive routing — on-device for private, cloud for heavy.", icon: ServerCog, color: "text-emerald-sys" },
    { n: "05", title: "Automation Engine", desc: "Loops, branches, retries, and human checkpoints.", icon: Workflow, color: "text-amber-sys" },
  ];
  return (
    <section id="how" className="relative py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl mb-20 space-y-5">
          <SectionLabel>Architecture</SectionLabel>
          <h2 className="text-4xl md:text-5xl font-light tracking-tight text-balance">
            How F.R.I.D.A.Y works.
          </h2>
          <p className="text-muted-foreground text-lg">A deterministic pipeline from utterance to action — auditable at every hop.</p>
        </div>

        <div className="relative">
          {/* flow line (desktop) */}
          <svg className="hidden lg:block absolute top-10 left-0 w-full h-2 z-0" preserveAspectRatio="none" viewBox="0 0 100 2">
            <line x1="0" y1="1" x2="100" y2="1" stroke="oklch(0.6 0.24 22 / 0.4)" strokeWidth="0.2" strokeDasharray="1 1" />
          </svg>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 relative z-10">
            {steps.map((s, i) => (
              <div key={s.n} className="relative">
                <div className="glass-panel rounded-xl p-5 h-full">
                  <div className="flex items-center justify-between mb-4">
                    <div className="grid h-10 w-10 place-items-center rounded-full bg-[oklch(0.18_0.005_270)] border border-border">
                      <s.icon className={`h-4 w-4 ${s.color}`} />
                    </div>
                    <span className="font-mono text-[10px] text-muted-foreground">{s.n}</span>
                  </div>
                  <h3 className="font-semibold mb-1.5 tracking-tight">{s.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                </div>
                {i < steps.length - 1 && (
                  <ChevronRight className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-crimson/60" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Security() {
  return (
    <section id="security" className="relative py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid lg:grid-cols-[1fr_1.4fr] gap-16">
          <div className="space-y-6">
            <SectionLabel>Security & Privacy</SectionLabel>
            <h2 className="text-4xl md:text-5xl font-light tracking-tight text-balance">
              Trust is the<br />operating system.
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              F.R.I.D.A.Y runs on-device first. Every model call, every action, every byte is scoped, logged, and revocable.
            </p>
            <div className="glass-panel rounded-xl p-5 space-y-3">
              <div className="flex items-center gap-3">
                <Shield className="h-5 w-5 text-emerald-sys" />
                <span className="text-sm font-semibold">SOC 2 Type II · in progress</span>
              </div>
              <div className="text-xs font-mono text-muted-foreground space-y-1">
                <div>· AES-256-GCM at rest</div>
                <div>· TLS 1.3 + cert pinning</div>
                <div>· Hardware-backed key storage</div>
                <div>· Reproducible builds (signed)</div>
              </div>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-3">
            {SECURITY.map((s) => (
              <div key={s.title} className="glass-panel rounded-xl p-5 hover:border-emerald-sys/30 transition-colors">
                <div className="grid h-10 w-10 place-items-center rounded-lg bg-[oklch(0.18_0.04_155/0.3)] border border-emerald-sys/20 mb-4">
                  <s.icon className="h-4 w-4 text-emerald-sys" />
                </div>
                <h3 className="font-semibold mb-1.5 tracking-tight">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Roadmap() {
  const statusColor: Record<string, string> = {
    shipping: "text-emerald-sys border-emerald-sys/40",
    beta: "text-cyan-sys border-cyan-sys/40",
    design: "text-amber-sys border-amber-sys/40",
    research: "text-muted-foreground border-border",
  };
  return (
    <section id="roadmap" className="relative py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl mb-16 space-y-5">
          <SectionLabel>Roadmap</SectionLabel>
          <h2 className="text-4xl md:text-5xl font-light tracking-tight text-balance">
            What's next.
          </h2>
        </div>

        <div className="relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-crimson/30 to-transparent" />
          <div className="space-y-6">
            {ROADMAP.map((r, i) => (
              <div key={r.title} className={`relative grid md:grid-cols-2 gap-6 ${i % 2 === 0 ? "" : "md:[direction:rtl]"}`}>
                <div className={`md:[direction:ltr] glass-panel rounded-xl p-6 ml-10 md:ml-0 ${i % 2 === 0 ? "md:mr-10" : "md:ml-10"}`}>
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-mono text-xs text-muted-foreground tracking-widest">{r.q}</span>
                    <span className={`text-[10px] font-mono uppercase tracking-widest border rounded-full px-2 py-0.5 ${statusColor[r.status]}`}>
                      {r.status}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold tracking-tight mb-1.5">{r.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{r.desc}</p>
                </div>
                <span className="absolute left-4 md:left-1/2 top-6 -translate-x-1/2 h-3 w-3 rounded-full bg-crimson border-2 border-background shadow-[0_0_20px_var(--crimson-glow)]" />
                <div />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── How to Install ────────────────────────────────────────────────────────

const API_KEYS = [
  {
    id: "gemini",
    name: "Google Gemini API",
    env: "GEMINI_API_KEY",
    badge: "Required",
    badgeColor: "text-crimson-glow border-crimson/40 bg-crimson/10",
    accentColor: "text-crimson-glow",
    iconColor: "bg-crimson/10 border-crimson/30",
    borderHover: "hover:border-crimson/40",
    desc: "The primary reasoning and generative engine for F.R.I.D.A.Y.",
    steps: [
      "Navigate to Google AI Studio.",
      "Sign in with your Google Account.",
      "Click 'Get API Key' in the left sidebar.",
      "Create a key in a new or existing project.",
    ],
    link: "https://aistudio.google.com/app/apikey",
    linkLabel: "Get Gemini Key",
    icon: Brain,
  },
  {
    id: "groq",
    name: "Groq API",
    env: "GROQ_API_KEY",
    badge: "Required",
    badgeColor: "text-crimson-glow border-crimson/40 bg-crimson/10",
    accentColor: "text-amber-sys",
    iconColor: "bg-amber-sys/10 border-amber-sys/30",
    borderHover: "hover:border-amber-sys/40",
    desc: "Used for ultra-fast, low-latency agent routing and quick decisions.",
    steps: [
      "Go to the Groq Cloud Console.",
      "Log in or create an account.",
      "Navigate to the 'API Keys' section.",
      "Click 'Create API Key' and copy it immediately.",
    ],
    link: "https://console.groq.com/keys",
    linkLabel: "Get Groq Key",
    icon: Zap,
  },
  {
    id: "tavily",
    name: "Tavily Search API",
    env: "TAVILY_API_KEY",
    badge: "Optional",
    badgeColor: "text-cyan-sys border-cyan-sys/40 bg-cyan-sys/10",
    accentColor: "text-cyan-sys",
    iconColor: "bg-cyan-sys/10 border-cyan-sys/30",
    borderHover: "hover:border-cyan-sys/40",
    desc: "Powers the Deep Research agent for real-time web crawling.",
    steps: [
      "Sign up at the Tavily Developer Portal.",
      "Navigate to your dashboard.",
      "Generate a new API key (Free tier available).",
    ],
    link: "https://app.tavily.com/",
    linkLabel: "Get Tavily Key",
    icon: Compass,
  },
  {
    id: "hf",
    name: "Hugging Face Token",
    env: "HUGGINGFACE_API_KEY",
    badge: "Optional",
    badgeColor: "text-cyan-sys border-cyan-sys/40 bg-cyan-sys/10",
    accentColor: "text-emerald-sys",
    iconColor: "bg-emerald-sys/10 border-emerald-sys/30",
    borderHover: "hover:border-emerald-sys/40",
    desc: "Required only if you are downloading local inference models.",
    steps: [
      "Create a Hugging Face account.",
      "Go to Settings > Access Tokens.",
      "Create a new token with 'Read' permissions.",
    ],
    link: "https://huggingface.co/settings/tokens",
    linkLabel: "Get Hugging Face Token",
    icon: HardDrive,
  },
];

const INSTALL_STEPS = [
  {
    n: "01",
    title: "Download F.R.I.D.A.Y",
    desc: "Click the download button above to grab the latest installer for your OS. Available for Windows (.exe), macOS (.dmg), and Linux (.AppImage).",
    icon: Download,
    color: "text-crimson-glow",
    border: "border-crimson/30",
    bg: "bg-crimson/10",
  },
  {
    n: "02",
    title: "Run the Installer",
    desc: "Double-click the installer. On Windows you may see a SmartScreen prompt — click 'More info → Run anyway'. On macOS, right-click → Open.",
    icon: Package,
    color: "text-amber-sys",
    border: "border-amber-sys/30",
    bg: "bg-amber-sys/10",
  },
  {
    n: "03",
    title: "Create your .env file",
    desc: "Navigate to the F.R.I.D.A.Y data directory and create a file named .env. Paste your API keys in the format shown below. F.R.I.D.A.Y will auto-detect it on launch.",
    icon: Key,
    color: "text-cyan-sys",
    border: "border-cyan-sys/30",
    bg: "bg-cyan-sys/10",
  },
  {
    n: "04",
    title: "Launch & Verify",
    desc: "Open F.R.I.D.A.Y from your Applications folder or Start Menu. On first launch, the system will validate all keys and show a green checkmark for each one connected.",
    icon: CheckCircle2,
    color: "text-emerald-sys",
    border: "border-emerald-sys/30",
    bg: "bg-emerald-sys/10",
  },
];

function HowToInstall({ onDownload }: { onDownload: () => void }) {
  return (
    <section id="install" className="relative py-32">
      {/* ambient glow */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-crimson/30 to-transparent" />
      <div className="mx-auto max-w-7xl px-6 space-y-24">

        {/* ── header ── */}
        <div className="max-w-3xl space-y-5">
          <SectionLabel>Installation</SectionLabel>
          <h2 className="text-4xl md:text-5xl font-light tracking-tight text-balance">
            Up and running<br />
            <span className="text-muted-foreground">in four steps.</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            F.R.I.D.A.Y operates locally, but requires specific API keys to bridge the gap to large language models and search engines.
            Your keys are stored locally on your machine and <span className="text-foreground font-medium">never sent to our servers.</span>
          </p>
        </div>

        {/* ── download banner ── */}
        <div className="relative glass-panel rounded-2xl p-8 md:p-10 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-radial-crimson opacity-20" />
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-crimson/50 to-transparent" />
          <div className="relative flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-crimson/15 border border-crimson/30">
                  <Download className="h-5 w-5 text-crimson-glow" />
                </div>
                <div>
                  <div className="font-semibold text-lg tracking-tight">F.R.I.D.A.Y Desktop · v1.2.6</div>
                  <div className="text-xs text-muted-foreground font-mono">Stable release · May 2026</div>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                {[
                  { os: "Windows", ext: ".exe", icon: "⊞" },
                  { os: "macOS", ext: ".dmg", icon: "" },
                  { os: "Linux", ext: ".AppImage", icon: "🐧" },
                ].map((p) => (
                  <div key={p.os} className="flex items-center gap-1.5 rounded-md border border-border bg-[oklch(0.15_0.005_270/0.6)] px-2.5 py-1 text-xs font-mono text-muted-foreground">
                    <span>{p.icon}</span>
                    <span>{p.os}</span>
                    <span className="text-crimson-glow">{p.ext}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <button
                id="download-iris-exe"
                onClick={onDownload}
                className="group inline-flex items-center gap-2 rounded-xl bg-crimson px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-glow-crimson)] hover:brightness-110 transition-all"
              >
                <Download className="h-4 w-4" />
                Download for Windows
                <span className="text-xs font-mono opacity-70 ml-1">.exe</span>
              </button>
              <button
                id="download-iris-other"
                className="inline-flex items-center gap-2 rounded-xl glass-panel px-6 py-3.5 text-sm font-medium hover:border-crimson/40 transition-colors"
              >
                Other platforms <ArrowRight className="h-3.5 w-3.5" />
              </button>
            </div>
          </div>
        </div>

        {/* ── install steps ── */}
        <div className="space-y-8">
          <h3 className="text-xl font-semibold tracking-tight">Installation Steps</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {INSTALL_STEPS.map((s, i) => (
              <div key={s.n} className={`glass-panel rounded-xl p-6 border ${s.border} transition-all duration-300 hover:-translate-y-0.5`}>
                <div className="flex items-start justify-between mb-5">
                  <div className={`grid h-10 w-10 place-items-center rounded-lg ${s.bg} border ${s.border}`}>
                    <s.icon className={`h-4.5 w-4.5 ${s.color}`} />
                  </div>
                  <span className="font-mono text-[10px] text-muted-foreground">{s.n}</span>
                </div>
                <h4 className={`font-semibold text-base mb-2 tracking-tight ${s.color}`}>{s.title}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ── .env sample ── */}
        <div className="glass-panel rounded-xl overflow-hidden">
          <div className="flex items-center justify-between border-b border-border px-4 py-2.5 bg-[oklch(0.1_0.005_270)]">
            <div className="flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-[oklch(0.55_0.18_22)]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[oklch(0.7_0.15_60)]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[oklch(0.7_0.15_155)]" />
              <span className="ml-3 font-mono text-[11px] text-muted-foreground">~/.friday/.env</span>
            </div>
            <div className="flex items-center gap-1.5 text-[10px] font-mono text-muted-foreground">
              <AlertCircle className="h-3 w-3 text-amber-sys" />
              Never commit this file
            </div>
          </div>
          <div className="p-6 font-mono text-sm space-y-1.5">
            <div>
              <span className="text-muted-foreground"># Required</span>
            </div>
            <div>
              <span className="text-crimson-glow">GEMINI_API_KEY</span>
              <span className="text-muted-foreground">=</span>
              <span className="text-emerald-sys">"your_gemini_key_here"</span>
            </div>
            <div>
              <span className="text-amber-sys">GROQ_API_KEY</span>
              <span className="text-muted-foreground">=</span>
              <span className="text-emerald-sys">"your_groq_key_here"</span>
            </div>
            <div className="pt-2">
              <span className="text-muted-foreground"># Optional</span>
            </div>
            <div>
              <span className="text-cyan-sys">TAVILY_API_KEY</span>
              <span className="text-muted-foreground">=</span>
              <span className="text-emerald-sys">"your_tavily_key_here"</span>
            </div>
            <div>
              <span className="text-emerald-sys">HUGGINGFACE_API_KEY</span>
              <span className="text-muted-foreground">=</span>
              <span className="text-emerald-sys">"your_hf_token_here"</span>
            </div>
          </div>
        </div>

        {/* ── API keys section ── */}
        <div className="space-y-8">
          <div className="space-y-3">
            <h3 className="text-xl font-semibold tracking-tight">System Keys</h3>
            <p className="text-muted-foreground leading-relaxed max-w-2xl">
              Follow this guide to forge your keys and initialize the system.
              Your keys are stored locally on your machine and never sent to our servers.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-5">
            {API_KEYS.map((k) => (
              <div
                key={k.id}
                id={`api-key-${k.id}`}
                className={`glass-panel rounded-2xl p-6 transition-all duration-300 ${k.borderHover} hover:-translate-y-0.5`}
              >
                {/* card header */}
                <div className="flex items-start justify-between mb-5">
                  <div className="flex items-center gap-3">
                    <div className={`grid h-11 w-11 place-items-center rounded-xl ${k.iconColor} border`}>
                      <k.icon className={`h-5 w-5 ${k.accentColor}`} />
                    </div>
                    <div>
                      <div className="font-semibold tracking-tight">{k.name}</div>
                      <code className="text-[11px] font-mono text-muted-foreground">.env: {k.env}</code>
                    </div>
                  </div>
                  <span className={`text-[10px] font-mono uppercase tracking-widest border rounded-full px-2.5 py-0.5 ${k.badgeColor}`}>
                    {k.badge}
                  </span>
                </div>

                {/* description */}
                <p className="text-sm text-muted-foreground leading-relaxed mb-5">{k.desc}</p>

                {/* steps */}
                <div className="space-y-2 mb-5">
                  <div className="text-[10px] uppercase tracking-widest text-muted-foreground mb-3">How to get it:</div>
                  {k.steps.map((step, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-sm">
                      <div className={`mt-0.5 h-4 w-4 shrink-0 grid place-items-center rounded-full text-[9px] font-mono font-bold ${k.bg || "bg-[oklch(0.18_0.005_270)]"} border ${k.border || "border-border"} ${k.accentColor}`}>
                        {idx + 1}
                      </div>
                      <span className="text-muted-foreground leading-relaxed">{step}</span>
                    </div>
                  ))}
                </div>

                {/* CTA link */}
                <a
                  href={k.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  id={`get-key-${k.id}`}
                  className={`inline-flex items-center gap-2 rounded-lg border px-4 py-2 text-xs font-semibold transition-all hover:brightness-110 ${k.badgeColor}`}
                >
                  {k.linkLabel}
                  <ExternalLink className="h-3 w-3" />
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* ── verification tip ── */}
        <div className="glass-panel rounded-xl p-6 border border-emerald-sys/20 flex items-start gap-4">
          <div className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-emerald-sys/10 border border-emerald-sys/30">
            <CheckCircle2 className="h-5 w-5 text-emerald-sys" />
          </div>
          <div className="space-y-1">
            <div className="font-semibold text-sm text-emerald-sys">Verify your setup</div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              After adding your keys, launch F.R.I.D.A.Y and open the <span className="font-mono text-foreground">Settings → API Keys</span> panel.
              Each key shows a <span className="text-emerald-sys font-medium">● connected</span> indicator when validated successfully.
              Required keys must be present for F.R.I.D.A.Y to start. Optional keys unlock additional agents.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}

function FinalCTA({ onDownload }: { onDownload: () => void }) {
  return (
    <section className="relative py-32">
      <div className="mx-auto max-w-5xl px-6">
        <div className="relative glass-panel rounded-3xl p-12 md:p-20 text-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-radial-crimson opacity-40" />
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-crimson to-transparent" />
          <div className="relative space-y-8">
            <h2 className="text-4xl md:text-6xl font-light tracking-tight text-balance leading-[1.05]">
              Your operating system<br />
              <span className="font-semibold bg-gradient-to-br from-foreground to-crimson-glow bg-clip-text text-transparent">
                should understand you.
              </span>
            </h2>
            <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
              <button
                onClick={onDownload}
                className="inline-flex items-center gap-2 rounded-xl bg-crimson px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-glow-crimson)] hover:brightness-110 transition-all"
              >
                <Download className="h-4 w-4" /> Download FRIDAY
              </button>
              <button className="inline-flex items-center gap-2 rounded-xl glass-panel px-6 py-3.5 text-sm font-medium hover:border-crimson/40 transition-colors">
                Join Waitlist <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border py-10">
      <div className="mx-auto max-w-7xl px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2.5 text-sm">
          <div className="grid h-6 w-6 place-items-center rounded-md border border-crimson/40 bg-[oklch(0.18_0.02_22)]">
            <CircleDot className="h-3 w-3 text-crimson" />
          </div>
          <span className="font-semibold tracking-[0.18em] text-xs">F.R.I.D.A.Y</span>
          <span className="text-muted-foreground text-xs ml-2">© 2026 · Built for power users.</span>
        </div>
        <div className="flex items-center gap-6 text-xs text-muted-foreground">
          <Link to="/docs" className="hover:text-foreground transition-colors">Docs</Link>
          <Link to="/changelog" className="hover:text-foreground transition-colors">Changelog</Link>
          <Link to="/security" className="hover:text-foreground transition-colors">Security</Link>
          <a href="https://piyushpaul.in/" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">Portfolio</a>
        </div>
      </div>
    </footer>
  );
}

export function FridayLanding() {
  const [modalOpen, setModalOpen] = useState(false);

  const triggerDownload = () => {
    // Use GitHub Releases URL from .env — falls back to public/ folder for local dev
    const href = import.meta.env.VITE_DOWNLOAD_URL || "/FRIDAY-AI-1.2.6-Setup.exe";

    const link = document.createElement("a");
    link.href = href;
    link.download = "FRIDAY-AI-1.2.6-Setup.exe";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <AuthModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        onAuthSuccess={triggerDownload}
      />
      <Nav onDownload={() => setModalOpen(true)} />
      <main>
        <Hero onDownload={() => setModalOpen(true)} />
        <Capabilities />
        <InterfacePreview />
        <HowItWorks />
        <HowToInstall onDownload={() => setModalOpen(true)} />
        <Security />
        <Roadmap />
        <FinalCTA onDownload={() => setModalOpen(true)} />
      </main>
      <Footer />
    </div>
  );
}
