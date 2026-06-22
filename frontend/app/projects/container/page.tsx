import type { Metadata } from "next"
import { Libre_Caslon_Text, Plus_Jakarta_Sans } from "next/font/google"
import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"
import { BudgetTransparency } from "@/components/container-project/budget"
import { ChallengeSection } from "@/components/container-project/challenge"
import { ContainerBenefits } from "@/components/container-project/container-benefits"
import { ProjectCta } from "@/components/container-project/cta"
import { ProjectFaq } from "@/components/container-project/faq"
import { ProjectGallery } from "@/components/container-project/gallery"
import { ContainerHero } from "@/components/container-project/hero"
import { ImpactStats } from "@/components/container-project/impact"
import { ProjectDetails } from "@/components/container-project/project-details"
import { Roadmap } from "@/components/container-project/roadmap"

const display = Libre_Caslon_Text({
  variable: "--font-container-display",
  subsets: ["latin"],
  weight: ["400", "700"],
})

const body = Plus_Jakarta_Sans({
  variable: "--font-container-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
})

export const metadata: Metadata = {
  title: "The Container Project | CDSA",
  description:
    "Help CDSA transform shipping containers into safe, modern classrooms for children in West Point, Liberia.",
}

export default function ContainerProjectPage() {
  return (
    <div
      className={`${display.variable} ${body.variable} min-h-screen bg-background font-[family-name:var(--font-container-body)] text-foreground`}
    >
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
      />
      <SiteHeader />
      <main className="pt-20">
        <ContainerHero />
        <ChallengeSection />
        <ContainerBenefits />
        <ProjectDetails />
        <Roadmap />
        <BudgetTransparency />
        <ProjectGallery />
        <ImpactStats />
        <ProjectFaq />
        <ProjectCta />
      </main>
      <SiteFooter />
    </div>
  )
}
