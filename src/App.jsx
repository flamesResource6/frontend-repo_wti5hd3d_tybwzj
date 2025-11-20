import NeonNavbar from './components/NeonNavbar'
import Hero from './components/Hero'
import Features from './components/Features'
import CTA from './components/CTA'

function App() {
  return (
    <div className="relative min-h-screen bg-slate-950 text-slate-100">
      {/* Grid and noise overlays for cyberpunk texture */}
      <div className="pointer-events-none fixed inset-0 z-0 bg-[linear-gradient(to_right,rgba(16,185,129,0.07)_1px,transparent_1px),linear-gradient(to_bottom,rgba(16,185,129,0.06)_1px,transparent_1px)] bg-[size:40px_40px]" />
      <div className="pointer-events-none fixed inset-0 z-0 opacity-30 mix-blend-soft-light" style={{backgroundImage:'radial-gradient(circle at 20% 10%, rgba(16,185,129,.25), transparent 35%), radial-gradient(circle at 80% 0%, rgba(59,130,246,.18), transparent 35%)'}} />

      <NeonNavbar />
      <main className="relative z-10">
        <Hero />
        <Features />
        <CTA />
      </main>

      {/* Footer */}
      <footer className="relative z-10 border-t border-emerald-400/10 bg-slate-950/80 py-10">
        <div className="mx-auto max-w-7xl px-6 text-center text-sm text-emerald-100/60">
          © {new Date().getFullYear()} NeonVerse. All rights reserved.
        </div>
      </footer>
    </div>
  )
}

export default App
