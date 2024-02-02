/* eslint-disable @next/next/no-img-element */
import Backdrop from '@/components/atoms/backdrop/Backdrop'
import CloseButton from '@/components/atoms/buttons/closeButton/CloseButton'
import Title from '@/components/atoms/title/Title'
import Image from 'next/image'
import React, { useState } from 'react'

export default function ImageModal({ label, onClick, gallery }) {
  const [zoom, setZoom] = useState(false)
  const [zoomIndex, setZoomIndex] = useState(null)

  const handleClick = index => {
    setZoom(true)
    setZoomIndex(index)
  }

  const handleClose = () => {
    setZoom(false)
    setZoomIndex(null)
  }

  const handleSwitchLeft = index => {
    const newIndex = index - 1
    setZoomIndex(newIndex < 0 ? gallery.length - 1 : newIndex)
  }

  const handleSwitchRight = index => {
    const newIndex = index + 1
    setZoomIndex(newIndex >= gallery.length ? 0 : newIndex)
  }

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
            loading="lazy"
          />
        ))}
      </div>
      {zoom && (
        <div className="zoom">
          <div className="imageModal__zoom_container">
            <section className="imageModal__zoom">
              <CloseButton
                onClick={handleClose}
                className="zoom__button_close"
              />
              <span
                className="imageModal__zoom_left"
                onClick={() => handleSwitchLeft(zoomIndex)}
              >
                {' '}
                <Image
                  src="/arrowleft.png"
                  width={30}
                  height={30}
                  alt=""
                />{' '}
              </span>
              <img
                src={gallery[zoomIndex]}
                sizes="100vw"
                alt={`Zoomed photo ${zoomIndex}`}
                className="imageModal__zoom_img"
                loading="lazy"
              />
              <span
                className="imageModal__zoom_right"
                onClick={() => handleSwitchRight(zoomIndex)}
              >
                {' '}
                <Image
                  src="/arrowright.png"
                  width={30}
                  height={30}
                  alt=""
                />{' '}
              </span>
            </section>
            <Backdrop onCancel={handleClose} />
          </div>
        </div>
      )}
    </section>
  )
}
