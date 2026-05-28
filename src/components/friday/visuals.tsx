import { useEffect, useState } from "react";

export function NeuralSphere() {
  return (
    <div className="relative h-[340px] w-[340px] md:h-[420px] md:w-[420px]">
      {/* radial glow */}
      <div
        className="absolute inset-0 rounded-full blur-3xl opacity-70"
        style={{ background: "var(--gradient-radial-crimson)" }}
      />
      {/* core */}
      <div className="absolute inset-[22%] rounded-full bg-[oklch(0.18_0.02_22)] border border-[oklch(0.6_0.24_22/0.4)] shadow-[inset_0_0_60px_oklch(0.6_0.24_22/0.35)] flex items-center justify-center">
        <div className="h-3 w-3 rounded-full bg-crimson animate-pulse-slow shadow-[0_0_30px_var(--crimson-glow)]" />
      </div>
      {/* orbits */}
      {[0, 1, 2].map((i) => (
        <div
          key={i}
          className="absolute inset-0 rounded-full border border-[oklch(1_0_0/0.06)]"
          style={{
            animation: `orbit ${18 + i * 6}s linear infinite`,
            transform: `rotate(${i * 30}deg)`,
          }}
        >
          <div
            className="absolute h-1.5 w-1.5 rounded-full bg-crimson-glow shadow-[0_0_12px_var(--crimson-glow)]"
            style={{ top: "-3px", left: "50%" }}
          />
        </div>
      ))}
      {/* svg rings */}
      <svg viewBox="0 0 200 200" className="absolute inset-0 h-full w-full">
        <defs>
          <linearGradient id="ring" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="oklch(0.6 0.24 22)" stopOpacity="0.7" />
            <stop offset="1" stopColor="oklch(0.6 0.24 22)" stopOpacity="0" />
          </linearGradient>
        </defs>
        {[88, 76, 64].map((r, i) => (
          <circle
            key={r}
            cx="100"
            cy="100"
            r={r}
            fill="none"
            stroke="url(#ring)"
            strokeWidth="0.5"
            strokeDasharray={`${4 + i * 2} ${20 + i * 4}`}
            style={{ animation: `orbit ${30 - i * 5}s linear infinite`, transformOrigin: "100px 100px" }}
          />
        ))}
      </svg>
    </div>
  );
}

export function VoiceWave() {
  const bars = Array.from({ length: 28 });
  return (
    <div className="flex h-12 items-center gap-[3px]">
      {bars.map((_, i) => (
        <span
          key={i}
          className="w-[3px] rounded-full bg-crimson"
          style={{
            height: `${20 + ((i * 13) % 80)}%`,
            animation: `wave ${0.6 + (i % 5) * 0.15}s ease-in-out infinite`,
            animationDelay: `${i * 0.04}s`,
            opacity: 0.4 + ((i % 6) * 0.1),
          }}
        />
      ))}
    </div>
  );
}

const TERMINAL_LINES = [
  { p: "friday@os", c: "~", t: "listen --wake-word", color: "text-cyan-sys" },
  { p: "→", c: "", t: "wake word active · listening", color: "text-muted-foreground" },
  { p: "voice", c: "in", t: '"open vscode and run dev server"', color: "text-foreground" },
  { p: "intent", c: "parse", t: "launch_app + shell_exec", color: "text-emerald-sys" },
  { p: "action", c: "exec", t: "→ vscode launched · pid 28412", color: "text-emerald-sys" },
  { p: "action", c: "exec", t: "→ bun run dev · :5173 ready", color: "text-emerald-sys" },
  { p: "friday", c: "say", t: "Dev server is live on port 5173.", color: "text-crimson-glow" },
];

export function TerminalPreview() {
  const [count, setCount] = useState(1);
  useEffect(() => {
    const id = setInterval(() => setCount((c) => (c >= TERMINAL_LINES.length ? 1 : c + 1)), 900);
    return () => clearInterval(id);
  }, []);
  return (
    <div className="glass-panel rounded-xl overflow-hidden font-mono text-[11px] md:text-xs">
      <div className="flex items-center gap-2 border-b border-border px-3 py-2 bg-[oklch(0.1_0.005_270)]">
        <span className="h-2.5 w-2.5 rounded-full bg-[oklch(0.55_0.18_22)]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[oklch(0.7_0.15_60)]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[oklch(0.7_0.15_155)]" />
        <span className="ml-2 text-muted-foreground tracking-wide">friday — zsh</span>
        <span className="ml-auto text-muted-foreground">12:04:22</span>
      </div>
      <div className="p-4 space-y-1.5 min-h-[210px]">
        {TERMINAL_LINES.slice(0, count).map((l, i) => (
          <div key={i} className="flex gap-2">
            <span className="text-crimson">{l.p}</span>
            {l.c && <span className="text-muted-foreground">{l.c}</span>}
            <span className={l.color}>{l.t}</span>
          </div>
        ))}
        <span className="inline-block w-2 h-3.5 bg-crimson animate-blink align-middle" />
      </div>
    </div>
  );
}
