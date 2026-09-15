import SectionTitle from "@/components/ui/SectionTitle";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import RevealImage from "@/components/ui/RevealImage";
import SatisfiedClientsBadge from "@/components/ui/SatisfiedClientsBadge";

const OurFeature = () => {
  return (
    <>
    <section className="py-20 lg:py-[100px]">
        <div className="container-custom">
            <div className="grid items-center gap-12 lg:grid-cols-2">
                <div>
                    <SectionTitle 
                    eyebrow="What We do"
                    title="Powerful"
                    accent="features for social growth"
                    description="Our powerful features are desifned to drive social growth by expanding reach,
                    boosting brand awareness. From targeted content strategies to we provide the tools you need 
                    to succeed in the dynamic social media landscape."
                    />

                    <Reveal delay={0.4} className="border-t border-divider pt-8">
                        <div className="mb-3 flex items-center gap-4">
                            <img src="/images/icon-feature-body.svg" alt="" className="h-8 w-8"/>
                            <h3 className="text-lg font-bold text-primary capitalize">Keyword research excellence</h3>
                        </div>
                        <p className="mb-0 pl-12 text-sm">Our powerful features are designed to drive social growth</p>
                    </Reveal>

                    <Reveal delay={0.6} className="mt-8">
                        <Button href="/contact">Discover more</Button>
                    </Reveal>
                </div>

                <div className="relative grid grid-cols-2 gap-5">
                    <RevealImage src="/images/feature-img-1.jpg" alt="" className="img-shine row-span-2 h-full w-full rounded-[20px]"/>
                    <RevealImage src="/images/feature-img-2.jpg" alt="" className="img-shine aspect-square w-full rounded-[20px]"/>
                    <RevealImage src="/images/feature-img-3.jpg" alt="" className="img-shine aspect-square w-full rounded-[20px]"/>

                    <div className="absolute -bottom-6 left-1/2 -translate-x-1/2">
                    <SatisfiedClientsBadge className="rounded-[20px]"/>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default OurFeature
