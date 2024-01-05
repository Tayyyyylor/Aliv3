import Image from 'next/image'
import React, { useState } from 'react'
import instagram from '../../../../public/instagram.png'
import mail from '../../../../public/Mail.png'

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
  return (
    <main className="contact">
      <div className="contact__container">
        <div className="contact__img_container">
          <Image
            src={instagram}
            alt=""
            width={150}
            height={150}
            className="contact__img"
            onClick={handleInstaClick}
          />
          <div className="contact__mail">
            <Image
              src={mail}
              alt=""
              width={150}
              height={150}
              className="contact__img"
              onClick={handleEmailClick}
            />
            {alert && <p className="contact__alert">Email copied.</p>}
          </div>
        </div>
      </div>
    </main>
  )
}
