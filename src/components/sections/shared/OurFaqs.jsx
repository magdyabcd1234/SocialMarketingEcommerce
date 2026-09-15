import SectionTitle from "@/components/ui/SectionTitle";
import Reveal from "@/components/ui/Reveal";
import AccordionItem from "@/components/ui/AccordionItem";
import { faqs } from "@/data/faqs";

const reviewImages = ["/images/satisfy-client-img-1.jpg", "/images/satisfy-client-img-2.jpg", "/images/satisfy-client-img-3.jpg"]

const OurFaqs = () => {
  return (
    <>
      <section className='py-20 lg:py-[100px]'>
        <div className='container-custom'>
            <div className="grid gap-12 lg:grid-cols-2">
                <div>
                    <SectionTitle 
                    eyebrow="faqs"
                    title="Answer to your common"
                    accent="questions"
                    description="Find clear and concise answers to the most frequently asked questions about
                    our social media marketing services."
                    />

                    <Reveal className="flex items-center gap-6 rotate-[20px] border border-divider p-6">
                        <div className="flex items-center gap-2">
                            <h2 className="text-3xl font-bold text-primary">4.9</h2>
                            <i className="fa-solid fa-star text-accent" />
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="flex -space-x-3">
                                {reviewImages.map((src) => (
                                    <img key={src} src={src} alt="" className="w-10 h-10 rounded-full border-2 border-dark object-cover" />
                                ))}
                            </div>
                            <p className="mb-0 text-sm">Explore our trust score Custom Reviews</p>
                        </div>
                    </Reveal>
                </div>

                <div>
                    {faqs.map((item, i) => (
                        <AccordionItem key={item.question} question={item.question} answer={item.answer} defaultOpen={i === 0}/>
                    ))}
                </div>
            </div>
        </div>
      </section>
    </>
  )
}

export default OurFaqs
