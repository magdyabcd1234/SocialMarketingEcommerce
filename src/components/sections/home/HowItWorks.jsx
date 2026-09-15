import { useState } from "react";
import SectionTitle from "@/components/ui/SectionTitle";
import Reveal from "@/components/ui/Reveal";
import { Link } from "react-router-dom";
import { howItWorks } from "../../../data/howItWorks";

const HowItWorks = () => {
  const defaultActive = howItWorks.findIndex((s) => s.active);
  const [active, setActive] = useState(
    defaultActive === -1 ? 0 : defaultActive,
  );
  return (
    <>
      <section className="py-20 lg:py-[100px]">
        <div className="container-custom">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <SectionTitle
                eyeborw="How it work"
                title="Step-by-Step guide to social"
                accent="success"
                description="Our step-by-step guide to social success outlines a clear process elevate your 
                        brand. From strategy creation development to campaign execution and performance 
                        tracking."
              />
              <Link
                to="/contact"
                className="group relative mt-6 hidden h-[140px] w-[140px] items-center justify-center rounded-full border border-divider text-cenetr text-sm font-bold text-primary capitalize transition-colors duration-300 hover:border-accent sm:flex"
              >
                Start your journey
                <span className="absolute ring-4 bottom-4 flex h-8 w-8 items-center justify-center rounded-full bg-accent transition-transform duration-300 group-hover:rotate-45">
                 <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4 text-dark">
  <path
    d="M5 12h14M13 5l7 7-7 7"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  />
</svg>
                </span>
              </Link>
            </div>

            <div className="flex flex-col gap-4">
                {howItWorks.map((step,i) => (
                    <Reveal
                    key={step.no}
                    delay={i * 0.15}
                    as="div"
                    className={`cursor-pointer overflow-hidden rounded-[20px] group border transition-colors duration-300 ${active === i ? "border-accent bg-accent/10" : "border-divider"}`}
                    >
                        <img src={step.image} alt="" className="h-full w-0 group-hover:w-full transition-all duration-300 -z-1 opacity-20 rounded-full object-cover absolute" />

                        <div
                        onMouseEnter={() => setActive(i)}
                        className="flex items-center justify-between gap-6 p-6"
                        >
                            <div className="flex items-center gap-5">
                                <div>
                                    <h3 className="mb-1 text-lg font-bold text-primary capitalize">{step.title}</h3>
                                    <p className="mb-0 text-sm">{step.excerpt}</p>
                                </div>
                            </div>
                            <h2 className={`shrink-0 text-3xl font-bold ${active === i ? "text-accent" : "text-primary/30"}`}>
                            {step.no}
                            </h2>
                        </div>
                    </Reveal>
                ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HowItWorks;
