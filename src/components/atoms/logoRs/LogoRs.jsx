import Image from 'next/image'
import React, { useEffect, useState } from 'react'

export default function LogoRs({ src, alt, onClick, className }) {
  const [isMobile, setIsMobile] = useState(false)
  const [isHover, setIsHover] = useState(false)

  useEffect(() => {
    setIsMobile(window.innerWidth < 1024)
  }, [])
  return (
    <Image
      src={src}
      priority={false}
      alt={alt}
      width={isMobile ? 70 : 150}
      height={isMobile ? 70 : 150}
      className={className}
      style={{
        transform: `scale(${isHover ? 1.05 : 1})`,
        transition: 'transform 0.3s',
      }}
      onClick={onClick}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    />
  )
}
