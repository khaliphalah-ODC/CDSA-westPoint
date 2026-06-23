import Link from "next/link"

export function OurStoryCta() {
  return (
    <section className="py-20 bg-cdsa-green text-on-primary">
      <div className="mx-auto max-w-[1280px] px-5 text-center md:px-10">
        <h2 className="font-heading text-2xl font-semibold mb-4">Join Our Community of Change-Makers</h2>
        <p className="mb-6 text-foreground-muted">Your time, skills, and contributions create sustainable impact for children in West Point.</p>
        <Link href="/get-involved" className="inline-flex items-center justify-center rounded-full bg-cdsa-lime px-8 py-3 text-sm font-bold text-[#1a1e00]">
          Get Involved
        </Link>
      </div>
    </section>
  )
}
