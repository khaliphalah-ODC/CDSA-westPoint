import { faqs } from "./data"
import { MaterialSymbol } from "./material-symbol"

export function ProjectFaq() {
  return (
    <section className="mx-auto max-w-3xl px-5 py-24 md:py-32">
      <h2 className="mb-12 text-center font-display text-[32px] font-semibold leading-[40px] text-cdsa-green dark:text-cdsa-lime md:text-[48px] md:leading-[56px]">
        Frequently Asked Questions
      </h2>
      <div className="space-y-4">
        {faqs.map(([question, answer]) => (
          <details
            key={question}
            className="group rounded-xl border border-cdsa-border bg-cdsa-surface transition-all duration-300 open:bg-cdsa-muted dark:bg-cdsa-muted dark:open:bg-cdsa-surface"
          >
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-6">
              <span className="text-[14px] font-bold uppercase leading-[20px] tracking-[0.05em] text-cdsa-foreground">
                {question}
              </span>
              <MaterialSymbol name="expand_more" className="shrink-0 transition-transform group-open:rotate-180" />
            </summary>
            <div className="px-6 pb-6 text-[16px] leading-[24px] text-cdsa-foreground-muted">{answer}</div>
          </details>
        ))}
      </div>
    </section>
  )
}
