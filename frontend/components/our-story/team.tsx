import { MemberCard } from "./member-card"
import { TEAM } from "./team-data"

export function TeamSection() {
  return (
    <section className="mx-auto max-w-[1280px] px-5 py-16 md:px-10 bg-surface-bright">
      <div className="mx-auto max-w-[1280px]">
        <div className="mb-8">
          <h2 className="font-heading text-2xl font-semibold text-foreground">Meet the Heart of CDSA</h2>
          <p className="mt-2 text-foreground-muted">Our dedicated team of educators and staff are locals who understand the challenges and celebrate the triumphs of every student.</p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {TEAM.map((m) => (
            <MemberCard key={m.name} name={m.name} role={m.role} bio={m.bio} image={m.image} />
          ))}
        </div>
      </div>
    </section>
  )
}
