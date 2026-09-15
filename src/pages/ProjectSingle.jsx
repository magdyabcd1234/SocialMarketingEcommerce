import { useParams } from "react-router-dom";
import PageHeader from "@/components/ui/PageHeader";
import ScrollingTicker from "@/components/sections/shared/ScrollingTicker";
import ProjectSingleContent from "@/components/sections/projects/ProjectSingleContent";
import ProjectSidebar from "@/components/sections/projects/ProjectSidebar";
import { projects } from "@/data/projects"

const ProjectSingle = () => {
    const { slug } = useParams();
    const project = projects.find((p) => p.slug === slug) ?? projects[0]
  return (
    <>
          <PageHeader title="Project" accent="details" current={ProjectSingle.title} />
          <ScrollingTicker />
          <section className="py-20 lg:py-[100px]">
            <div className="container-custom grid gap-12 lg:grid-cols-12">
                <div className="lg:col-span-8">
                    <ProjectSingleContent project={project}/>
                </div>
                <div className="lg:col-span-4">
                    <ProjectSidebar project={project}/>
                </div>
            </div>
          </section>
    </>
  )
}

export default ProjectSingle
