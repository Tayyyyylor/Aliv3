import Backdrop from '@/components/atoms/backdrop/Backdrop';
import Cards from '@/components/molecules/cards/Cards'
import ImageModal from '@/components/molecules/imageModal/ImageModal';
import React, { useState } from 'react'

export default function PhotosTemplate() {

    const [showModal, setShowModal] = useState(false)
    const [selectedCardData, setSelectedCardData] = useState(null);



    const cardsData = [
        {
            src:"https://res.cloudinary.com/dna8sibxu/image/upload/v1703958818/1%20LSC%20T1000%20-%20LE%20COCQ%20SPORTIF/insta_LE_COQ-5_phfzwe.jpg",
            alt:"caca",
            label:"LSC T1000 - LE COQ SPORTIF",
            subtitle:"PHOTO SET",
            gallery: [
            "https://res.cloudinary.com/dna8sibxu/image/upload/v1703958833/1%20LSC%20T1000%20-%20LE%20COCQ%20SPORTIF/KAINF_LE_COQ_xi2s6g.jpg",
             "https://res.cloudinary.com/dna8sibxu/image/upload/v1703958831/1%20LSC%20T1000%20-%20LE%20COCQ%20SPORTIF/insta_4_LE_COQ_zpz8xc.jpg",
             "https://res.cloudinary.com/dna8sibxu/image/upload/v1703958831/1%20LSC%20T1000%20-%20LE%20COCQ%20SPORTIF/insta_LE_COQ_fadyry.jpg",
             "https://res.cloudinary.com/dna8sibxu/image/upload/v1703958831/1%20LSC%20T1000%20-%20LE%20COCQ%20SPORTIF/insta_2_LE_COQ-4_fsd9vr.jpg",
             "https://res.cloudinary.com/dna8sibxu/image/upload/v1703958824/1%20LSC%20T1000%20-%20LE%20COCQ%20SPORTIF/SHYNA_LE_COQ_dsqqyk.jpg",
             "https://res.cloudinary.com/dna8sibxu/image/upload/v1703958823/1%20LSC%20T1000%20-%20LE%20COCQ%20SPORTIF/insta_bikers_LE_COQ-4_x6rmxu.jpg",
             "/photosYaroManana.jpg",
             "/photosYaroManana.jpg",
             "/photosYaroManana.jpg",
             "/photosYaroManana.jpg",
             "/photosYaroManana.jpg",
             "/photosYaroManana.jpg",
            ]

        },
        {
            src:"https://res.cloudinary.com/dna8sibxu/image/upload/v1703958820/2%20YARO%20-%20INTERIMAIRE/MKZ02027_zgbuac.jpg",
            alt:"caca",
            label:"INTERIMAIRE - YARO",
            subtitle:"PHOTO SET",
            gallery: ["/photosYaroManana.jpg", "/photosYaroManana.jpg","/photosYaroManana.jpg","/photosYaroManana.jpg","/photosYaroManana.jpg","/photosYaroManana.jpg","/photosYaroManana.jpg","/photosYaroManana.jpg","/photosYaroManana.jpg","/photosYaroManana.jpg","/photosYaroManana.jpg","/photosYaroManana.jpg",]
        },
        {
            src:"https://res.cloudinary.com/dna8sibxu/image/upload/v1703958830/3%20YOUNSS%20-%20DONNANT%20DONNANT/YOUNSS_INSTA-13_r8mdmd.jpg",
            alt:"",
            label:"DONNANT DANNANT - YOUNSS",
            subtitle:"PHOTO SET",
            gallery: ["/photosYaroManana.jpg", "/photosYaroManana.jpg","/photosYaroManana.jpg","/photosYaroManana.jpg","/photosYaroManana.jpg","/photosYaroManana.jpg","/photosYaroManana.jpg","/photosYaroManana.jpg","/photosYaroManana.jpg","/photosYaroManana.jpg","/photosYaroManana.jpg","/photosYaroManana.jpg",]

        },
        {
            src:"https://res.cloudinary.com/dna8sibxu/image/upload/v1703958833/4%20YARO%20-%20MA%20NANA/Ma_nana_tournage_wetransfert-9_qwakye.jpg",
            alt:"",
            label:"MA NANA - YARO",
            subtitle:"PHOTO SET",
            gallery: ["/photosYaroManana.jpg", "/photosYaroManana.jpg","/photosYaroManana.jpg","/photosYaroManana.jpg","/photosYaroManana.jpg","/photosYaroManana.jpg","/photosYaroManana.jpg","/photosYaroManana.jpg","/photosYaroManana.jpg","/photosYaroManana.jpg","/photosYaroManana.jpg","/photosYaroManana.jpg",]
        },
        {
            src:"https://res.cloudinary.com/dna8sibxu/image/upload/v1703958834/5%20NORTH%20FAKE/Andrea_et_Juliette_master-5_udgcuq.jpg",
            alt:"caca",
            label:"NORTHFAKE",
            subtitle:"PHOTO SET",
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

