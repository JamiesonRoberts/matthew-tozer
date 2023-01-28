import Head from 'next/head'

import Header from '@/components/Header'
import Main from '@/components/Main'
import Footer from '@/components/Footer'
import StructuredData from '@/components/StructuredData'

function Home({ locationData }) {
    return (
        <>
            <Head>
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

                <link rel='canonical' href='https://matthewtozer.com' />
            </Head>
            <div className={'layout'}>
                <Header />
                <Main />
                <Footer />
            </div>
            <StructuredData locationData={locationData} />
        </>
    )
}

export async function getStaticProps() {
    const res = await fetch(
        'https://maps.googleapis.com/maps/api/place/details/json?place_id=ChIJDyCfdJYfLIgR8LRERkyP-H8&key=AIzaSyDLkmzbUIMAGRi16F2WBjQ21YuqCytQKVM'
    )
    const { result } = await res.json()

    return {
        props: {
            locationData: result,
        },
        // Next.js will attempt to re-generate the page:
        // - When a request comes in
        // - At most once every 10 seconds
        revalidate: 43200, // In seconds
    }
}

export default Home
