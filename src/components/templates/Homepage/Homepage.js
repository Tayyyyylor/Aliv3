import React, {  useState } from 'react';
import DefaultButton from '@/components/atoms/buttons/defaultButton/DefaultButton';
import { useRouter } from 'next/router';

export default function HomepageTemplate() {
  // const cld = new Cloudinary({cloud: {cloudName: 'dna8sibxu'}});
  const [showButton, setShowButton] = useState(false);
  const router = useRouter()

const handleExplore = () => {
  router.push("/films")
}

const handleMouseMove = () => {
  setShowButton(true);
};
const handleMouseLeave = () => {
  setShowButton(false);
};

  return (
    <>
        <div className='intro' onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
          <div className='intro__video'>
          <video className='video'  preload='auto' muted autoPlay controls>
  <source src="/reeelWebm.webm" type="video/webm" />
  </video>
          </div>  
          {
            showButton && (
              <DefaultButton label="Explore now ▶" onClick={handleExplore} className="intro__button"/>
            )
          }  
        </div>


    </>
  )
}
