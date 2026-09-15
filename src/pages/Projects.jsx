import PageHeader from "@/components/ui/PageHeader";
import ScrollingTicker from "@/components/sections/shared/ScrollingTicker";
import ProjectFilterGrid from "@/components/sections/projects/ProjectFilterGrid";



export default function Projects() {
  return (
    <>
      <PageHeader title="Our" accent="projects" current="our projects" />
      <ScrollingTicker />
      <ProjectFilterGrid />
    </>
  )
}
