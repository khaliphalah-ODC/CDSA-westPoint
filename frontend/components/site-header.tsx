"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Heart, Menu, X } from "lucide-react"
import { Logo } from "@/components/logo"
import { ThemeToggle } from "@/components/theme-toggle"
import { navLinks } from "@/lib/site"

export function SiteHeader() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  const isActive = (href: string) => {
    if (href.startsWith("/#")) return false
    return pathname === href
  }

  const links =
    pathname === "/"
      ? navLinks
      : [{ label: "Home", href: "/" }, ...navLinks]

  return (
    <header className="fixed top-0 z-50 w-full border-b border-cdsa-border bg-background/90 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-[1280px] items-center justify-between gap-4 px-5 md:px-10">
        <Logo />

        <nav className="hidden items-center gap-6 lg:flex" aria-label="Main">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={
                isActive(link.href)
                  ? "text-sm font-bold text-cdsa-green dark:text-cdsa-lime"
                  : "text-sm font-medium text-cdsa-foreground-muted transition-colors hover:text-cdsa-green dark:hover:text-cdsa-lime"
              }
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle className="hidden sm:inline-flex" />
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-cdsa-green px-5 py-2.5 text-sm font-bold text-white transition-opacity hover:opacity-90 dark:bg-cdsa-lime dark:text-[#1a1e00]"
          >
            <Heart className="size-4 fill-current" />
            <span className="hidden sm:inline">Donate Now</span>
          </Link>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex size-10 items-center justify-center rounded-full text-cdsa-foreground lg:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-cdsa-border bg-background lg:hidden">
          <nav className="mx-auto flex max-w-[1280px] flex-col gap-1 px-5 py-4" aria-label="Mobile">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-3 py-2.5 text-sm font-medium text-cdsa-foreground transition-colors hover:bg-cdsa-muted"
              >
                {link.label}
              </Link>
            ))}
            <div className="mt-2 flex items-center gap-2 px-3">
              <ThemeToggle />
              <span className="text-sm text-cdsa-foreground-muted">Toggle theme</span>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
