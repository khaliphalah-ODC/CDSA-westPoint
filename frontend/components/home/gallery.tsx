import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const highlights = [
  { value: "1,200+", label: "Students to be served" },
  { value: "24", label: "Planned classrooms" },
  { value: "65%", label: "Funding raised" },
  { value: "Q4 2025", label: "Target completion" },
]

export function Gallery() {
  return (
    <section id="impact" className="mx-auto max-w-6xl px-4 py-6 sm:px-6">
      <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
        <div>
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
            Project Impact
          </span>
          <h2 className="mt-3 text-balance font-heading text-3xl font-semibold leading-tight text-foreground sm:text-4xl">
            The Container School Project at a glance.
          </h2>
        </div>
        <Button
          render={<Link href="/projects/container" />}
          nativeButton={false}
          variant="outline"
          className="rounded-full bg-card px-5"
        >
          View Full Project
          <ArrowRight className="size-4" />
        </Button>
      </div>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {highlights.map((item) => (
          <div
            key={item.label}
            className="rounded-3xl border border-border/70 bg-card p-6 text-center"
          >
            <p className="font-heading text-3xl font-semibold text-primary">{item.value}</p>
            <p className="mt-2 text-sm text-muted-foreground">{item.label}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
