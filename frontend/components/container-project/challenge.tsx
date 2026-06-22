import { schoolImages } from "@/lib/images"
import { MaterialSymbol } from "./material-symbol"
import { Container } from "./section"

const issues = [
  ["warning", "Extreme Overcrowding", "Ratios exceeding 80 students per single volunteer teacher."],
  ["gpp_maybe", "Structural Hazards", "Existing schools are vulnerable to Liberia's intense rainy season."],
]

export function ChallengeSection() {
  return (
    <section className="py-24 md:py-32">
      <Container>
        <div className="grid items-center gap-16 md:grid-cols-2 md:gap-20">
          <div>
            <h2 className="mb-8 font-display text-[32px] font-semibold leading-[40px] text-cdsa-green dark:text-cdsa-lime md:text-[48px] md:leading-[56px]">
              Why This Project Matters
            </h2>
            <div className="space-y-6">
              <p className="text-[18px] leading-[28px] text-cdsa-foreground-muted">
                In West Point, Liberia, thousands of children are eager to learn but face insurmountable
                barriers. Current educational spaces are severely overcrowded, often housing three times
                their intended capacity in dilapidated structures that pose safety risks.
              </p>
              <p className="text-[18px] leading-[28px] text-cdsa-foreground-muted">
                The lack of ventilated, secure, and modern facilities leads to poor health outcomes and
                diminished learning retention. We aren&apos;t just building walls; we are creating a sanctuary
                for intellectual growth and community resilience.
              </p>
              <div className="space-y-4 pt-4">
                {issues.map(([icon, title, text]) => (
                  <div key={title} className="flex items-start gap-4">
                    <div className="flex size-12 shrink-0 items-center justify-center rounded-full bg-cdsa-lime/30 text-cdsa-green dark:text-cdsa-lime">
                      <MaterialSymbol name={icon} />
                    </div>
                    <div>
                      <h3 className="text-[14px] font-bold uppercase leading-[20px] tracking-[0.05em] text-cdsa-foreground">
                        {title}
                      </h3>
                      <p className="text-[16px] leading-[24px] text-cdsa-foreground-muted">{text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="group relative">
            <div className="absolute -inset-4 -z-10 rounded-2xl bg-cdsa-lime/20 transition-all duration-500 group-hover:inset-0" />
            <img
              src={schoolImages.classroom}
              alt="Students in a CDSA classroom."
              className="aspect-[4/5] w-full rounded-xl object-cover object-center shadow-lg"
            />
          </div>
        </div>
      </Container>
    </section>
  )
}
