import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function ContactCta() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
      <div className="rounded-4xl bg-butter p-10 text-center text-butter-foreground sm:p-14">
        <h2 className="mx-auto max-w-2xl text-balance font-heading text-3xl font-semibold leading-tight sm:text-4xl">
          Ready to support education in West Point?
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-pretty text-sm leading-relaxed text-butter-foreground/80 sm:text-base">
          Whether you want to donate, volunteer, or partner with CDSA, we&apos;d love to hear from you.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Button
            render={<Link href="/contact" />}
            nativeButton={false}
            size="lg"
            className="rounded-full px-7"
          >
            Get Involved
            <ArrowRight className="size-4" />
          </Button>
          <Button
            render={<Link href="/projects/container" />}
            nativeButton={false}
            size="lg"
            variant="outline"
            className="rounded-full border-butter-foreground/25 bg-transparent px-7 text-butter-foreground hover:bg-butter-foreground/10"
          >
            The Container Project
          </Button>
        </div>
      </div>
    </section>
  )
}
