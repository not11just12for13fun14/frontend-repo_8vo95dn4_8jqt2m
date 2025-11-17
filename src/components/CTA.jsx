export default function CTA() {
  return (
    <section id="kapcsolat" className="py-20 bg-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="rounded-3xl border border-neutral-200 p-8 sm:p-12 text-center bg-gradient-to-br from-white to-red-50">
          <h3 className="text-2xl sm:text-3xl font-semibold tracking-tight text-neutral-900">Kezdjük el a beszélgetést</h3>
          <p className="mt-3 text-neutral-600">Veszprémben és országosan is dolgozunk. Írj pár sort a projektedről — 24 órán belül válaszolunk.</p>
          <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
            <a href="mailto:hello@netomate.hu" className="inline-flex items-center justify-center rounded-full bg-neutral-900 text-white px-6 py-3 text-sm hover:bg-neutral-800 transition-colors">hello@netomate.hu</a>
            <a href="tel:+36301234567" className="inline-flex items-center justify-center rounded-full bg-white text-neutral-900 px-6 py-3 text-sm border border-neutral-200 hover:bg-neutral-50 transition-colors">+36 30 123 4567</a>
          </div>
        </div>
      </div>
    </section>
  )
}
