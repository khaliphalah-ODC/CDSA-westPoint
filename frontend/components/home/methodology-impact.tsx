const methodology = [
  { label: "Interactive Learning", color: "bg-cdsa-lime text-[#1a1e00]" },
  { label: "Play-Based Approach", color: "bg-cdsa-pink text-[#3d1f2a]" },
  { label: "Individual Attention", color: "bg-cdsa-yellow text-[#3d2e00]" },
]

const impactCards = [
  { value: "22", label: "Daycares & Primary Schools" },
  { value: "2,800+", label: "Children Enrolled" },
  { value: "24", label: "Years in Education" },
]

export function MethodologyImpact() {
  return (
    <section className="mx-auto hidden max-w-[1280px] px-5 py-10 md:px-10 md:py-14 dark:block">
      <div className="grid gap-6 md:grid-cols-2">
        <div className="rounded-[2rem] bg-cdsa-purple/40 p-8">
          <p className="text-sm font-bold uppercase tracking-widest text-cdsa-purple">[ our methodology ]</p>
          <div className="mt-6 space-y-3">
            {methodology.map((item) => (
              <div
                key={item.label}
                className={`${item.color} inline-block w-full rounded-xl px-5 py-4 text-sm font-bold shadow-sm rotate-[-1deg] even:rotate-[1deg]`}
              >
                {item.label}
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-[2rem] bg-cdsa-pink/30 p-8">
          <p className="text-sm font-bold uppercase tracking-widest text-cdsa-pink">[ our impact ]</p>
          <div className="mt-6 space-y-4">
            {impactCards.map((card) => (
              <div
                key={card.label}
                className="rounded-2xl bg-white/10 px-6 py-5 backdrop-blur-sm"
              >
                <p className="font-heading text-3xl font-extrabold text-cdsa-lime">{card.value}</p>
                <p className="mt-1 text-sm font-medium text-white/80">{card.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
