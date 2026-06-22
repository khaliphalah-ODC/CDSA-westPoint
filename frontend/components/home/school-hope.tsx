import Image from "next/image"
import { GraduationCap, School } from "lucide-react"
import { schoolImages } from "@/lib/images"

export function SchoolHope() {
  return (
    <section className="mx-auto max-w-[1280px] px-5 py-10 md:px-10 md:py-14">
      <div className="grid items-center gap-10 rounded-[2rem] border border-cdsa-border bg-cdsa-surface p-6 md:grid-cols-2 md:p-10 dark:bg-cdsa-muted/40">
        <div>
          <h2 className="font-heading text-3xl font-extrabold uppercase tracking-tight text-cdsa-green dark:text-cdsa-lime sm:text-4xl">
            A School Built On Hope
          </h2>
          <p className="mt-5 text-sm leading-relaxed text-cdsa-foreground-muted sm:text-base">
            In West Point, Liberia, CDSA is creating safe, modern learning spaces where every child can
            thrive. Our container school project brings durable classrooms, dedicated teachers, and a
            nurturing community to families who need it most.
          </p>
          <div className="mt-8 space-y-4">
            <div className="flex items-center gap-4">
              <span className="flex size-12 items-center justify-center rounded-full bg-cdsa-lime/30 text-cdsa-green dark:text-cdsa-lime">
                <GraduationCap className="size-5" />
              </span>
              <div>
                <p className="font-bold text-cdsa-foreground">15 Dedicated Local Teachers</p>
                <p className="text-sm text-cdsa-foreground-muted">Passionate educators from the community</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <span className="flex size-12 items-center justify-center rounded-full bg-cdsa-orange/30 text-cdsa-orange">
                <School className="size-5" />
              </span>
              <div>
                <p className="font-bold text-cdsa-foreground">1 Safe Educational Haven</p>
                <p className="text-sm text-cdsa-foreground-muted">A container school built to last</p>
              </div>
            </div>
          </div>
        </div>
        <div className="relative aspect-[4/3] overflow-hidden rounded-[1.75rem]">
          <Image
            src={schoolImages.students}
            alt="Students studying at CDSA"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  )
}
