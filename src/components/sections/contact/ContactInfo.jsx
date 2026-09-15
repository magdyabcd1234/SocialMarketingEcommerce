import { useState } from "react";
import Reveal from "@/components/ui/Reveal";
import { contactInfoItems } from "@/data/contactInfo";

const ContactInfo = () => {
    const defaultActive = contactInfoItems.findIndex((i) => i.active);
    const [active, setActive] = useState(defaultActive === -1 ? 0 : defaultActive)
  return (
    <>
      <section className="pt-20 lg:pt-[100px]">
        <div className="container-custom grid gap-6 sm:grid-cols-3">
            {contactInfoItems.map((item,i) => (
                <Reveal
                key={item.value}
                delay={i * 0.2}
                className={`cursor-pointer rounded-[20px] border p-8 text-center transition-colors duration-300 ${active === i ? "border-accent bg-accent/10" : "border-divider"}`}
                >
                    <div onMouseEnter={() => setActive(i)}>
                        <img src={item.icon} alt="" className="mx-auto mb-5 h-10 w-10 invert"/>
                        <p className="mb-3 text-sm">{item.excerpt}</p>
                        <h3 className="text-lg font-bold text-primary">
                            {item.href ? (
                                <a href={item.href} className="transition-colors duration-300 hover:text-accent">
                                    {item.value}
                                </a>    
                            ) : (
                                item.value
                            )
                        }
                        </h3>
                    </div>
                </Reveal>
            ))}
        </div>
      </section>
    </>
  )
}

export default ContactInfo
