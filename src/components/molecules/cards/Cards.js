/* eslint-disable @next/next/no-img-element */
import React from 'react'

export default function Cards({
  src,
  alt,
  label,
  subtitle,
  onClick,
  className,
  sizeClassName,
}) {
  return (
    <section className={`cards ${sizeClassName}`} onClick={onClick}>
      <img src={src} alt={alt} className={className} />
      <div>
        <h3 className="cards__title">{label}</h3>
        <p className="cards__subtitle">{subtitle}</p>
      </div>
    </section>
  )
}
