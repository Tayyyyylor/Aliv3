import Image from 'next/image'
import React from 'react'
import { motion } from "framer-motion"


export default function Cards({src, alt, label, onClick}) {
  return (
   <motion.section 
   className='cards'
   whileHover={{ scale: 1.1 }}
   whileTap={{ scale: 0.9 }}
   onClick={onClick}
   >
    <div className='cards__container'>
    <Image src={src} alt={alt}/>
    </div>
    <h2 className='cards__title'>{label}</h2>
   </motion.section>
  )
}
