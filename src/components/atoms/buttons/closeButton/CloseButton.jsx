import React from 'react'

export default function CloseButton({ className, onClick }) {
  const handleClick = e => {
    e.stopPropagation()
    onClick?.(e)
  }
  return (
    <div className={className}>
      <span className="closeButton" onClick={handleClick}>
        &times;
      </span>
    </div>
  )
}
