import PageHeader from "@/components/ui/PageHeader";
import ScrollingTicker from "@/components/sections/shared/ScrollingTicker";
import BlogGrid from "@/components/sections/blog/BlogGrid";


export default function Blog() {
  return (
    <>
      <PageHeader title="Blog" accent="blog" current="blog" />
      <ScrollingTicker />
      <BlogGrid />
    </>
  )
}
