import { createFileRoute } from "@tanstack/react-router";
import { FridayLanding } from "@/components/friday/landing";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "F.R.I.D.A.Y — Desktop Intelligence for Power Users" },
      { name: "description", content: "A real AI operating-system assistant. Voice, vision, and native control across your machine — local-first, developer-ready." },
      { property: "og:title", content: "F.R.I.D.A.Y — Desktop Intelligence" },
      { property: "og:description", content: "Voice-controlled desktop automation, multimodal vision, codebase intelligence, and native system control." },
    ],
  }),
  component: FridayLanding,
});
