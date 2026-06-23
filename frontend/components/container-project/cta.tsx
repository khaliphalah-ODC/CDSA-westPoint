import Link from "next/link"
import { MaterialSymbol } from "./material-symbol"
import { Container } from "./section"

export function ProjectCta() {
  return (
    <section className="py-20">
      <Container>
        <div className="relative overflow-hidden rounded-[2rem] bg-cdsa-green p-8 text-center text-white dark:bg-cdsa-surface md:p-20">
          <div className="relative z-10 mx-auto max-w-3xl">
            <h2 className="mb-6 font-display text-[32px] font-semibold leading-[40px] md:text-[48px] md:leading-[56px]">
              Help Build the Future of Education in West Point
            </h2>
            <p className="mb-10 text-[18px] leading-[28px] text-white/80">
              Your contribution, no matter the size, helps us provide a safe haven for learning and a
              launchpad for dreams.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/get-involved"
                className="rounded-full bg-cdsa-lime px-10 py-4 text-[14px] font-bold uppercase leading-[20px] tracking-[0.05em] text-[#1a1e00] transition-transform hover:scale-105"
              >
                Donate Now
              </Link>
              <Link
                href="/get-involved"
                className="rounded-full border border-cdsa-lime/30 bg-cdsa-green-dark px-10 py-4 text-[14px] font-bold uppercase leading-[20px] tracking-[0.05em] text-cdsa-lime transition-colors hover:bg-cdsa-green-dark/80 dark:bg-cdsa-muted"
              >
                Become a Sponsor
              </Link>
              <Link
                href="/container-project"
                className="flex items-center gap-2 rounded-full bg-white/10 px-10 py-4 text-[14px] font-bold uppercase leading-[20px] tracking-[0.05em] text-white transition-colors hover:bg-white/20"
              >
                <MaterialSymbol name="share" />
                Share This Project
              </Link>
            </div>
          </div>
          <svg
            className="pointer-events-none absolute inset-0 size-full opacity-10"
            preserveAspectRatio="none"
            viewBox="0 0 100 100"
            aria-hidden="true"
          >
            <path d="M0 100 C 20 0 50 0 100 100" fill="transparent" stroke="white" />
            <path d="M0 80 C 30 20 60 20 100 80" fill="transparent" stroke="white" />
          </svg>
        </div>
      </Container>
    </section>
  )
}
