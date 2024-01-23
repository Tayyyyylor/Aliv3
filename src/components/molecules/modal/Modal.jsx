import CloseButton from '@/components/atoms/buttons/closeButton/CloseButton'
import React from 'react'

export default function Modal({ title, desc, onClick, subtitle, src, srcMp4 }) {

  return (
    <>
      <section className="modal">
        <CloseButton onClick={onClick} className="modal__button" />
        <div className="modal__video">
          <video
            className="modal__video_vid"
            preload="auto"
            muted
            autoPlay
            controls
          >
            <source src={src} type="video/webm" />
            <source src={srcMp4} type="video/mp4" />
          </video>
        </div>

        <div className="modal__text">
          <div>
            <h2 className="modal__title">{title}</h2>
            <p className="modal__subtitle">{subtitle}</p>
          </div>
          <p className="modal__desc">{desc}</p>
        </div>
      </section>
    </>
  )
}
