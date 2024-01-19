import Link from 'next/link'
import { useEffect, useState } from 'react'

function Navbar() {
  const [menuIsOpen, setMenuIsOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    setIsMobile(window.innerWidth < 1024)
  }, [])

  const handleMenuIsOpen = () => {
    setMenuIsOpen(!menuIsOpen)
  }

  const handleClick = () => {
    setMenuIsOpen(false)
  }

  return (
    <>
      {isMobile ? (
        <nav
          className={`nav-mobile ${menuIsOpen ? 'active' : ''}`}
          style={{ background: 'white', transition: 'all 0.5s ease-in-out' }}
        >
          <Link href="/films" className="navbar-link margin-top" onClick={handleClick}>
            film
          </Link>
          <Link href="/photos" className="navbar-link" onClick={handleClick}>
            image
          </Link>
          <Link href="/contact" className="navbar-link" onClick={handleClick}>
            contact
          </Link>
        </nav>
      ) : (
        <nav className="nav-desktop">
          <Link href="/films" className="navbar-link">
            film
          </Link>
          <Link href="/photos" className="navbar-link">
            image
          </Link>
          <Link href="/contact" className="navbar-link">
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
