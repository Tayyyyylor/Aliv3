/* eslint-disable no-unused-vars */
import React, { useEffect, useRef, useState } from 'react'
import DefaultButton from '@/components/atoms/buttons/defaultButton/DefaultButton'
import { useRouter } from 'next/router'
import { cardsData } from './Films.utils'
import Cards from '@/components/molecules/cards/Cards'
import Modal from '@/components/molecules/modal/Modal'
import Backdrop from '@/components/atoms/backdrop/Backdrop'

export default function HomepageTemplate() {
  const router = useRouter()
  const [showVideo, setShowVideo] = useState(false)
  const videoRef = useRef(null);

  // const isMobile = window.innerWidth < 1024

  const handleWatch = () => {
    setShowVideo(true)
   
    if (videoRef.current) {
      const videoElement = videoRef.current;
      videoElement.currentTime = 0
      if (videoElement.requestFullscreen) {
        videoElement.requestFullscreen();
      } else if (videoElement.mozRequestFullScreen) {
        videoElement.mozRequestFullScreen();
      } else if (videoElement.webkitRequestFullscreen) {
        videoElement.webkitRequestFullscreen();
      }
    }
  }

  useEffect(() => {
    // Vérifie si l'utilisateur est sur un appareil mobile lors du chargement initial
    const checkMobile = () => {
      if (window.innerWidth < 1024) {
        router.push('/films')
      }
    }

    // Appeler la fonction de vérification lors du chargement initial
    checkMobile()

    // Ajouter un écouteur d'événement de redimensionnement pour effectuer la vérification en cas de redimensionnement de la fenêtre
    window.addEventListener('resize', checkMobile)

    // Retirer l'écouteur d'événement lors du démontage du composant pour éviter les fuites de mémoire
    return () => {
      window.removeEventListener('resize', checkMobile)
    }
  }, [router])

  const [showModal, setShowModal] = useState(false)
  const [selectedCardData, setSelectedCardData] = useState(null)
  const [isMobile, setIsMobile] = useState(false)
  const [loader, setLoader] = useState(true)

  useEffect(() => {
    setIsMobile(window.innerWidth < 1024)
  }, [])

  useEffect(() => {
    setTimeout(() => {
      setLoader(false)
    }, 3000)
  }, [])

  const cardsToDisplay = !isMobile ? cardsData.slice(1) : cardsData
  const handleClick = cardIndex => {
    setShowModal(true)
    isMobile
      ? setSelectedCardData(cardsData[cardIndex])
      : setSelectedCardData(cardsData[cardIndex + 1])
  }

  const handleClose = () => {
    setShowModal(false)
    setSelectedCardData(null)
  }
  return (
    <>
      <div className="intro">
        <div className="intro__video">
          <video className="video" ref={videoRef} preload="auto" muted= {showVideo ? false : true} autoPlay controls={showVideo ? true : false}>
            <source
              src="https://res.cloudinary.com/dna8sibxu/video/upload/v1703956903/Intro/reeelWebm_amf758.webm"
              type="video/webm"
            />
          </video>
          <div className='intro__cta_container'>
          <DefaultButton
            label="Watch Trailer ▶"
            onClick={handleWatch}
            className={showVideo ? "intro__none" : "intro__button"}
          />
        </div>
        </div>
      </div>
      <main className="work" id='films'>
      {showModal && <div className="overlay"></div>}
      <div className="work__card">
        {cardsToDisplay.map((card, index) => (
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