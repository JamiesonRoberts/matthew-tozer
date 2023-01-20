import PlausibleProvider from 'next-plausible'
import { Abel, Marcellus } from '@next/font/google'

const abel = Abel({ weight: ['400'], subsets: ['latin'] })
const marcellus = Marcellus({ weight: ['400'], subsets: ['latin'] })

import '@/styles/globals.css'

const App = ({ Component, pageProps }) => {
    return (
        <PlausibleProvider domain='matthewtozer.com' trackOutboundLinks={true}>
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
