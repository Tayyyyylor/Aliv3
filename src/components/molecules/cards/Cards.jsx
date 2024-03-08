/* eslint-disable @next/next/no-img-element */
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
import React, { useState } from 'react'

export default function Cards({
  src,
  alt,
  label,
  subtitle,
  onClick,
  className,
  sizeClassName,
  gif,
  isHoverEnabled,
}) {
  const [isHover, setIsHover] = useState(false)
  const [blank, setBlank] = useState(true)

  gsap.registerPlugin(ScrollTrigger)

  useGSAP(() => {
    gsap.fromTo(
      '.cards__white_overlay',
      {
        xPercent: 0,
        onStart: () => {
          setBlank(true)
        },
      },
      {
        scrollTrigger: {
          trigger: '.cards',
          toggleActions: 'restart none none none',
        },
        xPercent: 100,
        duration: 1,
        ease: 'power2.inOut',
        onComplete: () => {
          setBlank(false)
        },
      }
    )
  })

  return (
    <section
      className={`cards ${sizeClassName}`}
      onClick={onClick}
      onMouseEnter={() => isHoverEnabled && setIsHover(true)}
      onMouseLeave={() => isHoverEnabled && setIsHover(false)}
    >
      {isHoverEnabled && isHover ? (
        <div className="cards__video_container">
          <div className="cards__container_img">
            <video
              autoPlay
              muted
              loading="lazy"
              loop
              className="cards__video cards__img"
            >
              <source src={gif} type="video/webm" />
            </video>
          </div>
          <div className="cards__text_container">
            <h3 className="cards__title">{label}</h3>
            <p className="cards__subtitle">{subtitle}</p>
          </div>
        </div>
      ) : (
        <div className="cards__video_container">
          <div className="cards__container_img">
            <div
              className={blank ? 'cards__white_overlay' : 'cards__none'}
            ></div>
            <img
              src={src}
              alt={alt}
              className={`cards__img ${className}`}
              loading="lazy"
            />
          </div>
          <div className="cards__text_container">
            <h3 className="cards__title">{label}</h3>
            <p className="cards__subtitle">{subtitle}</p>
          </div>
        </div>
      )}
    </section>
  )
}
