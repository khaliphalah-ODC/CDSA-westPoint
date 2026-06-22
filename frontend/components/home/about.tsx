const tags = [
  "Education",
  "Sustainability",
  "Community",
  "West Point",
]

export function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-4 py-6 sm:px-6">
      <div className="overflow-hidden rounded-4xl bg-blush p-8 text-blush-foreground sm:p-10 lg:p-12">
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-blush-foreground/70">
          About CDSA
        </span>
        <h2 className="mt-3 max-w-xl text-balance font-heading text-3xl font-semibold leading-tight sm:text-4xl">
          Building schools, nurturing leaders, strengthening communities.
        </h2>
        <p className="mt-5 max-w-2xl text-pretty text-sm leading-relaxed text-blush-foreground/80 sm:text-base">
          Child Development Scholars Academy is a registered non-profit dedicated to expanding
          access to quality education in Liberia. Through the Container School Project, we are
          transforming shipping containers into safe, modern classrooms for children who need them most.
        </p>
        <div className="mt-7 flex flex-wrap gap-2.5">
          {tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-card/70 px-3.5 py-1.5 text-xs font-medium text-foreground"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
