import Reveal from "@/components/ui/Reveal";
import { siteConfig } from "@/data/siteConfig";
const SidebarCta = ({ delay = 0 }) => {
  return (
    <Reveal delay={delay} className="rounded-[20px] bg-accent p-8 text-center">
      <img src="/images/icon-sidebar-cta.svg" alt="" className="mx-auto mb-5 h-12 w-12"/>
      <h3 className="mb-2 text-lg font-bold text-dark">You have different questions?</h3>
      <p className="mb-5 text-sm text-dark/80">Our team will answer all your questions. we ensure a quick response.</p>
      <a href={`tel:${siteConfig.phone}`} className="inline-flex items-center gap-2 text-lg font-bold text-dark hover:underline">
        <img src="/images/icon-sidebar-cta-phone.svg" alt="" className="h-5 w-5"/>
        {siteConfig.phone}
      </a>
    </Reveal>
  )
}
 
export default SidebarCta
