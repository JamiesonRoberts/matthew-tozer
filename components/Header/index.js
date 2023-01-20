import Image from 'next/image'

import styles from './index.module.css'

import profilePic from '@/public/mtozerheadshot.jpg'

export default function Header(props) {
    return (
        <header className={styles.header}>
            <h1 className={styles.title}>
                Matthew Tozer <span>Composer &amp; Educator</span>
            </h1>
            <div className={styles.featureImageAndLinks}>
                <Image
                    src={profilePic}
                    className={styles.headshot}
                    width={270}
                    height={337}
                    priority
                />
                <div className={styles.spacer} />
            </div>
        </header>
    )
}
