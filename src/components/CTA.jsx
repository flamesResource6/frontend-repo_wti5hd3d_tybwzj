export default function CTA() {
  return (
    <section id="pricing" className="relative z-10 mx-auto max-w-7xl px-6 py-24">
      <div className="relative overflow-hidden rounded-3xl border border-emerald-400/30 bg-slate-900/70 p-10 text-center shadow-2xl backdrop-blur">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_80%_at_50%_0%,rgba(16,185,129,0.25),transparent_60%)]" />
        <h3 className="relative z-10 text-3xl font-bold text-white">Ready to glow?</h3>
        <p className="relative z-10 mx-auto mt-3 max-w-2xl text-emerald-100/75">
          Launch a striking, modern landing page in minutes. Make your brand unforgettable with a neon glow feel.
        </p>
        <div className="relative z-10 mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href="#"
            className="group relative inline-flex items-center justify-center rounded-full bg-emerald-500/20 px-6 py-3 font-semibold text-emerald-100 ring-1 ring-emerald-400/60 transition hover:bg-emerald-500/30 hover:text-white hover:shadow-[0_0_30px_rgba(16,185,129,0.45)]"
          >
            Start Free
            <span className="absolute inset-0 -z-10 rounded-full bg-emerald-400/20 blur-xl" />
          </a>
          <a
            href="#"
            className="inline-flex items-center justify-center rounded-full border border-emerald-400/30 px-6 py-3 text-emerald-100 transition hover:border-emerald-400/60 hover:text-white"
          >
            Contact Sales
          </a>
        </div>
      </div>
    </section>
  )
}
