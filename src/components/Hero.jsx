import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden">
      {/* Neon gradient backdrop */}
      <div className="pointer-events-none absolute inset-0 bg-slate-950" />

      {/* Spline cover */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/BL9Cjn3fkAdLBhXm/scene.splinecode" />
      </div>

      {/* Overlay gradient for readability */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(80%_60%_at_50%_0%,rgba(16,185,129,0.35),transparent_60%),linear-gradient(to_top,rgba(2,6,23,0.7),transparent_40%)]" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-[90vh] max-w-7xl items-center px-6">
        <div className="max-w-2xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-slate-900/50 px-3 py-1 text-emerald-200 backdrop-blur">
            <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400 shadow-[0_0_12px_#34d399]" />
            Live Neon • Cyberpunk Vibes
          </div>
          <h1 className="mb-4 text-5xl font-extrabold tracking-tight text-white sm:text-6xl">
            Illuminate your launch with a neon-futuristic presence
          </h1>
          <p className="mb-8 text-lg text-emerald-100/80">
            A sleek, high-contrast landing experience inspired by cyberpunk aesthetics. Showcase your product with glowing accents and immersive motion.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <a
              href="#pricing"
              className="group relative inline-flex items-center justify-center gap-2 rounded-full bg-emerald-500/20 px-6 py-3 font-semibold text-emerald-100 ring-1 ring-emerald-400/60 transition hover:bg-emerald-500/30 hover:text-white hover:shadow-[0_0_30px_rgba(16,185,129,0.45)]"
            >
              Get Started
              <span className="absolute inset-0 -z-10 rounded-full bg-emerald-400/20 blur-xl" />
            </a>
            <a
              href="#features"
              className="inline-flex items-center justify-center rounded-full border border-emerald-400/30 px-6 py-3 text-emerald-100 transition hover:border-emerald-400/60 hover:text-white"
            >
              Explore Features
            </a>
          </div>
        </div>
      </div>

      {/* Glow edges */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-slate-950 to-transparent" />
    </section>
  )
}
