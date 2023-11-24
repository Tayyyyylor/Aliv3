import { useEffect, useState } from "react";
import logoNoir from "../../../../public/logoNoir.png";
import logoNoirMobile from "../../../../public/logoOngletNoir.png";
import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Fonction pour détecter si la vue est en mode mobile ou non
    const handleResize = () => {
      setIsMobile(window.innerWidth < 920);
    };

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <Link href="/">
      <Image
        className=''
        src={isMobile ? logoNoirMobile : logoNoir}
        width={isMobile ? 100 : 200}
        alt="ali logo"
        priority={false}
      />
    </Link>
  );
}
