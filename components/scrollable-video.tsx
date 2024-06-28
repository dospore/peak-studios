"use client"

import { useEffect, useRef, useCallback } from "react";
import { useScroll, animated } from '@react-spring/web'
import { Parallax } from 'react-scroll-parallax';

type Props = {
  id: string
  src: string
}

export default function ScrollableVideo({ id, src }: Props) {
  const ref = useRef<HTMLVideoElement | null>(null);

  const { scrollYProgress } = useScroll();


  useEffect(() => {
    // pause video on load
    // vid.pause();
     
    // pause video on document scroll (stops autoplay once scroll started)
    // window.onscroll = function(){
        // vid.pause();
    // };

    // refresh video frames on interval for smoother playback
    // setInterval(function(){
      // (ref.current as HTMLVideoElement).currentTime = window.pageYOffset/400;
    // }, 40);

  }, [])

  const onProgressChange = useCallback((progress: number) => {
    if (ref.current) {
      const nextTime = progress * ref.current.duration;
      if (Number.isFinite(nextTime)) {
        ref.current.currentTime = nextTime;
      }
    }
  }, [])

  console.log("Scroll", scrollYProgress);

  return (
    // <Parallax
      // onProgressChange={onProgressChange}
      // onEnter={() => console.log("Entered")}
      // onExit={() => console.log("Exited")}
    // >
    <animated.div style={{ opacity: scrollYProgress }}>
      <video
        id={id}
        ref={ref}
        src={src}
        className="h-full"
      />
    </animated.div>
    // </Parallax>
  )
}
