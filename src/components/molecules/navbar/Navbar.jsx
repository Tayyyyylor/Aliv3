import useMobile from '@/hooks/useMobile'
import Link from 'next/link'
import { useState } from 'react'

function Navbar({ color }) {
  const [menuIsOpen, setMenuIsOpen] = useState(false)
  const isMobile = useMobile()

  const navbarColorClass = color === 'black' ? 'black' : 'white'
  console.log('navbarColorClass', navbarColorClass)

  const handleMenuIsOpen = () => {
    setMenuIsOpen(!menuIsOpen)
  }

  const handleClick = () => {
    setMenuIsOpen(false)
  }

  const isBgTransparent = navbarColorClass === 'white'

  return (
    <>
      {isMobile ? (
        <nav
          className={`nav-mobile ${menuIsOpen ? 'active' : ''}`}
          style={{
            background: isBgTransparent ? 'transparent' : 'white',
            transition: 'all 0.5s ease-in-out',
          }}
        >
          <Link
            href="/director"
            className={`navbar-link margin-top ${navbarColorClass}`}
            onClick={handleClick}
          >
            director
          </Link>
          <Link
            href="/cinematographer"
            className={`navbar-link ${navbarColorClass}`}
            onClick={handleClick}
          >
            cinematographer
          </Link>
          <Link
            href="/contact"
            className={`navbar-link ${navbarColorClass}`}
            onClick={handleClick}
          >
            contact
          </Link>
        </nav>
      ) : (
        <nav className="nav-desktop">
          <Link href="/director" className={` navbar-link ${navbarColorClass}`}>
            director
          </Link>
          <Link
            href="/cinematographer"
            className={` navbar-link ${navbarColorClass}`}
          >
            cinematographer
          </Link>
          <Link href="/contact" className={` navbar-link ${navbarColorClass}`}>
            contact
          </Link>
        </nav>
      )}

      {isMobile ? (
        <button
          onClick={handleMenuIsOpen}
          type="button"
          aria-label="toggle curtain navigation"
          className="nav-toggler"
        >
          <span
            className={` line l1  ${menuIsOpen ? 'active' : 'line'}`}
            style={{ background: navbarColorClass }}
          ></span>
          <span
            className={`line l2  ${menuIsOpen ? 'active' : 'line'}`}
            style={{ background: navbarColorClass }}
          ></span>
          <span
            className={` line l3 ${menuIsOpen ? 'active' : 'line'}`}
            style={{ background: navbarColorClass }}
          ></span>
        </button>
      ) : (
        <button
          onClick={handleMenuIsOpen}
          type="button"
          aria-label="toggle curtain navigation"
          className="nav-toggler"
        >
          <span
            className={` line l1 ${menuIsOpen ? 'active' : 'line'}`}
            style={{ background: 'black' }}
          ></span>
          <span
            className={`line l2 ${menuIsOpen ? 'active' : 'line'}`}
            style={{ background: 'black' }}
          ></span>
          <span
            className={` line l3 ${menuIsOpen ? 'active' : 'line'}`}
            style={{ background: 'black' }}
          ></span>
        </button>
      )}
    </>
  )
}

export default Navbar
