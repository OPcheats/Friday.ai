import { useState } from "react";
import { ID } from "appwrite";
import { account, databases } from "@/lib/appwrite";
import { Download, X, Mail, User, Lock, CircleDot, Eye, EyeOff, CheckCircle2, Loader2 } from "lucide-react";

const DATABASE_ID = import.meta.env.VITE_APPWRITE_DATABASE_ID || "";
const COLLECTION_ID = import.meta.env.VITE_APPWRITE_COLLECTION_ID || "";

type Mode = "signup" | "login";

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  /** called after successful auth — triggers the actual download */
  onAuthSuccess: () => void;
  fileName?: string;
}

export function AuthModal({ isOpen, onClose, onAuthSuccess, fileName = "FRIDAY-AI-1.2.7-Setup.exe" }: AuthModalProps) {
  const [mode, setMode] = useState<Mode>("signup");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  if (!isOpen) return null;

  const reset = () => {
    setError("");
    setSuccess("");
  };

  /** Store user profile document in Appwrite Database */
  const upsertProfile = async (userId: string, userEmail: string, name: string) => {
    if (!DATABASE_ID || !COLLECTION_ID) return;
    try {
      await databases.createDocument(DATABASE_ID, COLLECTION_ID, ID.unique(), {
        userId,
        email: userEmail,
        username: name,
        downloadedAt: new Date().toISOString(),
      });
    } catch {
      // Non-fatal — profile record failure should not block the download
      console.warn("Could not save profile document to Appwrite Database.");
    }
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
    if (password.length < 8) {
      setError("Password must be at least 8 characters.");
      return;
    }

    setLoading(true);
    setError("");

    try {
      // 1. Create the Appwrite account
      const user = await account.create(ID.unique(), email, password, username);

      // 2. Start a session (log the user in immediately)
      await account.createEmailPasswordSession(email, password);

      // 3. Record the download in the database
      await upsertProfile(user.$id, email, username);

      setSuccess("Account created! Your download is starting…");
      setTimeout(() => {
        onAuthSuccess();
        onClose();
      }, 1500);
    } catch (err: any) {
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
      // 1. Create a session
      await account.createEmailPasswordSession(email, password);

      // 2. Get the logged-in user
      const user = await account.get();

      // 3. Record the download
      await upsertProfile(user.$id, user.email, user.name || email.split("@")[0]);

      setSuccess("Logged in! Your download is starting…");
      setTimeout(() => {
        onAuthSuccess();
        onClose();
      }, 1200);
    } catch (err: any) {
      setError(err.message || "Login failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    mode === "signup" ? handleSignUp() : handleLogin();
  };

  return (
    <>
      {/* backdrop */}
      <div
        className="fixed inset-0 z-[100] bg-black/70 backdrop-blur-sm animate-fade-up"
        onClick={onClose}
      />

      {/* modal */}
      <div className="fixed inset-0 z-[101] flex items-center justify-center p-4">
        <div className="w-full max-w-md glass-panel rounded-2xl overflow-hidden shadow-[0_32px_64px_oklch(0_0_0/0.6)] animate-fade-up">
          {/* top accent line */}
          <div className="h-px w-full bg-gradient-to-r from-transparent via-crimson to-transparent" />

          {/* header */}
          <div className="relative px-7 pt-7 pb-5 border-b border-border">
            <button
              onClick={onClose}
              className="absolute right-5 top-5 grid h-7 w-7 place-items-center rounded-lg border border-border text-muted-foreground hover:text-foreground hover:border-crimson/40 transition-colors"
            >
              <X className="h-3.5 w-3.5" />
            </button>

            <div className="flex items-center gap-3 mb-4">
              <div className="relative h-9 w-9">
                <div className="absolute inset-0 rounded-lg bg-crimson/20 blur-md" />
                <div className="relative grid h-9 w-9 place-items-center rounded-lg border border-crimson/40 bg-[oklch(0.18_0.02_22)]">
                  <CircleDot className="h-4 w-4 text-crimson" />
                </div>
              </div>
              <div>
                <div className="font-semibold tracking-[0.12em] text-sm">F.R.I.D.A.Y</div>
                <div className="text-[10px] font-mono text-muted-foreground">v1.2.7 · Secure Download</div>
              </div>
            </div>

            <div className="flex items-center gap-2 rounded-lg bg-[oklch(0.15_0.005_270/0.6)] border border-border px-3 py-2 text-xs font-mono text-muted-foreground">
              <Download className="h-3.5 w-3.5 text-crimson-glow shrink-0" />
              <span className="truncate">{fileName}</span>
              <span className="ml-auto text-[10px] shrink-0">273 MB</span>
            </div>
          </div>

          {/* tabs */}
          <div className="flex border-b border-border">
            {(["signup", "login"] as Mode[]).map((m) => (
              <button
                key={m}
                onClick={() => { setMode(m); reset(); }}
                className={`flex-1 py-3 text-xs font-semibold uppercase tracking-widest transition-colors ${
                  mode === m
                    ? "text-crimson-glow border-b-2 border-crimson -mb-px"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {m === "signup" ? "Create Account" : "Sign In"}
              </button>
            ))}
          </div>

          {/* form */}
          <form onSubmit={handleSubmit} className="px-7 py-6 space-y-4">
            <p className="text-xs text-muted-foreground leading-relaxed">
              {mode === "signup"
                ? "Create a free account to download F.R.I.D.A.Y. We only store your email and username."
                : "Sign in to your account to start your download."}
            </p>

            {/* email */}
            <div className="space-y-1.5">
              <label className="text-[10px] uppercase tracking-widest text-muted-foreground">Email</label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-muted-foreground" />
                <input
                  type="email"
                  autoComplete="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  className="w-full rounded-lg border border-border bg-[oklch(0.15_0.005_270)] pl-9 pr-4 py-2.5 text-sm outline-none focus:border-crimson/50 focus:ring-1 focus:ring-crimson/20 placeholder:text-muted-foreground/50 transition-colors"
                />
              </div>
            </div>

            {/* username — signup only */}
            {mode === "signup" && (
              <div className="space-y-1.5">
                <label className="text-[10px] uppercase tracking-widest text-muted-foreground">Username</label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-muted-foreground" />
                  <input
                    type="text"
                    autoComplete="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="your_username"
                    className="w-full rounded-lg border border-border bg-[oklch(0.15_0.005_270)] pl-9 pr-4 py-2.5 text-sm outline-none focus:border-crimson/50 focus:ring-1 focus:ring-crimson/20 placeholder:text-muted-foreground/50 transition-colors"
                  />
                </div>
              </div>
            )}

            {/* password */}
            <div className="space-y-1.5">
              <label className="text-[10px] uppercase tracking-widest text-muted-foreground">Password</label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-muted-foreground" />
                <input
                  type={showPassword ? "text" : "password"}
                  autoComplete={mode === "signup" ? "new-password" : "current-password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder={mode === "signup" ? "Min. 8 characters" : "••••••••"}
                  className="w-full rounded-lg border border-border bg-[oklch(0.15_0.005_270)] pl-9 pr-10 py-2.5 text-sm outline-none focus:border-crimson/50 focus:ring-1 focus:ring-crimson/20 placeholder:text-muted-foreground/50 transition-colors"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                >
                  {showPassword ? <EyeOff className="h-3.5 w-3.5" /> : <Eye className="h-3.5 w-3.5" />}
                </button>
              </div>
            </div>

            {/* error */}
            {error && (
              <div className="rounded-lg border border-crimson/30 bg-crimson/10 px-3 py-2.5 text-xs text-crimson-glow">
                {error}
              </div>
            )}

            {/* success */}
            {success && (
              <div className="flex items-start gap-2 rounded-lg border border-emerald-sys/30 bg-emerald-sys/10 px-3 py-2.5 text-xs text-emerald-sys">
                <CheckCircle2 className="h-3.5 w-3.5 mt-0.5 shrink-0" />
                {success}
              </div>
            )}

            {/* submit */}
            <button
              type="submit"
              disabled={loading || !!success}
              className="w-full flex items-center justify-center gap-2 rounded-xl bg-crimson py-3 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-glow-crimson)] hover:brightness-110 disabled:opacity-60 disabled:cursor-not-allowed transition-all"
            >
              {loading ? (
                <Loader2 className="h-4 w-4 animate-spin" />
              ) : success ? (
                <CheckCircle2 className="h-4 w-4" />
              ) : (
                <Download className="h-4 w-4" />
              )}
              {loading ? "Please wait…" : success ? "Starting download…" : mode === "signup" ? "Create Account & Download" : "Sign In & Download"}
            </button>

            <p className="text-center text-[10px] text-muted-foreground">
              {mode === "signup" ? "Already have an account? " : "Don't have an account? "}
              <button
                type="button"
                onClick={() => { setMode(mode === "signup" ? "login" : "signup"); reset(); }}
                className="text-crimson-glow hover:underline"
              >
                {mode === "signup" ? "Sign in" : "Sign up"}
              </button>
            </p>

            <p className="text-center text-[10px] text-muted-foreground/60">
              🔒 We only store your email and username. Your data is secured by Appwrite.
            </p>
          </form>
        </div>
      </div>
    </>
  );
}
