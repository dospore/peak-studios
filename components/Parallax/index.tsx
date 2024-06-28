"use client"

import { Parallax, ParallaxLayer } from '@react-spring/parallax';

import Title from './Title'
import Hero from './Hero'
import { TopSwirls, BottomSwirls } from '@/components/swirls'
import { features, Feature, FeatureHeading } from '../../components/Features'
import { ShowcaseItem } from '../../components/Showcase'

const alignCenter = { display: 'flex', alignItems: 'center' }

const doubleSided = { width: 'calc(100% - 6rem)' }

export default function ParallaxPages () {
  return (
    <Parallax pages={7}>
      <ParallaxLayer offset={0} speed={0.1}>
        <TopSwirls />
      </ParallaxLayer>
      <ParallaxLayer offset={0.5} speed={-2}>
        <BottomSwirls />
      </ParallaxLayer>

      <ParallaxLayer offset={0.25}>
        <Title />
      </ParallaxLayer>
      <ParallaxLayer offset={0.6} speed={4}>
        <Hero />
      </ParallaxLayer>
      <ParallaxLayer sticky={{ start: 1, end: 3.1 }} style={{ ...alignCenter, justifyContent: 'flex-start' }}>
        <div className="w-[45vw] ml-12">
          <FeatureHeading />
        </div>
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
      {/* 
      <ParallaxLayer offset={4} speed={1.2}>
        <LeftBox>
          <video
            src="/videos/fpv-mountain.mp4"
            className="h-[300px] w-full"
          />
        </LeftBox>
      </ParallaxLayer>
      <ParallaxLayer offset={4} sticky={{ start: 4, end: 4.3 }} speed={0.2}>
        <RightBox top={'top-[25%]'}>
          <ShowcaseItem />
        </RightBox>
      </ParallaxLayer>
      <ParallaxLayer offset={5} sticky={{ start: 5, end: 5.3 }} speed={0.2}>
        <LeftBox top={'top-[25%]'}>
          <ShowcaseItem />
        </LeftBox>
      </ParallaxLayer>
      <ParallaxLayer offset={5} speed={1.2}>
        <RightBox>
          <video
            src="/videos/fpv-mountain.mp4"
            className="h-[300px] w-full"
          />
        </RightBox>
      </ParallaxLayer>
      */}
    </Parallax>
  )
}

type BoxProps = { children?: React.ReactNode, top?: string }

const LeftBox = ({ children, top }: BoxProps) => (
  <div className={`absolute left-12 w-[50vw] ${top}`}>
    {children}
  </div>
)

const RightBox = ({ children, top }: BoxProps) => (
  <div className={`absolute right-12 w-[50vw] ${top}`}>
    {children}
  </div>
)

const ShowcaseBox = ({ rightText, offset, image, text }: ShowcaseBoxProps) => {

  let textSide = rightText ? 'right-12' : 'left-12'
  let imageSide = rightText ? 'left-12' : 'right-12'

  return (
    <>
      <ParallaxLayer offset={offset} sticky={{ start: offset, end: offset + 1 }} speed={0.2}>
        <div className={`absolute w-[50vw] ${textSide}`}>
          {text}
        </div>
      </ParallaxLayer>
      <ParallaxLayer offset={offset} speed={1.3}>
        <div className={`absolute ${imageSide}`}>
          {image}
        </div>
      </ParallaxLayer>
    </>
  )
}


