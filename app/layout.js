import CloudflareWebAnalyticsProvider from 'next-cloudflare-web-analytics'
import { Abel, Marcellus } from 'next/font/google'

import '@/components/_globals/globals.css'

const abel = Abel({
  weight: ['400'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--abel',
})

const marcellus = Marcellus({
  weight: ['400'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--marcellus',
})

export const viewport = {
  viewport: {
    width: 'device-width',
    initialScale: 1,
  },
  themeColor: '#EEEEEE',
  colorScheme: 'light',
}

export const metadata = {
  metadataBase: new URL('https://matthewtozer.com/'),
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '32x32' },
      { url: '/icon.svg', type: 'image/svg+xml', sizes: 'any' },
    ],
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
}

export default function RootLayout({ children }) {
  return (
    <html lang='en-CA' className={`${abel.variable} ${marcellus.variable}`}>
      <CloudflareWebAnalyticsProvider token={'XXXXXXXX'} />
      <body>{children}</body>
    </html>
  )
}
