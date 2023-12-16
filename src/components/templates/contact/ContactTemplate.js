import Image from 'next/image'
import React from 'react'
import instagram from "../../../../public/instagram.png"

export default function ContactTemplate() {
  return (
    <main className='contact'> 
    <div className='contact__container'>

       <Image src={instagram} alt='' width={150} height={150} />
       <Image src={instagram} alt='' width={150} height={150} />
       <Image src={instagram} alt='' width={150} height={150} />
    </div>
    </main>
  )
}
