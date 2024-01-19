/* eslint-disable @next/next/no-img-element */
import Backdrop from '@/components/atoms/backdrop/Backdrop'
import CloseButton from '@/components/atoms/buttons/closeButton/CloseButton'
import Title from '@/components/atoms/title/Title'
import React, { useState } from 'react'

export default function ImageModal({ label, onClick, gallery }) {

  const [zoom, setZoom] = useState(false)
  const [zoomIndex, setZoomIndex] = useState(null);

  const handleClick = (index) => {
    setZoom(true)
    setZoomIndex(index);
  }

  const handleClose = () => {
    setZoom(false)
    setZoomIndex(null)
  }
  console.log('zoomIndex', zoomIndex)

  return (
    <section className="imageModal">
      <Title label={label} className="imageModal__title" />
      <CloseButton onClick={onClick} className="imageModal__button" />
      <div className="imageModal__img_container">
        {gallery.map((src, index) => (
          <img
            key={index}
            onClick={() => handleClick(index)}
            src={src}
            sizes="100vw"
            alt={`Photo ${index}`}
            className="imageModal__img"
          />
          ))}
      </div>
      {zoom && (
        <>
        <section className='imageModal__zoom'>
      <img
        src={gallery[zoomIndex]}
        sizes="100vw"
        alt={`Zoomed photo ${zoomIndex}`}
        className="imageModal__zoom_img"
        />
        </section>
      <Backdrop onCancel={handleClose} />
        </>
      )}
    </section>
  )
}
