import Image from "next/image"
import Link from "next/link"
import { ArrowRight, HandHeart } from "lucide-react"
import { schoolImages } from "@/lib/images"

export function GetInvolvedHero() {
  return (
    <section className="relative flex min-h-[520px] items-end overflow-hidden md:min-h-[600px]">
      <Image
        src={schoolImages.getInvolvedHero}
        alt="CDSA students in West Point, Liberia"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/20" />

      <div className="relative z-10 mx-auto w-full max-w-[1280px] px-5 pb-12 pt-32 md:px-10 md:pb-16">
        <span className="inline-block rounded-full bg-cdsa-lime px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-[#1a1e00]">
          Join the Mission
        </span>
        <h1 className="mt-5 max-w-2xl font-heading text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl">
          Your Support Changes Lives in West Point
        </h1>
        <div className="mt-8 flex flex-wrap gap-4">
          <Link
            href="#donate"
            className="inline-flex items-center gap-2 rounded-full bg-cdsa-green px-6 py-3 text-sm font-bold uppercase tracking-wide text-white dark:bg-cdsa-lime dark:text-[#1a1e00]"
          >
            <HandHeart className="size-4" />
            Support Now
          </Link>
          <Link
            href="#volunteer"
            className="inline-flex items-center gap-2 rounded-full border-2 border-white/80 px-6 py-3 text-sm font-bold uppercase tracking-wide text-white transition-colors hover:bg-white/10"
          >
            Volunteer With Us
          </Link>
        </div>
      </div>
    </section>
  )
}
