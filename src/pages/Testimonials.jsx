import PageHeader from "@/components/ui/PageHeader";
import ScrollingTicker from "@/components/sections/shared/ScrollingTicker";
import TestimonialGrid from "@/components/sections/testimonial/TestimonialGrid";

const Testimonials = () => {
  return (
    <>
              <PageHeader title="Our" accent="testimonials" current="our testimonials"/>
              <ScrollingTicker />
              <TestimonialGrid />
    </>
  )
}

export default Testimonials
