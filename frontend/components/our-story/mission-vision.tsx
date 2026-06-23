export function MissionVision() {
  return (
    <section className="bg-surface-container py-16">
      <div className="mx-auto max-w-[1280px] px-5 md:px-10">
        <div className="grid gap-8 md:grid-cols-2 items-center">
          <div className="order-2 md:order-1">
            <h3 className="font-heading text-xl font-semibold text-foreground">Our Mission</h3>
            <p className="mt-3 text-foreground-muted">
              To provide safe, transformative learning environments in West Point, breaking cycles
              of illiteracy through rigorous education and holistic support for children and families.
            </p>
          </div>

          <div className="order-1 md:order-2">
            <h3 className="font-heading text-xl font-semibold text-foreground">Our Vision</h3>
            <p className="mt-3 text-foreground-muted">
              A hopeful and educated West Point where every child possesses the tools to lead,
              innovate, and thrive in a global society.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
