import { useEffect } from "react";
import useLockBodyScroll from "@/hooks/useLockBodyScroll";

const VideoModal = ({videoId,open,onClose}) => {
  useLockBodyScroll(open);

  useEffect(() => {
    if(!open) return;
    function onKeyDown(e) {
      if(e.key === "Escape") onClose();
    }
    window.addEventListener("keydown", onKeyDown)
    return () => window.removeEventListener("keydown", onKeyDown)
  }, [open,onClose])

  if(!open) return null;


  return (
    <>
      <div
      onClick={onClose}
      className="fixed inset-0 z-101 flex items-center justify-center bg-dark/90 p-6 backdrop-blur-sm"
      >
        <div
        onClick={(e) => e.stopPropagation()}
        className="aspect-video w-full max-w-[9000px] overflow-hidden rounded-[20px]"
        >
          <iframe 
          className="w-full h-full"
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
          title="Video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope;picture-in-picture"
          allowFullScreen
           />
           <button
           type="button"
           onClick={onClose}
           aria-label="Close Video"
           className="absolute top-6 right-6 flex w-11 h-11 items-center justify-center rounded-full border border-primary text-primary"
           >
            <i className="fa-solid fa-xmark"></i>
           </button>
        </div>
      </div>
    </>
  )
}

export default VideoModal
