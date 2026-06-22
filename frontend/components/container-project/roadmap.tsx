import { roadmap } from "./data"
import { Container } from "./section"

export function Roadmap() {
  return (
    <section className="overflow-hidden bg-cdsa-green/5 py-24 dark:bg-cdsa-surface/30 md:py-32">
      <Container>
        <h2 className="mb-16 font-display text-[32px] font-semibold leading-[40px] text-cdsa-green dark:text-cdsa-lime md:text-[48px] md:leading-[56px]">
          Project Roadmap
        </h2>
        <div className="relative flex flex-col items-start justify-between gap-8 md:flex-row md:items-center md:gap-0">
          <div className="absolute left-0 top-1/2 -z-10 hidden h-0.5 w-full bg-cdsa-border md:block" />
          {roadmap.map(([phase, date, status, type]) => (
            <div key={phase} className="relative flex-1 px-4 text-left md:text-center">
              <div
                className={
                  type === "active"
                    ? "relative z-10 mb-3 size-6 animate-pulse rounded-full border-2 border-cdsa-green bg-cdsa-lime md:mx-auto dark:border-cdsa-lime"
                    : type === "done"
                      ? "relative z-10 mb-4 size-4 rounded-full bg-cdsa-green shadow-[0_0_0_8px_rgba(31,107,66,0.1)] md:mx-auto dark:bg-cdsa-lime"
                      : "relative z-10 mb-4 size-4 rounded-full bg-cdsa-border md:mx-auto"
                }
              />
              <h3
                className={
                  type === "upcoming"
                    ? "text-[14px] font-bold uppercase leading-[20px] tracking-[0.05em] text-cdsa-foreground-muted"
                    : "text-[14px] font-bold uppercase leading-[20px] tracking-[0.05em] text-cdsa-foreground"
                }
              >
                {phase}
              </h3>
              <p className="mb-2 text-xs text-cdsa-foreground-muted">{date}</p>
              <span
                className={
                  type === "active"
                    ? "rounded bg-cdsa-lime/20 px-2 py-0.5 text-[10px] font-bold uppercase text-cdsa-green dark:text-cdsa-lime"
                    : type === "done"
                      ? "rounded bg-cdsa-green/10 px-2 py-0.5 text-[10px] font-bold uppercase text-cdsa-green dark:text-cdsa-lime"
                      : "rounded bg-cdsa-muted px-2 py-0.5 text-[10px] font-bold uppercase text-cdsa-foreground-muted"
                }
              >
                {status}
              </span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
