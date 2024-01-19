/* eslint-disable @next/next/no-img-element */
import CloseButton from '@/components/atoms/buttons/closeButton/CloseButton'
import Title from '@/components/atoms/title/Title'
import React from 'react'

export default function ImgZoomModal({ label, onClick, gallery }) {
  return (
    <section className="imageModal">
      <Title label={label} className="imageModal__title" />
      <CloseButton onClick={onClick} className="imageModal__button" />
      <div className="imageModal__img_container">
        {gallery.map((src, index) => (
          <img
            key={index}
            src={src}
            sizes="100vw"
            alt={`Photo ${index}`}
            className="imageModal__img"
          />
        ))}
      </div>
    </section>
  )
}
