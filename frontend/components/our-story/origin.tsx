export function OriginStory() {
  return (
    <section id="origin" className="mx-auto max-w-[1280px] px-5 py-16 md:py-24 md:px-10">
      <div className="grid gap-10 md:grid-cols-2 items-start">
        <div>
          <h2 className="font-heading text-2xl font-semibold text-foreground">A Commitment to Resilience</h2>
          <div className="mt-3 h-1 w-20 rounded-full bg-cdsa-lime" />
          <div className="mt-6 space-y-6 text-foreground-muted">
            <p>
              In the shadows of Monrovia’s most vibrant yet vulnerable district, CDSA was born from a
              radical belief: that proximity to poverty should not determine potential. Our founder
              began with a single room, community volunteers, and a conviction that education can
              change futures.
            </p>
            <p className="italic">
              “We couldn’t wait for change; we had to become the catalyst.” Through door-to-door
              outreach, partnerships with local leaders, and steadfast community trust-building,
              CDSA established safe learning spaces where children can thrive.
            </p>
            <p>
              Over time, small wins — consistent attendance, restored confidence, engaged parents —
              created momentum. Today, our programs combine classroom learning, psychosocial support,
              and practical life skills to prepare students for a brighter future.
            </p>
          </div>
        </div>

        <div className="prose max-w-none text-foreground-muted">
          <p className="mb-4">
            CDSA’s approach centers on listening to families, hiring local educators, and designing
            programs that reflect community needs. We prioritize dignity, transparency, and
            measurable learning outcomes, and we continuously refine our work based on local feedback.
          </p>
          <p>
            From repair and retrofit classrooms to delivering teacher training and community
            engagement, our story is one of partnership — neighbors, volunteers, and donors
            collectively building a foundation for lifelong learning.
          </p>
        </div>
      </div>
    </section>
  )
}
