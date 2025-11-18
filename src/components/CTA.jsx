export default function CTA() {
  return (
    <section id="kapcsolat" className="py-20 bg-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="rounded-3xl border border-neutral-200 p-8 sm:p-12 text-center bg-gradient-to-br from-white via-[#FFD166]/20 to-[#0E76FD]/10">
          <h3 className="text-2xl sm:text-3xl font-semibold tracking-tight text-neutral-900">Kezdjük el a beszélgetést</h3>
          <p className="mt-3 text-neutral-700">Veszprémben és országosan is dolgozunk. Írj pár sort a projektedről — 24 órán belül válaszolunk.</p>
          <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
            <a href="mailto:hello@netomate.hu" className="inline-flex items-center justify-center rounded-full bg-[#0E76FD] text-white px-6 py-3 text-sm hover:opacity-90 shadow-sm">hello@netomate.hu</a>
            <a href="tel:+36301234567" className="inline-flex items-center justify-center rounded-full bg-white text-neutral-900 px-6 py-3 text-sm border border-neutral-200 hover:bg-neutral-50">+36 30 123 4567</a>
          </div>
          <p className="mt-6 text-xs text-neutral-500">Első konzultáció ingyenes. Nincs kötöttség.</p>
        </div>
      </div>
    </section>
  )
}
