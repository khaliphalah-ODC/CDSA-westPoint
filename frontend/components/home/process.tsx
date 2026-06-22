import { Hammer, HeartHandshake, Lightbulb, Sprout } from "lucide-react"

const steps = [
  { icon: Lightbulb, label: "Plan & Design" },
  { icon: Hammer, label: "Build & Implement" },
  { icon: HeartHandshake, label: "Educate & Empower" },
  { icon: Sprout, label: "Grow Together" },
]

export function Process() {
  return (
    <section className="mx-auto max-w-[1280px] px-5 py-10 md:px-10 md:py-14">
      <h2 className="text-center font-heading text-xl font-extrabold uppercase tracking-widest text-cdsa-green dark:text-cdsa-lime">
        Our Process
      </h2>
      <div className="relative mt-12">
        <div className="absolute left-0 right-0 top-5 hidden h-px bg-cdsa-border md:block" aria-hidden="true" />
        <div className="grid gap-8 md:grid-cols-4">
          {steps.map(({ icon: Icon, label }, i) => (
            <div key={label} className="relative flex flex-col items-center text-center">
              <span className="relative z-10 flex size-10 items-center justify-center rounded-full border-2 border-cdsa-green bg-background text-cdsa-green dark:border-cdsa-lime dark:text-cdsa-lime">
                <Icon className="size-4" />
              </span>
              <p className="mt-4 text-xs font-bold uppercase tracking-wide text-cdsa-foreground">{label}</p>
              {i < steps.length - 1 && (
                <div className="mx-auto mt-4 h-8 w-px bg-cdsa-border md:hidden" aria-hidden="true" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
