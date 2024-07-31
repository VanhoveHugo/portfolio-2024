'use strict'
import styles from '../styles/projets.module.css'

export default function Layout({ children }) {
    return (
        <div className={styles.sectionContainer} >
            {children}
        </div>
    )
}
