import Image from "next/image"

export function OurStoryHero() {
  return (
    <header className="relative w-full bg-gradient-to-r from-cdsa-green-dark/60 to-transparent">
      <div className="relative mx-auto max-w-[1280px] px-5 py-24 md:py-32 md:px-10">
        <div className="grid gap-8 md:grid-cols-2 items-center">
          <div className="order-2 md:order-1">
            <span className="inline-block rounded-full bg-cdsa-lime px-3 py-1 text-xs font-bold text-[#1a1e00]">ESTABLISHED 2018</span>
            <h1 className="mt-6 font-heading text-3xl font-extrabold leading-tight text-foreground sm:text-4xl md:text-5xl">
              Our Journey: Empowering West Point Through Education
            </h1>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-foreground-muted">
              What began as a single classroom and a handful of donated books has grown into a
              community-led movement to provide safe, quality education to children in West Point.
            </p>
          </div>

          <div className="order-1 md:order-2">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl shadow-lg">
              <Image
                src="/images/container-school.jpg"
                alt="Founder with students in West Point"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
