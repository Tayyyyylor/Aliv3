/* eslint-disable @next/next/no-img-element */
import CloseButton from '@/components/atoms/buttons/closeButton/CloseButton'
import Title from '@/components/atoms/title/Title'
import React, { useEffect, useState } from 'react'




export default function ImageModal({ label, onClick, gallery }) {
  const [zoomIndex, setZoomIndex] = useState(null)
  // eslint-disable-next-line no-unused-vars
  const [isMobile, setIsMobile] = useState(false)

  const [touchStartX, setTouchStartX] = useState(null);

  useEffect(() => {
    const handleTouchStart = (e) => {
      setTouchStartX(e.touches[0].clientX);
    };

    const handleTouchMove = (e) => {
      if (touchStartX !== null) {
        const touchEndX = e.touches[0].clientX;
        const deltaX = touchEndX - touchStartX;

        if (deltaX > 50) {
          // Swipe vers la droite
          handleSwipe('left');
        } else if (deltaX < -50) {
          // Swipe vers la gauche
          handleSwipe('right');
        }
      }
    };

    const handleTouchEnd = () => {
      setTouchStartX(null);
    };

    window.addEventListener('touchstart', handleTouchStart);
    window.addEventListener('touchmove', handleTouchMove);
    window.addEventListener('touchend', handleTouchEnd);

    return () => {
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleTouchEnd);
    };
  }, [touchStartX]);

  const handleSwipe = (direction) => {
    if (zoomIndex !== null) {
      const nextIndex = direction === 'right' ? zoomIndex + 1 : zoomIndex - 1;
      const lastIndex = gallery.length - 1;

      setZoomIndex(Math.max(0, Math.min(nextIndex, lastIndex)));
    }
  };
  useEffect(() => {
    setIsMobile(window.innerWidth < 1024)
  }, [])

  const openFullScreen = index => {
    setZoomIndex(index);
  };

  const closeFullScreen = () => {
    setZoomIndex(null);
  };

 

  console.log('zoomIndex', zoomIndex)

  return (
    <section className='imageModal' >
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
          <img src={gallery[zoomIndex]} className="fullscreen-modal-img"  sizes="100vw"
                alt={`Zoomed photo ${zoomIndex}`} />
        </div>
      )}
    </section>
  )
}
