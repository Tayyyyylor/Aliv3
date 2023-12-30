import Backdrop from '@/components/atoms/backdrop/Backdrop';
import Cards from '@/components/molecules/cards/Cards'
import ImageModal from '@/components/molecules/imageModal/ImageModal';
import React, { useState } from 'react'

export default function PhotosTemplate() {

    const [showModal, setShowModal] = useState(false)
    const [selectedCardData, setSelectedCardData] = useState(null);



    const cardsData = [
        {
            src:"/photosYaroManana.jpg",
            alt:"",
            label:"MA NANA - YARO",
            subtitle:"PHOTO PLATEAU",
            gallery: ["/photosYaroManana.jpg", "/photosYaroManana.jpg","/photosYaroManana.jpg","/photosYaroManana.jpg","/photosYaroManana.jpg","/photosYaroManana.jpg","/photosYaroManana.jpg","/photosYaroManana.jpg","/photosYaroManana.jpg","/photosYaroManana.jpg","/photosYaroManana.jpg","/photosYaroManana.jpg",]
        },
        {
            src:"/photosYouns.jpg",
            alt:"",
            label:"DONNANT DANNANT - YOUNSS",
            subtitle:"PHOTO PLATEAU",
            gallery: ["/photosYaroManana.jpg", "/photosYaroManana.jpg","/photosYaroManana.jpg","/photosYaroManana.jpg","/photosYaroManana.jpg","/photosYaroManana.jpg","/photosYaroManana.jpg","/photosYaroManana.jpg","/photosYaroManana.jpg","/photosYaroManana.jpg","/photosYaroManana.jpg","/photosYaroManana.jpg",]

        },
        {
            src:"/imageLeCoq.jpg",
            alt:"caca",
            label:"LSC T1000 - LE COQ SPORTIF",
            subtitle:"PHOTO PLATEAU",
            gallery: ["/photosYaroManana.jpg", "/photosYaroManana.jpg","/photosYaroManana.jpg","/photosYaroManana.jpg","/photosYaroManana.jpg","/photosYaroManana.jpg","/photosYaroManana.jpg","/photosYaroManana.jpg","/photosYaroManana.jpg","/photosYaroManana.jpg","/photosYaroManana.jpg","/photosYaroManana.jpg",]

        },
        {
            src:"/photosYaroInterim.jpg",
            alt:"caca",
            label:"INTERIMAIRE - YARO",
            subtitle:"PHOTO PLATEAU",
            gallery: ["/photosYaroManana.jpg", "/photosYaroManana.jpg","/photosYaroManana.jpg","/photosYaroManana.jpg","/photosYaroManana.jpg","/photosYaroManana.jpg","/photosYaroManana.jpg","/photosYaroManana.jpg","/photosYaroManana.jpg","/photosYaroManana.jpg","/photosYaroManana.jpg","/photosYaroManana.jpg",]

        },
        {
            src:"/northfake.jpg",
            alt:"caca",
            label:"INTERIMAIRE - YARO",
            subtitle:"PHOTO PLATEAU",
            gallery: ["/photosYaroManana.jpg", "/photosYaroManana.jpg","/photosYaroManana.jpg","/photosYaroManana.jpg","/photosYaroManana.jpg","/photosYaroManana.jpg","/photosYaroManana.jpg","/photosYaroManana.jpg","/photosYaroManana.jpg","/photosYaroManana.jpg","/photosYaroManana.jpg","/photosYaroManana.jpg",]

        },
       
    ]

    console.log('selectCardData', selectedCardData)

    const handleClick = (cardIndex) => {
    setShowModal(true)
    setSelectedCardData(cardsData[cardIndex]);
    }

    const handleClose = () => {
        setShowModal(false)
        setSelectedCardData(null);
    }
 
    console.log('showModal', showModal)
    console.log('selectCardData', selectedCardData)
  return (
      <main className='photos'>
            {showModal && (
                <div className="overlay"></div>
                )}
                <div className='photos__card'  >
      {cardsData.map((card, index) => (
          <Cards key={index} src={card.src} alt={card.alt} label={card.label} sizeClassName="photos__card_size"subtitle={card.subtitle} onClick={() => handleClick(index)} className='photos__card_content' />
          ))}
          </div>
          <div className={showModal ? 'photos__modal' : "photos__modal__none"}>
{showModal && selectedCardData && (

<ImageModal  onClick={handleClose} label={selectedCardData.label} desc={selectedCardData.desc} gallery={selectedCardData.gallery} />
)

}
          </div>
          {showModal && (
<Backdrop onCancel={handleClose} />
            
          )
          }
          </main>
        
  )
}

