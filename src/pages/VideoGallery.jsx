import PageHeader from "@/components/ui/PageHeader";
import ScrollingTicker from "@/components/sections/shared/ScrollingTicker";
import VideoGalleryGrid from "@/components/sections/gallery/VideoGalleryGrid";

const VideoGallery = () => {
  return (
    <>
    <PageHeader title="Video" accent="gallery" current="video gallery"/>
    <ScrollingTicker />
    <VideoGalleryGrid />
    </>
  )
}

export default VideoGallery
