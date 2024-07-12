"use client"

import { Parallax, ParallaxLayer, IParallax } from '@react-spring/parallax';
import { useRef } from 'react';

import Title from '@/components/Title/index'
import Hero from '@/components/Hero/index'
import Footer from '@/components/Footer/index'
import { TopSwirls, BottomSwirls } from '@/components/Swirls/index'
import { features, Feature, FeatureHeading } from '@/components/Features/index'
import { HoverableVideo } from '@/components/Hoverable/index'

const alignCenter = { display: 'flex', alignItems: 'center' }

const Container = ({ children, className }: { children?: React.ReactNode, className?: string }) => (
  <div className={`max-w-6xl mx-auto w-full ${className}`}>
    {children}
  </div>
)


export default function Desktop() {
  const ref = useRef<IParallax | null>(null);

  const scrollToServices = () => {
    if (ref.current) {
      ref.current.scrollTo(1);
    }
  }

  return (
    <Parallax ref={ref} pages={6}>
      {/* BG imagery */}
      <ParallaxLayer offset={0} speed={0.1}>
        <TopSwirls />
      </ParallaxLayer>
      <ParallaxLayer offset={0.5} speed={-2}>
        <BottomSwirls />
      </ParallaxLayer>
      {/*
      <ParallaxLayer offset={0.3} speed={-2}>
        <img src="/images/mountain.jpg" className="w-full opacity-5 pl-12" />
      </ParallaxLayer>
      */}

      {/* Content */}
      <ParallaxLayer offset={0.25}>
        <Title scrollToServices={scrollToServices} />
      </ParallaxLayer>
      <ParallaxLayer offset={0.6} speed={4}>
        <Hero />
      </ParallaxLayer>
      <ParallaxLayer sticky={{ start: 1, end: 3.4 }} style={{ ...alignCenter, justifyContent: 'flex-start' }}>
        <Container>
          <div className="w-[45vw] px-4">
            <FeatureHeading />
          </div>
        </Container>
      </ParallaxLayer>
      {(features ?? []).map((feature, i) => (
        <ParallaxLayer offset={2 + (i * 0.3)} style={{ ...alignCenter, justifyContent: 'flex-end' }}>
          <div className="w-[40vw] mr-12">
            <Feature 
              image={feature.image}
              title={feature.title}
              text={feature.text}
            />
          </div>
        </ParallaxLayer>
      ))}
      <ParallaxLayer offset={4} speed={0.2} style={{ ...alignCenter, zIndex: 1 }}>
        <Container>
          <div className="rounded bg-white px-4 py-1">
            <h2 className="h2 mb-2">Endless possibilities.</h2>
          </div>
        </Container>
      </ParallaxLayer>
      <ParallaxLayer offset={4} speed={1.2} style={{ ...alignCenter, justifyContent: 'flex-start' }}>
        <HoverableVideo src={"/videos/fpv-mountain.mp4"} className="ml-80 h-[150px] w-full" />
      </ParallaxLayer>
      <ParallaxLayer offset={4.5} speed={2} style={{ ...alignCenter }}>
        <HoverableVideo src={"/videos/fpv-mountain.mp4"} className=" ml-12 h-[170px] w-full" />
      </ParallaxLayer>
      <ParallaxLayer offset={4.2} speed={0.8} style={{ ...alignCenter, justifyContent: 'flex-end' }}>
        <HoverableVideo src={"/videos/fpv-mountain.mp4"} className="mr-24 h-[100px] w-full" />
      </ParallaxLayer>
      <ParallaxLayer offset={4.1} speed={0.5} style={{ ...alignCenter, justifyContent: 'flex-start' }}>
        <HoverableVideo src={"/videos/fpv-mountain.mp4"} className="ml-40 h-[200px] w-full" />
      </ParallaxLayer>
      <ParallaxLayer offset={4.1} speed={0.2} style={{ ...alignCenter, justifyContent: 'flex-end' }}>
        <HoverableVideo src={"/videos/fpv-mountain.mp4"} className="mr-64 h-[175px] w-full" />
      </ParallaxLayer>
      <ParallaxLayer offset={4.6} speed={1.5} style={{ ...alignCenter, justifyContent: 'flex-end' }}>
        <HoverableVideo src={"/videos/fpv-mountain.mp4"} className="mr-80 h-[50px] w-full" />
      </ParallaxLayer>
      <ParallaxLayer offset={4.8} speed={1.5} style={{ ...alignCenter }}>
        <HoverableVideo src={"/videos/fpv-mountain.mp4"} className="ml-80 h-[140px] w-full" />
      </ParallaxLayer>
      <ParallaxLayer offset={6} style={{ ...alignCenter }} sticky={{ start: 5, end: 6 }}>
        <Container className="mt-auto">
          <Footer />
        </Container>
      </ParallaxLayer>
    </Parallax>
  )
}
