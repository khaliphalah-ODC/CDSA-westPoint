import { benefits } from "./data"
import { MaterialSymbol } from "./material-symbol"
import { Container, SectionHeading } from "./section"

export function ContainerBenefits() {
  return (
    <section className="bg-cdsa-muted/50 py-24 dark:bg-cdsa-surface/50 md:py-32">
      <Container>
        <SectionHeading title="Why Shipping Containers?" centered>
          <p>
            Innovative, modular, and resilient-repurposed containers provide the perfect foundation for
            sustainable infrastructure in coastal Africa.
          </p>
        </SectionHeading>
        <div className="grid gap-8 md:grid-cols-3">
          {benefits.map(([icon, title, text]) => (
            <article
              key={title}
              className="rounded-xl border border-cdsa-border bg-cdsa-surface p-8 transition-shadow hover:shadow-md dark:bg-cdsa-muted"
            >
              <div className="mb-6 flex size-14 items-center justify-center rounded-xl bg-cdsa-green/10 text-cdsa-green dark:text-cdsa-lime">
                <MaterialSymbol name={icon} className="text-3xl" />
              </div>
              <h3 className="mb-3 font-display text-[24px] font-semibold leading-[32px] text-cdsa-foreground">
                {title}
              </h3>
              <p className="text-[16px] leading-[24px] text-cdsa-foreground-muted">{text}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  )
}
