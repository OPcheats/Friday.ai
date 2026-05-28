import { createFileRoute, Link } from "@tanstack/react-router";
import { CircleDot, Zap, Package, Wrench, AlertCircle, CheckCircle2, ArrowUpRight } from "lucide-react";

export const Route = createFileRoute("/changelog")({
  head: () => ({
    meta: [
      { title: "F.R.I.D.A.Y Changelog — Version History" },
      { name: "description", content: "Release notes and version history for F.R.I.D.A.Y desktop intelligence." },
    ],
  }),
  component: ChangelogPage,
});

const RELEASES = [
  {
    version: "1.2.6",
    date: "May 28, 2026",
    tag: "stable",
    tagColor: "text-emerald-sys border-emerald-sys/40 bg-emerald-sys/10",
    summary: "Stability improvements, faster agent routing, and new Deep Research agent.",
    changes: [
      { type: "new", text: "Deep Research agent powered by Tavily — real-time web crawling with source citations." },
      { type: "new", text: "Floating HUD widget for live transcript and active automation status." },
      { type: "improved", text: "Groq agent routing is now 40% faster for sub-100ms decisions." },
      { type: "improved", text: "Memory recall accuracy improved with better vector embedding chunking." },
      { type: "fixed", text: "Fixed wake word false positives in noisy environments." },
      { type: "fixed", text: "ADB bridge no longer disconnects after device sleep." },
      { type: "fixed", text: "Windows SmartScreen bypass now documented and handled gracefully in installer." },
    ],
  },
  {
    version: "1.2.0",
    date: "April 10, 2026",
    tag: "stable",
    tagColor: "text-emerald-sys border-emerald-sys/40 bg-emerald-sys/10",
    summary: "Major update: multimodal vision, biometric auth, and plugin system foundation.",
    changes: [
      { type: "new", text: "Multimodal Vision agent — continuous screen understanding, UI element detection and interaction." },
      { type: "new", text: "Biometric authentication via Windows Hello and Touch ID for vault access." },
      { type: "new", text: "Plugin foundation — internal plugin API available for early adopters." },
      { type: "improved", text: "AES-256-GCM vault now supports per-app credential isolation." },
      { type: "improved", text: "Workflow orchestrator supports human-in-the-loop checkpoints with timeout fallback." },
      { type: "fixed", text: "Memory graph leak on long-running sessions (8h+) resolved." },
    ],
  },
  {
    version: "1.1.4",
    date: "February 22, 2026",
    tag: "stable",
    tagColor: "text-emerald-sys border-emerald-sys/40 bg-emerald-sys/10",
    summary: "Performance patch and Android ADB bridge stability.",
    changes: [
      { type: "improved", text: "Android ADB bridge now supports wireless pairing over mDNS." },
      { type: "improved", text: "Startup time reduced from ~3.2s to ~1.4s on cold launch." },
      { type: "fixed", text: "Keyboard playback timing drift fixed for long macro recordings." },
      { type: "fixed", text: "Gemini API token counter was double-counting multi-part requests." },
    ],
  },
  {
    version: "1.1.0",
    date: "January 5, 2026",
    tag: "stable",
    tagColor: "text-emerald-sys border-emerald-sys/40 bg-emerald-sys/10",
    summary: "Codebase Intelligence, system monitoring, and workflow branching.",
    changes: [
      { type: "new", text: "Codebase Intelligence agent — RAG over local repos with refactor and explain modes." },
      { type: "new", text: "System monitoring widget: live CPU, GPU, memory, and thermal telemetry." },
      { type: "new", text: "Workflow branching — conditional paths and retry loops in automation sequences." },
      { type: "improved", text: "Voice stream latency reduced to sub-200ms on Apple Silicon." },
      { type: "fixed", text: "Clipboard history search no longer crashes on binary clipboard content." },
    ],
  },
  {
    version: "1.0.0",
    date: "November 20, 2025",
    tag: "initial release",
    tagColor: "text-cyan-sys border-cyan-sys/40 bg-cyan-sys/10",
    summary: "Initial public release of F.R.I.D.A.Y desktop intelligence.",
    changes: [
      { type: "new", text: "Voice-controlled OS automation with wake word detection." },
      { type: "new", text: "Native keyboard and mouse control with macro recording." },
      { type: "new", text: "Persistent AI memory — episodic and semantic recall across sessions." },
      { type: "new", text: "Local-first architecture with AES-256 encrypted credential vault." },
      { type: "new", text: "Bring Your Own Keys — Gemini and Groq API support." },
      { type: "new", text: "Available for Windows, macOS, and Linux." },
    ],
  },
];

const typeConfig: Record<string, { label: string; color: string; icon: typeof CheckCircle2 }> = {
  new: { label: "New", color: "text-emerald-sys bg-emerald-sys/10 border-emerald-sys/30", icon: Zap },
  improved: { label: "Improved", color: "text-cyan-sys bg-cyan-sys/10 border-cyan-sys/30", icon: ArrowUpRight },
  fixed: { label: "Fixed", color: "text-amber-sys bg-amber-sys/10 border-amber-sys/30", icon: Wrench },
};

function ChangelogPage() {
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
            <Link to="/" className="hover:text-foreground transition-colors">← Back to Home</Link>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-3xl px-6 pt-28 pb-24">
        {/* header */}
        <div className="mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-[oklch(0.15_0.005_270/0.6)] px-3 py-1 text-xs font-medium tracking-widest uppercase text-muted-foreground">
            <span className="h-1.5 w-1.5 rounded-full bg-crimson animate-pulse-slow" />
            Release Notes
          </div>
          <h1 className="text-4xl md:text-5xl font-light tracking-tight">Changelog</h1>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Every release, every fix, every feature — documented.
          </p>
        </div>

        {/* releases */}
        <div className="relative">
          {/* timeline line */}
          <div className="absolute left-[11px] top-2 bottom-0 w-px bg-gradient-to-b from-crimson/40 via-border to-transparent" />

          <div className="space-y-14">
            {RELEASES.map((r, idx) => (
              <div key={r.version} className="relative pl-8">
                {/* dot */}
                <span className={`absolute left-0 top-1.5 h-[22px] w-[22px] rounded-full border-2 border-background flex items-center justify-center ${idx === 0 ? "bg-crimson shadow-[0_0_16px_var(--crimson-glow)]" : "bg-[oklch(0.25_0.008_270)]"}`}>
                  <span className={`h-2 w-2 rounded-full ${idx === 0 ? "bg-white" : "bg-[oklch(0.5_0.005_270)]"}`} />
                </span>

                {/* card */}
                <div className={`glass-panel rounded-2xl p-6 space-y-5 ${idx === 0 ? "border-crimson/20" : ""}`}>
                  {/* title row */}
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-lg font-semibold tracking-tight">v{r.version}</span>
                      <span className={`text-[10px] font-mono uppercase tracking-widest border rounded-full px-2.5 py-0.5 ${r.tagColor}`}>
                        {r.tag}
                      </span>
                      {idx === 0 && (
                        <span className="text-[10px] font-mono uppercase tracking-widest border border-crimson/40 bg-crimson/10 text-crimson-glow rounded-full px-2.5 py-0.5">
                          Latest
                        </span>
                      )}
                    </div>
                    <span className="text-xs font-mono text-muted-foreground">{r.date}</span>
                  </div>

                  <p className="text-sm text-muted-foreground leading-relaxed">{r.summary}</p>

                  {/* change list */}
                  <div className="space-y-2.5">
                    {r.changes.map((c, i) => {
                      const cfg = typeConfig[c.type];
                      const Icon = cfg.icon;
                      return (
                        <div key={i} className="flex items-start gap-3 text-sm">
                          <span className={`shrink-0 mt-0.5 inline-flex items-center gap-1 rounded border px-1.5 py-0.5 text-[10px] font-mono uppercase tracking-wider ${cfg.color}`}>
                            <Icon className="h-2.5 w-2.5" />
                            {cfg.label}
                          </span>
                          <span className="text-muted-foreground leading-relaxed">{c.text}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

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
            <Link to="/" className="hover:text-foreground transition-colors">Home</Link>
            <a href="https://piyushpaul.in/" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">Portfolio</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
