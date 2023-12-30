import React from 'react'

export default function Backdrop({onCancel}) {
  return (
    <div className="backdrop" onClick={onCancel}/>
  )
}
