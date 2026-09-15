import PageHeader from "@/components/ui/PageHeader";
import ScrollingTicker from "@/components/sections/shared/ScrollingTicker";
import ImageGalleryGrid from "@/components/sections/gallery/ImageGalleryGrid";

const ImageGallery = () => {
  return (
    <>
            <PageHeader title="Image" accent="gallery" current="images gallery"/>
            <ScrollingTicker />
            <ImageGalleryGrid />
    </>
  )
}

export default ImageGallery
