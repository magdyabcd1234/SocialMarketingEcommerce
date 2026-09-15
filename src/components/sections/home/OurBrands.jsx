import { useState } from "react";
import SectionTitle from "@/components/ui/SectionTitle";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import { brandItems } from "@/data/brands"

const OurBrands = () => {
    const defaultActive = brandItems.findIndex((b) => b.active);
    const [active, setActive] = useState(defaultActive === -1 ? 0 : defaultActive)
  return (
    <>
      <section className="py-20 lg:py-[100px]">
        <div className="container-custom">
            <div className="overflow-hidden rounded-[30px] border border-divider p-8 sm:p-14">
                <div className="mb-10 flex flex-wrap items-end justify-between gap-6">
                    <SectionTitle 
                    eyebrow="What we do"
                    title="Elevate your"
                    accent="brand"
                    className="mb-0"
                    />
                    <Reveal delay={0.2}>
                        <Button href="/contact">Contact us</Button>
                    </Reveal>
                </div>

                <div className="grid gap-6 sm:grid-cols-3">
                    {brandItems.map((item, i) => (
                        <Reveal
                        key={item.title}
                        delay={i * 0.2}
                        as="div"
                        className={`cursor-pointer rounded-[20px] p-8 text-left transition-colors duration-300 ${active === i ? "bg-accent" : "bg-secondary/40 hover:bg-secondary/70"}`}
                        >
                            <div onMouseEnter={() => setActive(i)}>
                                <img src={item.icon} alt="" className={`mb-6 h-10 w-10 invert ${active === i ? "invert-0" : ""}`}/>
                                <h3 className={`mb-3 text-lg font-bold capitalize ${active === i ? "text-dark" : "text-primary"}`}>
                                    {item.title}
                                </h3>
                                <p className={`mb-0 text-sm ${active === i ? "text-dark/80" : ""}`}>
                                {item.excerpt}
                                </p>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </div>
        </div>
      </section>
    </>
  )
}

export default OurBrands
