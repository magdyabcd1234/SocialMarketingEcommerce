import PageHeader from "@/components/ui/PageHeader";
import ScrollingTicker from "@/components/sections/shared/ScrollingTicker";
import TeamGrid from "@/components/sections/team/TeamGrid";

const Team = () => {
  return (
    <>
        <PageHeader title="Our" accent="team" current="our team"/>
        <ScrollingTicker />
        <TeamGrid />
    </>
  )
}

export default Team
