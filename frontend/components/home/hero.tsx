import Image from "next/image"
import Link from "next/link"
import { ArrowRight, BookOpen, Heart, Shield } from "lucide-react"
import { schoolImages } from "@/lib/images"

const tags = ["Hope", "Learning", "Safe Spaces"]

const highlights = [
  { icon: BookOpen, label: "Quality Education" },
  { icon: Shield, label: "Safe & Nurturing Environment" },
  { icon: Heart, label: "Hope for a Brighter Future" },
]

export function Hero() {
  return (
    <section className="mx-auto max-w-[1280px] px-5 pt-28 md:px-10 md:pt-32">
      <div className="overflow-hidden rounded-[2rem] bg-cdsa-green-dark dark:bg-cdsa-muted md:rounded-[2.5rem]">
        <div className="grid items-center gap-8 p-6 md:grid-cols-2 md:gap-4 md:p-10 lg:p-14">
          <div>
            <div className="mb-6 flex flex-wrap gap-2">
              {tags.map((tag, i) => (
                <span
                  key={tag}
                  className={
                    i === 0
                      ? "rounded-full bg-cdsa-lime px-4 py-1.5 text-xs font-bold uppercase tracking-wide text-[#1a1e00]"
                      : i === 1
                        ? "rounded-full bg-cdsa-green px-4 py-1.5 text-xs font-bold uppercase tracking-wide text-white"
                        : "rounded-full bg-white/15 px-4 py-1.5 text-xs font-bold uppercase tracking-wide text-white"
                  }
                >
                  {tag}
                </span>
              ))}
            </div>

            <h1 className="font-heading text-3xl font-extrabold uppercase leading-[1.05] tracking-tight text-white sm:text-4xl lg:text-5xl">
              Empowering West Point Through{" "}
              <span className="text-cdsa-lime">Education, Hope</span> & Safe Spaces
            </h1>

            <p className="mt-5 max-w-lg text-sm leading-relaxed text-white/80 sm:text-base">
              CDSA provides quality education, safe learning environments, and community support for
              children in West Point, Liberia — building brighter futures one classroom at a time.
            </p>

            <Link
              href="/projects/container"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-cdsa-lime px-6 py-3 text-sm font-bold uppercase tracking-wide text-[#1a1e00] transition-transform hover:scale-105"
            >
              Explore Our School Project
              <ArrowRight className="size-4" />
            </Link>

            <div className="mt-10 hidden gap-6 sm:grid sm:grid-cols-3">
              {highlights.map(({ icon: Icon, label }) => (
                <div key={label} className="flex flex-col items-center gap-2 text-center">
                  <span className="flex size-10 items-center justify-center rounded-full bg-white/10 text-cdsa-lime">
                    <Icon className="size-4" />
                  </span>
                  <span className="text-xs font-medium leading-snug text-white/80">{label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-md md:max-w-none">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] md:aspect-auto md:h-[420px]">
              <Image
                src={schoolImages.hero}
                alt="CDSA student in a classroom"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 40vw"
                className="object-cover"
              />
            </div>
            <div className="absolute -left-2 top-8 rounded-2xl bg-cdsa-yellow px-4 py-2 text-2xl shadow-lg">
              🙂
            </div>
            <div className="absolute -right-2 bottom-16 max-w-[140px] rounded-2xl bg-white px-4 py-3 text-xs font-bold leading-snug text-cdsa-green shadow-lg">
              300+ children enrolled in our programs
            </div>
            <div className="absolute bottom-4 left-4 rounded-full bg-cdsa-lime px-4 py-2 text-xs font-bold text-[#1a1e00]">
              Great futures start with us!
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
