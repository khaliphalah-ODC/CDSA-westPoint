import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { OurStoryHero } from "@/components/our-story/hero"
import { OriginStory } from "@/components/our-story/origin"
import { MissionVision } from "@/components/our-story/mission-vision"
import { ValuesSection } from "@/components/our-story/values"
import { TeamSection } from "@/components/our-story/team"
import { OurStoryCta } from "@/components/our-story/cta"

export default function OurStoryPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <SiteHeader />
      <main className="flex-1">
        <OurStoryHero />
        <OriginStory />
        <MissionVision />
        <ValuesSection />
        <TeamSection />
        <OurStoryCta />
      </main>
      <SiteFooter />
    </div>
  )
}
