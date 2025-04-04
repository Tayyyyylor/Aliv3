import React from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import Link from 'next/link'

export default function ContactTemplate() {
  const myEmail = 'alibensays@gmail.com'

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
      <Link
        target="_blank"
        href="https://www.instagram.com/alibeniris/"
        className="link"
      >
        INSTAGRAM
      </Link>
      <Link href={`mailto:${myEmail}`} className="link">
        {myEmail}
      </Link>
    </main>
  )
}
