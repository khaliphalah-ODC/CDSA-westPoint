import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Box, Layers, Shield, Zap } from "lucide-react"
import { schoolImages } from "@/lib/images"

const features = [
  { icon: Zap, label: "Rapid Deployment" },
  { icon: Shield, label: "Built for Resilience" },
  { icon: Box, label: "Cost-Effective" },
  { icon: Layers, label: "Scalable Design" },
]

export function ContainerHighlight() {
  return (
    <section className="mx-auto max-w-[1280px] px-5 py-10 md:px-10 md:py-14">
      <div className="overflow-hidden rounded-[2rem] border border-cdsa-border bg-cdsa-surface dark:bg-cdsa-muted/40">
        <div className="p-6 md:p-10">
          <h2 className="max-w-xl font-heading text-2xl font-extrabold uppercase leading-tight tracking-tight text-cdsa-green dark:text-cdsa-lime sm:text-3xl">
            Building Liberia&apos;s Future — One Classroom at a Time
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-cdsa-foreground-muted sm:text-base">
            The Container School Project transforms shipping containers into safe, modern classrooms
            for children in West Point — a sustainable, scalable solution for education infrastructure.
          </p>
        </div>

        <div className="relative mx-6 mb-6 aspect-[21/9] overflow-hidden rounded-[1.5rem] md:mx-10 md:mb-10">
          <Image
            src={schoolImages.containerSchool}
            alt="CDSA container school in West Point, Liberia"
            fill
            sizes="100vw"
            className="object-cover"
          />
        </div>

        <div className="grid grid-cols-2 gap-4 px-6 pb-8 md:grid-cols-4 md:px-10 md:pb-10">
          {features.map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="flex flex-col items-center gap-3 rounded-2xl bg-cdsa-muted/60 p-5 text-center dark:bg-cdsa-surface"
            >
              <span className="flex size-11 items-center justify-center rounded-full bg-cdsa-green text-white dark:bg-cdsa-lime dark:text-[#1a1e00]">
                <Icon className="size-5" />
              </span>
              <span className="text-xs font-bold uppercase tracking-wide text-cdsa-foreground">{label}</span>
            </div>
          ))}
        </div>

        <div className="border-t border-cdsa-border px-6 py-6 md:px-10">
          <Link
            href="/container-project"
            className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wide text-cdsa-green transition-colors hover:text-cdsa-lime dark:text-cdsa-lime"
          >
            View The Container Project
            <ArrowRight className="size-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
