import Link from 'next/link'

import styles from './index.module.css'

export default function ListItemIconLink({
  href,
  serviceName,
  svgViewBox,
  svgPath,
  linkStyle = {},
}) {
  return (
    <li>
      <Link
        href={href}
        style={{ ...linkStyle }}
        target={'_blank'}
        rel={'noopener noreferrer'}
        alt={`Connect with Matthew on ${serviceName}`}
        className={styles.listItemIconLink}
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          viewBox={svgViewBox}
          aria-hidden={true}
          focusable={false}
          className={styles.listItemIconLinkSVG}
        >
          <path fill={'currentColor'} d={svgPath} />
        </svg>
        <span className={styles.srOnly}>
          Connect with Matthew on {serviceName} in a new window
        </span>
      </Link>
    </li>
  )
}
