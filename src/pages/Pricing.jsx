import PageHeader from "@/components/ui/PageHeader";
import ScrollingTicker from "@/components/sections/shared/ScrollingTicker";
import PricingGrid from "@/components/sections/pricing/PricingGrid";
import OurTestimonial from "@/components/sections/shared/OurTestimonial";
import OurFaqs from "@/components/sections/shared/OurFaqs";

const Pricing = () => {
  return (
    <>
        <PageHeader title="Pricing" accent="plan" current="pricing plan" />
        <ScrollingTicker />
        <PricingGrid /> 
        <OurTestimonial />
        <OurFaqs />     
    </>
  )
}

export default Pricing
