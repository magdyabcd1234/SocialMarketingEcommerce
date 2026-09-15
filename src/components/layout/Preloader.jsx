import { useEffect, useState } from "react"
export default function Preloader() {
    const [visible, setVisible] = useState(true);
    const [fading, setFading] = useState(false);

    useEffect(() => {
        // Mirrors $window.on('load', () => $('preloader').fadeOut(600))
        const finish = () => {
            setFading(true);
            setTimeout(() => setVisible(false), 600)
        }

        if(document.readyState === "complete") {
            finish();
        } else {
            window.addEventListener("load", finish);
            return () => window.removeEventListener("load", finish)
        }
    }, [])

    if (!visible) return null
  return (
    <div className={`fixed inset-0 z-1000 flex items-center justify-center bg-dark trasnition-opacity duration-600 ${fading ? "opacity-0" : "opacity-100"}`}>
      <div className="relative h-[100px] w-[100px]">
        <div className="h-full w-full animate-route-loading rounded-full border border-transparent border-t-accent border-b-accent" />
        <img 
        src="/images/loader.svg"
        alt="Loading"
        className="absolute top-1/2 left-1/2 max-w-[66px] -translate-x-1/2 -translate-y-1/2"
         />
      </div>
    </div>
  )
}
