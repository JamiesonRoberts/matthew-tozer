'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import * as Sentry from '@sentry/nextjs'

export default function Error({ error }) {
  useEffect(() => {
    // Log the error to Sentry
    Sentry.captureException(error)
  }, [error])

  return (
    <div
      style={{
        minHeight: '100vh',
        width: '100vw',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '1rem',
        padding: '1rem',
        textAlign: 'center',
      }}
    >
      <h1>Whoops - Something broke and isn&apos;t working quite right</h1>
      <Link href='/'>Return back to the main page</Link>
    </div>
  )
}
