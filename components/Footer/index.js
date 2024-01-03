import styles from './index.module.css'

export default function Footer({ gridArea }) {
  return (
    <footer className={styles.footer} style={{ gridArea }}>
      <p>&copy;2023 Matthew Tozer. All Rights Reserved.</p>
    </footer>
  )
}
