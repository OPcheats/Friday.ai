import { createFileRoute, Link } from "@tanstack/react-router";
import { CircleDot, BookOpen, Terminal, Key, Download, Settings, Zap, ChevronRight, ExternalLink } from "lucide-react";
import { RELEASE } from "@/config/release";

export const Route = createFileRoute("/docs")({
  head: () => ({
    meta: [
      { title: "F.R.I.D.A.Y Docs — Documentation & Setup Guide" },
      { name: "description", content: "Complete documentation for F.R.I.D.A.Y — installation, API key setup, configuration, and usage." },
    ],
  }),
  component: DocsPage,
});

const SECTIONS = [
  { id: "getting-started", label: "Getting Started", icon: Download },
  { id: "configuration", label: "Configuration", icon: Settings },
  { id: "api-keys", label: "API Keys", icon: Key },
  { id: "cli", label: "CLI Reference", icon: Terminal },
  { id: "agents", label: "Agents", icon: Zap },
];

function DocsPage() {
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
            <Link to="/" className="hover:text-foreground transition-colors">← Back to Home</Link>
            <Link to="/changelog" className="hover:text-foreground transition-colors">Changelog</Link>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-7xl px-6 pt-28 pb-20 grid lg:grid-cols-[240px_1fr] gap-12">
        {/* sidebar */}
        <aside className="hidden lg:block">
          <nav className="sticky top-28 space-y-1">
            <div className="text-[10px] uppercase tracking-widest text-muted-foreground mb-4 px-3">Documentation</div>
            {SECTIONS.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className="flex items-center gap-2.5 rounded-lg px-3 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-[oklch(0.18_0.005_270)] transition-colors"
              >
                <s.icon className="h-3.5 w-3.5" />
                {s.label}
              </a>
            ))}
          </nav>
        </aside>

        {/* content */}
        <main className="space-y-20 min-w-0">
          {/* header */}
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-[oklch(0.15_0.005_270/0.6)] px-3 py-1 text-xs font-medium tracking-widest uppercase text-muted-foreground">
              <span className="h-1.5 w-1.5 rounded-full bg-crimson animate-pulse-slow" />
              Documentation · v1.2.6
            </div>
            <h1 className="text-4xl md:text-5xl font-light tracking-tight">F.R.I.D.A.Y Docs</h1>
            <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl">
              Everything you need to install, configure, and extend F.R.I.D.A.Y on your machine.
            </p>
          </div>

          {/* getting started */}
          <section id="getting-started" className="space-y-6">
            <div className="flex items-center gap-3 pb-3 border-b border-border">
              <div className="grid h-8 w-8 place-items-center rounded-lg bg-crimson/10 border border-crimson/30">
                <Download className="h-4 w-4 text-crimson-glow" />
              </div>
              <h2 className="text-2xl font-semibold tracking-tight">Getting Started</h2>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              F.R.I.D.A.Y is a local-first AI operating-system assistant. Download the installer for your platform and follow the steps below.
            </p>
            <div className="grid sm:grid-cols-3 gap-3">
              {[
                { os: "Windows", ext: ".exe", file: RELEASE.downloadUrl, color: "text-cyan-sys border-cyan-sys/30 bg-cyan-sys/5" },
                { os: "macOS", ext: ".dmg", file: "#", color: "text-muted-foreground border-border bg-[oklch(0.15_0.005_270)]" },
                { os: "Linux", ext: ".AppImage", file: "#", color: "text-muted-foreground border-border bg-[oklch(0.15_0.005_270)]" },
              ].map((p) => (
                <a
                  key={p.os}
                  href={p.file}
                  download={p.file !== "#" ? true : undefined}
                  className={`flex items-center justify-between rounded-xl border px-4 py-3 text-sm font-medium transition-all hover:brightness-110 ${p.color}`}
                >
                  <span>{p.os}</span>
                  <span className="font-mono text-xs opacity-70">{p.ext}</span>
                </a>
              ))}
            </div>

            <div className="glass-panel rounded-xl p-6 space-y-3">
              <h3 className="font-semibold">Quick Install Steps</h3>
              <ol className="space-y-3 text-sm text-muted-foreground">
                {[
                  "Download the installer for your OS above.",
                  "Run the installer. On Windows, click 'More info → Run anyway' if SmartScreen appears.",
                  "Create a .env file in ~/.friday/ with your API keys (see API Keys section).",
                  "Launch F.R.I.D.A.Y from your Start Menu or Applications folder.",
                  "On first launch, the system validates all keys and shows a status indicator per key.",
                ].map((step, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="shrink-0 mt-0.5 h-5 w-5 grid place-items-center rounded-full bg-crimson/10 border border-crimson/30 text-[10px] font-mono text-crimson-glow">{i + 1}</span>
                    <span>{step}</span>
                  </li>
                ))}
              </ol>
            </div>
          </section>

          {/* configuration */}
          <section id="configuration" className="space-y-6">
            <div className="flex items-center gap-3 pb-3 border-b border-border">
              <div className="grid h-8 w-8 place-items-center rounded-lg bg-amber-sys/10 border border-amber-sys/30">
                <Settings className="h-4 w-4 text-amber-sys" />
              </div>
              <h2 className="text-2xl font-semibold tracking-tight">Configuration</h2>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              All configuration lives in <code className="font-mono text-sm bg-[oklch(0.18_0.005_270)] border border-border rounded px-1.5 py-0.5">~/.friday/.env</code>. F.R.I.D.A.Y auto-detects this file on launch.
            </p>
            <div className="glass-panel rounded-xl overflow-hidden">
              <div className="flex items-center gap-2 border-b border-border px-4 py-2.5 bg-[oklch(0.1_0.005_270)]">
                <span className="h-2.5 w-2.5 rounded-full bg-[oklch(0.55_0.18_22)]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[oklch(0.7_0.15_60)]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[oklch(0.7_0.15_155)]" />
                <span className="ml-2 font-mono text-[11px] text-muted-foreground">~/.friday/.env</span>
              </div>
              <div className="p-5 font-mono text-sm space-y-1">
                <div><span className="text-muted-foreground"># Required</span></div>
                <div><span className="text-crimson-glow">GEMINI_API_KEY</span><span className="text-muted-foreground">=</span><span className="text-emerald-sys">"your_gemini_key"</span></div>
                <div><span className="text-amber-sys">GROQ_API_KEY</span><span className="text-muted-foreground">=</span><span className="text-emerald-sys">"your_groq_key"</span></div>
                <div className="pt-1"><span className="text-muted-foreground"># Optional</span></div>
                <div><span className="text-cyan-sys">TAVILY_API_KEY</span><span className="text-muted-foreground">=</span><span className="text-emerald-sys">"your_tavily_key"</span></div>
                <div><span className="text-emerald-sys">HUGGINGFACE_API_KEY</span><span className="text-muted-foreground">=</span><span className="text-emerald-sys">"your_hf_token"</span></div>
              </div>
            </div>
          </section>

          {/* api keys */}
          <section id="api-keys" className="space-y-6">
            <div className="flex items-center gap-3 pb-3 border-b border-border">
              <div className="grid h-8 w-8 place-items-center rounded-lg bg-cyan-sys/10 border border-cyan-sys/30">
                <Key className="h-4 w-4 text-cyan-sys" />
              </div>
              <h2 className="text-2xl font-semibold tracking-tight">API Keys</h2>
            </div>
            <div className="space-y-4">
              {[
                { name: "Google Gemini", env: "GEMINI_API_KEY", required: true, link: "https://aistudio.google.com/app/apikey", desc: "Primary reasoning and generation engine. Powers all core AI tasks.", color: "text-crimson-glow" },
                { name: "Groq", env: "GROQ_API_KEY", required: true, link: "https://console.groq.com/keys", desc: "Ultra-fast inference for agent routing and low-latency decisions.", color: "text-amber-sys" },
                { name: "Tavily Search", env: "TAVILY_API_KEY", required: false, link: "https://app.tavily.com/", desc: "Powers Deep Research agent with real-time web crawling.", color: "text-cyan-sys" },
                { name: "Hugging Face", env: "HUGGINGFACE_API_KEY", required: false, link: "https://huggingface.co/settings/tokens", desc: "Required only for downloading local inference models.", color: "text-emerald-sys" },
              ].map((k) => (
                <div key={k.name} className="glass-panel rounded-xl p-5 flex items-start justify-between gap-4">
                  <div className="space-y-1.5 flex-1">
                    <div className="flex items-center gap-2">
                      <span className="font-semibold text-sm">{k.name}</span>
                      <span className={`text-[10px] font-mono uppercase tracking-widest border rounded-full px-2 py-0.5 ${k.required ? "text-crimson-glow border-crimson/40 bg-crimson/10" : "text-cyan-sys border-cyan-sys/40 bg-cyan-sys/10"}`}>
                        {k.required ? "Required" : "Optional"}
                      </span>
                    </div>
                    <code className={`text-xs font-mono ${k.color}`}>{k.env}</code>
                    <p className="text-xs text-muted-foreground leading-relaxed">{k.desc}</p>
                  </div>
                  <a href={k.link} target="_blank" rel="noopener noreferrer" className="shrink-0 inline-flex items-center gap-1.5 rounded-lg border border-border px-3 py-1.5 text-xs text-muted-foreground hover:text-foreground hover:border-crimson/40 transition-colors">
                    Get Key <ExternalLink className="h-3 w-3" />
                  </a>
                </div>
              ))}
            </div>
          </section>

          {/* cli */}
          <section id="cli" className="space-y-6">
            <div className="flex items-center gap-3 pb-3 border-b border-border">
              <div className="grid h-8 w-8 place-items-center rounded-lg bg-emerald-sys/10 border border-emerald-sys/30">
                <Terminal className="h-4 w-4 text-emerald-sys" />
              </div>
              <h2 className="text-2xl font-semibold tracking-tight">CLI Reference</h2>
            </div>
            <div className="space-y-3">
              {[
                { cmd: "friday start", desc: "Start the F.R.I.D.A.Y daemon and open the main UI." },
                { cmd: "friday stop", desc: "Gracefully stop the daemon." },
                { cmd: "friday status", desc: "Show running agents, memory usage, and key status." },
                { cmd: "friday keys check", desc: "Validate all configured API keys." },
                { cmd: "friday logs --tail 50", desc: "Stream the last 50 log lines from the orchestrator." },
              ].map((c) => (
                <div key={c.cmd} className="glass-panel rounded-lg px-4 py-3 flex items-center gap-4">
                  <code className="font-mono text-sm text-emerald-sys shrink-0">{c.cmd}</code>
                  <span className="text-xs text-muted-foreground">{c.desc}</span>
                </div>
              ))}
            </div>
          </section>

          {/* agents */}
          <section id="agents" className="space-y-6">
            <div className="flex items-center gap-3 pb-3 border-b border-border">
              <div className="grid h-8 w-8 place-items-center rounded-lg bg-crimson/10 border border-crimson/30">
                <Zap className="h-4 w-4 text-crimson-glow" />
              </div>
              <h2 className="text-2xl font-semibold tracking-tight">Agents</h2>
            </div>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                { name: "Planner", desc: "Decomposes voice/text intent into tool calls and step sequences.", status: "Stable" },
                { name: "Executor", desc: "Runs OS-level commands, app launches, keyboard/mouse control.", status: "Stable" },
                { name: "Deep Research", desc: "Real-time web crawling via Tavily. Requires TAVILY_API_KEY.", status: "Beta" },
                { name: "Code Intelligence", desc: "RAG over your local repos. Explain, refactor, generate.", status: "Stable" },
                { name: "Vision", desc: "Continuous screen understanding — reads UIs and extracts data.", status: "Beta" },
                { name: "Memory", desc: "Episodic + semantic memory with vector recall across sessions.", status: "Stable" },
              ].map((a) => (
                <div key={a.name} className="glass-panel rounded-xl p-5 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-sm">{a.name}</span>
                    <span className={`text-[10px] font-mono uppercase tracking-widest border rounded-full px-2 py-0.5 ${a.status === "Stable" ? "text-emerald-sys border-emerald-sys/40 bg-emerald-sys/10" : "text-amber-sys border-amber-sys/40 bg-amber-sys/10"}`}>
                      {a.status}
                    </span>
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed">{a.desc}</p>
                </div>
              ))}
            </div>
          </section>
        </main>
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
