import CloseButton from '@/components/atoms/buttons/closeButton/CloseButton'
import Title from '@/components/atoms/title/Title'
import React from 'react'

export default function ImageModal({ label,  onClick}) {
  return (
    <section className='imageModal'>
        <Title label={label} className='imageModal__title'/>
        <CloseButton onClick={onClick} className='imageModal__button'/>
    <div className='imageModal__video'>
    </div>
    </section>
  )
}
