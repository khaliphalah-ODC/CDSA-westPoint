import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

export default function FounderPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex flex-1 flex-col gap-8 px-6 py-16">
        <section className="mx-auto max-w-3xl">
          <h1 className="font-heading text-3xl font-semibold">A Message from Our Founder</h1>
          <p className="mt-4 text-base text-muted-foreground">
            The SUITES LLC was created with a simple but powerful belief: that property, when developed and managed with clarity and purpose, has the power to transform communities and lives. I founded this firm to serve Africa’s growing cities and neighborhoods, ensuring that development is not just about buildings, but about people.
          </p>
          <p className="mt-4 text-base text-muted-foreground">
            Throughout my career, I have seen communities with bold visions struggle to navigate complexity, align stakeholders, or deliver on their ambitions. I have also seen the remarkable impact that disciplined execution and local collaboration can achieve. The SUITES LLC exists to close that gap.
          </p>
          <p className="mt-4 text-base text-muted-foreground">Our mission is to empower leaders, investors, and families with the insight, structure, and partnerships they need to move confidently in a rapidly changing world. Whether we are guiding a housing program, supporting a major commercial development, or facilitating local investment, our focus remains the same: clarity, strategy, and execution.</p>
          <p className="mt-6 text-base text-muted-foreground">— Founder, The SUITES LLC</p>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}
