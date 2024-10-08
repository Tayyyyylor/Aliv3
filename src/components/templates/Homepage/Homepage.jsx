import React, { useRef, useState } from 'react'
import DefaultButton from '@/components/atoms/buttons/defaultButton/DefaultButton'
import { cardsData } from './Films.utils'
import Cards from '@/components/molecules/cards/Cards'
import Modal from '@/components/molecules/modal/Modal'
import Backdrop from '@/components/atoms/backdrop/Backdrop'

export default function HomepageTemplate() {
  const [showVideo, setShowVideo] = useState(false)
  const [showModal, setShowModal] = useState(false)
  const [selectedCardData, setSelectedCardData] = useState(null)

  const videoRef = useRef(null)

  const filmRef = useRef(null)

  const handleWatch = () => {
    setShowVideo(true)

    if (videoRef.current) {
      const videoElement = videoRef.current
      videoElement.currentTime = 0
      if (videoElement.requestFullscreen) {
        videoElement.requestFullscreen()
      } else if (videoElement.mozRequestFullScreen) {
        videoElement.mozRequestFullScreen()
      } else if (videoElement.webkitRequestFullscreen) {
        videoElement.webkitRequestFullscreen()
      }
    }
  }

  const handleClick = cardIndex => {
    setShowModal(true)
    setSelectedCardData(cardsData[cardIndex])
  }

  const handleClose = () => {
    setShowModal(false)
    setSelectedCardData(null)
  }
  return (
    <>
      <div className="intro">
        <div className="intro__video">
          <video
            className="video"
            ref={videoRef}
            preload="auto"
            autoPlay
            loop={showVideo ? false : true}
            playsInline
            muted={showVideo ? false : true}
            controls={showVideo ? true : false}
          >
            <source src="/reeel23.mp4" type="video/mp4" />
            <source src="/reeel23.webm" type="video/webm" />
          </video>
          <div className={showVideo ? 'intro__none' : 'intro__cta_container'}>
            <h2 className="intro__button_title">introduction</h2>
            <DefaultButton
              label="▶"
              onClick={handleWatch}
              className={showVideo ? 'intro__none' : 'intro__button'}
            />
          </div>
        </div>
      </div>
      <main className="work" id="films" ref={filmRef}>
        {showModal && <div className="overlay"></div>}
        <div className="work__card">
          {cardsData.map((card, index) => (
            <Cards
              key={index}
              src={card.src}
              alt={card.alt}
              label={card.label}
              isHoverEnabled={true}
              gif={card.gif}
              gifMp4={card.gifMp4}
              subtitle={card.subtitle}
              sizeClassName="work__card_size"
              onClick={() => handleClick(index)}
              className="work__card_content"
            />
          ))}
        </div>
        <div className={showModal ? 'work__modal' : 'work__modal__none'}>
          {showModal && selectedCardData && (
            <>
              <Modal
                onClick={handleClose}
                title={selectedCardData.label}
                desc={
                  <div
                    dangerouslySetInnerHTML={{
                      __html: selectedCardData.desc.replace(/\n/g, '<br/>'),
                    }}
                  />
                }
                subtitle={selectedCardData.subtitle}
                isSliderEnabled={selectedCardData.isSliderEnabled}
                src={selectedCardData.video}
                srcMp4={selectedCardData.srcMp4}
                previewImg={selectedCardData.src}
                isScrollable={selectedCardData.isScrollable}
              />
            </>
          )}
        </div>
        {showModal && <Backdrop onCancel={handleClose} />}
      </main>
    </>
  )
}
