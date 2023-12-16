import React from 'react'

export default function DefaultButton({className, type, label, onClick}) {
  return (
    <div className={className}>
    <button type={type} className='defaultbutton' onClick={onClick}>
    {label}
    </button>
    </div>
  )
}
