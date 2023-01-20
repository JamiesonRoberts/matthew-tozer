import Link from 'next/link'

import styles from './index.module.css'

export default function Main() {
    return (
        <main className={styles.main}>
            <section className={styles.section}>
                <h2>About</h2>
                <p>
                    Matthew Tozer currently resides in Woodstock, Ontario where
                    he works as a freelance composer, sessional instructor, and
                    operates a private studio. He holds a PhD in Music
                    Composition from the University of Western Ontario and is a
                    member of the{' '}
                    <Link
                        href={'https://cec.sonus.ca'}
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
                        href={'ttps://www.composition.org/current-members/'}
                        target={'_blank'}
                        rel={'noopener noreferrer'}
                    >
                        CLC
                    </Link>{' '}
                    and a{' '}
                    <Link
                        href={'https://www.ormta.org'}
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
                    collaborative process. His compositions have been
                    work-shopped and/or performed by organizations and groups
                    including: The Toronto Symphony Orchestra, TorQ Percussion,
                    The Bozzini String Quartet, The Erato Ensemble, The
                    Strathcona Quartet, The Vancouver Chamber Choir, The Aventa
                    Ensemble, Soundstreams Canada, The Madawaksa String Quartet,
                    and Pacific Opera Victoria.
                </p>
            </section>
            <section className={styles.section}>
                <h2>Lessons</h2>
                <p>
                    Matthew Tozer holds a PhD in Music from the University of
                    Western Ontario and was named Runner up in the London
                    Community News 2015 Reader&apos;s Choice Awards for Music
                    Schools.
                </p>
                <p>Matthew is always looking to add students to his studio.</p>
                <p>
                    Lessons available in: Classical Piano, Pop/Rock Piano,
                    Trumpet, Music History, Music Theory and Composition.
                </p>
                <p className='center'>
                    <strong>
                        Lesson are available in your home or in his studio.
                    </strong>
                </p>
                <p className='center'>
                    <strong>
                        Please Call{' '}
                        <a href='tel:5198577942' title='Call Matthew'>
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
            </section>
        </main>
    )
}
