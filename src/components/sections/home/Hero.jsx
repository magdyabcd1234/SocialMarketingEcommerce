import Reveal from "@/components/ui/Reveal";
import AnimatedText from "@/components/ui/AnimatedText";
import Button from "@/components/ui/Button";
import SatisfiedClientsBadge from "@/components/ui/SatisfiedClientsBadge";

export default function Hero() {
  return (
    <div className="hero relative flex min-h-screen items-center overflow-hidden pt-[140px] pb-[90px] lg:pt-[180px]">
        {/* Background video, dimmed with a dark overlay */}
        <div className="absolute inset-0 h-full w-full">
            <video 
            autoPlay
            muted
            loop
            playsInline
            poster="/images/hero-bg.jpg"
            className="h-full w-full object-cover"
            >
                {/* Add your own hero video file to /puplic/videos and point src at it */}
                <source src="/videos/hero-bg-video.mp4" type="video/mp4" />
            </video>
         <div className="absolute inset-0 bg-dark/90" />
        </div>

        {/* Floating glow orbs - pure decoration, sit behind everything */}
        <div 
        aria-hidden="true"
        className="animate-pulse-glow pointer-events-none absolute -top-32 -left-24 h-[420px] w-[420px] rounded-full bg-accent/25 blur-[120px]"
        />
        <div 
        aria-hidden="true"
        className="animate-pulse-glow pointer-events-none absolute top-1/3 -right-32 h-[380px] w-[380px] rounded-full bg-accent/15 blur-[130px] [animation-delay:1.2s]"
        />
        <div className="container-custom relative z-10">
            <div className="grid items-center gap-12 lg:grid-cols-2">
                {/* Hero content */}
                <div>
                    <Reveal variant="up" className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-bold tracking-[0.08em] text-primary uppercase backdrop-blur-[20px]">
                        <span className="h-1.5 w-1.5 rounded-full bg-accent shadow-[0_0_10px_2px_rgba(191,247,71,0.8)]" /> 
                        Trusted social media growth partner
                    </Reveal>

                    <AnimatedText 
                        as="h1"
                        variant="chars"
                        text="Grow Your Brand with Powerful"
                        accent="Social Media Strategies"
                        className="text-[38px] leading-[1.15em] font-light text-primary sm:text-[48px] lg:text-[68px]"
                    />

                    <Reveal as="p" delay={0.1} className="mt-5 max-w-[520px] text-lg">
                        Elevate your online presence, engage your audience, and meaningful results with tailored social media strategies.
                    </Reveal>

                    <Reveal delay={0.25} className="mt-8 flex flex-wrap items-center gap-6">
                        <Button href="/contact">get started</Button>
                        <Button href="/about" variant="readmore">
                        learn more
                        </Button>
                    </Reveal>
                </div>

                {/* Hero image + floating decor */}
                <div className="relative pl-0 text-right lg:pl-12.5">
                    <div className="relative mx-auto max-w-130 pr-0 lg:pr-7.5">
                        <div 
                            aria-hidden="true"
                            className="absolute inset-8 -z-10 rounded-full bg-accent/20 blur-[80px]"
                        />
                        <figure>
                            <img 
                            src="/images/hero-image.png"
                            alt="Social media marketing"
                            className="aspect-[1/1.26] w-full object-contain drop-shadow-[0_30px_px_60px_rgba(0,0,0,0.5)]"
                            />
                        </figure>

                        <div className="animate-float-y absolute top-[100px] left-0">
                            <FloatingIcon src="/images/icon-hero-img-1.svg"/>
                        </div>
                        <div className="animate-float-y absolute right-0 bottom-[180px] [animation-delay:0.5s]">
                            <FloatingIcon src="/images/icon-hero-img-2.svg"/>
                        </div>
                    </div>

                    <div className="absolute bottom-[30px] left-[10px] sm:left-[60px]">
                        <SatisfiedClientsBadge />
                    </div>
                </div>

            </div>
        </div>
    </div>
  )
}

function FloatingIcon({ src }) {
    return (
        <figure className="group glow-accent relative flex h-[82px] w-[82px] items-center justify-center rounded-full bg-accent shadow-[0_10px_25px_-8px_rgba(191,247,71,0.5)] transition-all duration-400 hover:scale-110 hover:bg-primary">
            <img
            src={src}
            alt=""
            className="relative z-10 max-w-[41px] transition-transform duration-400 group-hover:rotate-12"
             />
        </figure>
    )
}