import React from 'react'
import styles from './CodeBar.module.css'

export default function CodeBar() {
  return (
    <div className={styles.codebar}>
        <nav className={styles.tab}>
            <button className={styles.item}>
                HTML
            </button>
            <button className={`${styles.item} ${styles.active}`}>
                CSS
            </button>
            <button className={styles.item}>
                JS
            </button>
        </nav>
    </div>
  )
}
