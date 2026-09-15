import SectionTitle from "@/components/ui/SectionTitle";
import Reveal from "@/components/ui/Reveal";
import RevealImage from "@/components/ui/RevealImage";
import Counter from "@/components/ui/Counter";
import { Link } from "react-router-dom";
import { keyFacts } from "@/data/keyFacts"

const KeyFacts = () => {
  return (
    <>
      <section className="py-20 lg:py-[100px]">
        <div className="container-custom">
            <div className="grid items-center gap-12 rounded-[30px] bg-secondary/30 p-8 sm:p-14 lg:grid-cols-2">
            <RevealImage src="/images/key-facts-image.jpg" alt="Key Facts" className="w-full rounded-[20px]"/>

            <div>
                <div className="mb-8 flex items-start justify-between gap-6">
                    <SectionTitle eyebrow="Key fact" title="Key" accent="facts about our success" className="mb-0"/>
                    <Link to="/contact" className="hidden h-[130px] w-[130px] px-5 shrink-0 items-center justify-center rounded-full border border-accent text-center text-sm font-bold text-white capitalize sm:flex">
                    Free consultation
                    </Link>
                </div>
                <div className="grid grid-cols-2 gap-8">
                    {keyFacts.map((fact, i) => (
                        <Reveal key={i} delay={i * 0.15}>
                            <h2 className="text-4xl font-bold text-accent">
                                <Counter end={fact.end} suffix={fact.suffix} decimals={fact.decimals ? 1 : 0} />
                            </h2>
                            <p className="mt-2 mb-0 text-sm">{fact.label}</p>
                        </Reveal>
                    ))}
                </div>
            </div>
            </div>
        </div>
      </section>
    </>
  )
}

export default KeyFacts
