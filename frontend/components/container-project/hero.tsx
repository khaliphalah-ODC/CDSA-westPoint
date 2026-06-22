import Link from "next/link"
import { schoolImages } from "@/lib/images"
import { heroStats } from "./data"
import { MaterialSymbol } from "./material-symbol"
import { Container } from "./section"

export function ContainerHero() {
  return (
    <section className="relative flex min-h-[700px] items-center overflow-hidden md:h-[921px]">
      <div className="absolute inset-0">
        <img
          src={schoolImages.containerSchool}
          alt="CDSA container school in West Point, Liberia."
          className="h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/30 to-transparent dark:from-background/95 dark:via-background/50" />
      </div>

      <Container className="relative z-10">
        <div className="max-w-2xl py-16">
          <span className="mb-6 inline-block rounded-full bg-cdsa-green px-4 py-1 text-[14px] font-bold uppercase leading-[20px] tracking-[0.05em] text-cdsa-lime dark:bg-cdsa-lime dark:text-[#1a1e00]">
            Impact Initiative 2024
          </span>
          <h1 className="mb-6 font-display text-[40px] font-bold leading-[48px] text-cdsa-green dark:text-cdsa-lime md:text-[64px] md:leading-[72px] md:tracking-[-0.02em]">
            Building a Brighter Future Through the Container School Project
          </h1>
          <p className="mb-10 max-w-xl text-[18px] leading-[28px] text-cdsa-foreground-muted">
            Help us transform shipping containers into safe, modern classrooms for children in West Point,
            Liberia. A sustainable solution for a growing generation.
          </p>

          <div className="mb-16 flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="group flex items-center gap-2 rounded-full bg-cdsa-green px-8 py-4 text-[14px] font-bold uppercase leading-[20px] tracking-[0.05em] text-white dark:bg-cdsa-lime dark:text-[#1a1e00]"
            >
              Donate to the Project
              <MaterialSymbol name="arrow_forward" className="transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="/contact"
              className="flex items-center gap-2 rounded-full border border-cdsa-border bg-cdsa-muted px-8 py-4 text-[14px] font-bold uppercase leading-[20px] tracking-[0.05em] text-cdsa-foreground"
            >
              Get Involved
              <MaterialSymbol name="volunteer_activism" />
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {heroStats.map(([eyebrow, value, label]) => (
              <div
                key={eyebrow}
                className="rounded-xl border border-cdsa-border bg-cdsa-surface/90 p-6 shadow-sm backdrop-blur-xl dark:bg-cdsa-muted/90"
              >
                <p className="mb-1 text-[14px] font-bold uppercase leading-[20px] tracking-[0.05em] text-cdsa-green/60 dark:text-cdsa-lime/60">
                  {eyebrow}
                </p>
                <p className="font-display text-[32px] font-semibold leading-[40px] text-cdsa-green dark:text-cdsa-lime">
                  {value}
                </p>
                <p className="text-xs font-bold uppercase tracking-[0.05em] text-cdsa-foreground-muted">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
