import Link from "next/link"
import { ArrowRight, BookOpen, Globe, Heart, Shield, Users } from "lucide-react"

const values = [
  { icon: Heart, color: "bg-cdsa-lime text-[#1a1e00]", title: "Quality Education", text: "Every child deserves access to excellent learning." },
  { icon: Shield, color: "bg-cdsa-pink text-[#3d1f2a]", title: "Safe Spaces", text: "Secure, nurturing environments for growth." },
  { icon: Users, color: "bg-cdsa-orange text-[#3d2200]", title: "Community First", text: "Rooted in West Point, built with families." },
  { icon: BookOpen, color: "bg-cdsa-purple text-[#2d1f4a]", title: "Holistic Development", text: "Mind, body, and spirit nurtured together." },
  { icon: Globe, color: "bg-cdsa-yellow text-[#3d2e00]", title: "Sustainable Impact", text: "Infrastructure that serves generations." },
]

const impactStats = [
  { value: "300+", label: "Scholars Enrolled" },
  { value: "15", label: "Dedicated Teachers" },
  { value: "1", label: "Safe Haven in West Point" },
  { value: "100%", label: "Community Focused" },
]

export function ImpactSection() {
  return (
    <section id="impact" className="mx-auto max-w-[1280px] px-5 py-10 md:px-10 md:py-14">
      <div className="dark:hidden">
        <h2 className="text-center font-heading text-2xl font-extrabold uppercase tracking-wide text-cdsa-green">
          Our Impact So Far
        </h2>
        <div className="mt-10 grid grid-cols-2 gap-6 md:grid-cols-4">
          {impactStats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="font-heading text-3xl font-extrabold text-cdsa-green sm:text-4xl">{stat.value}</p>
              <p className="mt-2 text-xs font-medium uppercase tracking-wide text-cdsa-foreground-muted">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="hidden dark:block">
        <h2 className="mb-10 text-center font-heading text-2xl font-extrabold uppercase tracking-wide text-cdsa-lime">
          Why CDSA?
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {values.map(({ icon: Icon, color, title, text }) => (
            <div key={title} className="flex flex-col items-center text-center">
              <span className={`mb-4 flex size-16 items-center justify-center rounded-full ${color}`}>
                <Icon className="size-6" />
              </span>
              <h3 className="text-sm font-bold uppercase tracking-wide text-white">{title}</h3>
              <p className="mt-2 text-xs leading-relaxed text-cdsa-foreground-muted">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
