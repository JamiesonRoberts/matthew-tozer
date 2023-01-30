import { useState, useEffect } from 'react'

import styles from './index.module.css'

export default function Reviews() {
    const [data, setData] = useState(null)
    const [isLoading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        fetch('/api/getReviews')
            .then((res) => res.json())
            .then(setData)
            .catch(() => setData(null))
            .finally(() => setLoading(false))
    }, [])

    if (isLoading)
        return (
            <>
                <hr />
                <h3>What others have said</h3>
                <p>Loading...</p>
            </>
        )

    if (!data) return <></>

    return (
        <>
            <hr />
            <h3>What others have said</h3>
            <div className={styles.quoteBlocks}>
                <blockquote className={styles.quoteBlock}>
                    <p></p>
                </blockquote>
                <blockquote className={styles.quoteBlock}>
                    <p></p>
                </blockquote>
            </div>
        </>
    )
}
