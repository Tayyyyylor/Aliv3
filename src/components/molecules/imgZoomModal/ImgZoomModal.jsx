/* eslint-disable @next/next/no-img-element */
import CloseButton from '@/components/atoms/buttons/closeButton/CloseButton'
import Title from '@/components/atoms/title/Title'
import React from 'react'
import Slider from 'react-slick';

export default function ImgZoomModal({ label, onClick, gallery }) {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <section className="imageModal">
      <Title label={label} className="imageModal__title" />
      <CloseButton onClick={onClick} className="imageModal__button" />
      <Slider {...settings} className="imageModal__img_container">
        {gallery.map((src, index) => (
          <img
            key={index}
            src={src}
            sizes="100vw"
            alt={`Photo ${index}`}
            className="imageModal__img"
            loading="lazy"
          />
        ))}
      </Slider>
    </section>
  )
}
