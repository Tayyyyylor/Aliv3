import React from 'react'

export default function  CloseButton({ className, onClick }) {
  return (
    <div className={className}>
      <span className="closeButton" onClick={onClick}>
        &times;
      </span>
    </div>
  )
}
