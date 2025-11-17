import { Menu, Phone } from 'lucide-react'
import { useState } from 'react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 inset-x-0 z-40 backdrop-blur-md bg-white/60 border-b border-neutral-200/60">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="h-16 flex items-center justify-between">
          <a href="#" className="font-semibold tracking-tight text-neutral-900 text-lg">netomate</a>

          <nav className="hidden md:flex items-center gap-8 text-sm text-neutral-700">
            <a href="#szolgaltatasok" className="hover:text-neutral-900 transition-colors">Szolgáltatások</a>
            <a href="#munkak" className="hover:text-neutral-900 transition-colors">Munkáink</a>
            <a href="#folyamat" className="hover:text-neutral-900 transition-colors">Folyamat</a>
            <a href="#kapcsolat" className="hover:text-neutral-900 transition-colors">Kapcsolat</a>
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a href="#kapcsolat" className="inline-flex items-center gap-2 rounded-full bg-neutral-900 text-white px-4 py-2 text-sm hover:bg-neutral-800 transition-colors">
              <Phone className="w-4 h-4" />
              Ingyenes konzultáció
            </a>
          </div>

          <button aria-label="Menü" className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-full hover:bg-neutral-100" onClick={() => setOpen(!open)}>
            <Menu className="w-5 h-5" />
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4 space-y-2">
            <a href="#szolgaltatasok" className="block px-3 py-2 rounded-lg hover:bg-neutral-100">Szolgáltatások</a>
            <a href="#munkak" className="block px-3 py-2 rounded-lg hover:bg-neutral-100">Munkáink</a>
            <a href="#folyamat" className="block px-3 py-2 rounded-lg hover:bg-neutral-100">Folyamat</a>
            <a href="#kapcsolat" className="block px-3 py-2 rounded-lg hover:bg-neutral-100">Kapcsolat</a>
            <a href="#kapcsolat" className="block px-3 py-2 rounded-lg bg-neutral-900 text-white text-center">Ingyenes konzultáció</a>
          </div>
        )}
      </div>
    </header>
  )
}
