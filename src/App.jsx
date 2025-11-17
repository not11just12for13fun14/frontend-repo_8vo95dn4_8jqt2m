import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Showcase from './components/Showcase'
import CTA from './components/CTA'

function App() {
  return (
    <div className="bg-white text-neutral-900">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Showcase />
        <CTA />
      </main>
      <footer className="border-t border-neutral-200 py-10">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-neutral-600">
          <div>© {new Date().getFullYear()} netomate — Minden jog fenntartva</div>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-neutral-900">Impresszum</a>
            <a href="#" className="hover:text-neutral-900">Adatvédelem</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
