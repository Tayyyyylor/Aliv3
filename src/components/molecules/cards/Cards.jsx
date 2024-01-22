/* eslint-disable @next/next/no-img-element */
import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
import React, { useEffect, useState } from 'react'

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

  gsap.registerPlugin(ScrollTrigger)

  useEffect(() => {
    gsap.fromTo(
      '.cards',
      {
        opacity: 0,
        scale: 0.3,
      },
      {
        scrollTrigger: {
          trigger: '.cards',
          toggleActions: 'restart none none none',
        },
        opacity: 1,
        duration: 2,
        scale: 1,
      }
    )
  }, [])

  return (
    <section
      className={`cards ${sizeClassName}`}
      onClick={onClick}
      onMouseEnter={() => isHoverEnabled && setIsHover(true)}
      onMouseLeave={() => isHoverEnabled && setIsHover(false)}
    >
      {isHoverEnabled && isHover ? (
        <div className="cards__video_container">
          <video autoPlay muted loop className="cards__video">
            <source src={gif} type="video/webm" />
          </video>
          <div>
            <h3 className="cards__title">{label}</h3>
            <p className="cards__subtitle">{subtitle}</p>
          </div>
        </div>
      ) : (
        <>
          <img src={src} alt={alt} className={className} />
          <div>
            <h3 className="cards__title">{label}</h3>
            <p className="cards__subtitle">{subtitle}</p>
          </div>
        </>
      )}
    </section>
  )
}
