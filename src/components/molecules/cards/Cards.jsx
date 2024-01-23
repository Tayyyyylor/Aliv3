/* eslint-disable @next/next/no-img-element */
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
