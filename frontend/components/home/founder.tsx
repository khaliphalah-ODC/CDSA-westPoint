export function Founder() {
  return (
    <section id="founder" className="mx-auto max-w-6xl px-4 py-6 sm:px-6">
      <div className="overflow-hidden rounded-4xl border border-border/70 bg-card p-8 sm:p-10 lg:p-12">
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
          A Message from Our Founder
        </span>
        <blockquote className="mt-5 max-w-2xl space-y-4 text-pretty text-base leading-relaxed text-foreground sm:text-lg">
          <p>
            &ldquo;CDSA was founded on a simple belief: every child in West Point deserves a safe
            place to learn, grow, and dream. The Container School Project is our commitment to
            making that belief a reality.&rdquo;
          </p>
          <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
            Together with our community, volunteers, and donors, we are building more than
            classrooms — we are building futures.
          </p>
        </blockquote>
        <div className="mt-8 flex items-center gap-3">
          <span
            aria-hidden="true"
            className="flex size-11 items-center justify-center rounded-full bg-primary font-heading text-primary-foreground"
          >
            C
          </span>
          <div className="leading-tight">
            <p className="font-heading text-sm font-semibold text-foreground">Founder</p>
            <p className="text-xs text-muted-foreground">Child Development Scholars Academy</p>
          </div>
        </div>
      </div>
    </section>
  )
}
