import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

export function PagePlaceholder({
  title,
  description,
}: {
  title: string
  description: string
}) {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <SiteHeader />
      <main className="flex flex-1 items-center justify-center px-4 pb-24 pt-36 sm:px-6">
        <div className="w-full max-w-xl rounded-[2rem] border border-cdsa-border bg-cdsa-surface p-10 text-center sm:p-14 dark:bg-cdsa-muted">
          <span className="inline-flex items-center rounded-full bg-cdsa-lime/20 px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-cdsa-green dark:text-cdsa-lime">
            Coming Soon
          </span>
          <h1 className="mt-6 text-balance font-heading text-3xl font-semibold leading-tight text-cdsa-foreground sm:text-4xl">
            {title}
          </h1>
          <p className="mx-auto mt-4 max-w-md text-pretty text-sm leading-relaxed text-cdsa-foreground-muted sm:text-base">
            {description}
          </p>
          <Link
            href="/"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-cdsa-green px-6 py-3 text-sm font-bold text-white dark:bg-cdsa-lime dark:text-[#1a1e00]"
          >
            <ArrowLeft className="size-4" />
            Back to Home
          </Link>
        </div>
      </main>
      <SiteFooter />
    </div>
  )
}
