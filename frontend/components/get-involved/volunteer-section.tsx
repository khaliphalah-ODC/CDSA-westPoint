import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Laptop, MapPin } from "lucide-react"
import { schoolImages } from "@/lib/images"

const onSite = ["Classroom Assistants", "Arts & Creative Mentors", "STEM Tutors"]
const remote = ["Fundraising Strategy", "Social Media Content", "Grant Writing Support"]

export function VolunteerSection() {
  return (
    <section id="volunteer" className="bg-cdsa-muted/60 py-16 dark:bg-cdsa-surface/30 md:py-24">
      <div className="mx-auto grid max-w-[1280px] items-center gap-12 px-5 md:grid-cols-2 md:px-10">
        <div className="relative">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem]">
            <Image
              src={schoolImages.volunteer}
              alt="Volunteer mentoring a student at CDSA"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          <div className="absolute -bottom-4 left-4 right-4 rounded-2xl border border-cdsa-border bg-cdsa-surface px-5 py-4 shadow-lg dark:bg-cdsa-muted">
            <p className="text-xs font-bold uppercase tracking-wider text-cdsa-green dark:text-cdsa-lime">
              500+ Lives Impacted
            </p>
            <p className="text-sm text-cdsa-foreground-muted">Through community service</p>
          </div>
        </div>

        <div>
          <h2 className="font-heading text-3xl font-bold text-cdsa-green dark:text-cdsa-lime md:text-4xl">
            Share Your Skills: Volunteer with CDSA
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-cdsa-foreground-muted sm:text-base">
            Whether you can join us in West Point or support from anywhere in the world, your time and
            talent make a lasting difference for students and families.
          </p>

          <div className="mt-8 space-y-6">
            <div>
              <div className="mb-3 flex items-center gap-2 text-sm font-bold uppercase tracking-wide text-cdsa-foreground">
                <MapPin className="size-4 text-cdsa-green dark:text-cdsa-lime" />
                On-Site
              </div>
              <ul className="space-y-2">
                {onSite.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-cdsa-foreground-muted">
                    <span className="size-1.5 rounded-full bg-cdsa-lime" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <div className="mb-3 flex items-center gap-2 text-sm font-bold uppercase tracking-wide text-cdsa-foreground">
                <Laptop className="size-4 text-cdsa-green dark:text-cdsa-lime" />
                Remote
              </div>
              <ul className="space-y-2">
                {remote.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-cdsa-foreground-muted">
                    <span className="size-1.5 rounded-full bg-cdsa-lime" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <Link
            href="#contact"
            className="mt-10 inline-flex items-center gap-2 rounded-full bg-cdsa-green px-8 py-3.5 text-sm font-bold uppercase tracking-wide text-white dark:bg-cdsa-lime dark:text-[#1a1e00]"
          >
            Apply to Volunteer
            <ArrowRight className="size-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
