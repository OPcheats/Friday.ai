import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { e as CircleDot, D as Download, s as Settings, K as Key, T as Terminal, Z as Zap, E as ExternalLink } from "../_libs/lucide-react.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/isbot.mjs";
const SECTIONS = [{
  id: "getting-started",
  label: "Getting Started",
  icon: Download
}, {
  id: "configuration",
  label: "Configuration",
  icon: Settings
}, {
  id: "api-keys",
  label: "API Keys",
  icon: Key
}, {
  id: "cli",
  label: "CLI Reference",
  icon: Terminal
}, {
  id: "agents",
  label: "Agents",
  icon: Zap
}];
function DocsPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative min-h-screen bg-background text-foreground font-sans", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("header", { className: "fixed top-0 z-50 w-full border-b border-border bg-[oklch(0.13_0.005_270/0.85)] backdrop-blur-xl", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-6 py-3 flex items-center justify-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/", className: "flex items-center gap-2.5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative h-7 w-7", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 rounded-md bg-crimson/20 blur-md" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative grid h-7 w-7 place-items-center rounded-md border border-crimson/40 bg-[oklch(0.18_0.02_22)]", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CircleDot, { className: "h-3.5 w-3.5 text-crimson" }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold tracking-[0.18em] text-sm", children: "F.R.I.D.A.Y" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4 text-xs text-muted-foreground", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/", className: "hover:text-foreground transition-colors", children: "← Back to Home" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/changelog", className: "hover:text-foreground transition-colors", children: "Changelog" })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-6 pt-28 pb-20 grid lg:grid-cols-[240px_1fr] gap-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("aside", { className: "hidden lg:block", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("nav", { className: "sticky top-28 space-y-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] uppercase tracking-widest text-muted-foreground mb-4 px-3", children: "Documentation" }),
        SECTIONS.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: `#${s.id}`, className: "flex items-center gap-2.5 rounded-lg px-3 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-[oklch(0.18_0.005_270)] transition-colors", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(s.icon, { className: "h-3.5 w-3.5" }),
          s.label
        ] }, s.id))
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "space-y-20 min-w-0", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center gap-2 rounded-full border border-border bg-[oklch(0.15_0.005_270/0.6)] px-3 py-1 text-xs font-medium tracking-widest uppercase text-muted-foreground", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-1.5 w-1.5 rounded-full bg-crimson animate-pulse-slow" }),
            "Documentation · v1.2.6"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-4xl md:text-5xl font-light tracking-tight", children: "F.R.I.D.A.Y Docs" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-lg leading-relaxed max-w-2xl", children: "Everything you need to install, configure, and extend F.R.I.D.A.Y on your machine." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "getting-started", className: "space-y-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 pb-3 border-b border-border", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid h-8 w-8 place-items-center rounded-lg bg-crimson/10 border border-crimson/30", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Download, { className: "h-4 w-4 text-crimson-glow" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-semibold tracking-tight", children: "Getting Started" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground leading-relaxed", children: "F.R.I.D.A.Y is a local-first AI operating-system assistant. Download the installer for your platform and follow the steps below." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid sm:grid-cols-3 gap-3", children: [{
            os: "Windows",
            ext: ".exe",
            file: "/FRIDAY-AI-1.2.6-Setup.exe",
            color: "text-cyan-sys border-cyan-sys/30 bg-cyan-sys/5"
          }, {
            os: "macOS",
            ext: ".dmg",
            file: "#",
            color: "text-muted-foreground border-border bg-[oklch(0.15_0.005_270)]"
          }, {
            os: "Linux",
            ext: ".AppImage",
            file: "#",
            color: "text-muted-foreground border-border bg-[oklch(0.15_0.005_270)]"
          }].map((p) => /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: p.file, download: p.file !== "#" ? true : void 0, className: `flex items-center justify-between rounded-xl border px-4 py-3 text-sm font-medium transition-all hover:brightness-110 ${p.color}`, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: p.os }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-xs opacity-70", children: p.ext })
          ] }, p.os)) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass-panel rounded-xl p-6 space-y-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold", children: "Quick Install Steps" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("ol", { className: "space-y-3 text-sm text-muted-foreground", children: ["Download the installer for your OS above.", "Run the installer. On Windows, click 'More info → Run anyway' if SmartScreen appears.", "Create a .env file in ~/.friday/ with your API keys (see API Keys section).", "Launch F.R.I.D.A.Y from your Start Menu or Applications folder.", "On first launch, the system validates all keys and shows a status indicator per key."].map((step, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "shrink-0 mt-0.5 h-5 w-5 grid place-items-center rounded-full bg-crimson/10 border border-crimson/30 text-[10px] font-mono text-crimson-glow", children: i + 1 }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: step })
            ] }, i)) })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "configuration", className: "space-y-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 pb-3 border-b border-border", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid h-8 w-8 place-items-center rounded-lg bg-amber-sys/10 border border-amber-sys/30", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Settings, { className: "h-4 w-4 text-amber-sys" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-semibold tracking-tight", children: "Configuration" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-muted-foreground leading-relaxed", children: [
            "All configuration lives in ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("code", { className: "font-mono text-sm bg-[oklch(0.18_0.005_270)] border border-border rounded px-1.5 py-0.5", children: "~/.friday/.env" }),
            ". F.R.I.D.A.Y auto-detects this file on launch."
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass-panel rounded-xl overflow-hidden", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 border-b border-border px-4 py-2.5 bg-[oklch(0.1_0.005_270)]", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-2.5 w-2.5 rounded-full bg-[oklch(0.55_0.18_22)]" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-2.5 w-2.5 rounded-full bg-[oklch(0.7_0.15_60)]" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-2.5 w-2.5 rounded-full bg-[oklch(0.7_0.15_155)]" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ml-2 font-mono text-[11px] text-muted-foreground", children: "~/.friday/.env" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-5 font-mono text-sm space-y-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "# Required" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-crimson-glow", children: "GEMINI_API_KEY" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "=" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-emerald-sys", children: '"your_gemini_key"' })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-amber-sys", children: "GROQ_API_KEY" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "=" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-emerald-sys", children: '"your_groq_key"' })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pt-1", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "# Optional" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-cyan-sys", children: "TAVILY_API_KEY" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "=" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-emerald-sys", children: '"your_tavily_key"' })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-emerald-sys", children: "HUGGINGFACE_API_KEY" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "=" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-emerald-sys", children: '"your_hf_token"' })
              ] })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "api-keys", className: "space-y-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 pb-3 border-b border-border", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid h-8 w-8 place-items-center rounded-lg bg-cyan-sys/10 border border-cyan-sys/30", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Key, { className: "h-4 w-4 text-cyan-sys" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-semibold tracking-tight", children: "API Keys" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-4", children: [{
            name: "Google Gemini",
            env: "GEMINI_API_KEY",
            required: true,
            link: "https://aistudio.google.com/app/apikey",
            desc: "Primary reasoning and generation engine. Powers all core AI tasks.",
            color: "text-crimson-glow"
          }, {
            name: "Groq",
            env: "GROQ_API_KEY",
            required: true,
            link: "https://console.groq.com/keys",
            desc: "Ultra-fast inference for agent routing and low-latency decisions.",
            color: "text-amber-sys"
          }, {
            name: "Tavily Search",
            env: "TAVILY_API_KEY",
            required: false,
            link: "https://app.tavily.com/",
            desc: "Powers Deep Research agent with real-time web crawling.",
            color: "text-cyan-sys"
          }, {
            name: "Hugging Face",
            env: "HUGGINGFACE_API_KEY",
            required: false,
            link: "https://huggingface.co/settings/tokens",
            desc: "Required only for downloading local inference models.",
            color: "text-emerald-sys"
          }].map((k) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass-panel rounded-xl p-5 flex items-start justify-between gap-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5 flex-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold text-sm", children: k.name }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `text-[10px] font-mono uppercase tracking-widest border rounded-full px-2 py-0.5 ${k.required ? "text-crimson-glow border-crimson/40 bg-crimson/10" : "text-cyan-sys border-cyan-sys/40 bg-cyan-sys/10"}`, children: k.required ? "Required" : "Optional" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("code", { className: `text-xs font-mono ${k.color}`, children: k.env }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground leading-relaxed", children: k.desc })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: k.link, target: "_blank", rel: "noopener noreferrer", className: "shrink-0 inline-flex items-center gap-1.5 rounded-lg border border-border px-3 py-1.5 text-xs text-muted-foreground hover:text-foreground hover:border-crimson/40 transition-colors", children: [
              "Get Key ",
              /* @__PURE__ */ jsxRuntimeExports.jsx(ExternalLink, { className: "h-3 w-3" })
            ] })
          ] }, k.name)) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "cli", className: "space-y-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 pb-3 border-b border-border", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid h-8 w-8 place-items-center rounded-lg bg-emerald-sys/10 border border-emerald-sys/30", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Terminal, { className: "h-4 w-4 text-emerald-sys" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-semibold tracking-tight", children: "CLI Reference" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: [{
            cmd: "friday start",
            desc: "Start the F.R.I.D.A.Y daemon and open the main UI."
          }, {
            cmd: "friday stop",
            desc: "Gracefully stop the daemon."
          }, {
            cmd: "friday status",
            desc: "Show running agents, memory usage, and key status."
          }, {
            cmd: "friday keys check",
            desc: "Validate all configured API keys."
          }, {
            cmd: "friday logs --tail 50",
            desc: "Stream the last 50 log lines from the orchestrator."
          }].map((c) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass-panel rounded-lg px-4 py-3 flex items-center gap-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("code", { className: "font-mono text-sm text-emerald-sys shrink-0", children: c.cmd }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground", children: c.desc })
          ] }, c.cmd)) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "agents", className: "space-y-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 pb-3 border-b border-border", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid h-8 w-8 place-items-center rounded-lg bg-crimson/10 border border-crimson/30", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Zap, { className: "h-4 w-4 text-crimson-glow" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-semibold tracking-tight", children: "Agents" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid sm:grid-cols-2 gap-3", children: [{
            name: "Planner",
            desc: "Decomposes voice/text intent into tool calls and step sequences.",
            status: "Stable"
          }, {
            name: "Executor",
            desc: "Runs OS-level commands, app launches, keyboard/mouse control.",
            status: "Stable"
          }, {
            name: "Deep Research",
            desc: "Real-time web crawling via Tavily. Requires TAVILY_API_KEY.",
            status: "Beta"
          }, {
            name: "Code Intelligence",
            desc: "RAG over your local repos. Explain, refactor, generate.",
            status: "Stable"
          }, {
            name: "Vision",
            desc: "Continuous screen understanding — reads UIs and extracts data.",
            status: "Beta"
          }, {
            name: "Memory",
            desc: "Episodic + semantic memory with vector recall across sessions.",
            status: "Stable"
          }].map((a) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass-panel rounded-xl p-5 space-y-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold text-sm", children: a.name }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `text-[10px] font-mono uppercase tracking-widest border rounded-full px-2 py-0.5 ${a.status === "Stable" ? "text-emerald-sys border-emerald-sys/40 bg-emerald-sys/10" : "text-amber-sys border-amber-sys/40 bg-amber-sys/10"}`, children: a.status })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground leading-relaxed", children: a.desc })
          ] }, a.name)) })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("footer", { className: "border-t border-border py-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-6 flex flex-col md:flex-row items-center justify-between gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-xs text-muted-foreground", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CircleDot, { className: "h-3.5 w-3.5 text-crimson" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold tracking-[0.18em]", children: "F.R.I.D.A.Y" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ml-2", children: "© 2026 · Built for power users." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-6 text-xs text-muted-foreground", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/docs", className: "hover:text-foreground transition-colors", children: "Docs" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/changelog", className: "hover:text-foreground transition-colors", children: "Changelog" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/security", className: "hover:text-foreground transition-colors", children: "Security" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/", className: "hover:text-foreground transition-colors", children: "Home" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "https://piyushpaul.in/", target: "_blank", rel: "noopener noreferrer", className: "hover:text-foreground transition-colors", children: "Portfolio" })
      ] })
    ] }) })
  ] });
}
export {
  DocsPage as component
};
