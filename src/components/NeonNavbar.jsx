import { useState } from 'react'
import { Menu, X, Sparkles } from 'lucide-react'

export default function NeonNavbar() {
  const [open, setOpen] = useState(false)

  const navItems = [
    { label: 'Features', href: '#features' },
    { label: 'About', href: '#about' },
    { label: 'Pricing', href: '#pricing' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 flex h-14 items-center justify-between rounded-full border border-emerald-400/20 bg-slate-900/60 px-4 backdrop-blur-xl">
          {/* Brand */}
          <a href="#" className="group inline-flex items-center gap-2">
            <div className="relative">
              <span className="absolute inset-0 rounded-full bg-emerald-400/30 blur-md" />
              <Sparkles className="relative h-6 w-6 text-emerald-400 drop-shadow-[0_0_12px_#34d399]" />
            </div>
            <span className="text-sm font-semibold tracking-wider text-white">NeonVerse</span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden gap-8 md:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm text-slate-300 transition hover:text-white"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Actions */}
          <div className="hidden items-center gap-3 md:flex">
            <a
              href="#"
              className="rounded-full border border-emerald-400/30 px-4 py-2 text-sm text-emerald-200 transition hover:border-emerald-400/60 hover:text-white hover:shadow-[0_0_20px_rgba(16,185,129,0.35)]"
            >
              Sign in
            </a>
            <a
              href="#"
              className="relative rounded-full bg-emerald-500/20 px-4 py-2 text-sm font-semibold text-emerald-200 shadow-[inset_0_0_20px_rgba(16,185,129,0.35)] ring-1 ring-emerald-400/50 transition hover:bg-emerald-500/30 hover:text-white hover:shadow-[0_0_25px_rgba(16,185,129,0.55)]"
            >
              Get Started
              <span className="absolute inset-0 -z-10 rounded-full bg-emerald-400/20 blur-xl" />
            </a>
          </div>

          {/* Mobile */}
          <button
            onClick={() => setOpen((v) => !v)}
            className="inline-flex items-center justify-center rounded-md p-2 text-slate-300 hover:text-white md:hidden"
            aria-label="Toggle Menu"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Drawer */}
        {open && (
          <div className="mt-2 overflow-hidden rounded-2xl border border-emerald-400/20 bg-slate-900/80 p-4 backdrop-blur-xl md:hidden">
            <nav className="flex flex-col gap-3">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-3 py-2 text-sm text-slate-200 transition hover:bg-emerald-500/10 hover:text-white"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
