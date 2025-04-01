/* eslint-disable @next/next/no-img-element */
import CloseButton from '@/components/atoms/buttons/closeButton/CloseButton'
import Title from '@/components/atoms/title/Title'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'

export default function ImageModal({ label, onClick, gallery }) {
  const [zoomIndex, setZoomIndex] = useState(null)
  // eslint-disable-next-line no-unused-vars
  const [isMobile, setIsMobile] = useState(false)

  const [touchStartX, setTouchStartX] = useState(null)

  useEffect(() => {
    setIsMobile(window.innerWidth < 1024)
  }, [])

  useEffect(() => {
    const handleTouchStart = e => {
      setTouchStartX(e.touches[0].clientX)
    }

    const handleTouchMove = e => {
      if (touchStartX !== null) {
        const touchEndX = e.touches[0].clientX
        const deltaX = touchEndX - touchStartX

        if (deltaX > 50) {
          // Swipe vers la droite
          handleSwipe('left')
        } else if (deltaX < -50) {
          // Swipe vers la gauche
          handleSwipe('right')
        }
      }
    }

    const handleTouchEnd = () => {
      setTouchStartX(null)
    }

    window.addEventListener('touchstart', handleTouchStart)
    window.addEventListener('touchmove', handleTouchMove)
    window.addEventListener('touchend', handleTouchEnd)

    return () => {
      window.removeEventListener('touchstart', handleTouchStart)
      window.removeEventListener('touchmove', handleTouchMove)
      window.removeEventListener('touchend', handleTouchEnd)
    }
  }, [touchStartX])

  const handleSwipe = direction => {
    if (zoomIndex !== null && isMobile) {
      const nextIndex = direction === 'right' ? zoomIndex + 1 : zoomIndex - 1
      const lastIndex = gallery.length - 1
      setZoomIndex(Math.max(0, Math.min(nextIndex, lastIndex)))
    }
  }

  const handleSwitchLeft = index => {
    const newIndex = index - 1
    setZoomIndex(newIndex < 0 ? gallery.length - 1 : newIndex)
  }

  const handleSwitchRight = index => {
    const newIndex = index + 1
    setZoomIndex(newIndex >= gallery.length ? 0 : newIndex)
  }

  const openFullScreen = index => {
    setZoomIndex(index)
  }

  const closeFullScreen = () => {
    setZoomIndex(null)
  }

  return (
    <section className="imageModal">
      <Title label={label} className="imageModal__title" />
      <CloseButton onClick={onClick} className="imageModal__button" />
      <div className="imageModal__img_container">
        {gallery.map((src, index) => (
          <img
            key={index}
            onClick={() => openFullScreen(index)}
            src={src}
            sizes="100vw"
            alt={`Photo ${index}`}
            className="imageModal__img"
            loading="lazy"
            id={`img-${index}`}
          />
        ))}
      </div>
      {zoomIndex !== null && (
        <div className="fullscreen-modal" onClick={closeFullScreen}>
          {!isMobile ? (
            <>
              <CloseButton
                onClick={closeFullScreen}
                className="zoom__button_close"
              />
              <span
                className="imageModal__zoom_left"
                onClick={e => {
                  e.stopPropagation()
                  handleSwitchLeft(zoomIndex)
                }}
              >
                <Image src="/arrowleft.png" width={30} height={30} alt="" />
              </span>
              <img
                src={gallery[zoomIndex]}
                className="fullscreen-modal-img"
                sizes="100vw"
                alt={`Zoomed photo ${zoomIndex}`}
              />
              <span
                className="imageModal__zoom_right"
                onClick={e => {
                  e.stopPropagation()
                  handleSwitchRight(zoomIndex)
                }}
              >
                <Image src="/arrowright.png" width={30} height={30} alt="" />
              </span>
            </>
          ) : (
            <>
              <CloseButton
                onClick={closeFullScreen}
                className="zoom__button_close"
              />
              <img
                src={gallery[zoomIndex]}
                className="fullscreen-modal-img"
                sizes="100vw"
                alt={`Zoomed photo ${zoomIndex}`}
              />
            </>
          )}
        </div>
      )}
    </section>
  )
}
