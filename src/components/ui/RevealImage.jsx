import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * Faithful port of the original `.reveal` treatment: a mask box wipes
 * open while the image counter-wipes, revealing it left-to-right.
 */

export default function RevealImage({ src, alt = "", className = "" }) {

    const containerRef = useRef(null);
    const imgRef = useRef(null);

    useEffect(() => {
        const container = containerRef.current;
        const image = imgRef.current

        if(!container || !image) return;

        const ctx = gsap.context(() => {
            const tl = gsap.timeline({
                scrollTrigger: { trigger: container, start: "top 85%" },
            })
            tl.set(container, { autoAlpha: 1 });
            tl.from(container, {duration: 1, xPercent: -100, ease: "power2.out"});
            tl.from(
                image,
                {duration: 1, xPercent: 100, ease: "power2.out"},
                "<"
            )
        }, container)

        return () => ctx.revert();
    }, [])

  return (
    <div ref={containerRef} className={`invisible relative inline-flex overflow-hidden ${className}`}>
      <img ref={imgRef} src={src} alt={alt} className="h-full w-full origin-left object-cover"/>
    </div>
  )
}
