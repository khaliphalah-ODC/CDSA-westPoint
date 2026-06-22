import { schoolImages } from "@/lib/images"
import { MaterialSymbol } from "./material-symbol"
import { Container } from "./section"

const features = [
  "Modern, ventilated classrooms",
  "Fully-equipped Library & Media Center",
  "IT Lab with solar-powered devices",
  "10kW Hybrid Solar Power System",
  "Clean water filtration & modern sanitation",
]

export function ProjectDetails() {
  return (
    <section className="py-24 md:py-32">
      <Container>
        <div className="grid items-center gap-12 md:grid-cols-12 md:gap-16">
          <div className="md:col-span-7">
            <img
              src={schoolImages.containerSchool}
              alt="CDSA container school building."
              className="aspect-video w-full rounded-2xl object-cover object-center shadow-xl"
            />
          </div>
          <div className="md:col-span-5">
            <h2 className="mb-6 font-display text-[32px] font-semibold leading-[40px] text-cdsa-green dark:text-cdsa-lime md:text-[48px] md:leading-[56px]">
              Building a School That Lasts
            </h2>
            <p className="mb-8 text-[18px] leading-[28px] text-cdsa-foreground-muted">
              Our design philosophy merges industrial efficiency with human-centric education environments.
              Every square foot is optimized for learning.
            </p>
            <ul className="space-y-4">
              {features.map((feature) => (
                <li key={feature} className="flex items-center gap-3 text-[16px] leading-[24px] text-cdsa-foreground">
                  <MaterialSymbol name="check_circle" fill className="text-cdsa-green dark:text-cdsa-lime" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  )
}
