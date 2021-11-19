import React from 'react'
import styles from  '../styles/Layout.module.scss';

function Layout({children}:any) {
    return (
        <>
        <div className={styles.container}>
            <main className={styles.main}>
                {children}
            </main>
        </div>
        </>
    )
}

export default Layout
