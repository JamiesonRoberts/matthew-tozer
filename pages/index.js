import Head from 'next/head'

import Header from '@/components/Header'
import Main from '@/components/Main'
import Footer from '@/components/Footer'
import StructuredData from '@/components/StructuredData'

export default function Home() {
    return (
        <>
            <Head>
                <meta
                    name='viewport'
                    content='width=device-width, initial-scale=1'
                />

                <title>Dr. Matthew Tozer - Composer & Educator</title>
                <meta
                    name='title'
                    content='Dr. Matthew Tozer - Composer & Educator'
                />
                <meta
                    name='description'
                    content='Matthew Tozer currently resides in Woodstock, Ontario where he works as a freelance composer, sessional instructor, and operates a private studio.'
                />

                <meta property='og:type' content='website' />
                <meta property='og:url' content='https://matthewtozer.com/' />
                <meta
                    property='og:title'
                    content='Dr. Matthew Tozer - Composer & Educator'
                />
                <meta
                    property='og:description'
                    content='Matthew Tozer currently resides in Woodstock, Ontario where he works as a freelance composer, sessional instructor, and operates a private studio.'
                />
                <meta
                    property='og:image'
                    content='https://matthewtozer.com/mtozersocialshare.jpg'
                />

                <meta property='twitter:card' content='summary_large_image' />
                <meta
                    property='twitter:url'
                    content='https://matthewtozer.com/'
                />
                <meta name='twitter:site' content='@matthewtozer' />
                <meta
                    property='twitter:title'
                    content='Dr. Matthew Tozer - Composer & Educator'
                />
                <meta
                    property='twitter:description'
                    content='Matthew Tozer currently resides in Woodstock, Ontario where he works as a freelance composer, sessional instructor, and operates a private studio.'
                />
                <meta
                    property='twitter:image'
                    content='https://matthewtozer.com/mtozersocialshare.jpg'
                />

                <link
                    rel='apple-touch-icon'
                    sizes='180x180'
                    href='https://matthewtozer.com/apple-touch-icon.png'
                />
                <link
                    rel='icon'
                    type='image/png'
                    sizes='32x32'
                    href='https://matthewtozer.com/favicon-32x32.png'
                />
                <link
                    rel='icon'
                    type='image/png'
                    sizes='16x16'
                    href='https://matthewtozer.com/favicon-16x16.png'
                />
                <link
                    rel='manifest'
                    href='https://matthewtozer.com/site.webmanifest'
                />
                <link
                    rel='mask-icon'
                    href='https://matthewtozer.com/safari-pinned-tab.svg'
                    color='#eeeeee'
                />
                <meta name='msapplication-TileColor' content='#ffffff' />
                <meta name='theme-color' content='#eeeeee' />

                <link rel='canonical' href='https://matthewtozer.com' />
            </Head>
            <div className={'layout'}>
                <Header />
                <Main />
                <Footer />
                <StructuredData />
            </div>
        </>
    )
}
