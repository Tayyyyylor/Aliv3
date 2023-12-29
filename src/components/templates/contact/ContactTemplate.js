import Image from 'next/image'
import React from 'react'
import instagram from "../../../../public/instagram.png"
import mail from "../../../../public/Mail.png"

export default function ContactTemplate() {

  const handleEmailClick = () => {
    window.location.href = 'mailto:alibensays@gmail.com';
  };

  const handleInstaClick = () => {
    window.location.href = "https://www.instagram.com/alibeniris/"
  }
  return (
    <main className='contact'> 
    <div className='contact__container'>

       <Image src={instagram} alt='' width={150} height={150} className='contact__img' onClick={handleInstaClick}/>
       <Image src={mail} alt='' width={150} height={150}  className='contact__img' onClick={handleEmailClick} />
    </div>
    </main>
  )
}
