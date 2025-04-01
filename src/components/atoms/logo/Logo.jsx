import Link from 'next/link'

export default function Logo({ className, color }) {
  const logoColorClass = color === 'black' ? 'black' : 'white'

  return (
    <Link href="/">
      <h1 className={`logo ${logoColorClass} ${className}`}> ali bensaali</h1>
    </Link>
  )
}
