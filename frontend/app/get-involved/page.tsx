import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { GetInvolvedHero } from "@/components/get-involved/hero"
import { DonationOptions } from "@/components/get-involved/donation-options"
import { VolunteerSection } from "@/components/get-involved/volunteer-section"
import { ContactSection } from "@/components/get-involved/contact-section"

export default function GetInvolvedPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <SiteHeader />
      <main className="flex-1 pt-20">
        <GetInvolvedHero />
        <DonationOptions />
        <VolunteerSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </div>
  )
}
