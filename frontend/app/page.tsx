import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Hero } from "@/components/home/hero"
import { IntroStats } from "@/components/home/intro-stats"
import { SchoolHope } from "@/components/home/school-hope"
import { ImpactSection } from "@/components/home/impact-section"
import { MethodologyImpact } from "@/components/home/methodology-impact"
import { ContainerHighlight } from "@/components/home/container-highlight"
import { Process } from "@/components/home/process"
import { DonateCta } from "@/components/home/donate-cta"

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <SiteHeader />
      <main className="flex-1">
        <Hero />
        <IntroStats />
        <SchoolHope />
        <ImpactSection />
        <MethodologyImpact />
        <ContainerHighlight />
        <Process />
        <DonateCta />
      </main>
      <SiteFooter />
    </div>
  )
}
