import VideoPlayer from '@/components/atoms/videoPlayer/VideoPlayer'
import React from 'react'

export default function Modal({ playbackId }) {
  return (
    <>
      <section className="modal">
        {/* <CloseButton onClick={onClick} className="modal__button" /> */}
        <div className="modal__video">
          <VideoPlayer playbackId={playbackId} />
        </div>
      </section>
    </>
  )
}
