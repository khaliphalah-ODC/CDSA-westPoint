import Link from "next/link"
import { CalendarHeart, Compass, Heart, Lock, ShieldCheck } from "lucide-react"

const options = [
  {
    featured: false,
    icon: Heart,
    title: "Donate Once",
    description: "Make a one-time gift to support classrooms, supplies, and student programs in West Point.",
    cta: "Donate Once",
    href: "#contact",
  },
  {
    featured: true,
    icon: CalendarHeart,
    title: "Monthly Sponsor",
    description: "Sustain a scholar's education with a recurring monthly gift that funds tuition, meals, and learning materials.",
    cta: "Become a Monthly Sponsor",
    href: "#contact",
  },
  {
    featured: false,
    icon: Compass,
    title: "The Container Project",
    description: "Fund modular classrooms and learning labs built from shipping containers for children who need them most.",
    cta: "Fund the Project",
    href: "/projects/container",
  },
]

export function DonationOptions() {
  return (
    <section id="donate" className="bg-background py-16 md:py-24">
      <div className="mx-auto max-w-[1280px] px-5 md:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-heading text-3xl font-bold text-cdsa-green dark:text-cdsa-lime md:text-4xl">
            Invest in a Scholar&apos;s Future
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-cdsa-foreground-muted sm:text-base">
            Every contribution helps CDSA provide safe classrooms, dedicated teachers, and quality
            education for children in West Point, Liberia.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3 md:items-stretch">
          {options.map((option) => (
            <article
              key={option.title}
              className={
                option.featured
                  ? "relative flex flex-col rounded-[1.75rem] bg-cdsa-green p-8 text-white shadow-xl dark:bg-cdsa-surface md:-mt-4 md:mb-4"
                  : "flex flex-col rounded-[1.75rem] border border-cdsa-border bg-cdsa-surface p-8 dark:bg-cdsa-muted/40"
              }
            >
              {option.featured && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-cdsa-lime px-4 py-1 text-[10px] font-bold uppercase tracking-wider text-[#1a1e00]">
                  Most Impactful
                </span>
              )}
              <option.icon
                className={`mb-6 size-8 ${option.featured ? "text-cdsa-lime" : "text-cdsa-green dark:text-cdsa-lime"}`}
              />
              <h3
                className={`font-heading text-xl font-bold ${option.featured ? "text-white" : "text-cdsa-foreground"}`}
              >
                {option.title}
              </h3>
              <p
                className={`mt-3 flex-1 text-sm leading-relaxed ${option.featured ? "text-white/80" : "text-cdsa-foreground-muted"}`}
              >
                {option.description}
              </p>
              <Link
                href={option.href}
                className={
                  option.featured
                    ? "mt-8 inline-flex items-center justify-center rounded-full bg-cdsa-lime px-6 py-3 text-xs font-bold uppercase tracking-wide text-[#1a1e00] transition-transform hover:scale-105"
                    : "mt-8 inline-flex items-center justify-center rounded-full bg-cdsa-green px-6 py-3 text-xs font-bold uppercase tracking-wide text-white dark:bg-cdsa-lime dark:text-[#1a1e00]"
                }
              >
                {option.cta}
              </Link>
            </article>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-6 text-xs font-medium uppercase tracking-wide text-cdsa-foreground-muted">
          <div className="flex items-center gap-2">
            <Lock className="size-4 text-cdsa-green dark:text-cdsa-lime" />
            Secure Encryption
          </div>
          <div className="flex items-center gap-2">
            <ShieldCheck className="size-4 text-cdsa-green dark:text-cdsa-lime" />
            Top-Rated Nonprofit
          </div>
          <span className="text-cdsa-foreground-muted/60">Visa · Mastercard · PayPal</span>
        </div>
      </div>
    </section>
  )
}
