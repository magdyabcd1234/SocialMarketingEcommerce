import { useEffect, useRef, useState } from "react";

/**
 * Replacement for js/magiccursor.js: a small accent dot that follows the
 * mouse exactly, plus a larger ring that eases toward it. Automatically
 * disables itself on touch/coarse-pointer devices.
 */

export default function CustomCursor() {
    const dotRef = useRef(null);
    const outlineRef = useRef(null);
    const [enabled, setEnabled] = useState(false);

useEffect(() => {
    const supportsHover = window.matchMedia(
        "(hover: hover) and (pointer: fine)"
    ).matches;

    setEnabled(supportsHover);

    if (!supportsHover) return;

    let mouseX = 0;
    let mouseY = 0;
    let outlineX = 0;
    let outlineY = 0;
    let raf;

    function onMove(e) {
        mouseX = e.clientX;
        mouseY = e.clientY;

        if (dotRef.current) {
            dotRef.current.style.transform =
                `translate(${mouseX}px, ${mouseY}px)`;
        }
    }

    function loop() {
        outlineX += (mouseX - outlineX) * 0.15;
        outlineY += (mouseY - outlineY) * 0.15;

        if (outlineRef.current) {
            outlineRef.current.style.transform =
                `translate(${outlineX}px, ${outlineY}px)`;
        }

        raf = requestAnimationFrame(loop);
    }

    window.addEventListener("mousemove", onMove);

    raf = requestAnimationFrame(loop);

    return () => {
        window.removeEventListener("mousemove", onMove);
        cancelAnimationFrame(raf);
    };
}, []);

    if(!enabled) return null;
  return (
    <>
     <div 
     ref={dotRef}
     className="cursor-dot -ml-1 -mt-1 h-2 w-2 bg-accent"
      />
      <div 
      ref={outlineRef}
      className="cursor-outline -ml-4 -mt-4 h-8 w-8 border border-accent/70"
      /> 
    </>
  )
}
