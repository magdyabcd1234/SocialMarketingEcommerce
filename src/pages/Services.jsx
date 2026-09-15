import PageHeader from "@/components/ui/PageHeader";
import ScrollingTicker from "@/components/sections/shared/ScrollingTicker";
import ServicesGrid from "@/components/sections/services/ServicesGrid";
import OurTestimonial from "@/components/sections/shared/OurTestimonial";
import WhyChooseUs from "@/components/sections/shared/WhyChooseUs";


export default function Services() {
  return (
    <>
      <PageHeader title="Our" accent="services" current="our services" />
      <ScrollingTicker />
      <ServicesGrid />
      <OurTestimonial />
      <WhyChooseUs />
    
    </>
  )
}






