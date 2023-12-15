import Cards from '@/components/molecules/cards/Cards'
import Modal from '@/components/molecules/modal/Modal'
import React, { useState } from 'react'

export default function WorkTemplate() {

    const [showModal, setShowModal] = useState(false)



    const cardsData = [
        {
            src:"",
            alt:"",
            label:"pipi",
        },
        {
            src:"",
            alt:"",
            label:"popo",
        },
        {
            src:"",
            alt:"caca",
            label:"caca",
        },
        {
            src:"",
            alt:"caca",
            label:"caca",
        },
        {
            src:"",
            alt:"caca",
            label:"caca",
        },
        {
            src:"",
            alt:"caca",
            label:"caca",
        },
    ]


    const handleClick = () => {
    setShowModal(true)
    }
 
    console.log('showModal', showModal)
  return (
   <main className='work'>
      {cardsData.map((card, index) => (
          <Cards key={index} src={card.src} alt={card.alt} label={card.label} onClick={handleClick}/>
          ))}
{showModal &&
          <Modal />
    
}
          </main>
        
  )
}
