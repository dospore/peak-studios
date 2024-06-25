"use client"

import { useEffect, useRef } from "react";

type Props = {
  id: string
  src: string
}

export default function ScrollableVideo({ id, src }: Props) {
  const ref = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    // pause video on load
    // vid.pause();
     
    // pause video on document scroll (stops autoplay once scroll started)
    // window.onscroll = function(){
        // vid.pause();
    // };

    // refresh video frames on interval for smoother playback
    setInterval(function(){
      (ref.current as HTMLVideoElement).currentTime = window.pageYOffset/400;
    }, 40);

  }, [])

  return (
    <video
      id={id}
      ref={ref}
      src={src}
      className="h-full"
    />
  )
}
