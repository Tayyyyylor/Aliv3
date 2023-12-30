import CloseButton from '@/components/atoms/buttons/closeButton/CloseButton'
import Title from '@/components/atoms/title/Title'
import Image from 'next/image'
import React from 'react'


export default function ImageModal({ label,  onClick, gallery}) {
   
  return (
    <section className='imageModal'>
        <Title label={label} className='imageModal__title'/>
        <CloseButton onClick={onClick} className='imageModal__button'/>
        <div className='imageModal__img_container'>
        {gallery.map((src, index) => (
          <Image key={index} src={src} width="300"  sizes="100vw" height="300" alt={`Photo ${index}`} className='imageModal__img' />
          ))}
          </div>
    </section>
  )
}
