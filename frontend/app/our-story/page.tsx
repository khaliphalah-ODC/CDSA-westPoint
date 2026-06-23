import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Founder } from "@/components/our-story/founder"

export default function OurStoryPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <SiteHeader />
      <main className="flex-1 pt-20">
        <Founder />
      </main>
      <SiteFooter />
    </div>
  )
}
