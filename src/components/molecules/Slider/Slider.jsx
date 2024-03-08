/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Swiper from 'swiper'
import { SwiperSlide } from 'swiper/react'

export default function Slider({ gallery }) {
  return (
    <Swiper slidePerView={1}>
      <div className="slider__img_container">
        {gallery.map((src, index) => (
          <SwiperSlide key={index}>
            <img
              src={src}
              sizes="100vw"
              alt={`Photo ${index}`}
              className="slider__img"
              loading="lazy"
              id={`img-${index}`}
            />
          </SwiperSlide>
        ))}
      </div>
    </Swiper>
  )
}
