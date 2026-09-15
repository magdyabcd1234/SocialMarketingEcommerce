import { useParams } from "react-router-dom";
import PageHeader from "@/components/ui/PageHeader";
import { services } from "@/data/services";
import ScrollingTicker from "@/components/sections/shared/ScrollingTicker";
import ServiceSingleContent from "@/components/sections/services/ServiceSingleContent";
import ServiceSidebar from "@/components/sections/services/ServiceSidebar";

export default function ServiceSingle() {
    const { slug } = useParams();
    const service = services.find((s) => s.slug === slug) ?? services[0];
  return (
    <>
        <PageHeader title="Service" accent="details" current={service.title} />
        <ScrollingTicker />
        <section className="py-20 lg:py-[100px]">
            <div className="container-custom grid gap-12 lg:grid-cols-12">
                <div className="lg:col-span-8">
                    <ServiceSingleContent />
                </div>
                <div className="lg:col-span-4">
                    <ServiceSidebar />
                </div>
            </div>
        </section>
    </>
  )
}
