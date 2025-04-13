import React from 'react'

export default function  CloseButton({ className, onClick }) {

  const handleClick = (e) => {
    e.stopPropagation() // ⛔ empêche la remontée vers <main>
    onClick?.(e)        // ✅ exécute la fermeture
  }
  return (
    <div className={className}>
      <span className="closeButton" onClick={handleClick}>
        &times;
      </span>
    </div>
  )
}
