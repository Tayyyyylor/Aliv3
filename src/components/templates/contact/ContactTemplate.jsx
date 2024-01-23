import Image from 'next/image'
import React, { useState } from 'react'
import instagram from '../../../../public/instagram.png'
import mail from '../../../../public/Mail.png'
import behance from '../../../../public/BEHANCE.png'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

export default function ContactTemplate() {
  const [alert, setAlert] = useState(false)
  const myEmail = 'alibensays@gmail.com'

  const handleEmailClick = () => {
    navigator.clipboard.writeText(myEmail)
    window.location.href = 'mailto:alibensays@gmail.com'
    setAlert(true)
    setTimeout(() => {
      setAlert(false)
    }, 2000)
  }

  const handleInstaClick = () => {
    window.location.href = 'https://www.instagram.com/alibeniris/'
  }
  const handleBehanceClick = () => {
    window.location.href = 'https://www.behance.net/alisays1/'
  }

  useGSAP(() => {
    gsap.fromTo(
      '.behance',
      {
        x: -1000,
      },
      {
        rotation: 360,
        x: 0,
        duration: 1,
      }
    ),
      gsap.fromTo(
        '.mail',
        {
          x: -1000,
        },
        {
          rotation: 360,
          x: 0,
          duration: 1.5,
        }
      ),
      gsap.fromTo(
        '.insta',
        {
          x: -1000,
        },
        {
          rotation: 360,
          x: 0,
          duration: 2,
        }
      )
  })

  return (
    <main className="contact">
      <div className="contact__container">
        <div className="contact__img_container">
          <Image
            src={instagram}
            alt=""
            width={150}
            height={150}
            className="contact__img insta"
            onClick={handleInstaClick}
          />
          <div className="contact__mail">
            <Image
              src={mail}
              alt=""
              width={150}
              height={150}
              className="contact__img mail"
              onClick={handleEmailClick}
            />
            {alert && <p className="contact__alert">Email copied.</p>}
          </div>
          <Image
            src={behance}
            alt=""
            width={150}
            height={150}
            className="contact__img behance"
            onClick={handleBehanceClick}
          />
        </div>
      </div>
    </main>
  )
}
