import Link from "next/link";
import { useEffect, useState } from "react";

function Navbar() {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

 useEffect(() => {
    setIsMobile(window.innerWidth < 1024);
 },[])
  
  const [isHover, setIsHover] = useState(false);

  const handleMenuIsOpen = () => {
    setMenuIsOpen(!menuIsOpen);
  };

  function onHover() {
    setIsHover(true);
  }
  function disabledHover() {
    setIsHover(false);
  }

  return (
    <>
      {isMobile ? (
        <nav className={`nav-mobile ${menuIsOpen ? "active" : "" }`}
        style={{ background:  "var(--yellow)", 
                transition: "all 0.5s ease-in-out"}}>
          <Link href="/" className="navbar-link margin-top"
          style={{ color:  "black",
          }} >
           video
           <div className="sub-nav-container" style={{display: "none" }}>
            <Link>Clips</Link>
            <Link>Evenementiels</Link>
            </div>
          </Link>
          <Link href="/" className="navbar-link"
          style={{ color: "black"}}>
            photo
          </Link>
          <Link href="/" className="navbar-link"
          style={{ color: "black"}}>
            commercial
          </Link>
          <Link href="/" className="navbar-link"
          style={{ color: "black"}}>
            contact
          </Link>
        </nav>
      ) : (
        <nav className="nav-desktop">
          <Link href="/" className="navbar-link"
          style={{ color: "black"}}
          onMouseEnter={onHover}
          onMouseLeave={disabledHover}>
            video
            <div className="sub-nav-container" style={{display: `${isHover ? 'flex' : "none"}`}}>
            <Link href="/">Clips</Link>
            <Link href="/">Evenementiel</Link>
            </div>
          </Link>
          <Link href="/" className="navbar-link"
          style={{ color: "black"}}>
            photo
          </Link>
          <Link href="/" className="navbar-link"
          style={{ color: "black"}}>
            commercials
          </Link>
          <Link href="/" className="navbar-link"
          style={{ color:  "black"}}>
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
            className={` line l1 ${menuIsOpen ? "active" : "line"}`}
            style={{ background: "black" }}
          ></span>
          <span
            className={`line l2 ${menuIsOpen ? "active" : "line"}`}
            style={{ background:  "black"}}
          ></span>
          <span
            className={` line l3 ${menuIsOpen ? "active" : "line"}`}
            style={{ background: "black"}}
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
            className={` line l1 ${menuIsOpen ? "active" : "line"}`}
            style={{ background: "black"}}
          ></span>
          <span
            className={`line l2 ${menuIsOpen ? "active" : "line"}`}
            style={{ background: "black" }}
          ></span>
          <span
            className={` line l3 ${menuIsOpen ? "active" : "line"}`}
            style={{ background: "black"}}
          ></span>
        </button>
      )}
    </>
  );
}

export default Navbar;
