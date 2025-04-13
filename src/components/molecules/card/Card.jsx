/* eslint-disable @next/next/no-img-element */
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
import React, { useEffect, useRef, useState } from 'react'

export default function Cards({
  src,
  alt,
  label,
  subtitle,
  onClick,
  className,
}) {
  const [isHover, setIsHover] = useState(false)
  const videoRef = useRef(null)

  gsap.registerPlugin(ScrollTrigger)

  useGSAP(() => {
    gsap.fromTo(
      '.cards__white_overlay',
      {
        xPercent: 0,
      },
      {
        scrollTrigger: {
          trigger: '.cards',
          toggleActions: 'restart none none none',
        },
        xPercent: 100,
        duration: 1,
        ease: 'power2.inOut',
      }
    )
  })

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    if (isHover) {
      video.currentTime = 0
      video.play().catch(e => {
        console.error('Erreur lecture vidéo :', e)
      })
    } else {
      video.pause()
    }
  }, [isHover])

  return (
    <div
      className={`cards ${className}`}
      onClick={onClick}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <div className="cards__video_container">
        <video
          ref={videoRef}
          muted
          loading="lazy"
          preload="auto"
          loop
          className="video"
          src={src}
          alt={alt}
        />
      </div>
      <div className="cards__text_container">
        <h3 className="cards__title">{label}</h3>
        <p className="subtitle">{subtitle}</p>
      </div>
    </div>
  )
}
