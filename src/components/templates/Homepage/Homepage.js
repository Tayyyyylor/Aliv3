import React, { useEffect} from 'react';
import DefaultButton from '@/components/atoms/buttons/defaultButton/DefaultButton';
import { useRouter } from 'next/router';

export default function HomepageTemplate() {
  const router = useRouter()


// const isMobile = window.innerWidth < 1024


const handleExplore = () => {
  router.push("/films")
}

useEffect(() => {
  // Vérifie si l'utilisateur est sur un appareil mobile lors du chargement initial
  const checkMobile = () => {
    if (window.innerWidth < 1024) {
      router.push("/films");
    }
  };

  // Appeler la fonction de vérification lors du chargement initial
  checkMobile();

  // Ajouter un écouteur d'événement de redimensionnement pour effectuer la vérification en cas de redimensionnement de la fenêtre
  window.addEventListener('resize', checkMobile);

  // Retirer l'écouteur d'événement lors du démontage du composant pour éviter les fuites de mémoire
  return () => {
    window.removeEventListener('resize', checkMobile);
  };
}, [router]);


  return (
    
    <>
        <div className='intro'>
          <div className='intro__video'>
          <video className='video'  preload='auto' muted autoPlay controls>
  <source src="https://res.cloudinary.com/dna8sibxu/video/upload/v1703956903/Intro/reeelWebm_amf758.webm" type="video/webm" />
  </video>
          </div>  
              <DefaultButton label="Explore now ▶" onClick={handleExplore} className="intro__button"/>
        </div>


    </>
  )
}
