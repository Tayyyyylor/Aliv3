import Logo from '@/components/atoms/logo/Logo'
import Navbar from '@/components/molecules/navbar/Navbar'
import React from 'react'

export default function Header() {
  return (
    <header className="header">
      <Logo />
      <Navbar />
    </header>
  )
}
