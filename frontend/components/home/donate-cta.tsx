import Link from "next/link"
import { ArrowRight, Heart } from "lucide-react"

export function DonateCta() {
  return (
    <section id="news" className="mx-auto max-w-[1280px] px-5 pb-16 md:px-10">
      <div className="flex flex-col items-center justify-between gap-6 rounded-[2rem] bg-cdsa-green px-8 py-10 dark:bg-cdsa-surface sm:flex-row">
        <div className="flex items-center gap-4">
          <span className="flex size-14 items-center justify-center rounded-full bg-cdsa-lime text-[#1a1e00]">
            <Heart className="size-6 fill-current" />
          </span>
          <div>
            <p className="font-heading text-xl font-extrabold text-white dark:text-cdsa-lime">
              Support CDSA Today
            </p>
            <p className="text-sm text-white/70 dark:text-cdsa-foreground-muted">
              Your donation builds classrooms and changes lives.
            </p>
          </div>
        </div>
        <Link
          href="/get-involved"
          className="inline-flex items-center gap-2 rounded-full bg-cdsa-lime px-8 py-3.5 text-sm font-bold uppercase tracking-wide text-[#1a1e00] transition-transform hover:scale-105"
        >
          Donate Today
          <ArrowRight className="size-4" />
        </Link>
      </div>
    </section>
  )
}
