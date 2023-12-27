// import { useEffect, useState } from "react";
import Link from "next/link";

export default function Logo() {
  // const [isMobile, setIsMobile] = useState(false);

  // useEffect(() => {
  //   // Fonction pour détecter si la vue est en mode mobile ou non
  //   const handleResize = () => {
  //     setIsMobile(window.innerWidth < 920);
  //   };

  //   window.addEventListener("resize", handleResize);

  //   handleResize();

  //   return () => {
  //     window.removeEventListener("resize", handleResize);
  //   };
  // }, []);

  return (
    <Link href="/">
     <h1 className="logo"> ali bensaali</h1>
    </Link>
  );
}
