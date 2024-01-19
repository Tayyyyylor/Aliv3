/* eslint-disable no-unused-vars */
import Backdrop from '@/components/atoms/backdrop/Backdrop'
import Cards from '@/components/molecules/cards/Cards'
import Modal from '@/components/molecules/modal/Modal'
import React, { useEffect, useState } from 'react'
import { cardsData } from './Films.utils'

export default function FilmTemplate() {
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
  console.log('selectedCardData', selectedCardData)

  return (
    <main className="work">
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
  )
}
