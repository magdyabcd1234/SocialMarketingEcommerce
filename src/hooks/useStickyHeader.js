import { useEffect, useState } from "react"

/**
 * Reproduces the original scroll behaviour from js/function.js + the
 * `.hide` / `.active` rules in custom.css:
 *   - scrollY <= 150   -> header sits in normal flow, over the hero
 *   - 150 < scrollY <= 600 -> header slides up out of view
 *   - scrollY > 600    -> header re-appears, pinned + blurred background
 *
 * (In the original CSS both `.hide` and `.active` can be applied at once;
 * `.active` wins because it's declared later. We reproduce that resolved
 * end-state directly instead of relying on class order.)
 */


export default function useStickyHeader() {
    const [state, setState] = useState("top")

    useEffect(() => {
        function onScroll() {
            const fromTop = window.scrollY;
            if(fromTop > 600) setState("sticky")
            else if (fromTop > 150) setState("hidden")
            else setState("top")    
        }

        onScroll();
        window.addEventListener("scroll", onScroll, {passive: true})
        return () => window.removeEventListener("scroll", onScroll);
    }, [])
  return state; // 'top' | 'hidden' | 'sticky'
}
