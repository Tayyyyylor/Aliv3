import React from 'react'
import nefaste from "../../../../public/nefaste.jpg"
import Image from 'next/image'

export default function HomepageTemplate() {
  // const cld = new Cloudinary({cloud: {cloudName: 'dna8sibxu'}});
  return (
    <>
    
    <Image src={nefaste} alt='' className='homepage'/>
    
    </>
  )
}
