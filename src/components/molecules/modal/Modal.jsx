import CloseButton from '@/components/atoms/buttons/closeButton/CloseButton'
import VideoPlayer from '@/components/atoms/videoPlayer/VideoPlayer'
import React from 'react'

export default function Modal({ onClick, playbackId }) {
  return (
    <>
      <section className="modal">
        <CloseButton onClick={onClick} className="modal__button" />
        <div className="modal__video">
          <VideoPlayer playbackId={playbackId} />
        </div>
      </section>
    </>
  )
}
