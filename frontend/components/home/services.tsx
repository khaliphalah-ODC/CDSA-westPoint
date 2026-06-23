import Link from "next/link"
import { ArrowRight, BookOpen, HandHeart, School } from "lucide-react"
import { Button } from "@/components/ui/button"

const services = [
  {
    icon: School,
    title: "Container School Project",
    items: [
      "24 modular classrooms",
      "Solar-powered learning facilities",
      "Library & media center",
      "Safe, ventilated spaces for students",
    ],
  },
  {
    icon: BookOpen,
    title: "Education Programs",
    items: [
      "Quality curriculum support",
      "Teacher training initiatives",
      "IT lab with solar-powered devices",
      "Student enrichment activities",
    ],
  },
  {
    icon: HandHeart,
    title: "Community Engagement",
    items: [
      "Local volunteer programs",
      "Parent & community partnerships",
      "Transparent fundraising",
      "Sustainable infrastructure planning",
    ],
  },
]

export function Services() {
  return (
    <section id="services" className="mx-auto max-w-6xl px-4 py-6 sm:px-6">
      <div className="grid gap-4 lg:grid-cols-[0.8fr_1.2fr] lg:items-stretch">
        <div className="flex flex-col justify-between rounded-4xl bg-primary p-8 text-primary-foreground sm:p-10">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary-foreground/60">
              Our Work
            </span>
            <h2 className="mt-4 text-balance font-heading text-3xl font-semibold leading-tight sm:text-4xl">
              Education infrastructure that lasts.
            </h2>
            <p className="mt-5 text-pretty text-sm leading-relaxed text-primary-foreground/70">
              From container classrooms to community programs, CDSA delivers practical solutions
              that put children first.
            </p>
          </div>
          <Button
            render={<Link href="/container-project" />}
            nativeButton={false}
            variant="secondary"
            className="mt-8 w-fit rounded-full px-6"
          >
            Learn About the Project
            <ArrowRight className="size-4" />
          </Button>
        </div>

        <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
          {services.map(({ icon: Icon, title, items }) => (
            <div
              key={title}
              className="flex flex-col rounded-4xl border border-border/70 bg-card p-6"
            >
              <span className="flex size-11 items-center justify-center rounded-2xl bg-butter text-butter-foreground">
                <Icon className="size-5" />
              </span>
              <h3 className="mt-5 font-heading text-lg font-semibold text-foreground">
                {title}
              </h3>
              <ul className="mt-4 space-y-2.5">
                {items.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 text-sm leading-relaxed text-muted-foreground"
                  >
                    <span
                      aria-hidden="true"
                      className="mt-1.5 size-1.5 shrink-0 rounded-full bg-blush-foreground"
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
