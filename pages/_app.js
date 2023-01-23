import Head from 'next/head'
import PlausibleProvider from 'next-plausible'
import { Abel, Marcellus } from '@next/font/google'

const abel = Abel({ weight: ['400'], subsets: ['latin'] })
const marcellus = Marcellus({ weight: ['400'], subsets: ['latin'] })

import '@/styles/globals.css'

const App = ({ Component, pageProps }) => {
    return (
        <PlausibleProvider domain='matthewtozer.com' trackOutboundLinks={true}>
            <Head>
                <meta
                    name='viewport'
                    content='width=device-width, initial-scale=1'
                />
                <link rel='shortcut icon' href='/favicon.ico' />
                <link
                    rel='apple-touch-icon'
                    sizes='180x180'
                    href='/apple-touch-icon.png'
                />
                <link
                    rel='icon'
                    type='image/png'
                    sizes='32x32'
                    href='/favicon-32x32.png'
                />
                <link
                    rel='icon'
                    type='image/png'
                    sizes='16x16'
                    href='/favicon-16x16.png'
                />
                <link rel='manifest' href='/site.webmanifest' />
                <link
                    rel='mask-icon'
                    href='/safari-pinned-tab.svg'
                    color='#eeeeee'
                />
                <meta name='msapplication-TileColor' content='#ffffff' />
                <meta name='theme-color' content='#eeeeee' />
            </Head>
            <style jsx global>{`
                :root {
                    --abel: ${abel.style.fontFamily};
                    --marcellus: ${marcellus.style.fontFamily};
                }
            `}</style>
            <Component {...pageProps} />
        </PlausibleProvider>
    )
}

export default App
