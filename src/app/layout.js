import { Roboto_Flex, Mohave } from 'next/font/google'
import './globals.css'
import OGImage from "@/assets/share-og.jpg"
import Header from '@/components/header'

const robotoFlex = Roboto_Flex({ 
  subsets: ['latin'], 
  weight: ['400', '500', '700'],
  display: 'swap',
  variable: '--font-roboto-flex',
  adjustFontFallback: false
})

const mohave = Mohave({
  subsets: ['latin'],
  weight: ['600', '700'],
  display: 'swap',
  variable: '--font-mohave',
  adjustFontFallback: false
})

export const metadata = {
  title: 'Marvel Spiderman 2',
  description: 'Projeto de estudo do evento DevProcess, parte do grupo do Codeboost.',
  openGraph: {
    images: OGImage,
  },
  twitter: {
    title: 'Marvel Spiderman 2',
    images: OGImage,
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body className={`${robotoFlex.variable} ${mohave.variable}`}>
        <Header />
        {children}
      </body>
    </html>
  )
}
