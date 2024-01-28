import Header from '@/components/layouts/header/Header'
import { Analytics } from '@vercel/analytics/react'
import '../styles/globals.scss'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Analytics />
    </>
  )
}
