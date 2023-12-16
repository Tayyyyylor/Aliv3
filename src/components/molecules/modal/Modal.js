import DefaultButton from '@/components/atoms/buttons/defaultButton/DefaultButton'
import React from 'react'

export default function Modal({ title, desc, onClick}) {
  return (
    <section className='modal'>
    <div className='modal__text'>
        <h2>{title}</h2>
        <p>{desc}</p>
        <DefaultButton  onClick={onClick} className='modal__button' label='close'/>
    </div>
    <div className='modal__video'>
    </div>
    </section>
  )
}
