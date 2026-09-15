import Marquee from "@/components/ui/Marquee";
import { clientLogos } from "@/data/clientLogos"

export default function ScrollingTicker() {
  return (
    <div className="relative border-y border-divider py-10">
    <Marquee 
    items={clientLogos}
    renderItem={(src) => (
        <img src={src} alt="Client logo" className="logo-force-white h-8 w-auto sm:h-10"/>
    )} 
    />
    </div>
  );
}
