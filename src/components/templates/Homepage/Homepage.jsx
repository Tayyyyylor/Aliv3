/* eslint-disable no-unused-vars */
import React, { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
import DefaultButton from '@/components/atoms/buttons/defaultButton/DefaultButton'
import { cardsData } from './Films.utils'
import Cards from '@/components/molecules/cards/Cards'
import Modal from '@/components/molecules/modal/Modal'
import Backdrop from '@/components/atoms/backdrop/Backdrop'

export default function HomepageTemplate() {
  const [showVideo, setShowVideo] = useState(false)
  const [showModal, setShowModal] = useState(false)
  const [selectedCardData, setSelectedCardData] = useState(null)
  // const [isMobile, setIsMobile] = useState(false)
  const [loader, setLoader] = useState(true)
  const videoRef = useRef(null)

  // const isMobile = window.innerWidth < 1024

  gsap.registerPlugin(ScrollTrigger)

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.intro',
        pin: true,
        scrub: true,
        start: 'top top',
        end: '30%',
        toggleActions: 'play pause reverse pause',
      },
    })

    tl.to('.intro__button', {
      y: -500,
      duration: 3,
    })
  }, [])

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

  // useEffect(() => {
  //   const checkMobile = () => {
  //     if (window.innerWidth < 1024) {
  //       router.push('/#films')
  //     }
  //   }

  //   checkMobile()

  //   window.addEventListener('resize', checkMobile)

  //   return () => {
  //     window.removeEventListener('resize', checkMobile)
  //   }
  // }, [router])

  // useEffect(() => {
  //   setIsMobile(window.innerWidth < 1024)
  // }, [])

  useEffect(() => {
    setTimeout(() => {
      setLoader(false)
    }, 3000)
  }, [])

  // const cardsToDisplay = !isMobile ? cardsData.slice(1) : cardsData
  const handleClick = () => {
    setShowModal(true)
    // isMobile
    //   ? setSelectedCardData(cardsData[cardIndex])
    //   : setSelectedCardData(cardsData[cardIndex + 1])
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
            muted={showVideo ? false : true}
            autoPlay
            controls={showVideo ? true : false}
          >
            <source
              src="https://res.cloudinary.com/dna8sibxu/video/upload/v1703956903/Intro/reeelWebm_amf758.webm"
              type="video/webm"
            />
            <source
              src="https://res.cloudinary.com/dna8sibxu/video/upload/v1704487120/Intro/REEL_2023_y7xncr.mp4"
              type="video/mp4"
            />
          </video>
          <div className="intro__cta_container">
            <DefaultButton
              label="Watch Trailer ▶"
              onClick={handleWatch}
              className={showVideo ? 'intro__none' : 'intro__button'}
            />
          </div>
        </div>
      </div>
      <main className="work" id="films">
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
              />
            </>
          )}
        </div>
        {showModal && <Backdrop onCancel={handleClose} />}
      </main>
    </>
  )
}
