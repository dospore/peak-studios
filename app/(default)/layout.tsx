'use client'

import { useEffect } from 'react'

import AOS from 'aos'
import 'aos/dist/aos.css'
import { ParallaxProvider } from 'react-scroll-parallax';

import Footer from '@/components/ui/footer'

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode
}) {

  useEffect(() => {
    AOS.init({
      once: true,
      disable: 'phone',
      duration: 600,
      easing: 'ease-out-sine',
    })
  })

  return (
    <>
      <ParallaxProvider>
        <main className="grow">
          {children}
        </main>

        {/* <Footer /> */}
      </ParallaxProvider>
    </>
  )
}
