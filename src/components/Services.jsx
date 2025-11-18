import { Palette, Laptop, Rocket, Wrench } from 'lucide-react'

const services = [
  {
    icon: Palette,
    title: 'Webdesign',
    desc: 'Letisztult, márkádhoz illő design — stratégiai gondolkodással.'
  },
  {
    icon: Laptop,
    title: 'Webfejlesztés',
    desc: 'Gyors, reszponzív és keresőbarát weboldalak modern technológiákkal.'
  },
  {
    icon: Rocket,
    title: 'SEO & Teljesítmény',
    desc: 'Gyors betöltés, technikai SEO és analitika az eredményekért.'
  },
  {
    icon: Wrench,
    title: 'Támogatás',
    desc: 'Karbantartás, frissítések, fejlesztések — hosszú távon is.'
  }
]

export default function Services() {
  return (
    <section id="szolgaltatasok" className="relative py-20 bg-white">
      <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[#0E76FD]/5 to-transparent pointer-events-none" />

      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-neutral-900">Szolgáltatások</h2>
          <p className="mt-3 text-neutral-600">Mindig az üzleti célokra fókuszálunk — ettől lesz a weboldal nem csak szép, hanem eredményes is.</p>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s) => (
            <div key={s.title} className="rounded-2xl border border-neutral-200 p-6 hover:shadow-sm transition bg-white">
              <div className="inline-flex items-center justify-center h-10 w-10 rounded-xl bg-[#0E76FD]/10 text-[#0E76FD]">
                <s.icon className="w-5 h-5" />
              </div>
              <h3 className="mt-4 font-medium text-neutral-900">{s.title}</h3>
              <p className="mt-2 text-sm text-neutral-600">{s.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-2xl border border-dashed border-[#0E76FD]/30 p-6 text-sm text-neutral-600">
          Tipp: minden projektünk mérhető céllal indul. Workshop, kutatás, prototípus — aztán jöhet a fejlesztés. <span className="text-neutral-900 font-medium">Átlátható folyamat, tiszta eredmények.</span>
        </div>
      </div>
    </section>
  )
}
