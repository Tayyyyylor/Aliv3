import CloseButton from '@/components/atoms/buttons/closeButton/CloseButton'
import React from 'react'

export default function Modal({ title, desc, onClick, subtitle}) {
  return (
    <section className='modal'>
    <div className='modal__text'>
      <div>
        <h2 className='modal__title'>{title}</h2>
        <p className='modal__subtitle'>{subtitle}</p>
      </div>
        <p className='modal__desc'>{desc}</p>
        <CloseButton onClick={onClick} className='modal__button'/>
    </div>
    <div className='modal__video'>
    <video className='video'  preload='auto' muted autoPlay controls>
  <source src="/reeelWebm.webm" type="video/webm" />
  </video>
    </div>
    </section>
  )
}
