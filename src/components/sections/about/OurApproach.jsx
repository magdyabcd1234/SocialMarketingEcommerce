import SectionTitle from "@/components/ui/SectionTitle";
import Reveal from "@/components/ui/Reveal";
import RevealImage from "@/components/ui/RevealImage";
import { approachItems } from "@/data/approach"

const OurApproach = () => {
  return (
    <>
    <section className="py-20 lg:py-[100px]">
        <div className="container-custom">
            <div className="grid items-center gap-12 lg:grid-cols-2">
                <div>
                    <SectionTitle 
                    eyebrow="our approach"
                    title="Strategic"
                    accent="approach to social success"
                    description="Our strategic approach combines innovative planning, data-driven insights, creative
                    execution to help your brand thrive on social media. We focus on building meaningful
                    connections, boosting engagement, and driving measurable results."/>

                    <div className="grid gap-6 sm:grid-cols-2">
                        {approachItems.map((item,index) => (
                            <Reveal key={item.title} delay={0.4 + index * 0.2} className="rounded-[20px] border border-divider p-6">
                                <img src={item.icon} alt="" className="mb-4 h-10 w-10" />
                                <h3 className="mb-2 text-lg font-bold text-primary capitalize">{item.title}</h3>
                                <p className="mb-0 text-sm">{item.excerpt}</p>
                            </Reveal>
                        ))}
                    </div>
                </div>

                <div className="relative grid grid-cols-2 gap-5">
                    <div className="flex flex-col gap-5">
                        <RevealImage src="/images/approach-img-1.jpg" alt="" className="img-shine aspect-square w-full rounded-[20px]"/>
                        <RevealImage src="/images/approach-img-2.jpg" alt="" className="img-shine aspect-square w-full rounded-[20px]"/>
                    </div>
                       <RevealImage src="/images/approach-img-3.jpg" alt="" className="img-shine aspect-square h-full w-full rounded-[20px]"/>

                       <img src="/images/approach-image-circle.png" alt="" className="animate-spin-slow pointer-events-none absolute top-1/2 left-1/2 w-24 -translate-x-1/2 -translate-y-1/2"/>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default OurApproach;
