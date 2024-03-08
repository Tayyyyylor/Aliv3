/* eslint-disable @next/next/no-img-element */
import CloseButton from '@/components/atoms/buttons/closeButton/CloseButton'
import Title from '@/components/atoms/title/Title'
import React, { useEffect, useState } from 'react'




export default function ImageModal({ label, onClick, gallery }) {
  const [zoomIndex, setZoomIndex] = useState(null)
  // eslint-disable-next-line no-unused-vars
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    setIsMobile(window.innerWidth < 1024)
  }, [])

  const openFullScreen = index => {
    setZoomIndex(index);
  };

  const closeFullScreen = () => {
    setZoomIndex(null);
  };

 

  console.log('zoomIndex', zoomIndex)

  return (
    <section className='imageModal'>
      <Title label={label} className="imageModal__title" />
      <CloseButton onClick={onClick} className="imageModal__button" />
      <div className="imageModal__img_container">
        {gallery.map((src, index) => (
          <img
          key={index}
            onClick={() => openFullScreen(index)}
            src={src}
            sizes="100vw"
            alt={`Photo ${index}`}
            className="imageModal__img"
            loading="lazy"
            id={`img-${index}`}
            />
        ))}
      </div>
      {zoomIndex !== null && (
        <div className="fullscreen-modal" onClick={closeFullScreen}>
          <img src={gallery[zoomIndex]} className="fullscreen-modal-img"  sizes="100vw"
                alt={`Zoomed photo ${zoomIndex}`} />
        </div>
      )}
    </section>
  )
}
