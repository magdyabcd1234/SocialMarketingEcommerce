import { useEffect, useRef, useState } from "react";


/**
 * Lightweight replacement for WOW.js. Original markup used
 * `class="wow fadeInUp" data-wow-delay="0.2s"`; here a component does:
 *
 *   const { ref, revealed } = useReveal();
 *   <div ref={ref} className={`reveal-up ${revealed ? "is-revealed" : ""}`}>
 *
 * `delay` (seconds) mirrors data-wow-delay for staggered groups.
 */

export function useReveal({ delay= 0, threshold = 0.15 } = {}) {
    const ref = useRef(null);
    const [revealed, setRevealed] = useState(false);

    useEffect(() => {
        const node = ref.current
        if(!node) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    const timer = setTimeout(() => setRevealed(true), delay * 1000);
                    observer.disconnect();
                    return () => clearTimeout(timer)
                }
            },
            { threshold, rootMargin: "0px 0px -50px 0px" }
        );

        observer.observe(node)
        return () => observer.disconnect()
    }, [delay, threshold])
  return { ref, revealed }
}
