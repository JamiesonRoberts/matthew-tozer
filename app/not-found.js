import Link from 'next/link'

export const metadata = {
  title: 'Whoops, something went wrong.',
}

export default function NotFound() {
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
      <h1>404 - Page Not Found</h1>
      <Link href={'/'}>Return back to the main page</Link>
    </div>
  )
}
