import PricingCard from "@/components/ui/PricingCard";
import { pricingPlans } from "@/data/pricing"

const PricingGrid = () => {
  return (
    <>
      <section className="py-20 lg:py-[100px]">
        <div className="container-custom grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {pricingPlans.map((plan,i) => (
            <PricingCard key={plan.name} plan={plan} delay={i * 0.25} />
          ))}
        </div>
      </section>
    </>
  )
}

export default PricingGrid
