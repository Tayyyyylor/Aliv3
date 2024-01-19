import Backdrop from '@/components/atoms/backdrop/Backdrop'
import Cards from '@/components/molecules/cards/Cards'
import ImageModal from '@/components/molecules/imageModal/ImageModal'
import React, { useState } from 'react'
import { cardsData } from './Photos.utils'

export default function PhotosTemplate() {
  const [showModal, setShowModal] = useState(false)
  const [selectedCardData, setSelectedCardData] = useState(null)

  const handleClick = cardIndex => {
    setShowModal(true)
    setSelectedCardData(cardsData[cardIndex])
  }

  const handleClose = () => {
    setShowModal(false)
    setSelectedCardData(null)
  }

  return (
    <main className="photos">
      {showModal && <div className="overlay"></div>}
      <div className="photos__card">
        {cardsData.map((card, index) => (
          <Cards
            key={index}
            isHoverEnabled={false}
            src={card.src}
            alt={card.alt}
            label={card.label}
            sizeClassName="photos__card_size"
            subtitle={card.subtitle}
            onClick={() => handleClick(index)}
            className="photos__card_content"
          />
        ))}
      </div>
      <div className={showModal ? 'photos__modal' : 'photos__modal__none'}>
        {showModal && selectedCardData && (
          <ImageModal
            onClick={handleClose}
            label={selectedCardData.label}
            desc={selectedCardData.desc}
            gallery={selectedCardData.gallery}
          />
        )}
      </div>
      {showModal && <Backdrop onCancel={handleClose} />}
    </main>
  )
}
