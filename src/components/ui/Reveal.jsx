import { useReveal } from "@/hooks/useReveal"

const VARIANT_CLASS = {
    up: "reveal-up",
    left: "reveal-up",
    right: "reveal-right",
    zomm: "reveal-zoom"
};


/**
 * Drop-in wrapper replacing `class="wow fadeInUp" data-wow-delay="0.2s"`.
 * Usage: <Reveal variant="up" delay={0.2}><Card /></Reveal>
 */

export default function Reveal({ children, variant = "up", delay = 0, as: Tag = "div", className = "" }) {
    const { ref, revealed } = useReveal({ delay })
  return (
    <Tag
        ref={ref}
        className={`${VARIANT_CLASS[variant]} ${revealed ? "is-revealed" : ""} ${className}`}
    >
      {children}
    </Tag>
  )
}
