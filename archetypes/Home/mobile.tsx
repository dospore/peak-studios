"use client"

import { Parallax, ParallaxLayer, IParallax } from '@react-spring/parallax';
import { useRef } from 'react';

import Title from '@/components/Title/index'
import Hero from '@/components/Hero/index'
import Footer from '@/components/Footer/index';
import { TopSwirls, BottomSwirls } from '@/components/Swirls/index'
import { features, Feature, FeatureHeading } from '@/components/Features/index'
import { HoverableVideo } from '@/components/Hoverable/index'

const alignCenter = { display: 'flex', alignItems: 'center' }

const Container = ({ children, className }: { children?: React.ReactNode, className?: string }) => (
  <div className={`max-w-6xl mx-auto w-full ${className}`}>
    {children}
  </div>
)


export default function Mobile() {
  const ref = useRef<IParallax | null>(null);

  const scrollToServices = () => {
    if (ref.current) {
      ref.current.scrollTo(1);
    }
  }

  return (
    <Parallax ref={ref} pages={12} horizontal={true}>
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
      <ParallaxLayer>
        <div className="my-auto flex h-full items-center">
          <Title scrollToServices={scrollToServices} />
        </div>
      </ParallaxLayer>
      <ParallaxLayer offset={0.6} speed={4}>
        <Hero />
      </ParallaxLayer>
      <ParallaxLayer offset={1} style={{ ...alignCenter, justifyContent: 'flex-start' }}>
        <Container>
          <div className="w-full px-4">
            <FeatureHeading />
          </div>
        </Container>
      </ParallaxLayer>
      {(features ?? []).map((feature, i) => {
        const offset = 2.2 + i;
        const even = i % 2;
        return (
          <ParallaxLayer offset={offset} style={{ ...alignCenter, justifyContent: 'flex-end' }} sticky={{ start: offset, end: offset + 0.5 }} >
            <div className="px-4" style={{ paddingTop: even ? '12rem' : undefined, paddingBottom: even ? undefined: '12rem' }}>
              <Feature 
                image={feature.image}
                title={feature.title}
                text={feature.text}
              />
            </div>
          </ParallaxLayer>
        )
      }
      )}
      <ParallaxLayer offset={9} speed={0.2} style={{ ...alignCenter, zIndex: 1 }}>
        <Container>
          <div className="rounded bg-white px-4 py-1">
            <h2 className="h2 mb-2">Endless possibilities.</h2>
          </div>
        </Container>
      </ParallaxLayer>
      <ParallaxLayer offset={9} speed={1.2} style={{ ...alignCenter, justifyContent: 'flex-start' }}>
        <HoverableVideo src={"/videos/fpv-mountain.mp4"} className="ml-80 h-[150px] w-full" />
      </ParallaxLayer>
      <ParallaxLayer offset={9.5} speed={2} style={{ ...alignCenter }}>
        <HoverableVideo src={"/videos/fpv-mountain.mp4"} className=" ml-12 h-[170px] w-full" />
      </ParallaxLayer>
      <ParallaxLayer offset={9.2} speed={0.8} style={{ ...alignCenter, justifyContent: 'flex-end' }}>
        <HoverableVideo src={"/videos/fpv-mountain.mp4"} className="mr-24 h-[100px] w-full" />
      </ParallaxLayer>
      <ParallaxLayer offset={9.1} speed={0.5} style={{ ...alignCenter, justifyContent: 'flex-start' }}>
        <HoverableVideo src={"/videos/fpv-mountain.mp4"} className="ml-40 h-[200px] w-full" />
      </ParallaxLayer>
      <ParallaxLayer offset={9.1} speed={0.2} style={{ ...alignCenter, justifyContent: 'flex-end' }}>
        <HoverableVideo src={"/videos/fpv-mountain.mp4"} className="mr-64 h-[175px] w-full" />
      </ParallaxLayer>
      <ParallaxLayer offset={9.6} speed={1.5} style={{ ...alignCenter, justifyContent: 'flex-end' }}>
        <HoverableVideo src={"/videos/fpv-mountain.mp4"} className="mr-80 h-[50px] w-full" />
      </ParallaxLayer>
      <ParallaxLayer offset={9.8} speed={1.5} style={{ ...alignCenter }}>
        <HoverableVideo src={"/videos/fpv-mountain.mp4"} className="ml-80 h-[140px] w-full" />
      </ParallaxLayer>
      <ParallaxLayer offset={11} style={{ ...alignCenter }}>
        <Container className="mt-auto">
          <Footer />
        </Container>
      </ParallaxLayer>
    </Parallax>
  )
}

