const works = [
  { title: 'Minimalista portfólió', tag: 'UI/UX', img: 'https://images.unsplash.com/photo-1483058712412-4245e9b90334?q=80&w=1470&auto=format&fit=crop' },
  { title: 'Kreatív ügynökség', tag: 'Weboldal', img: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1470&auto=format&fit=crop' },
  { title: 'Tech startup', tag: 'Arculat', img: 'https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=1470&auto=format&fit=crop' }
]

export default function Showcase() {
  return (
    <section id="munkak" className="py-20 bg-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-neutral-900">Válogatott munkáink</h2>
          <p className="mt-3 text-neutral-600">Példák a letisztult, stratégiai megközelítésünkre.</p>
        </div>

        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {works.map((w) => (
            <div key={w.title} className="group rounded-2xl overflow-hidden border border-neutral-200">
              <div className="aspect-[4/3] overflow-hidden">
                <img src={w.img} alt={w.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div className="p-4">
                <div className="text-xs text-neutral-500">{w.tag}</div>
                <div className="font-medium text-neutral-900">{w.title}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
