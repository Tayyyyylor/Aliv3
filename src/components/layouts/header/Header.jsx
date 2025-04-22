import Logo from '@/components/atoms/logo/Logo'
import Navbar from '@/components/molecules/navbar/Navbar'
import { usePathname } from 'next/navigation'
import React from 'react'

export default function Header() {
  const pathname = usePathname()

  const whiteHeaderPages = ['/contact', '/director', '/cinematographer']

  const whiteHeaderPage = whiteHeaderPages.some(path =>
    pathname.startsWith(path)
  )
  const color = whiteHeaderPage ? 'black' : 'white'

  return (
    <header className={`header ${whiteHeaderPage ? 'header--white' : ''}`}>
      <Logo className="header__logo" color={color} />
      <Navbar color={color} />
    </header>
  )
}
