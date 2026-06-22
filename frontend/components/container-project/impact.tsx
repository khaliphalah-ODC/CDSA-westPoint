import { MaterialSymbol } from "./material-symbol"
import { Container } from "./section"

const stats = [
  ["groups", "1,200", "Children Supported"],
  ["school", "45", "Trained Teachers"],
  ["local_library", "10,000+", "Books & Digital Resources"],
]

export function ImpactStats() {
  return (
    <section className="bg-cdsa-muted py-24 dark:bg-cdsa-surface md:py-32">
      <Container>
        <div className="grid gap-12 text-center md:grid-cols-3">
          {stats.map(([icon, value, label]) => (
            <div key={label}>
              <div className="mb-4 text-cdsa-green dark:text-cdsa-lime">
                <MaterialSymbol name={icon} fill className="text-6xl" />
              </div>
              <h3 className="font-display text-[48px] font-bold leading-[56px] text-cdsa-green dark:text-cdsa-lime md:text-[64px] md:leading-[72px] md:tracking-[-0.02em]">
                {value}
              </h3>
              <p className="font-display text-[24px] font-semibold leading-[32px] text-cdsa-foreground-muted">
                {label}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
