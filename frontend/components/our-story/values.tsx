const VALUES = [
  { key: "empowerment", label: "Empowerment", description: "Growth first" },
  { key: "resilience", label: "Resilience", description: "Overcoming odds" },
  { key: "community", label: "Community", description: "Strength in unity" },
  { key: "excellence", label: "Excellence", description: "Highest standards" },
  { key: "integrity", label: "Integrity", description: "Unwavering ethics" },
]

export function ValuesSection() {
  return (
    <section className="mx-auto max-w-[1280px] px-5 py-16 md:px-10 text-center">
      <h2 className="font-heading text-2xl font-semibold text-foreground mb-8">The Pillars of CDSA</h2>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-5">
        {VALUES.map((v) => (
          <article key={v.key} className="rounded-2xl border border-border/70 bg-card p-6">
            <div className="mb-4 flex items-center justify-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-cdsa-muted text-cdsa-green">
                <span className="text-xl font-bold">•</span>
              </div>
            </div>
            <h3 className="font-heading text-sm font-semibold text-foreground mb-1">{v.label}</h3>
            <p className="text-xs text-foreground-muted uppercase tracking-wider">{v.description}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
