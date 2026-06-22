import Link from "next/link"
import { cn } from "@/lib/utils"
import { site } from "@/lib/site"

export function Logo({ className }: { className?: string }) {
  return (
    <Link
      href="/"
      className={cn("group flex items-center gap-3", className)}
      aria-label="CDSA home"
    >
      <span
        aria-hidden="true"
        className="flex size-10 items-center justify-center rounded-xl bg-cdsa-green text-sm font-bold text-white"
      >
        C
      </span>
      <span className="flex flex-col leading-tight">
        <span className="text-base font-bold tracking-tight text-cdsa-green dark:text-cdsa-lime">
          {site.name}
        </span>
        <span className="hidden text-[10px] font-medium uppercase tracking-[0.12em] text-cdsa-foreground-muted sm:block">
          Child Development Scholars Academy
        </span>
      </span>
    </Link>
  )
}
