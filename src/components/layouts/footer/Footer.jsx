import Image from 'next/image'
import React from 'react'
import instagramBlanc from '../../../../public/instagramBlanc.png'
import mailBlanc from '../../../../public/mailBlanc.png'
import behanceBlanc from '../../../../public/behanceBlanc.png'

export default function Footer() {
  return (
    <footer className="footer">
      <Image src={instagramBlanc} alt="logo " width={20} height={20} />
      <Image src={mailBlanc} alt="logo " width={20} height={20} />
      <Image src={behanceBlanc} alt="logo " width={20} height={20} />
    </footer>
  )
}
