/* eslint-disable @next/next/no-img-element */
import Backdrop from '@/components/atoms/backdrop/Backdrop'
import CloseButton from '@/components/atoms/buttons/closeButton/CloseButton'
import Title from '@/components/atoms/title/Title'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'




export default function ImageModal({ label, onClick, gallery }) {
  const [zoom, setZoom] = useState(false)
  const [zoomIndex, setZoomIndex] = useState(null)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    setIsMobile(window.innerWidth < 1024)
  }, [])

  const enterFullscreen = (element) => {
    if (element.requestFullscreen) {
      element.requestFullscreen();
    } else if (element.mozRequestFullScreen) {
      element.mozRequestFullScreen();
    } else if (element.webkitRequestFullscreen) {
      element.webkitRequestFullscreen();
    } else if (element.msRequestFullscreen) {
      element.msRequestFullscreen();
    }
  };

  const exitFullscreen = () => {
    if (document.fullscreenElement) {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
      }
    }
  };

  const handleClick = index => {
    const imageElement = document.getElementById(`img-${index}`);
    setZoom(true);
    setZoom(true)
    setZoomIndex(index)
    isMobile && (enterFullscreen(imageElement))
    
  }

  const handleClose = () => {
    setZoom(false)
    setZoomIndex(null)
    isMobile && (exitFullscreen())
  }

  const handleSwitchLeft = index => {
    const newIndex = index - 1
    setZoomIndex(newIndex < 0 ? gallery.length - 1 : newIndex)
  }

  const handleSwitchRight = index => {
    const newIndex = index + 1
    setZoomIndex(newIndex >= gallery.length ? 0 : newIndex)
  }

         

  return (
    <section className={`imageModal ${zoom ? 'zoomed' : ''}`}>
      <Title label={label} className="imageModal__title" />
      <CloseButton onClick={onClick} className="imageModal__button" />
      <div className="imageModal__img_container">
        {gallery.map((src, index) => (
          <Swiper
          key={index}
          >
            <SwiperSlide>
          <img
            onClick={() => handleClick(index)}
            src={src}
            sizes="100vw"
            alt={`Photo ${index}`}
            className="imageModal__img"
            loading="lazy"
            id={`img-${index}`}
            />
            </SwiperSlide>
            </Swiper>
        ))}
      </div>
      {zoom && (
        <div className="zoom">
          <div className="imageModal__zoom_container">
   

            <section className="imageModal__zoom">
              <CloseButton
                onClick={handleClose}
                className="zoom__button_close"
              />
              {!isMobile && (
                <span
                className="imageModal__zoom_left"
                onClick={() => handleSwitchLeft(zoomIndex)}
                >
                <Image
                  src="/arrowleft.png"
                  width={30}
                  height={30}
                  alt=""
                  />
              </span>
                  )}
              <img
                src={gallery[zoomIndex]}
                sizes="100vw"
                alt={`Zoomed photo ${zoomIndex}`}
                className="imageModal__zoom_img"
                loading="lazy"
              />
              {!isMobile && (

                <span
                className="imageModal__zoom_right"
                onClick={() => handleSwitchRight(zoomIndex)}
                >
              
                <Image
                  src="/arrowright.png"
                  width={30}
                  height={30}
                  alt=""
                  />
              </span>
                  )}
            </section>
            <Backdrop onCancel={handleClose} />
          </div>
        </div>
      )}
    </section>
  )
}
