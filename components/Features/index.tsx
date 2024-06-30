import { CloudIcon, HomeIcon, PuzzlePieceIcon, UsersIcon, VideoCameraIcon, WrenchScrewdriverIcon } from '@heroicons/react/24/outline'

type Feature = {
  image: React.ReactNode,
  title: React.ReactNode,
  text: React.ReactNode,
}

export const features: Feature[] = [
  {
    image: <CloudIcon />,
    title: "Aerial Cinematography",
    text: "Experience breathtaking aerial shots that add a cinematic flair to your film, commercial, or event. Our FPV drones maneuver through tight spaces and capture fluid, dynamic footage that traditional drones can't match."
  },
  {
    image: <HomeIcon />,
              title: "Real Estate Showcases",
              text: "Present properties like never before. Our FPV drones provide potential buyers with immersive tours, highlighting every feature of the property with seamless, flowing footage."
  },
  {
    image: <UsersIcon />,
                title: "Sports & Events Coverage",
                text: "Capture the action from unique angles. Our FPV drones are perfect for live events, sports, and extreme activities, providing dynamic footage that puts viewers right in the middle of the action."
  }, {
    image: <WrenchScrewdriverIcon />,
    title: "Drone builds",
    text: "At PolliVision, we don't just fly drones—we build them too. Our custom drone builds are designed to meet your specific requirements, whether you're a hobbyist or a professional."
  }, {
    image: <VideoCameraIcon />,
    title: "3D Modelling",
    text: "We can transform our captured videos into interactive 3D models. Our 3D modeling services provide precise and realistic models for various applications, explore the world as the drone does."
  }, {
    image :<PuzzlePieceIcon />,
    title: "Custom Projects",
    text: "Have a unique idea? We love creative challenges. Let us help bring your vision to life with custom FPV drone solutions tailored to your specific needs."
  }
]

export { default as Feature } from './Feature';
export { default as FeatureHeading } from './Heading';
