import SectionTitle from "@/components/ui/SectionTitle";
import Reveal from "@/components/ui/Reveal";
import RevealImage from "@/components/ui/RevealImage";
import Counter from "@/components/ui/Counter";
import SatisfiedClientsBadge from "@/components/ui/SatisfiedClientsBadge";
import { solutionStats } from "@/data/solution";

const OurSolution = () => {
  return (
    <>
        <section className="py-20 lg:py-[100px]">
            <div className="container-custom">
                <div className="grid items-center gap-12 lg:grid-cols-2">
                    <div>
                        <SectionTitle 
                        eyebrow="our solution"
                        title="Innovation solutions for social"
                        accent="success"
                        description="Discover cutting-edge strategies and tailored solutions designed to amplify
                        brand's presence, engage your audience, and achive measurable results.
                        "
                        />

                        <div className="grid grid-cols-2 gap-6 sm:grid-cols-3">
                            {solutionStats.map((star,i) => (
                                <Reveal key={star.label} delay={i * 0.1} className="flex items-center gap-3">
                                    <img src={star.icon} alt="" className="h-8 w-8 shrink-0" />
                                    <div>
                                        <h3 className="text-xl font-bold text-primary">
                                            <Counter end={star.end} suffix={star.suffix}/>
                                        </h3>
                                        <p className="mb-0 text-xs">{star.label}</p>
                                    </div>
                                </Reveal>
                            ))}
                        </div>
                    </div>

                    <div className="relative">
                        <RevealImage src="/images/our-soultion-image.jpg" alt="" className="img-shine aspect-[4/5] w-full rounded-[20px]" />
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

export default OurSolution
