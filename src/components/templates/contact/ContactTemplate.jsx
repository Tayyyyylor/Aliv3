import React, { useEffect, useState } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import Link from 'next/link'
import client from '@/utils/contentful'
import Image from 'next/image'

export default function ContactTemplate() {
  const [contact, setContact] = useState()

  console.log('contact', contact)

  useEffect(() => {
    const fetchContact = async () => {
      try {
        const response = await client.getEntries({
          content_type: 'contact',
        })

        if (response.items.length > 0) {
          const contactData = response.items[0].fields
          console.log('contactData', contactData)
          setContact(contactData)
        }
      } catch (error) {
        console.error('Error fetching data from Contentful:', error)
      }
    }

    fetchContact()
  }, [])

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
      <Link href={`mailto:${contact?.mail}`} className="link">
        {contact?.mail}
      </Link>
      <Link href={`tel:${contact?.tel}`} className="link">
        {contact?.tel}
      </Link>
      <div className="brands_container">
        <h3 className="title2">They trusted me</h3>
        <Image
          alt="image brands"
          src={contact?.brands[0]?.secure_url}
          width={500}
          height={500}
          layout="intrinsic"
          className="image"
        />
      </div>
    </main>
  )
}
