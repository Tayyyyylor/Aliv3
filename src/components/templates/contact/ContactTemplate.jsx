import React, { useState } from 'react'
import instagram from '../../../../public/instagram.png'
import mail from '../../../../public/Mail.png'
import behance from '../../../../public/BEHANCE.png'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import LogoRs from '@/components/atoms/logoRs/LogoRs'

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
        ease: 'power2.inOut',
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
          ease: 'power2.inOut',
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
          ease: 'power2.inOut',
        }
      )
  })

  return (
    <main className="contact">
      <div className="contact__container">
        <div className="contact__img_container">
          <div className="insta">
            <LogoRs
              src={instagram}
              priority={false}
              alt=""
              className="contact__img"
              onClick={handleInstaClick}
            />
          </div>
          <div className="contact__mail mail">
            <LogoRs
              src={mail}
              priority={false}
              alt=""
              className="contact__img"
              onClick={handleEmailClick}
            />
            {alert && <p className="contact__alert">Email copied.</p>}
          </div>
          <div className="behance">
            <LogoRs
              src={behance}
              priority={false}
              alt=""
              className="contact__img"
              onClick={handleBehanceClick}
            />
          </div>
        </div>
      </div>
    </main>
  )
}
