import Link from "next/link"
import { budgetItems } from "./data"
import { MaterialSymbol } from "./material-symbol"
import { Container, SectionHeading } from "./section"

export function BudgetTransparency() {
  return (
    <section className="py-24 md:py-32">
      <Container>
        <SectionHeading title="Where Your Donation Goes" centered>
          <p>We believe in radical transparency. Every dollar is tracked and audited.</p>
        </SectionHeading>
        <div className="mb-12 grid gap-6 md:grid-cols-4">
          {budgetItems.map(([title, amount, detail]) => (
            <article
              key={title}
              className="rounded-xl border border-cdsa-border bg-cdsa-muted p-6 dark:bg-cdsa-surface"
            >
              <h3 className="mb-2 text-[14px] font-bold uppercase leading-[20px] tracking-[0.05em] text-cdsa-foreground-muted">
                {title}
              </h3>
              <p className="mb-1 font-display text-[24px] font-semibold leading-[32px] text-cdsa-green dark:text-cdsa-lime">
                {amount}
              </p>
              <p className="text-xs italic text-cdsa-foreground-muted">{detail}</p>
            </article>
          ))}
        </div>

        <div className="relative overflow-hidden rounded-2xl bg-cdsa-green p-8 text-cdsa-lime dark:bg-cdsa-surface md:p-10">
          <div className="relative z-10 items-center justify-between gap-12 md:flex">
            <div className="mb-8 flex-1 md:mb-0">
              <h3 className="mb-4 font-display text-[32px] font-semibold leading-[40px]">
                Total Project Goal: $300,000
              </h3>
              <div className="mb-4 h-4 w-full rounded-full bg-white/20">
                <div className="h-full w-[65%] rounded-full bg-cdsa-lime" />
              </div>
              <div className="flex justify-between text-[14px] font-bold uppercase leading-[20px] tracking-[0.05em]">
                <span>$195,000 Raised</span>
                <span>$105,000 to go</span>
              </div>
            </div>
            <Link
              href="/contact"
              className="flex items-center justify-center gap-3 rounded-full bg-cdsa-lime px-10 py-5 text-[14px] font-bold uppercase leading-[20px] tracking-[0.05em] text-[#1a1e00] transition-transform hover:scale-105"
            >
              <MaterialSymbol name="picture_as_pdf" />
              Download Detailed Budget PDF
            </Link>
          </div>
        </div>
      </Container>
    </section>
  )
}
