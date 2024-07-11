
import VideoThumb from '@/public/images/hero-image-01.jpg'
import ModalVideo from '@/components/modal-video'

export default function Hero() {
  return (
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
        <div className="w-[760px] h-[576px] mx-auto rounded overflow-hidden">
          {/*
          <ModalVideo
            thumb={VideoThumb}
            thumbWidth={1024}
            thumbHeight={576}
            thumbAlt="Modal video thumbnail"
            video="/videos/video.mp4"
            videoWidth={1920}
            videoHeight={1080} />
          */}
        </div>
      </div>
  )
}
