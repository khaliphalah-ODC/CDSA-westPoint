import { schoolImages } from "@/lib/images"
import { Container } from "./section"

const gallery = [
  [schoolImages.gallery[0], "CDSA container school campus.", "col-span-2 row-span-2"],
  [schoolImages.gallery[1], "Students learning in a CDSA classroom.", "col-span-1 row-span-1"],
  [schoolImages.gallery[2], "Dedicated teachers supporting students.", "col-span-1 row-span-1"],
  [schoolImages.gallery[3], "Students at the container school.", "col-span-2 row-span-1"],
]

export function ProjectGallery() {
  return (
    <section className="py-24 md:py-32">
      <Container>
        <h2 className="mb-12 font-display text-[32px] font-semibold leading-[40px] text-cdsa-green dark:text-cdsa-lime md:text-[48px] md:leading-[56px]">
          Project Gallery
        </h2>
        <div className="grid h-[720px] grid-cols-2 grid-rows-4 gap-4 md:h-[600px] md:grid-cols-4 md:grid-rows-2">
          {gallery.map(([src, alt, span]) => (
            <div key={src} className={`${span} group relative overflow-hidden rounded-xl shadow-lg`}>
              <img
                src={src}
                alt={alt}
                className="h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
              />
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
