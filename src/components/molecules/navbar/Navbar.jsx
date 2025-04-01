import Link from 'next/link'
import { useEffect, useState } from 'react'

function Navbar({ color }) {
  const [menuIsOpen, setMenuIsOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  const navbarColorClass = color === 'black' ? 'black' : 'white'

  const handleMenuIsOpen = () => {
    setMenuIsOpen(!menuIsOpen)
  }

  const handleClick = () => {
    setMenuIsOpen(false)
  }

  useEffect(() => {
    setIsMobile(window.innerWidth < 1024)
  }, [])

  return (
    <>
      {isMobile ? (
        <nav
          className={`nav-mobile ${menuIsOpen ? 'active' : ''}`}
          style={{ background: 'white', transition: 'all 0.5s ease-in-out' }}
        >
          <Link
            href="/director"
            className="navbar-link margin-top"
            onClick={handleClick}
          >
            director
          </Link>
          <Link
            href="/cinematographer"
            className="navbar-link"
            onClick={handleClick}
          >
            cinematographer
          </Link>
          <Link href="/contact" className="navbar-link" onClick={handleClick}>
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
