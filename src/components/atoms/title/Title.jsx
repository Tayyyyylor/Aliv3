import React from 'react'

export default function Title({ label, className }) {
  return (
    <div className={className}>
      <h2 className="title">{label}</h2>
    </div>
  )
}
