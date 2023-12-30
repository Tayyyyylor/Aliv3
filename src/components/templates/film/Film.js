import Backdrop from '@/components/atoms/backdrop/Backdrop';
import Cards from '@/components/molecules/cards/Cards'
import Modal from '@/components/molecules/modal/Modal'
import React, { useEffect, useState } from 'react'

export default function FilmTemplate() {

    const [showModal, setShowModal] = useState(false)
    const [selectedCardData, setSelectedCardData] = useState(null);
    const [isMobile, setIsMobile] = useState(false);
    
    useEffect(() => {
       setIsMobile(window.innerWidth < 1024);
    },[])
     
    const cardsData = [
        {
            src: "Ma_nana_tournage_wetransfert-10_kcdai2",
            video:"",
            alt:"",
            label:"CACA",
            subtitle:"CACA",
            desc: "Une jeune fille, face aux dilemmes de l'avenir, passe par la danse pour trouver sa voie, lui offrant ainsi la clarté nécessaire pour définir son destin",
        },
        {
            src:"https://res.cloudinary.com/dna8sibxu/image/upload/v1703960750/1%20WAY%20OUT%20-%20Soyymimy/WAY_OUT_VIGNETTE_porvex_16-9_ybr4x1.jpg",
            video:"https://res.cloudinary.com/dna8sibxu/video/upload/v1703959130/1%20WAY%20OUT%20-%20Soyymimy/WAY_OUT_-_SOYYMIMY_zyuai0.webm",
            alt:"dancer",
            label:"WAY OUT - SOYYMIMY",
            subtitle:"Directing/Framing/Editing",
            desc: "A young girl, faced with the dilemmas of the future, uses dance to find her way, thus offering her the clarity necessary to define her destiny.",
        },
        {
            src:"https://res.cloudinary.com/dna8sibxu/image/upload/v1703959098/2%20NAUFRAGE%20-%20Ulysse%202001/NAUFRAGE_VIGNETTE_btpm93.jpg",
            video:"https://res.cloudinary.com/dna8sibxu/video/upload/v1703961401/2%20NAUFRAGE%20-%20Ulysse%202001/UlysseOrpheus_ClipNaufrage_Def1_viylig.webm",
            alt:"ulysse",
            label:"NAUFRAGE - ULYSSE 2001",
            subtitle:"Directing/Framing/Editing",
            desc: "ULYSSE.2001 makes a solitary pilgrimage to a desert island, confronting two facets of his personality.",
        },
        {
            src:"https://res.cloudinary.com/dna8sibxu/image/upload/v1703959099/3%20SALEM%20-%20Shro/SALEM_VIGNETTE_o2eh3k.jpg",
            video:"https://res.cloudinary.com/dna8sibxu/video/upload/v1703960866/3%20SALEM%20-%20Shro/SALEM_-_SHRO_CLIP_OFFICIEL_fjwdtv.webm",
            alt:"man holding a baby",
            label:"SALEM - SHRO",
            subtitle:"Directing/Framing/Editing",
            desc: "Forced into exodus due to a political overthrow plunging the country into anarchy, a father leaves the city with his son. The story highlights the reality that what happens elsewhere can also happen at home, and vice versa.",
        },
        {
            src:"https://res.cloudinary.com/dna8sibxu/image/upload/v1703959099/4%20UNDERGROUND%20EFFECT%20x%20FREESTYLE/UNDERGROUND_EFFECT_8_VIGNETTE_xury4u.jpg",
            video:"https://res.cloudinary.com/dna8sibxu/video/upload/v1703959149/4%20UNDERGROUND%20EFFECT%20x%20FREESTYLE/UNDERGROUND_EFFECT_8_frhgws.webm",
            alt:"foule",
            label:"UNDERGROUND EFFECT SERIE",
            subtitle:"Directing/Framing/Editing",
            desc: "Notorious Brand associates with La Villette for the event FREESTYLE, which brings together various urban disciplines. A collaboration highlighting the creativity and energy of urban cultures.",
        },
        {
            src:"https://res.cloudinary.com/dna8sibxu/image/upload/v1703959100/5%20BIEN%20DANS%20LE%20NOIR%20-%20Timaru/BIEN_DANS_LE_NOIR_VIGNETTE_gbyzjw.jpg",
            video:"https://res.cloudinary.com/dna8sibxu/video/upload/v1703959126/5%20BIEN%20DANS%20LE%20NOIR%20-%20Timaru/BIEN_DANS_LE_NOIR_-_TIMARU_klhyeu.webm",
            alt:"homme dans le noir",
            label:"BIEN DANS LE NOIR - TIMARU",
            subtitle:"Framing/Editing/Calibration",
            desc: "Excerpt from TIMARU's first project. Directed by NOÉ POULIN. Produced by 31squa. Mixed by Ama.Master by Xyos.",
        },
        {
            src:"https://res.cloudinary.com/dna8sibxu/image/upload/v1703959101/6%20LCS%20T1000%20x%20SO%20LA%20LUNE%20-%20Le%20Coq%20Sportif/LE_COQ_-_SO_LA_LUNE_VIGNETTE_jzhded.jpg",
            video:"https://res.cloudinary.com/dna8sibxu/video/upload/v1703959121/6%20LCS%20T1000%20x%20SO%20LA%20LUNE%20-%20Le%20Coq%20Sportif/LCS_T1000_x_SO_LA_LUNE_vh6bwu.webm",
            alt:"so la lune",
            label:"SO LA LUNE - LE COQ SPORTIF",
            subtitle:"Framing",
            desc: "Advertising campaign produced by FEUILLE BLANCHE for LE COQ SPORTIF on the occasion of the release of the model LSC T1000.",
        },
        {
            src:"https://res.cloudinary.com/dna8sibxu/image/upload/v1703959102/7%20LOST%20-%20Magdalen%20Asylum/LOST_MAGDALEN_VIGNETTE_sp7xkv.jpg",
            video:"https://res.cloudinary.com/dna8sibxu/video/upload/v1703959128/7%20LOST%20-%20Magdalen%20Asylum/MAGDALENE_ASYLUM_-_Lost_Official_Video_pnsr0k.webm",
            alt:"lost",
            label:"LOST - MAGDALEN ASYLUM",
            subtitle:"Directing/Framing",
            desc: "Editing by VALENTIN VERNAGALLO A rock band takes refuge in an isolated house to engage in musical training.",
        },
        {
            src:"https://res.cloudinary.com/dna8sibxu/image/upload/v1703959103/8%20SIROP%20MELON%20-%20Nefaste/SIROP_MELON_NEF_VIGNETTE_kqkbsg.jpg",
            video:"https://res.cloudinary.com/dna8sibxu/video/upload/v1703959134/8%20SIROP%20MELON%20-%20Nefaste/SIROP_MELON_-_NEFASTE_nsdja0.webm",
            alt:"sirop melon",
            label:"SIROP MELON - NEF",
            subtitle:"Directing/Framing/Editing",
            desc: "Two friends immerse themselves in the gangster lifestyle, but one gets drawn into the whirlwind of risky choices, leading to consequences he must face alone.",
        },
        {
            src:"https://res.cloudinary.com/dna8sibxu/image/upload/v1703959104/9%20RELEASE%20PARTY%20TOUT%20DROIT%20-%20YARO/RELEASE_PARTY_YARO_VIGNETTE_yxdoql.jpg",
            video:"https://res.cloudinary.com/dna8sibxu/video/upload/v1703959135/9%20RELEASE%20PARTY%20TOUT%20DROIT%20-%20YARO/RELEASE_PARTY_TOUT_DROIT_ypcnwx.webm",
            alt:"release party",
            label:"RELEASE PARTY STRAIGHT - YARO",
            subtitle:"Framing/Editing",
            desc: "Yaro’s release party on the occasion of the release of his album “Tout Droit”.",
        },
        {
            src:"https://res.cloudinary.com/dna8sibxu/image/upload/v1703959105/10%20VALLEY%20-%20The%20Boy/THE_BOY_VIGNETTE_sxt8tm.jpg",
            video:"https://res.cloudinary.com/dna8sibxu/video/upload/v1703959124/10%20VALLEY%20-%20The%20Boy/THE_BOY_-_VALLEY_CLIP_OFFICIEL_aeowbj.webm",
            alt:"caca",
            label:"VALLEY - THE BOY",
            subtitle:"Directing/Framing/Editing",
            desc: "A young boy gets into an intense boxing match that tests his resilience and determination.",
        },
        {
            src:"https://res.cloudinary.com/dna8sibxu/image/upload/v1703959106/11%20VILLE%20-%20Raxs/VILLE_RAZ_VIGNETTE_ypxh3b.jpg",
            video:"https://res.cloudinary.com/dna8sibxu/video/upload/v1703959126/11%20VILLE%20-%20Raxs/VILLE_-_RAXS_pv8pnk.webm",
            alt:"raxs",
            label:"VILLE - RAXS",
            subtitle:"Framing/Editing",
            desc: "Directed by Thomas Fernandez",
        },
        {
            src:"https://res.cloudinary.com/dna8sibxu/image/upload/v1703959106/12%20RINO%20-%20Laz/RINO_LAZ_VIGNETTE_wexxnb.jpg",
            video:"https://res.cloudinary.com/dna8sibxu/video/upload/v1703959132/12%20RINO%20-%20Laz/RINO_-_LAZ_y4uv06.webm",
            alt:"rino",
            label:"RINO - LAZ",
            subtitle:"Directing/Framing/Editing",
            desc: "Prisoner in a time loop, LAZ finds himself condemned to relive the moment of his own end. Executive producers: Laz,Hawa-Bell Keita Director of photography: Oviri Francou 1st assistant director:Hawa-Bell Keita Dancer:Stacy Pierre",
        },
        {
            src:"https://res.cloudinary.com/dna8sibxu/image/upload/v1703961231/13%20TOUT%20VA%20BIEN%20-%20SHRO/TOUT_VA_BIEN_VIGNETTE_j0geoj.jpg",
            video:"https://res.cloudinary.com/dna8sibxu/video/upload/v1703961211/13%20TOUT%20VA%20BIEN%20-%20SHRO/TOUT_VA_BIEN_-_SHRO_u4p5uv.webm",
            alt:"homme dans voiture",
            label:"TOUT VA BIEN - SHRO",
            subtitle:"Directing/Framing/Editing",
            desc: "After years of absence, Shro is located by his team in the heart of the desert, where he had been captured.",
        },
    ]
    
    const cardsToDisplay = !isMobile ? cardsData.slice(1) : cardsData
    const handleClick = (cardIndex) => {
    setShowModal(true);
    isMobile ? setSelectedCardData(cardsData[cardIndex]) : setSelectedCardData(cardsData[cardIndex + 1]);
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
      {cardsToDisplay.map((card, index) => (
          <Cards key={index} src={card.src} alt={card.alt} label={card.label} subtitle={card.subtitle} sizeClassName="work__card_size" onClick={() => handleClick(index)} className="work__card_content"/>
          ))}
          </div>
          <div className={showModal ? 'work__modal' : "work__modal__none"}>
{showModal && selectedCardData && (
<>
<Modal  onClick={handleClose} title={selectedCardData.label} desc={selectedCardData.desc} subtitle={selectedCardData.subtitle} src={selectedCardData.video}/>
</>
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
