import { GraduationCap, Heart, MapPin, Users } from "lucide-react"

const stats = [
  { icon: GraduationCap, value: "1,200+", label: "Students Impacted" },
  { icon: Users, value: "24", label: "Planned Classrooms" },
  { icon: MapPin, value: "1", label: "Community Served" },
  { icon: Heart, value: "100%", label: "Non-Profit Mission" },
]

export function Stats() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-6 sm:px-6">
      <div className="grid grid-cols-2 gap-px overflow-hidden rounded-4xl border border-border/70 bg-border/70 lg:grid-cols-4">
        {stats.map(({ icon: Icon, value, label }) => (
          <div
            key={label}
            className="flex flex-col items-center gap-2 bg-card px-4 py-10 text-center"
          >
            <Icon className="size-6 text-blush-foreground" />
            <span className="font-heading text-3xl font-semibold text-foreground sm:text-4xl">
              {value}
            </span>
            <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
              {label}
            </span>
          </div>
        ))}
      </div>
    </section>
  )
}
