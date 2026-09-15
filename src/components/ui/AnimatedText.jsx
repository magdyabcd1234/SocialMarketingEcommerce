import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { splitWords, splitChars } from "@/lib/splitText";

gsap.registerPlugin(ScrollTrigger);

function Words ({ text, variant }) {
    const words = splitWords(text || "")
    return words.map((word, wi) => (
        <span key={wi} className="inline-block overflow-hidden align-top">
            {variant === "chars" ? (
                splitChars(word).map((char, ci) => (
                    <span key={ci} data-anime-unit className="inline-block">
                        {char}
                    </span>
                ))
            ) : (
                <span data-anime-unit className="inline-block">
                    {word}
                </span>
            )}
            {wi < words.length - 1 ? "\u00A0" : ""}
        </span>
    ));
}

/**
 * Replaces the original `.text-anime-style-1` / `.text-anime-style-2`
 * GSAP + SplitText treatment used on the hero and section headings.
 *
 * Props:
 *  - as         tag to render (h1, h2, h3, span...) — default h2
 *  - variant    "words" (style-1) or "chars" (style-2)
 *  - text       plain leading text
 *  - accent     optional trailing text rendered in the accent color
 *               (mirrors `<span>accent text</span>` in the source markup)
 */


export default function AnimatedText({
    as: Tag = "h2",
    variant = "words",
    text = "",
    accent = "",
    className = "",
}) {
    const ref = useRef(null);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        const targets = el.querySelectorAll("[data-anime-unit]");
        const ctx = gsap.context(() => {
            gsap.from(targets, {
                x: variant === "chars" ? 10 : 20,
                autoAlpha: 0,
                duration: 0.8,
                ease: "power2.out",
                stagger: variant === "chars" ? 0.02 : 0.05,
                scrollTrigger: {trigger: el, start: "top 85%"},
            });
        }, el);

        return () => ctx.revert();
    }, [variant, text, accent])
  return (
    <Tag ref={ref} className={className}>
      <Words text={text} variant={variant} />
      {accent ? (
        <>
            {" "}
            <span className="text-accent">
                <Words text={accent} variant={variant}/>
            </span>
        </>
      ) : null}
    </Tag>
  );
}
