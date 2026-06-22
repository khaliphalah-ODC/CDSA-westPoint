import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

export default function StratovaPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex flex-1 flex-col gap-8 px-6 py-16">
        <section className="mx-auto max-w-3xl">
          <h1 className="font-heading text-3xl font-semibold">STRATOVA — Brand Manifesto</h1>
          <p className="mt-4 text-base text-muted-foreground">At Stratova, we believe strategy is more than a plan — it is a force that shapes markets, transforms institutions, and unlocks human potential. We exist for leaders who refuse to stand still, who see opportunity where others see uncertainty, and who understand that progress requires both vision and execution.</p>
          <p className="mt-4 text-base text-muted-foreground">Stratova is a global advisory and project management firm operating at the intersection of Africa’s growth trajectory and international markets. With networks spanning Canada, North America, Europe, the Middle East, and China, Stratova provides strategic insight, operational excellence, and cross-border advisory services to governments, corporations, investors, and development partners.</p>
        </section>

        <section className="mx-auto max-w-3xl">
          <h2 className="font-semibold">Services</h2>
          <ul className="mt-2 list-inside list-disc text-muted-foreground">
            <li>Strategic Advisory — Market entry & expansion strategies, corporate strategy & transformation</li>
            <li>Project & Program Management — End-to-end project delivery, PMO setup & optimization</li>
            <li>Cross-Border Advisory — International partnerships, government-to-government facilitation</li>
            <li>Investment & Trade Facilitation — Investor relations and capital access</li>
          </ul>
        </section>

        <section className="mx-auto max-w-3xl">
          <h2 className="font-semibold">Mission & Vision</h2>
          <p className="mt-2 text-base text-muted-foreground">Mission: To empower organizations with strategic clarity, global insight, and execution excellence — enabling them to create sustainable impact across continents.</p>
          <p className="mt-2 text-base text-muted-foreground">Vision: To be the leading global advisory firm connecting Africa to the world and the world to Africa, shaping markets, strengthening institutions, and driving transformative growth.</p>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}
