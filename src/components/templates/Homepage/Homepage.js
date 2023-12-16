import React, { useEffect, useState } from 'react'
import DefaultButton from '@/components/atoms/buttons/defaultButton/DefaultButton';

export default function HomepageTemplate() {
  // const cld = new Cloudinary({cloud: {cloudName: 'dna8sibxu'}});
  const [firstLoad, setFirstLoad] = useState(true);
  const [showButton, setShowButton] = useState(false);

const handleClose = () => {
  setFirstLoad(false);
}
useEffect(() => {
  if (firstLoad) {
    setTimeout(() => {
      setShowButton(true);
    }, 5000);
  }
}, [firstLoad]);


  return (
    <>
    
   
     {firstLoad && (
        <div className='intro'>
          <div className='intro__video'>
          <video controls className='video' preload='auto' muted autoPlay>
  <source src="/ulysseGif.webm" type="video/webm" />
  </video>
          </div>  
          {
            showButton && (
              <DefaultButton label="entrer sur le site" onClick={handleClose} className="intro__button"/>
            )
          }  
        </div>
      )}


    </>
  )
}
