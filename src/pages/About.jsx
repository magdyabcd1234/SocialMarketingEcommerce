import PageHeader from "@/components/ui/PageHeader";
import ScrollingTicker from "@/components/sections/shared/ScrollingTicker";
import AboutUs from "@/components/sections/shared/AboutUs";
import OurApproach from "@/components/sections/about/OurApproach";
import WhyChooseUs from "@/components/sections/shared/WhyChooseUs";
import WhatWeDo from "@/components/sections/about/WhatWeDo";
import KeyFacts from "@/components/sections/shared/KeyFacts"
import TeamPreview from "@/components/sections/about/TeamPreview";
import OurSolution from "@/components/sections/about/OurSolution";
import OurTestimonial from "@/components/sections/shared/OurTestimonial";
import OurFaqs from "@/components/sections/shared/OurFaqs"

export default function About() {
  return (
    <>
      <PageHeader title="About" accent="us" current="about us"/>
      <ScrollingTicker />
      <AboutUs />
      <OurApproach />
      <WhyChooseUs />
      <WhatWeDo />
      <KeyFacts />
      <TeamPreview />
      <OurSolution />
      <OurTestimonial />
      <OurFaqs />
    </>
  )
}






