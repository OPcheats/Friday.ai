import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { c as createClient } from "../_libs/supabase__supabase-js.mjs";
import { X, e as CircleDot, D as Download, M as Mail, U as User, o as Lock, j as EyeOff, i as Eye, d as CircleCheck, n as LoaderCircle, q as Play, g as Compass, a as ArrowRight, h as Cpu, A as Activity, W as Wifi, p as Mic, Z as Zap, B as Brain, f as CodeXml, m as Keyboard, u as Smartphone, x as Workflow, v as Sparkles, r as Plug, L as LayoutGrid, T as Terminal, S as ServerCog, C as ChevronRight, P as Package, K as Key, c as CircleAlert, H as HardDrive, E as ExternalLink, t as Shield, l as KeyRound, k as FingerprintPattern } from "../_libs/lucide-react.mjs";
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
import "../_libs/supabase__postgrest-js.mjs";
import "../_libs/supabase__realtime-js.mjs";
import "../_libs/supabase__phoenix.mjs";
import "../_libs/supabase__storage-js.mjs";
import "../_libs/iceberg-js.mjs";
import "../_libs/supabase__auth-js.mjs";
import "tslib";
import "../_libs/supabase__functions-js.mjs";
function NeuralSphere() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative h-[340px] w-[340px] md:h-[420px] md:w-[420px]", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "absolute inset-0 rounded-full blur-3xl opacity-70",
        style: { background: "var(--gradient-radial-crimson)" }
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-[22%] rounded-full bg-[oklch(0.18_0.02_22)] border border-[oklch(0.6_0.24_22/0.4)] shadow-[inset_0_0_60px_oklch(0.6_0.24_22/0.35)] flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-3 w-3 rounded-full bg-crimson animate-pulse-slow shadow-[0_0_30px_var(--crimson-glow)]" }) }),
    [0, 1, 2].map((i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "absolute inset-0 rounded-full border border-[oklch(1_0_0/0.06)]",
        style: {
          animation: `orbit ${18 + i * 6}s linear infinite`,
          transform: `rotate(${i * 30}deg)`
        },
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "absolute h-1.5 w-1.5 rounded-full bg-crimson-glow shadow-[0_0_12px_var(--crimson-glow)]",
            style: { top: "-3px", left: "50%" }
          }
        )
      },
      i
    )),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { viewBox: "0 0 200 200", className: "absolute inset-0 h-full w-full", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("defs", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("linearGradient", { id: "ring", x1: "0", y1: "0", x2: "1", y2: "1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "0", stopColor: "oklch(0.6 0.24 22)", stopOpacity: "0.7" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "1", stopColor: "oklch(0.6 0.24 22)", stopOpacity: "0" })
      ] }) }),
      [88, 76, 64].map((r, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        "circle",
        {
          cx: "100",
          cy: "100",
          r,
          fill: "none",
          stroke: "url(#ring)",
          strokeWidth: "0.5",
          strokeDasharray: `${4 + i * 2} ${20 + i * 4}`,
          style: { animation: `orbit ${30 - i * 5}s linear infinite`, transformOrigin: "100px 100px" }
        },
        r
      ))
    ] })
  ] });
}
function VoiceWave() {
  const bars = Array.from({ length: 28 });
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-12 items-center gap-[3px]", children: bars.map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
    "span",
    {
      className: "w-[3px] rounded-full bg-crimson",
      style: {
        height: `${20 + i * 13 % 80}%`,
        animation: `wave ${0.6 + i % 5 * 0.15}s ease-in-out infinite`,
        animationDelay: `${i * 0.04}s`,
        opacity: 0.4 + i % 6 * 0.1
      }
    },
    i
  )) });
}
const TERMINAL_LINES = [
  { p: "friday@os", c: "~", t: "listen --wake-word", color: "text-cyan-sys" },
  { p: "→", c: "", t: "wake word active · listening", color: "text-muted-foreground" },
  { p: "voice", c: "in", t: '"open vscode and run dev server"', color: "text-foreground" },
  { p: "intent", c: "parse", t: "launch_app + shell_exec", color: "text-emerald-sys" },
  { p: "action", c: "exec", t: "→ vscode launched · pid 28412", color: "text-emerald-sys" },
  { p: "action", c: "exec", t: "→ bun run dev · :5173 ready", color: "text-emerald-sys" },
  { p: "friday", c: "say", t: "Dev server is live on port 5173.", color: "text-crimson-glow" }
];
function TerminalPreview() {
  const [count, setCount] = reactExports.useState(1);
  reactExports.useEffect(() => {
    const id = setInterval(() => setCount((c) => c >= TERMINAL_LINES.length ? 1 : c + 1), 900);
    return () => clearInterval(id);
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass-panel rounded-xl overflow-hidden font-mono text-[11px] md:text-xs", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 border-b border-border px-3 py-2 bg-[oklch(0.1_0.005_270)]", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-2.5 w-2.5 rounded-full bg-[oklch(0.55_0.18_22)]" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-2.5 w-2.5 rounded-full bg-[oklch(0.7_0.15_60)]" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-2.5 w-2.5 rounded-full bg-[oklch(0.7_0.15_155)]" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ml-2 text-muted-foreground tracking-wide", children: "friday — zsh" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ml-auto text-muted-foreground", children: "12:04:22" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 space-y-1.5 min-h-[210px]", children: [
      TERMINAL_LINES.slice(0, count).map((l, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-crimson", children: l.p }),
        l.c && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: l.c }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: l.color, children: l.t })
      ] }, i)),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-block w-2 h-3.5 bg-crimson animate-blink align-middle" })
    ] })
  ] });
}
const SUPABASE_URL = "https://betklclfyukkwshxzvru.supabase.co";
const SUPABASE_ANON_KEY = "sb_publishable_VtEVab_BuS1zxtm0IyOeZA_sjfiX1Rt";
const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
function AuthModal({ isOpen, onClose, onAuthSuccess, fileName = "FRIDAY-AI-1.2.6-Setup.exe" }) {
  const [mode, setMode] = reactExports.useState("signup");
  const [email, setEmail] = reactExports.useState("");
  const [username, setUsername] = reactExports.useState("");
  const [password, setPassword] = reactExports.useState("");
  const [showPassword, setShowPassword] = reactExports.useState(false);
  const [loading, setLoading] = reactExports.useState(false);
  const [error, setError] = reactExports.useState("");
  const [success, setSuccess] = reactExports.useState("");
  if (!isOpen) return null;
  const reset = () => {
    setError("");
    setSuccess("");
  };
  const handleSignUp = async () => {
    if (!email || !username || !password) {
      setError("Please fill in all fields.");
      return;
    }
    if (username.length < 3) {
      setError("Username must be at least 3 characters.");
      return;
    }
    if (password.length < 6) {
      setError("Password must be at least 6 characters.");
      return;
    }
    setLoading(true);
    setError("");
    try {
      const { data, error: signUpError } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: { username }
        }
      });
      if (signUpError) throw signUpError;
      if (data.user) {
        await supabase.from("profiles").upsert({
          id: data.user.id,
          email: data.user.email,
          username,
          downloaded_at: (/* @__PURE__ */ new Date()).toISOString()
        });
      }
      setSuccess("Account created! Check your email to confirm, then your download will start.");
      setTimeout(() => {
        onAuthSuccess();
        onClose();
      }, 2e3);
    } catch (err) {
      setError(err.message || "Sign up failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };
  const handleLogin = async () => {
    if (!email || !password) {
      setError("Please enter your email and password.");
      return;
    }
    setLoading(true);
    setError("");
    try {
      const { data, error: loginError } = await supabase.auth.signInWithPassword({ email, password });
      if (loginError) throw loginError;
      if (data.user) {
        await supabase.from("profiles").upsert({
          id: data.user.id,
          email: data.user.email,
          username: data.user.user_metadata?.username ?? email.split("@")[0],
          downloaded_at: (/* @__PURE__ */ new Date()).toISOString()
        });
      }
      setSuccess("Logged in! Your download is starting…");
      setTimeout(() => {
        onAuthSuccess();
        onClose();
      }, 1200);
    } catch (err) {
      setError(err.message || "Login failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    mode === "signup" ? handleSignUp() : handleLogin();
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "fixed inset-0 z-[100] bg-black/70 backdrop-blur-sm animate-fade-up",
        onClick: onClose
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fixed inset-0 z-[101] flex items-center justify-center p-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full max-w-md glass-panel rounded-2xl overflow-hidden shadow-[0_32px_64px_oklch(0_0_0/0.6)] animate-fade-up", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-px w-full bg-gradient-to-r from-transparent via-crimson to-transparent" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative px-7 pt-7 pb-5 border-b border-border", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            onClick: onClose,
            className: "absolute right-5 top-5 grid h-7 w-7 place-items-center rounded-lg border border-border text-muted-foreground hover:text-foreground hover:border-crimson/40 transition-colors",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-3.5 w-3.5" })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative h-9 w-9", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 rounded-lg bg-crimson/20 blur-md" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative grid h-9 w-9 place-items-center rounded-lg border border-crimson/40 bg-[oklch(0.18_0.02_22)]", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CircleDot, { className: "h-4 w-4 text-crimson" }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-semibold tracking-[0.12em] text-sm", children: "F.R.I.D.A.Y" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] font-mono text-muted-foreground", children: "v1.2.6 · Secure Download" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 rounded-lg bg-[oklch(0.15_0.005_270/0.6)] border border-border px-3 py-2 text-xs font-mono text-muted-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Download, { className: "h-3.5 w-3.5 text-crimson-glow shrink-0" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "truncate", children: fileName }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ml-auto text-[10px] shrink-0", children: "273 MB" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex border-b border-border", children: ["signup", "login"].map((m) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: () => {
            setMode(m);
            reset();
          },
          className: `flex-1 py-3 text-xs font-semibold uppercase tracking-widest transition-colors ${mode === m ? "text-crimson-glow border-b-2 border-crimson -mb-px" : "text-muted-foreground hover:text-foreground"}`,
          children: m === "signup" ? "Create Account" : "Sign In"
        },
        m
      )) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleSubmit, className: "px-7 py-6 space-y-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground leading-relaxed", children: mode === "signup" ? "Create a free account to download F.R.I.D.A.Y. We only store your email and username." : "Sign in to your account to start your download." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-[10px] uppercase tracking-widest text-muted-foreground", children: "Email" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-muted-foreground" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "input",
              {
                type: "email",
                autoComplete: "email",
                value: email,
                onChange: (e) => setEmail(e.target.value),
                placeholder: "you@example.com",
                className: "w-full rounded-lg border border-border bg-[oklch(0.15_0.005_270)] pl-9 pr-4 py-2.5 text-sm outline-none focus:border-crimson/50 focus:ring-1 focus:ring-crimson/20 placeholder:text-muted-foreground/50 transition-colors"
              }
            )
          ] })
        ] }),
        mode === "signup" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-[10px] uppercase tracking-widest text-muted-foreground", children: "Username" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(User, { className: "absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-muted-foreground" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "input",
              {
                type: "text",
                autoComplete: "username",
                value: username,
                onChange: (e) => setUsername(e.target.value),
                placeholder: "your_username",
                className: "w-full rounded-lg border border-border bg-[oklch(0.15_0.005_270)] pl-9 pr-4 py-2.5 text-sm outline-none focus:border-crimson/50 focus:ring-1 focus:ring-crimson/20 placeholder:text-muted-foreground/50 transition-colors"
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-[10px] uppercase tracking-widest text-muted-foreground", children: "Password" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Lock, { className: "absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-muted-foreground" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "input",
              {
                type: showPassword ? "text" : "password",
                autoComplete: mode === "signup" ? "new-password" : "current-password",
                value: password,
                onChange: (e) => setPassword(e.target.value),
                placeholder: mode === "signup" ? "Min. 6 characters" : "••••••••",
                className: "w-full rounded-lg border border-border bg-[oklch(0.15_0.005_270)] pl-9 pr-10 py-2.5 text-sm outline-none focus:border-crimson/50 focus:ring-1 focus:ring-crimson/20 placeholder:text-muted-foreground/50 transition-colors"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                onClick: () => setShowPassword(!showPassword),
                className: "absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors",
                children: showPassword ? /* @__PURE__ */ jsxRuntimeExports.jsx(EyeOff, { className: "h-3.5 w-3.5" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Eye, { className: "h-3.5 w-3.5" })
              }
            )
          ] })
        ] }),
        error && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-lg border border-crimson/30 bg-crimson/10 px-3 py-2.5 text-xs text-crimson-glow", children: error }),
        success && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-2 rounded-lg border border-emerald-sys/30 bg-emerald-sys/10 px-3 py-2.5 text-xs text-emerald-sys", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "h-3.5 w-3.5 mt-0.5 shrink-0" }),
          success
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            type: "submit",
            disabled: loading || !!success,
            className: "w-full flex items-center justify-center gap-2 rounded-xl bg-crimson py-3 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-glow-crimson)] hover:brightness-110 disabled:opacity-60 disabled:cursor-not-allowed transition-all",
            children: [
              loading ? /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "h-4 w-4 animate-spin" }) : success ? /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "h-4 w-4" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Download, { className: "h-4 w-4" }),
              loading ? "Please wait…" : success ? "Starting download…" : mode === "signup" ? "Create Account & Download" : "Sign In & Download"
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-center text-[10px] text-muted-foreground", children: [
          mode === "signup" ? "Already have an account? " : "Don't have an account? ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              onClick: () => {
                setMode(mode === "signup" ? "login" : "signup");
                reset();
              },
              className: "text-crimson-glow hover:underline",
              children: mode === "signup" ? "Sign in" : "Sign up"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-center text-[10px] text-muted-foreground/60", children: "🔒 We only store your email and username. Your data never leaves Supabase." })
      ] })
    ] }) })
  ] });
}
const CAPABILITIES = [
  { icon: Mic, title: "Voice-Controlled Automation", desc: "Natural language commands trigger native OS actions across apps and files." },
  { icon: Zap, title: "Real-Time App Launching", desc: "Sub-200ms launch dispatch with context-aware window arrangement." },
  { icon: Eye, title: "Multimodal Vision", desc: "Continuous screen understanding — read UIs, extract data, act on what's visible." },
  { icon: Brain, title: "Persistent AI Memory", desc: "Episodic + semantic memory with vector recall across sessions and devices." },
  { icon: CodeXml, title: "Codebase Intelligence", desc: "RAG over your repos. Refactor, explain, generate — grounded in your code." },
  { icon: Keyboard, title: "Native Keyboard & Mouse", desc: "Low-level input control with deterministic playback and recording." },
  { icon: Smartphone, title: "Android ADB Bridge", desc: "Drive phones, scrape state, automate flows. USB or wireless." },
  { icon: Workflow, title: "Workflow Orchestration", desc: "Composable agents with retries, branching, and human-in-the-loop checkpoints." },
  { icon: Sparkles, title: "Smart Productivity", desc: "Meeting summaries, inbox triage, focus modes, smart paste, clipboard search." },
  { icon: Plug, title: "External API Integrations", desc: "OpenAI, Anthropic, Notion, GitHub, Slack, Linear, Stripe and 60+ more." },
  { icon: Activity, title: "System Monitoring", desc: "Live CPU, GPU, memory, thermal and network telemetry surfaced to the model." },
  { icon: LayoutGrid, title: "Floating Widgets", desc: "Pinnable HUDs for transcripts, tasks, system stats and active automations." }
];
const SECURITY = [
  { icon: HardDrive, title: "Local-First Architecture", desc: "Models, memory and indexes run on-device by default. No data leaves unless you say so." },
  { icon: Lock, title: "Encrypted Vault", desc: "AES-256 vault for credentials, tokens and traces. Per-app isolation." },
  { icon: KeyRound, title: "Bring Your Own Keys", desc: "Plug any provider key. F.R.I.D.A.Y never proxies through our servers." },
  { icon: EyeOff, title: "Permission Transparency", desc: "Every action shows scope, target and revocable grant. Full audit trail." },
  { icon: FingerprintPattern, title: "Biometric Security", desc: "Touch ID, Windows Hello and hardware key auth for sensitive operations." },
  { icon: ServerCog, title: "Secure AI Execution", desc: "Sandboxed action runners with capability-scoped tokens and signed plans." }
];
const ROADMAP = [
  { q: "Q3 · 2025", title: "Offline Wake Word", desc: "On-device wake detection with <30mW idle draw.", status: "shipping" },
  { q: "Q4 · 2025", title: "Plugin Ecosystem", desc: "Signed plugin marketplace with capability sandboxing.", status: "beta" },
  { q: "Q1 · 2026", title: "Memory Graph", desc: "Queryable knowledge graph spanning apps, files and people.", status: "design" },
  { q: "Q2 · 2026", title: "Multi-Agent Orchestration", desc: "Specialist agents collaborate under a planner with conflict resolution.", status: "research" },
  { q: "Q3 · 2026", title: "Hybrid Local + Cloud", desc: "Adaptive routing between on-device and frontier models per task.", status: "research" }
];
function SectionLabel({ children }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center gap-2 rounded-full border border-border bg-[oklch(0.15_0.005_270/0.6)] px-3 py-1 text-xs font-medium tracking-widest uppercase text-muted-foreground", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-1.5 w-1.5 rounded-full bg-crimson animate-pulse-slow" }),
    children
  ] });
}
function Nav({ onDownload }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("header", { className: "fixed top-0 z-50 w-full", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto mt-4 flex max-w-7xl items-center justify-between rounded-2xl glass-panel px-5 py-3", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2.5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative h-7 w-7", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 rounded-md bg-crimson/20 blur-md" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative grid h-7 w-7 place-items-center rounded-md border border-crimson/40 bg-[oklch(0.18_0.02_22)]", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CircleDot, { className: "h-3.5 w-3.5 text-crimson" }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold tracking-[0.18em] text-sm", children: "F.R.I.D.A.Y" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("nav", { className: "hidden md:flex items-center gap-7 text-sm text-muted-foreground", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#capabilities", className: "hover:text-foreground transition-colors", children: "Capabilities" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#interface", className: "hover:text-foreground transition-colors", children: "Interface" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#how", className: "hover:text-foreground transition-colors", children: "Architecture" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#install", className: "hover:text-foreground transition-colors", children: "Install" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#security", className: "hover:text-foreground transition-colors", children: "Security" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#roadmap", className: "hover:text-foreground transition-colors", children: "Roadmap" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "hidden sm:inline-flex items-center gap-1.5 rounded-lg border border-border px-3 py-1.5 text-xs text-muted-foreground hover:text-foreground hover:border-crimson/40 transition-colors", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono", children: "v1.2.6" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "button",
        {
          onClick: onDownload,
          className: "inline-flex items-center gap-1.5 rounded-lg bg-crimson px-3.5 py-1.5 text-xs font-semibold text-primary-foreground shadow-[var(--shadow-glow-crimson)] hover:brightness-110 transition-all",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Download, { className: "h-3.5 w-3.5" }),
            " Download"
          ]
        }
      )
    ] })
  ] }) });
}
function Hero({ onDownload }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative overflow-hidden pt-40 pb-32", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 grid-bg [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none absolute inset-x-0 top-20 mx-auto h-px max-w-5xl bg-gradient-to-r from-transparent via-crimson/50 to-transparent" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-7xl px-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-[1.1fr_1fr] gap-16 items-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-8 animate-fade-up", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(SectionLabel, { children: "Desktop intelligence · v1.2.6" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "text-balance text-5xl md:text-7xl lg:text-[5.5rem] font-light leading-[0.95] tracking-tight", children: [
          "Meet",
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold bg-gradient-to-br from-foreground via-foreground to-crimson-glow bg-clip-text text-transparent", children: "F.R.I.D.A.Y" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block text-muted-foreground text-2xl md:text-3xl mt-6 font-light tracking-normal max-w-xl", children: "A real operating-system intelligence — voice, vision, and native control across your machine." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-3 pt-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              onClick: onDownload,
              className: "group inline-flex items-center gap-2 rounded-xl bg-crimson px-5 py-3 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-glow-crimson)] hover:brightness-110 transition-all",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Download, { className: "h-4 w-4" }),
                " Download",
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-mono opacity-70 ml-1", children: "macOS · Win · Linux" })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { className: "inline-flex items-center gap-2 rounded-xl glass-panel px-5 py-3 text-sm font-medium hover:border-crimson/40 transition-colors", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Play, { className: "h-4 w-4" }),
            " Watch Demo"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { className: "inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Compass, { className: "h-4 w-4" }),
            " Explore System ",
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-3.5 w-3.5" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-3 gap-3 max-w-xl pt-6", children: [
          { icon: Cpu, label: "Inference", value: "12.4 ms", color: "text-cyan-sys" },
          { icon: Activity, label: "Memory ctx", value: "84,201", color: "text-emerald-sys" },
          { icon: Wifi, label: "Local-first", value: "On", color: "text-crimson-glow" }
        ].map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass-panel rounded-lg px-3 py-2.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between text-[10px] uppercase tracking-widest text-muted-foreground", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: s.label }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(s.icon, { className: `h-3 w-3 ${s.color}` })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `font-mono text-sm mt-1 ${s.color}`, children: s.value })
        ] }, s.label)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -inset-10 bg-gradient-radial-crimson opacity-50 blur-3xl pointer-events-none" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative flex justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(NeuralSphere, {}) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6 glass-panel rounded-xl p-4 animate-float", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid h-9 w-9 place-items-center rounded-full bg-crimson/15 border border-crimson/30", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Mic, { className: "h-4 w-4 text-crimson-glow" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] uppercase tracking-widest text-muted-foreground", children: "Voice · listening" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-medium", children: '"Summarize my last meeting and draft a reply."' })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(VoiceWave, {})
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(TerminalPreview, {}) })
      ] })
    ] }) })
  ] });
}
function Capabilities() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "capabilities", className: "relative py-32", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-2xl mb-16 space-y-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(SectionLabel, { children: "Capabilities" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-4xl md:text-5xl font-light tracking-tight text-balance", children: [
        "Built for power users.",
        /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "Designed for developers." })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid sm:grid-cols-2 lg:grid-cols-3 gap-3", children: CAPABILITIES.map((c, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "group relative glass-panel rounded-xl p-6 hover:border-crimson/40 transition-all duration-300 hover:-translate-y-0.5",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-crimson/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between mb-5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid h-10 w-10 place-items-center rounded-lg bg-[oklch(0.2_0.01_270)] border border-border group-hover:border-crimson/30 group-hover:bg-crimson/10 transition-colors", children: /* @__PURE__ */ jsxRuntimeExports.jsx(c.icon, { className: "h-4.5 w-4.5 text-foreground/80 group-hover:text-crimson-glow transition-colors" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-[10px] text-muted-foreground", children: String(i + 1).padStart(2, "0") })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold text-base mb-1.5 tracking-tight", children: c.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground leading-relaxed", children: c.desc })
        ]
      },
      c.title
    )) })
  ] }) });
}
function InterfacePreview() {
  const logs = [
    { t: "12:04:18", lvl: "INFO", msg: "wake_word.detected confidence=0.97", c: "text-cyan-sys" },
    { t: "12:04:19", lvl: "PLAN", msg: "→ search_calendar('last meeting')", c: "text-foreground" },
    { t: "12:04:19", lvl: "EXEC", msg: "tool:calendar.read ok · 1 result", c: "text-emerald-sys" },
    { t: "12:04:20", lvl: "EXEC", msg: "tool:summarize.transcript ok · 312 tokens", c: "text-emerald-sys" },
    { t: "12:04:21", lvl: "PLAN", msg: "→ draft_email(to=team@, ref=meeting_842)", c: "text-foreground" },
    { t: "12:04:22", lvl: "WAIT", msg: "human_in_loop · review draft", c: "text-amber-sys" }
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "interface", className: "relative py-32", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-5 max-w-2xl", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(SectionLabel, { children: "Live Interface" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-4xl md:text-5xl font-light tracking-tight text-balance", children: [
          "The operating-system dashboard, ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-crimson-glow", children: "always on." })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-xs font-mono text-muted-foreground", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-2 w-2 rounded-full bg-emerald-sys animate-pulse" }),
        "session · friday.local · 00:14:22"
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass-panel rounded-2xl overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between border-b border-border px-4 py-2.5 bg-[oklch(0.1_0.005_270)]", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-2.5 w-2.5 rounded-full bg-[oklch(0.55_0.18_22)]" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-2.5 w-2.5 rounded-full bg-[oklch(0.7_0.15_60)]" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-2.5 w-2.5 rounded-full bg-[oklch(0.7_0.15_155)]" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ml-3 font-mono text-[11px] text-muted-foreground", children: "~/friday/console" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "hidden md:flex items-center gap-4 font-mono text-[11px] text-muted-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-cyan-sys", children: "CPU" }),
            " 18%"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-emerald-sys", children: "MEM" }),
            " 6.2/32G"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-amber-sys", children: "GPU" }),
            " 41°C"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-crimson-glow", children: "●" }),
            " rec"
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-[1fr_1.1fr_0.9fr] divide-y lg:divide-y-0 lg:divide-x divide-border", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-5 space-y-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] uppercase tracking-widest text-muted-foreground mb-3", children: "Voice stream" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-lg border border-border bg-[oklch(0.1_0.005_270)] p-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(VoiceWave, {}),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-3 font-mono text-xs text-muted-foreground", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-crimson-glow", children: "user" }),
                ': "Summarize my last meeting and draft a reply."'
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] uppercase tracking-widest text-muted-foreground mb-3", children: "AI response" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-lg border border-border bg-[oklch(0.1_0.005_270)] p-4 text-sm leading-relaxed", children: [
              "The Q3 sync covered three blockers: API rate limits, the migration ETA, and onboarding copy. I've drafted a reply addressing each",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-block w-1.5 h-3.5 bg-crimson animate-blink align-middle ml-1" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] uppercase tracking-widest text-muted-foreground mb-3", children: "Active devices" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2", children: [
              { name: "MacBook Pro M3", state: "active", c: "text-emerald-sys" },
              { name: "Pixel 8 · ADB", state: "linked", c: "text-cyan-sys" },
              { name: "Stream Deck", state: "idle", c: "text-muted-foreground" }
            ].map((d) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between rounded-md border border-border bg-[oklch(0.12_0.005_270)] px-3 py-2 text-xs", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: d.name }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: `font-mono ${d.c}`, children: [
                "● ",
                d.state
              ] })
            ] }, d.name)) })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[10px] uppercase tracking-widest text-muted-foreground flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Terminal, { className: "h-3 w-3" }),
              " Live logs"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-[10px] text-muted-foreground", children: "orchestrator.v3" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-lg border border-border bg-[oklch(0.08_0.005_270)] font-mono text-[11px] overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-h-[360px] overflow-hidden", children: logs.map((l, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-[auto_auto_1fr] gap-3 px-3 py-1.5 border-b border-border/40 last:border-0", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: l.t }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `${l.c} font-semibold`, children: l.lvl }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground/80", children: l.msg })
          ] }, i)) }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4 grid grid-cols-3 gap-2", children: [
            { l: "CPU", v: "18%", c: "text-cyan-sys", w: "18%" },
            { l: "MEM", v: "19%", c: "text-emerald-sys", w: "19%" },
            { l: "GPU", v: "44%", c: "text-amber-sys", w: "44%" }
          ].map((m) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-md border border-border bg-[oklch(0.1_0.005_270)] p-2.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-[10px] font-mono text-muted-foreground", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: m.l }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: m.c, children: m.v })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-2 h-1 rounded-full bg-[oklch(0.2_0.005_270)] overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `h-full ${m.c}`, style: { width: m.w, backgroundColor: "currentColor", opacity: 0.6 } }) })
          ] }, m.l)) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-5 space-y-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] uppercase tracking-widest text-muted-foreground", children: "Automation feed" }),
          [
            { t: "Opened VS Code · /repo/friday-os", time: "now", c: "border-crimson/40" },
            { t: "Resized window → left 60%", time: "2s", c: "border-border" },
            { t: "Started dev server :5173", time: "4s", c: "border-emerald-sys/40" },
            { t: "ADB · Pixel 8 mirror on", time: "12s", c: "border-cyan-sys/40" },
            { t: "Vault unlocked · biometric", time: "1m", c: "border-border" }
          ].map((a, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `rounded-lg border ${a.c} bg-[oklch(0.1_0.005_270)] px-3 py-2.5`, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between text-xs", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: a.t }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-[10px] text-muted-foreground", children: a.time })
          ] }) }, i)),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-lg border border-border bg-[oklch(0.1_0.005_270)] p-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] uppercase tracking-widest text-muted-foreground mb-2", children: "Memory recall" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-1.5", children: ["meeting_842", "team@", "Q3-sync", "blockers", "draft_v2"].map((t) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-[10px] rounded border border-border bg-[oklch(0.15_0.005_270)] px-1.5 py-0.5 text-muted-foreground", children: t }, t)) })
          ] })
        ] })
      ] })
    ] })
  ] }) });
}
function HowItWorks() {
  const steps = [
    { n: "01", title: "Voice Input", desc: "Wake word + streaming ASR with VAD and speaker ID.", icon: Mic, color: "text-crimson-glow" },
    { n: "02", title: "AI Processing", desc: "Planner decomposes intent into tool calls and constraints.", icon: Brain, color: "text-foreground" },
    { n: "03", title: "Native Actions", desc: "Capability-scoped runners execute OS-level commands.", icon: Keyboard, color: "text-cyan-sys" },
    { n: "04", title: "Local + Cloud", desc: "Adaptive routing — on-device for private, cloud for heavy.", icon: ServerCog, color: "text-emerald-sys" },
    { n: "05", title: "Automation Engine", desc: "Loops, branches, retries, and human checkpoints.", icon: Workflow, color: "text-amber-sys" }
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "how", className: "relative py-32", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-2xl mb-20 space-y-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(SectionLabel, { children: "Architecture" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-4xl md:text-5xl font-light tracking-tight text-balance", children: "How F.R.I.D.A.Y works." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-lg", children: "A deterministic pipeline from utterance to action — auditable at every hop." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { className: "hidden lg:block absolute top-10 left-0 w-full h-2 z-0", preserveAspectRatio: "none", viewBox: "0 0 100 2", children: /* @__PURE__ */ jsxRuntimeExports.jsx("line", { x1: "0", y1: "1", x2: "100", y2: "1", stroke: "oklch(0.6 0.24 22 / 0.4)", strokeWidth: "0.2", strokeDasharray: "1 1" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 relative z-10", children: steps.map((s, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass-panel rounded-xl p-5 h-full", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid h-10 w-10 place-items-center rounded-full bg-[oklch(0.18_0.005_270)] border border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsx(s.icon, { className: `h-4 w-4 ${s.color}` }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-[10px] text-muted-foreground", children: s.n })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold mb-1.5 tracking-tight", children: s.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground leading-relaxed", children: s.desc })
        ] }),
        i < steps.length - 1 && /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-crimson/60" })
      ] }, s.n)) })
    ] })
  ] }) });
}
function Security() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "security", className: "relative py-32", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-7xl px-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-[1fr_1.4fr] gap-16", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(SectionLabel, { children: "Security & Privacy" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-4xl md:text-5xl font-light tracking-tight text-balance", children: [
        "Trust is the",
        /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
        "operating system."
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-lg leading-relaxed", children: "F.R.I.D.A.Y runs on-device first. Every model call, every action, every byte is scoped, logged, and revocable." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass-panel rounded-xl p-5 space-y-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Shield, { className: "h-5 w-5 text-emerald-sys" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-semibold", children: "SOC 2 Type II · in progress" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs font-mono text-muted-foreground space-y-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: "· AES-256-GCM at rest" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: "· TLS 1.3 + cert pinning" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: "· Hardware-backed key storage" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: "· Reproducible builds (signed)" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid sm:grid-cols-2 gap-3", children: SECURITY.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass-panel rounded-xl p-5 hover:border-emerald-sys/30 transition-colors", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid h-10 w-10 place-items-center rounded-lg bg-[oklch(0.18_0.04_155/0.3)] border border-emerald-sys/20 mb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(s.icon, { className: "h-4 w-4 text-emerald-sys" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold mb-1.5 tracking-tight", children: s.title }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground leading-relaxed", children: s.desc })
    ] }, s.title)) })
  ] }) }) });
}
function Roadmap() {
  const statusColor = {
    shipping: "text-emerald-sys border-emerald-sys/40",
    beta: "text-cyan-sys border-cyan-sys/40",
    design: "text-amber-sys border-amber-sys/40",
    research: "text-muted-foreground border-border"
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "roadmap", className: "relative py-32", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-2xl mb-16 space-y-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(SectionLabel, { children: "Roadmap" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-4xl md:text-5xl font-light tracking-tight text-balance", children: "What's next." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-crimson/30 to-transparent" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-6", children: ROADMAP.map((r, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `relative grid md:grid-cols-2 gap-6 ${i % 2 === 0 ? "" : "md:[direction:rtl]"}`, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `md:[direction:ltr] glass-panel rounded-xl p-6 ml-10 md:ml-0 ${i % 2 === 0 ? "md:mr-10" : "md:ml-10"}`, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-xs text-muted-foreground tracking-widest", children: r.q }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `text-[10px] font-mono uppercase tracking-widest border rounded-full px-2 py-0.5 ${statusColor[r.status]}`, children: r.status })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-semibold tracking-tight mb-1.5", children: r.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground leading-relaxed", children: r.desc })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute left-4 md:left-1/2 top-6 -translate-x-1/2 h-3 w-3 rounded-full bg-crimson border-2 border-background shadow-[0_0_20px_var(--crimson-glow)]" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", {})
      ] }, r.title)) })
    ] })
  ] }) });
}
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
      "Create a key in a new or existing project."
    ],
    link: "https://aistudio.google.com/app/apikey",
    linkLabel: "Get Gemini Key",
    icon: Brain
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
      "Click 'Create API Key' and copy it immediately."
    ],
    link: "https://console.groq.com/keys",
    linkLabel: "Get Groq Key",
    icon: Zap
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
      "Generate a new API key (Free tier available)."
    ],
    link: "https://app.tavily.com/",
    linkLabel: "Get Tavily Key",
    icon: Compass
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
      "Create a new token with 'Read' permissions."
    ],
    link: "https://huggingface.co/settings/tokens",
    linkLabel: "Get Hugging Face Token",
    icon: HardDrive
  }
];
const INSTALL_STEPS = [
  {
    n: "01",
    title: "Download F.R.I.D.A.Y",
    desc: "Click the download button above to grab the latest installer for your OS. Available for Windows (.exe), macOS (.dmg), and Linux (.AppImage).",
    icon: Download,
    color: "text-crimson-glow",
    border: "border-crimson/30",
    bg: "bg-crimson/10"
  },
  {
    n: "02",
    title: "Run the Installer",
    desc: "Double-click the installer. On Windows you may see a SmartScreen prompt — click 'More info → Run anyway'. On macOS, right-click → Open.",
    icon: Package,
    color: "text-amber-sys",
    border: "border-amber-sys/30",
    bg: "bg-amber-sys/10"
  },
  {
    n: "03",
    title: "Create your .env file",
    desc: "Navigate to the F.R.I.D.A.Y data directory and create a file named .env. Paste your API keys in the format shown below. F.R.I.D.A.Y will auto-detect it on launch.",
    icon: Key,
    color: "text-cyan-sys",
    border: "border-cyan-sys/30",
    bg: "bg-cyan-sys/10"
  },
  {
    n: "04",
    title: "Launch & Verify",
    desc: "Open F.R.I.D.A.Y from your Applications folder or Start Menu. On first launch, the system will validate all keys and show a green checkmark for each one connected.",
    icon: CircleCheck,
    color: "text-emerald-sys",
    border: "border-emerald-sys/30",
    bg: "bg-emerald-sys/10"
  }
];
function HowToInstall({ onDownload }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "install", className: "relative py-32", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-crimson/30 to-transparent" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-6 space-y-24", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-3xl space-y-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(SectionLabel, { children: "Installation" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-4xl md:text-5xl font-light tracking-tight text-balance", children: [
          "Up and running",
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "in four steps." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-muted-foreground text-lg leading-relaxed", children: [
          "F.R.I.D.A.Y operates locally, but requires specific API keys to bridge the gap to large language models and search engines. Your keys are stored locally on your machine and ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground font-medium", children: "never sent to our servers." })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative glass-panel rounded-2xl p-8 md:p-10 overflow-hidden", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-radial-crimson opacity-20" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-crimson/50 to-transparent" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative flex flex-col md:flex-row items-start md:items-center justify-between gap-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid h-12 w-12 place-items-center rounded-xl bg-crimson/15 border border-crimson/30", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Download, { className: "h-5 w-5 text-crimson-glow" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-semibold text-lg tracking-tight", children: "F.R.I.D.A.Y Desktop · v1.2.6" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground font-mono", children: "Stable release · May 2026" })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2", children: [
              { os: "Windows", ext: ".exe", icon: "⊞" },
              { os: "macOS", ext: ".dmg", icon: "" },
              { os: "Linux", ext: ".AppImage", icon: "🐧" }
            ].map((p) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5 rounded-md border border-border bg-[oklch(0.15_0.005_270/0.6)] px-2.5 py-1 text-xs font-mono text-muted-foreground", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: p.icon }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: p.os }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-crimson-glow", children: p.ext })
            ] }, p.os)) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                id: "download-iris-exe",
                onClick: onDownload,
                className: "group inline-flex items-center gap-2 rounded-xl bg-crimson px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-glow-crimson)] hover:brightness-110 transition-all",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Download, { className: "h-4 w-4" }),
                  "Download for Windows",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-mono opacity-70 ml-1", children: ".exe" })
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                id: "download-iris-other",
                className: "inline-flex items-center gap-2 rounded-xl glass-panel px-6 py-3.5 text-sm font-medium hover:border-crimson/40 transition-colors",
                children: [
                  "Other platforms ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-3.5 w-3.5" })
                ]
              }
            )
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-semibold tracking-tight", children: "Installation Steps" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-2 lg:grid-cols-4 gap-4", children: INSTALL_STEPS.map((s, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `glass-panel rounded-xl p-6 border ${s.border} transition-all duration-300 hover:-translate-y-0.5`, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between mb-5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `grid h-10 w-10 place-items-center rounded-lg ${s.bg} border ${s.border}`, children: /* @__PURE__ */ jsxRuntimeExports.jsx(s.icon, { className: `h-4.5 w-4.5 ${s.color}` }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-[10px] text-muted-foreground", children: s.n })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: `font-semibold text-base mb-2 tracking-tight ${s.color}`, children: s.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground leading-relaxed", children: s.desc })
        ] }, s.n)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass-panel rounded-xl overflow-hidden", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between border-b border-border px-4 py-2.5 bg-[oklch(0.1_0.005_270)]", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-2.5 w-2.5 rounded-full bg-[oklch(0.55_0.18_22)]" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-2.5 w-2.5 rounded-full bg-[oklch(0.7_0.15_60)]" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-2.5 w-2.5 rounded-full bg-[oklch(0.7_0.15_155)]" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ml-3 font-mono text-[11px] text-muted-foreground", children: "~/.friday/.env" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5 text-[10px] font-mono text-muted-foreground", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CircleAlert, { className: "h-3 w-3 text-amber-sys" }),
            "Never commit this file"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6 font-mono text-sm space-y-1.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "# Required" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-crimson-glow", children: "GEMINI_API_KEY" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "=" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-emerald-sys", children: '"your_gemini_key_here"' })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-amber-sys", children: "GROQ_API_KEY" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "=" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-emerald-sys", children: '"your_groq_key_here"' })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pt-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "# Optional" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-cyan-sys", children: "TAVILY_API_KEY" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "=" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-emerald-sys", children: '"your_tavily_key_here"' })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-emerald-sys", children: "HUGGINGFACE_API_KEY" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "=" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-emerald-sys", children: '"your_hf_token_here"' })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-semibold tracking-tight", children: "System Keys" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground leading-relaxed max-w-2xl", children: "Follow this guide to forge your keys and initialize the system. Your keys are stored locally on your machine and never sent to our servers." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid lg:grid-cols-2 gap-5", children: API_KEYS.map((k) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            id: `api-key-${k.id}`,
            className: `glass-panel rounded-2xl p-6 transition-all duration-300 ${k.borderHover} hover:-translate-y-0.5`,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between mb-5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `grid h-11 w-11 place-items-center rounded-xl ${k.iconColor} border`, children: /* @__PURE__ */ jsxRuntimeExports.jsx(k.icon, { className: `h-5 w-5 ${k.accentColor}` }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-semibold tracking-tight", children: k.name }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("code", { className: "text-[11px] font-mono text-muted-foreground", children: [
                      ".env: ",
                      k.env
                    ] })
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `text-[10px] font-mono uppercase tracking-widest border rounded-full px-2.5 py-0.5 ${k.badgeColor}`, children: k.badge })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground leading-relaxed mb-5", children: k.desc }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2 mb-5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] uppercase tracking-widest text-muted-foreground mb-3", children: "How to get it:" }),
                k.steps.map((step, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-2.5 text-sm", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `mt-0.5 h-4 w-4 shrink-0 grid place-items-center rounded-full text-[9px] font-mono font-bold ${k.bg || "bg-[oklch(0.18_0.005_270)]"} border ${k.border || "border-border"} ${k.accentColor}`, children: idx + 1 }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground leading-relaxed", children: step })
                ] }, idx))
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "a",
                {
                  href: k.link,
                  target: "_blank",
                  rel: "noopener noreferrer",
                  id: `get-key-${k.id}`,
                  className: `inline-flex items-center gap-2 rounded-lg border px-4 py-2 text-xs font-semibold transition-all hover:brightness-110 ${k.badgeColor}`,
                  children: [
                    k.linkLabel,
                    /* @__PURE__ */ jsxRuntimeExports.jsx(ExternalLink, { className: "h-3 w-3" })
                  ]
                }
              )
            ]
          },
          k.id
        )) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass-panel rounded-xl p-6 border border-emerald-sys/20 flex items-start gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-emerald-sys/10 border border-emerald-sys/30", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "h-5 w-5 text-emerald-sys" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-semibold text-sm text-emerald-sys", children: "Verify your setup" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-muted-foreground leading-relaxed", children: [
            "After adding your keys, launch F.R.I.D.A.Y and open the ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-foreground", children: "Settings → API Keys" }),
            " panel. Each key shows a ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-emerald-sys font-medium", children: "● connected" }),
            " indicator when validated successfully. Required keys must be present for F.R.I.D.A.Y to start. Optional keys unlock additional agents."
          ] })
        ] })
      ] })
    ] })
  ] });
}
function FinalCTA({ onDownload }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "relative py-32", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-5xl px-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative glass-panel rounded-3xl p-12 md:p-20 text-center overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-radial-crimson opacity-40" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-crimson to-transparent" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative space-y-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-4xl md:text-6xl font-light tracking-tight text-balance leading-[1.05]", children: [
        "Your operating system",
        /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold bg-gradient-to-br from-foreground to-crimson-glow bg-clip-text text-transparent", children: "should understand you." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center justify-center gap-3 pt-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            onClick: onDownload,
            className: "inline-flex items-center gap-2 rounded-xl bg-crimson px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-glow-crimson)] hover:brightness-110 transition-all",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Download, { className: "h-4 w-4" }),
              " Download FRIDAY"
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { className: "inline-flex items-center gap-2 rounded-xl glass-panel px-6 py-3.5 text-sm font-medium hover:border-crimson/40 transition-colors", children: [
          "Join Waitlist ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4" })
        ] })
      ] })
    ] })
  ] }) }) });
}
function Footer() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("footer", { className: "border-t border-border py-10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-6 flex flex-col md:flex-row items-center justify-between gap-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2.5 text-sm", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid h-6 w-6 place-items-center rounded-md border border-crimson/40 bg-[oklch(0.18_0.02_22)]", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CircleDot, { className: "h-3 w-3 text-crimson" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold tracking-[0.18em] text-xs", children: "F.R.I.D.A.Y" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground text-xs ml-2", children: "© 2026 · Built for power users." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-6 text-xs text-muted-foreground", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/docs", className: "hover:text-foreground transition-colors", children: "Docs" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/changelog", className: "hover:text-foreground transition-colors", children: "Changelog" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/security", className: "hover:text-foreground transition-colors", children: "Security" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "https://piyushpaul.in/", target: "_blank", rel: "noopener noreferrer", className: "hover:text-foreground transition-colors", children: "Portfolio" })
    ] })
  ] }) });
}
function FridayLanding() {
  const [modalOpen, setModalOpen] = reactExports.useState(false);
  const triggerDownload = () => {
    const link = document.createElement("a");
    link.href = "/FRIDAY-AI-1.2.6-Setup.exe";
    link.download = "FRIDAY-AI-1.2.6-Setup.exe";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative min-h-screen overflow-x-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      AuthModal,
      {
        isOpen: modalOpen,
        onClose: () => setModalOpen(false),
        onAuthSuccess: triggerDownload
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Nav, { onDownload: () => setModalOpen(true) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Hero, { onDownload: () => setModalOpen(true) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Capabilities, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(InterfacePreview, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(HowItWorks, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(HowToInstall, { onDownload: () => setModalOpen(true) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Security, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Roadmap, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(FinalCTA, { onDownload: () => setModalOpen(true) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {})
  ] });
}
const SplitComponent = FridayLanding;
export {
  SplitComponent as component
};
