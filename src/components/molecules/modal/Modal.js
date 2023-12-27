import CloseButton from '@/components/atoms/buttons/closeButton/CloseButton'
import React from 'react'

export default function Modal({ title, desc, onClick}) {
  return (
    <section className='modal'>
    <div className='modal__text'>
        <h2>{title}</h2>
        <p>{desc}</p>
        <CloseButton onClick={onClick} className='modal__button'/>
    </div>
    <div className='modal__video'>
    </div>
    </section>
  )
}
