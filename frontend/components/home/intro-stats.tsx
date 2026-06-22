import Image from "next/image"
import { schoolImages } from "@/lib/images"

const cards = [
  {
    color: "bg-cdsa-yellow",
    textColor: "text-[#3d2e00]",
    stat: "15",
    label: "Dedicated Local Teachers",
    image: schoolImages.homeStats[0],
    alt: "CDSA teachers with students in a classroom",
  },
  {
    color: "bg-cdsa-lime",
    textColor: "text-[#1a1e00]",
    stat: "1",
    label: "Safe Educational Haven",
    image: schoolImages.homeStats[1],
    alt: "CDSA container school building",
  },
  {
    color: "bg-cdsa-orange",
    textColor: "text-[#3d2200]",
    stat: "2,800+",
    label: "Children Enrolled Across Programs",
    image: schoolImages.homeStats[2],
    alt: "Students learning at CDSA",
  },
]

export function IntroStats() {
  return (
    <section className="mx-auto max-w-[1280px] px-5 py-10 md:px-10 md:py-14">
      <div className="grid gap-4 md:grid-cols-3">
        {cards.map((card) => (
          <article
            key={card.label}
            className={`${card.color} overflow-hidden rounded-[1.75rem] p-5 shadow-sm`}
          >
            <div className="relative mb-4 h-40 overflow-hidden rounded-2xl">
              <Image src={card.image} alt={card.alt} fill sizes="33vw" className="object-cover" />
            </div>
            <p className={`font-heading text-4xl font-extrabold ${card.textColor}`}>{card.stat}</p>
            <p className={`mt-1 text-sm font-bold leading-snug ${card.textColor}`}>{card.label}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
