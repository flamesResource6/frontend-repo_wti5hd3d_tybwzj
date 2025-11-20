import { Sparkles, Cpu, Shield, Zap } from 'lucide-react'

const features = [
  {
    icon: Sparkles,
    title: 'Neon Aesthetic',
    desc: 'High-contrast glow, dramatic lighting, and futuristic typography for instant wow.',
  },
  {
    icon: Cpu,
    title: 'Performance First',
    desc: 'Lightweight layout with smooth animations and optimized assets.',
  },
  {
    icon: Shield,
    title: 'Accessible',
    desc: 'Thoughtful contrast and motion balance for an inclusive experience.',
  },
  {
    icon: Zap,
    title: 'Interactive',
    desc: 'Micro-interactions and subtle parallax to keep visitors engaged.',
  },
]

export default function Features() {
  return (
    <section id="features" className="relative z-10 mx-auto max-w-7xl px-6 py-24">
      <div className="mx-auto mb-12 max-w-2xl text-center">
        <h2 className="text-3xl font-bold text-white sm:text-4xl">Built to impress</h2>
        <p className="mt-3 text-emerald-100/75">
          Clean structure, glowing accents, and a forward-looking visual language.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {features.map(({ icon: Icon, title, desc }) => (
          <div
            key={title}
            className="group relative overflow-hidden rounded-2xl border border-emerald-400/20 bg-slate-900/60 p-6 shadow-2xl backdrop-blur transition hover:border-emerald-400/40 hover:shadow-[0_0_30px_rgba(16,185,129,0.25)]"
          >
            <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-500/10 ring-1 ring-emerald-400/40">
              <Icon className="h-5 w-5 text-emerald-300 drop-shadow-[0_0_8px_#34d399]" />
            </div>
            <h3 className="mb-2 text-lg font-semibold text-white">{title}</h3>
            <p className="text-sm text-emerald-100/75">{desc}</p>
            <div className="pointer-events-none absolute -left-10 -top-10 h-40 w-40 rounded-full bg-emerald-400/10 blur-2xl transition-all group-hover:scale-125" />
          </div>
        ))}
      </div>
    </section>
  )
}
