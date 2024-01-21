import Link from 'next/link'

export default function Logo({ className }) {
 

  return (
    <Link href="/">
      <h1 className={`logo ${className}`}> ali bensaali</h1>
    </Link>
  )
}
