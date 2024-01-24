import Image from 'next/image'
import React from 'react'

export default function Loader() {
  return (
    <div className="loader-container">
      <Image
        width={200}
        priority={false}
        height={200}
        src="./logoOngletBlanc.png"
        alt=""
        className="img-loader"
      />
    </div>
  )
}
