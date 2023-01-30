import { useState, useEffect } from 'react'

import styles from './index.module.css'

export default function Reviews() {
    const [data, setData] = useState(null)
    const [isLoading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)

        const controller = new AbortController()
        const id = setTimeout(() => controller.abort(), 1000)

        fetch(
            `${process.env.NEXT_PUBLIC_API_URL}&key=${process.env.NEXT_PUBLIC_API_KEY}`,
            { signal: controller.signal }
        )
            .then((res) => res.json())
            .then((data) => {
                setData(data)
                setLoading(false)
            })
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
