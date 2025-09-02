"use client";

import Link from "next/link";
import { motion } from "framer-motion";

type LinkItem = {
  href: string;
  label: string;
  gradient: string;
  ring: string;
  icon: React.ReactNode;
};

export default function Home() {
  const links: LinkItem[] = [
    {
      href: "/kalkulator",
      label: "Kalkulator",
      gradient: "from-violet-500 to-fuchsia-500",
      ring: "ring-violet-400/40",
      icon: (
        <svg viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth="1.8">
          <rect x="4" y="3" width="16" height="18" rx="2" />
          <path d="M8 7h8M8 11h2M8 15h2M12 11h2M12 15h2M16 11h2M16 15h2" />
        </svg>
      ),
    },
    {
      href: "/form1",
      label: "User Form",
      gradient: "from-emerald-500 to-lime-500",
      ring: "ring-emerald-400/40",
      icon: (
        <svg viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth="1.8">
          <circle cx="12" cy="7" r="4" />
          <path d="M4 21a8 8 0 0 1 16 0" />
        </svg>
      ),
    },
    {
      href: "/api/products",
      label: "Get Products",
      gradient: "from-sky-500 to-cyan-400",
      ring: "ring-sky-400/40",
      icon: (
        <svg viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path d="M3 7l9-4 9 4-9 4-9-4Z" />
          <path d="M21 7v6l-9 4-9-4V7" />
        </svg>
      ),
    },
    {
      href: "/api/products/me",
      label: "Detail Products",
      gradient: "from-amber-500 to-orange-500",
      ring: "ring-amber-400/40",
      icon: (
        <svg viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path d="M21 21-3-3" />
          <path d="M10.5 20a8.5 8.5 0 1 1 8.5-8.5" />
          <circle cx="11" cy="11" r="3" />
        </svg>
      ),
    },
  ];

  return (
    <div className="relative min-h-svh flex items-center justify-center overflow-hidden bg-gray-950">
      <GridBackground />
      <MotionBlobs />

      <motion.main
        initial={{ opacity: 0, y: 18, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.45, ease: "easeOut" }}
        className="relative z-10 w-full max-w-xl"
      >
        <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-2xl shadow-black/40 p-8 md:p-10">
          <div className="mb-8 text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-white/80">
              <span className="size-1.5 rounded-full bg-green-400/90 shadow-[0_0_12px_2px_rgba(74,222,128,0.7)]" />
              Live preview
            </span>
            <h1 className="mt-4 text-3xl md:text-4xl font-extrabold tracking-tight text-white">
              My Project
            </h1>
            <p className="mt-2 text-sm md:text-base text-white/70">
              Akses cepat ke fitur favoritmu—tampilan lebih modern ✨
            </p>
          </div>

          <ul className="space-y-4">
            {links.map(({ href, label, gradient, ring, icon }, i) => (
              <li key={href}>
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.35, delay: 0.06 * i }}
                >
                  <Link
                    href={href}
                    aria-label={label}
                    className={[
                      "group relative block rounded-2xl p-px",
                      "focus:outline-none focus-visible:ring-2",
                      `focus-visible:${ring}`,
                    ].join(" ")}
                  >
                    {/* Gradient border glow */}
                    <span
                      className={["absolute inset-0 rounded-2xl opacity-80 blur bg-gradient-to-br", gradient].join(" ")}
                      aria-hidden
                    />
                    {/* Inner button */}
                    <span className="relative z-10 flex items-center justify-between rounded-2xl bg-gray-900/80 px-5 py-4 md:px-6 md:py-5 ring-1 ring-white/10 transition-all duration-300 group-hover:ring-white/25">
                      <span className="flex items-center gap-3">
                        <span
                          className={[
                            "flex size-10 items-center justify-center rounded-xl",
                            "bg-gradient-to-br text-white/90",
                            gradient,
                            "ring-1 ring-white/20",
                          ].join(" ")}
                        >
                          {icon}
                        </span>
                        <span className="text-white font-medium text-base md:text-lg">{label}</span>
                      </span>
                      <svg
                        viewBox="0 0 24 24"
                        className="size-5 text-white/70 transition-transform duration-300 group-hover:translate-x-0.5"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        aria-hidden
                      >
                        <path d="M5 12h14M13 5l7 7-7 7" />
                      </svg>
                    </span>
                    <span className="absolute inset-0 rounded-2xl transition-transform duration-300 group-hover:-translate-y-0.5" aria-hidden />
                  </Link>
                </motion.div>
              </li>
            ))}
          </ul>

          <div className="mt-8 flex items-center justify-between text-xs text-white/50">
            <span>v1.2 • Beautiful UI</span>
            <span>© {new Date().getFullYear()} You</span>
          </div>
        </div>
      </motion.main>
    </div>
  );
}

/** --- Decorative Components --- */
function GridBackground() {
  return (
    <>
      <div className="pointer-events-none absolute inset-0 [background:radial-gradient(circle_at_center,rgba(255,255,255,0.06),transparent_60%),linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:100%_100%,24px_24px,24px_24px] opacity-40" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(1200px_600px_at_50%_-10%,rgba(99,102,241,0.15),transparent),radial-gradient(1000px_500px_at_120%_10%,rgba(236,72,153,0.12),transparent),radial-gradient(1000px_500px_at_-20%_10%,rgba(16,185,129,0.12),transparent)]" />
    </>
  );
}

function MotionBlobs() {
  return (
    <>
      <motion.div
        className="absolute -top-24 -left-24 h-80 w-80 rounded-full bg-fuchsia-500/20 blur-3xl"
        animate={{ y: [0, 12, 0], x: [0, 8, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -bottom-24 -right-24 h-96 w-96 rounded-full bg-sky-500/20 blur-3xl"
        animate={{ y: [0, -16, 0], x: [0, -10, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
    </>
  );
}
