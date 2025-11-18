import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative min-h-[88vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/zhZFnwyOYLgqlLWk/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10">
        <div className="pt-28 sm:pt-32 lg:pt-36" />
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/70 backdrop-blur px-3 py-1 text-xs text-neutral-700">
              <span className="h-2 w-2 rounded-full bg-[#FFD166]" />
              Veszprém • Webdesigner ügynökség
            </div>
            <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-neutral-900">
              Tiszta, modern weboldalak, amik eredményt hoznak
            </h1>
            <p className="mt-4 text-neutral-700 text-lg">
              Segítünk márkádnak online kitűnni letisztult, gyors és mobilbarát weboldalakkal. Stratégia, design, fejlesztés — egy kézben.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a href="#kapcsolat" className="inline-flex items-center justify-center rounded-full bg-[#0E76FD] text-white px-6 py-3 text-sm hover:opacity-90 shadow-sm">
                Kérek ajánlatot
              </a>
              <a href="#munkak" className="inline-flex items-center justify-center rounded-full bg-white/80 backdrop-blur text-neutral-900 px-6 py-3 text-sm border border-white/50 hover:bg-white">
                Referenciák megtekintése
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white via-white/60 to-white/10" />
    </section>
  )
}
