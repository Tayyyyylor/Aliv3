/* eslint-disable @next/next/no-img-element */
import VideoPlayer from '@/components/atoms/videoPlayer/VideoPlayer'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'

export default function Cards({
  playbackId,
  srcImg,
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
        {isHover ? (
          <VideoPlayer
            className="video muxx--no-controls"
            key={isHover ? 'no-controls' : 'with-controls'}
            playbackId={playbackId}
            loop={true}
            controls={false}
            autoPlay={true}
            muted={true}
            poster=""
          />
        ) : (
          <Image
            src={srcImg}
            alt={alt}
            width={400}
            height={400}
            className="image"
            layout="intrinsic"
          />
        )}
      </div>
      <div className="cards__text_container">
        <h3 className="cards__title">{label}</h3>
        <p className="subtitle">{subtitle}</p>
      </div>
    </div>
  )
}
