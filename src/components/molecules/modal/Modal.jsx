import CloseButton from '@/components/atoms/buttons/closeButton/CloseButton'
import useMobile from '@/hooks/useMobile'
import React from 'react'

export default function Modal({ onClick, src, previewImg }) {
  const isMobile = useMobile()

  return (
    <>
      <section className="modal">
        <CloseButton onClick={onClick} className="modal__button" />
        <div className="modal__video">
          <video
            poster={previewImg}
            className="modal__video_vid"
            preload="auto"
            autoPlay={!isMobile && true}
            muted={!isMobile && true}
            controls
            loading="lazy"
            src={src}
          />
        </div>
      </section>
    </>
  )
}
