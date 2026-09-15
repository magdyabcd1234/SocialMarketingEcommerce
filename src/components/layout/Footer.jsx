import { Link } from "react-router-dom";
import { footerLinks, footerSocialLinks } from "@/data/footer";
import { siteConfig } from "@/data/siteConfig";
import SectionTitle from "@/components/ui/SectionTitle";

export const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <>
      <footer className="main-footer relative overflow-hidden">
        {/* Let's Work Together band */}
            <div className="relative py-20">
                <div className="container-custom">
                    <div className="relative bg-[url('/images/work-together-bg.png')] bg-center bg-no-repeat py-24 text-center">
                    <h3 className="mb-5 text-[22px] font-bold tracking-wide text-primary uppercase">
                        Let's Collaborate
                    </h3>
                    <h2 className="text-[42px] leading-none font-extrabold text-primary uppercase sm:text-[8px] lg:text-[130px] xl:text-[180px]">
                        Let's Work Together
                    </h2>

                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <Link to="/contact" className="group glow-accent flex h-[110px] w-[110px] flex-col items-center justify-center rounded-full bg-accent text-accent shadow-[0_15px_40px_-12px_rgba(191,247,71,0.5)] transition-all duration-300 ease-out hover:scale-110 hover:bg-secondary sm:h-[150px] sm:w-[150px]">
                    <svg viewBox="0 0 24 24" fill="none" className="mb-2 h-6 w-6 text-dark transition-transform duration-400 group-hover:rotate-45 group-hover:text-primary">
                      <path d="M7 17 17 7M9 7h8v8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span className="text-sm font-bold text-dark capitalize transition-colors duration-300 group-hover:text-primary">
                      Get in Touch
                    </span>
                    </Link>
                    </div>
                    </div>
                </div>
            </div>

            {/* Main Footer */}
            <div className="border-t border-divider pt-[60px]">
              <div className="container-custom">
                <div className="grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-12">
                  <div className="md:col-span-12 lg:col-span-5">
                    <SectionTitle 
                    title="Let's achieve social media"
                    accent="excellence"
                    titleTag="h2"
                    className="mb-8 [&_h2]:text-[32px] lg:[&_h2]:text-[38px]"
                    />
                    <form onSubmit={(e) => e.preventDefault()}
                      className="flex items-center gap-0"
                    >
                      <input type="email" required placeholder="Enter Your Email" className="w-[calc(100%-60px)] rounded-full border border-divider bg-transparent px-4 py-[15px] text-base font-medium text-primary placeholder:text-primary focus:outline-none"/>
                      <button
                      type="submit"
                      aria-label="Subscribe"
                      className="ml-[-50px] flex h-[50px] w-[50px] shrink-0 items-center justify-center rounded-full bg-accent transition-all duration-300 hover:scale-110 hover:bg-primary hover:shadow-[0_0_20px_-2px_rgba(191,247,71,0.7)]"
                      >
                        <i className="fa-regular fa-paper-plane text-lg text-dark" />
                      </button>
                      </form>
                  </div>

                  <FooterColumn title="Quick Links" links={footerLinks.quickLinks} className="md:col-span-4 lg:col-span-2"/>

                  <FooterColumn title="Services" links={footerLinks.services} className="md:col-span-4 lg:col-span-2"/>

                  <FooterColumn title="Support" links={footerLinks.support} className="md:col-span-4 lg:col-span-2"/>

                  <div className="md:col-span-12">
                    <div className="relative flex flex-wrap items-center gap-8 overflow-hidden rounded-[30px] border border-divider bg-secondary/40 p-8 backdrop-blur-[100px] transition-colors duration-500 hover:border-accent/40 sm:p-[50px_60px]">
                    <img src={siteConfig.logo} alt={siteConfig.name} className="max-w-[180px]"/>

                    <div className="ml-auto flex flex-wrap justify-end gap-y-5">
                      <div className="flex items-center gap-4 border-r border-divider pr-10">
                        <i className="fa-solid fa-phone-volume text-2xl text-accent" />
                        <a href={`tel:${siteConfig.phone}`} className="text-lg font-bold text-primary transition-colors duration-300 hover:text-accent">
                          {siteConfig.phone}
                        </a>
                      </div>
                      <div className="flex items-center gap-4 pl-2">
                        <i className="fa-solid fa-envelope text-2xl text-accent" />
                        <a href={`malito:${siteConfig.email}`} className="text-lg font-bold text-primary transition-colors duration-300 hover:text-accent">{siteConfig.email}</a>
                      </div>
                    </div>
                    </div>
                  </div>
                </div>

                {/* Copyright row */}
                <div className="mt-10 flex flex-wrap items-center justify-between gap-6 border-t border-divider py-8">
                  <p className="mb-0">Copyright © {year} All Rights Reserved.</p>
                  <ul className="flex flex-wrap items-center gap-6">
                    {footerSocialLinks.map((s) => (
                      <li key={s.name}>
                        <a href={s.href}
                        className="inline-flex items-center gap-2 text-primary transition-all duration-300 hover:-translate-y-0.5 hover:text-accent"
                        >
                          <i className={s.icon} />
                          {s.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
      </footer>
    </>
  )
}


function FooterColumn({ title, links, className }) {
  return (
    <div className={className}>
      <h3 className="mb-10 text-[22px] font-bold text-primary capitalize">{title}</h3>
      <ul className="m-0 list-none p-0">
        {links.map((link) => (
         <li key={link.label} className="mb-4 leading-[1.7em] capitalize last:mb-0">
           <Link
          to={link.href}
          className="mb-4 leading-[1.7em] capitalize last:mb-0"
          >
            {link.label}
            <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-accent transition-all duration-300 ease-out group-hover:w-full" />
          </Link>
         </li>
        ))}
      </ul>
    </div>
  )
}

export default Footer;