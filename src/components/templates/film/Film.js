import Cards from '@/components/molecules/cards/Cards'
import Modal from '@/components/molecules/modal/Modal'
import React, { useState } from 'react'

export default function FilmTemplate() {

    const [showModal, setShowModal] = useState(false)
    const [selectedCardData, setSelectedCardData] = useState(null);



    const cardsData = [
        {
            src:"/wayout3.jpg",
            alt:"",
            label:"WAY OUT - SOYYMIMY",
            subtitle:"Réalisation/Cadrage/Montage",
            desc: "Une jeune fille, face aux dilemmes de l'avenir, passe par la danse pour trouver sa voie, lui offrant ainsi la clarté nécessaire pour définir son destin",
        },
        {
            src:"/salem2.jpg",
            alt:"",
            label:"SALEM - SHRO",
            subtitle:"Réalisation/Cadrage/Montage",
            desc: "Forcé à l’exode en raison d'un renversement politique plongeant le pays dans l'anarchie, un père quitte la ville avec son fils. L'histoire souligne la réalité que ce qui se passe ailleurs peut également se produire chez vous, et vice versa.",
        },
        {
            src:"/danslenoir5.jpg",
            alt:"caca",
            label:"BIEN DANS LE NOIR - TIMARU",
            subtitle:"Cadrage/Montage/Étalonnage",
            desc: "Extrait du premier projet de TIMARU. Réalisé par NOÉ POULIN. Produit par 31squa. Mixé par Ama. Master par Xyos.",
        },
        {
            src:"/naufrage.jpg",
            alt:"caca",
            label:"NAUFRAGE - ULYSSE 2001",
            subtitle:"Réalisation/Cadrage/Montage",
            desc: "ULYSSE.2001 fait un pèlerinage solitaire sur une île déserte, confrontant deux facettes de sa personnalité.",
        },
        {
            src:"/underground4.jpg",
            alt:"caca",
            label:"UNDERGROUND EFFECT SERIE",
            subtitle:"Réalisation/Cadrage/Montage",
            desc: "Notorious Brand s'associe à La Villette pour l'événement FREESTYLE, qui réunit diverses disciplines urbaines. Une collaboration mettant en avant la créativité et l'énergie des cultures urbaines.",
        },
        {
            src:"/lecoq6.jpg",
            alt:"caca",
            label:"SO LA LUNE - LE COQ SPORTIF",
            subtitle:"Cadrage",
            desc: "Campagne de publicité produite par FEUILLE BLANCHE pour LE COQ SPORTIF à l’occasion de la sortie du modèle LSC T1000.",
        },
    ]


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
      <main className='work'>
            {showModal && (
                <div className="overlay"></div>
                )}
                <div className='work__card'  >
      {cardsData.map((card, index) => (
          <Cards key={index} src={card.src} alt={card.alt} label={card.label} subtitle={card.subtitle} onClick={() => handleClick(index)} className="work__card_content"/>
          ))}
          </div>
          <div className={showModal ? 'work__modal' : "work__modal__none"}>
{showModal && selectedCardData && (

<Modal  onClick={handleClose} title={selectedCardData.label} desc={selectedCardData.desc}/>
)

}
          </div>
          </main>
        
  )
}
