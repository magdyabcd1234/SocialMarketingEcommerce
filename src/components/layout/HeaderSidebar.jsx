import { siteConfig, socialLinks } from "@/data/siteConfig";
import useLockBodyScroll from "../../hooks/useLockBodyScroll";

const contactItems = [
    { icon: "/images/icon-phone-accent.svg", label: "Phone", value: siteConfig.phone },
    { icon: "/images/icon-mail-accent.svg", label: "Email", value: siteConfig.email },
    { icon: "/images/icon-location-accent.svg", label: "Address", value: siteConfig.address },
]


export default function HeaderSidebar({ open, onClose }) {

    useLockBodyScroll(open);

  return (
    <>
      <div
      onClick={onClose} 
      aria-hidden="true"
      className={`fixed inset-0 z-100 bg-black/60 transition-opacity duration-300 ${open ? "opacity-100" : "pointer-events-none opacity-0"}`}
      />
<div
  className={`fixed top-0 right-0 z-101 h-dvh w-full max-w-[375px] overflow-y-auto bg-secondary px-[30px] py-[80px] transition-transform duration-300 ease-in-out ${
    open ? "translate-x-0" : "translate-x-full"
  }`}
>
        <button
        type="button"
        onClick={onClose}
        aria-label="Close panel"
        className="absolute top-[30px] right-[37px] flex h-9 w-9 items-center justify-center rounded-full border border-primary text-primary"
        >
            <i className="fa-solid fa-xmark"></i>
        </button>

        <div className="mt-16 flex flex-col gap-8">
            {contactItems.map((item) => (
                <div key={item.label} className="border-b border-divider pb-8 text-center">
                    <img src={item.icon} alt="" className="mx-auto mb-5 h-10 w-10"/>
                    <h3 className="mb-2 text-[22px] font-bold text-primary capitalize">{item.label}</h3>
                    <p className="mb-0 text-body">{item.value}</p>
                </div>
            ))}

            <div className="text-center">
                <h3 className="mb-5 text-[22px] font-bold text-primary capitalize">Stay Connected</h3>
                <ul className="flex justify-center gap-4">
                    {socialLinks.map((s) => (
                        <li key={s.name}>
                            <a href={s.href} aria-label={s.name} className="flex h-10 w-10 items-center justify-center rounded-full border border-accent text-accent transition-colors duration-300 hover:border-primary hover:text-primary">
                                <i className={s.icon} />
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
      </div>
    </>
  )
}
