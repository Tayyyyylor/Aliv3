import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';

function Slider() {
  const [currentPhoto, setCurrentPhoto] = useState(0);
  const photos = [
    { src: "./shro.jpg", title: "Ulysse 2001", description: "Follow a mind quest trough pilgrimage in" },
    { src: "./nefaste.jpg", title: "Nefaste", description: "Friends making gangsta stuff and enjoying night life,  but eventually get a throw back anytime soon." },
    { src: "./shro.jpg", title: "So Le Coq", description: " avec mon ami Taylor" },
    { src: "./shro.jpg", title: "Shro", description: "A young father facing a big crisis in Paris, forcing him to migrate out of the country."},
  ];
  const intervalRef = useRef(null);
  const imgRef = useRef(null);

  const handleClickLeft = () => {
    if (currentPhoto === 0) {
      setCurrentPhoto(photos.length - 1);
    } else {
      setCurrentPhoto(currentPhoto - 1);
    }
  };

  const handleClickRight = () => {
    if (currentPhoto === photos.length - 1) {
      setCurrentPhoto(0);
    } else {
      setCurrentPhoto(currentPhoto + 1);
    }
  };

  useEffect(() => {
    // met à jour l'image toutes les 6 secondes
    intervalRef.current = setInterval(() => {
      if (currentPhoto === photos.length - 1) {
        setCurrentPhoto(0);
      } else {
        setCurrentPhoto(currentPhoto + 1);
      }
    }, 6000);

    return () => {
      clearInterval(intervalRef.current);
    };
  }, [currentPhoto, photos.length]);

  useEffect(() => {
    imgRef.current.src = photos[currentPhoto].src;
  }, [currentPhoto, photos]);

  return (
    <div id="slider">
      <button id='left' onClick={handleClickLeft}><i className="fa-solid fa-chevron-left"></i></button>
      <Image src={photos[currentPhoto].src} alt="" ref={imgRef} className="img-slider"/>

      <div className='text-slider-container'>
      <h2 className='title-header' ref={imgRef}>{photos[currentPhoto].title }</h2>
      <p className='p-slider'>{photos[currentPhoto].description}</p>
      <Link href="/" className='img-play-button-container' >
        <button>play</button>
      </Link>
      </div>
      <button id='right' onClick={handleClickRight}><i className="fa-solid fa-chevron-right"></i></button>
    </div>
  );
}

export default Slider;
