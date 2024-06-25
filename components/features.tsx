import Feature from './feature';
import { CloudIcon, HomeIcon, PuzzlePieceIcon, UsersIcon, VideoCameraIcon, WrenchScrewdriverIcon } from '@heroicons/react/24/outline'

export default function Features() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 mb-4">Go where humans cannot.</h2>
            <p className="text-xl text-gray-400">
              We take your visuals to new heights. Specializing in FPV (First-Person View) drone cinematography, we capture stunning aerial footage that brings a dynamic and immersive perspective to your projects. Our team of skilled drone pilots and cinematographers is dedicated to delivering high-quality, cinematic experiences tailored to your unique vision.
            </p>
          </div>

          {/* Items */}
          <div className="max-w-sm mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-16 items-start md:max-w-2xl lg:max-w-none" data-aos-id-blocks>
            {/* 1st item */}
            <Feature 
              image={<CloudIcon />}
              title="Aerial Cinematography"
              text="Experience breathtaking aerial shots that add a cinematic flair to your film, commercial, or event. Our FPV drones maneuver through tight spaces and capture fluid, dynamic footage that traditional drones can't match."
            />

            {/* 2nd item */}
            <Feature 
              image={<HomeIcon />}
              title="Real Estate Showcases"
              text="Present properties like never before. Our FPV drones provide potential buyers with immersive tours, highlighting every feature of the property with seamless, flowing footage."
            />
            {/* 3nd item */}
            <Feature 
              image={<UsersIcon />}
              title="Sports & Events Coverage"
              text="Capture the action from unique angles. Our FPV drones are perfect for live events, sports, and extreme activities, providing dynamic footage that puts viewers right in the middle of the action."
            />
            {/* 4th item */}
            <Feature 
              image={<WrenchScrewdriverIcon />}
              title="Drone builds"
              text="At SkyHiFilms, we don't just fly drones—we build them too. Our custom drone builds are designed to meet your specific requirements, whether you're a hobbyist or a professional."
            />
            {/* 5th item */}
            <Feature 
              image={<VideoCameraIcon />}
              title="3D Modelling"
              text="We can transform our captured videos into interactive 3D models. Our 3D modeling services provide precise and realistic models for various applications, explore the world as the drone does."
            />
            {/* 6th item */}
            <Feature 
              image={<PuzzlePieceIcon />}
              title="Custom Projects"
              text="Have a unique idea? We love creative challenges. Let us help bring your vision to life with custom FPV drone solutions tailored to your specific needs."
            />
          </div>
        </div>
      </div>
    </section>
  )
}
