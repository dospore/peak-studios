import VideoThumb from '@/public/images/hero-image-01.jpg'
import ModalVideo from '@/components/modal-video'
import HeroBg from '@/components/herobg'

export default function Hero() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">

        {/* Background swirls */}
        <HeroBg />

        {/* Hero content */}
        <div className="relative pt-32 pb-10 md:pt-40 md:pb-16">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <h1 className="h1 mb-4 font-bacasime-antique text-slate-800 font-normal" data-aos="fade-up">SkyHi Film</h1>
            <p className="text-xl text-gray-400 mb-8 font-bacasime-antique tracking-wide text-slate-600" data-aos="fade-up" data-aos-delay="200">
              Capturing stunning perspectives with breathtaking aerial cinematography and photography, delivering captivating shots from new viewpoints.
            </p>
            <div className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center">
              <div data-aos="fade-up" data-aos-delay="600">
                <a className="btn text-white bg-gray-700 hover:bg-gray-800 w-full sm:w-auto sm:ml-4" href="#0">Our Services</a>
              </div>
            </div>
          </div>

          <ModalVideo
            thumb={VideoThumb}
            thumbWidth={1024}
            thumbHeight={576}
            thumbAlt="Modal video thumbnail"
            video="/videos/video.mp4"
            videoWidth={1920}
            videoHeight={1080} />

        </div>

      </div>
    </section>
  )
}
