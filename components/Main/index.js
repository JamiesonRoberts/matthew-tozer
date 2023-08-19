import Link from 'next/link'

import Reviews from '@/components/Reviews'

import styles from './index.module.css'

export default function Main({ reviews }) {
    return (
        <main className={styles.main}>
            <section className={styles.section}>
                <h2>Lessons</h2>
                <p>
                    Matthew Tozer holds a PhD in Music from the University of
                    Western Ontario and is always looking to add students to his
                    studio. Matthew Tozer teaches students in Woodstock, London,
                    and other towns in the surrounding Oxford and Middlesex
                    counties.
                </p>
                <p>
                    Lessons available in: Piano, Music History, Music Theory and
                    Composition.
                </p>
                <p>
                    <strong>Lesson are available in your home or online</strong>
                </p>
                <p>
                    <strong>
                        Please Call/Text{' '}
                        <a href='tel:5198577942' title='Call or Text Matthew'>
                            519-857-7942
                        </a>{' '}
                        or{' '}
                        <a
                            href='mailto:matttozer@gmail.com'
                            title='Email Matthew'
                        >
                            email Matthew
                        </a>{' '}
                        for rates and availability.
                    </strong>
                </p>
                <Reviews reviews={reviews} />
            </section>
            <section className={styles.section}>
                <h2>About</h2>
                <p>
                    Matthew Tozer currently resides in Woodstock, Ontario where
                    he works as a freelance composer, sessional instructor, and
                    operates a private studio. He holds a PhD in Music
                    Composition from the University of Western Ontario and is a
                    member of the{' '}
                    <Link
                        href={'https://cec.sonus.ca/'}
                        target={'_blank'}
                        rel={'noopener noreferrer'}
                    >
                        CEC
                    </Link>
                    ,{' '}
                    <Link
                        href={
                            'https://collections.cmccanada.org/final/Portal/Composer-Showcase.aspx?component=AAIL&record=7578ed3f-aa26-48dd-ac89-6395b291eca1'
                        }
                        target={'_blank'}
                        rel={'noopener noreferrer'}
                    >
                        CMC,
                    </Link>{' '}
                    <Link
                        href={'https://www.composition.org/current-members/'}
                        target={'_blank'}
                        rel={'noopener noreferrer'}
                    >
                        CLC
                    </Link>{' '}
                    and a{' '}
                    <Link
                        href={'https://www.ormta.org/'}
                        target={'_blank'}
                        rel={'noopener noreferrer'}
                    >
                        ORMTA
                    </Link>
                    . His dissertation involved the hybridization of the
                    traditional baroque dance movements with the classical
                    concerto featuring the 17th century instrument, the Viola da
                    Gamba in combination with the string orchestra. Matthew is
                    also an advocate of strong music education and has
                    participated in many university level instructional courses.
                </p>
                <p>
                    Described as &apos;highly lyrical&apos; and &apos;rich in
                    harmony&apos; Matthew’s music has been performed across
                    Canada, the United States, and Europe. Matthew is actively
                    involved in the creation of new work through the
                    collaborative process. His compositions have been programmed
                    in festivals and work-shopped and/or performed by
                    organizations and groups including: The Toronto Symphony
                    Orchestra, Four Corners Ensemble, Soundscape Music Festival,
                    TorQ Percussion, The Bozzini String Quartet, Space City New
                    Music Festival, The Erato Ensemble, The Strathcona Quartet,
                    Domaine Forget, The Vancouver Chamber Choir, The Aventa
                    Ensemble, Soundstreams Canada, Charlotte New Music Festival,
                    The Madawaksa String Quartet, Soundstreams Festival, and
                    Pacific Opera Victoria.
                </p>
            </section>
        </main>
    )
}
