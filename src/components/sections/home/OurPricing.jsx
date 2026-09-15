import SectionTitle from "@/components/ui/SectionTitle";
import Reveal from "@/components/ui/Reveal"
import { pricingPreview, pricingBodyList } from "@/data/pricing"
import PricingCard from "@/components/ui/PricingCard";

const OurPricing = () => {
  return (
    <>
      <section className="py-20 lg:py-[100px]">
        <div className="container-custom">
            <div className="grid gap-12 lg:grid-cols-12">
                <div className="lg:col-span-5">
                    <SectionTitle eyebrow="Pricing Plan" title="Affordable" accent="plans for every business" />
                    <div className="flex flex-col gap-8">
                        {pricingBodyList.map((item,i) => (
                            <Reveal key={item.title} delay={0.2 + i * 0.2}>
                                <h3 className="mb-2 text-lg font-bold text-primary capitalize">{item.title}</h3>
                                <p className="mb-0 text-sm">{item.excerpt}</p>
                            </Reveal>
                        ))}
                    </div>
                </div>

                <div className="grid gap-8 sm:grid-cols-2 lg:col-span-7">
                  {pricingPreview.map((plan,i) => (
                    <PricingCard key={plan.name} plan={plan} delay={i * 0.25}/>
                  ))}
                </div>
            </div>
        </div>
      </section>
    </>
  )
}

export default OurPricing
