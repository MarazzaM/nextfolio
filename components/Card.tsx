import React from 'react'
import Image from 'next/image'
import styles from '../styles/Card.module.scss'

function Card(props:any) {
    const path = `${props.img}`;
    return (
        <div className={styles.card} id={props.id}>
            <h1 className={styles.title}>{props.title}</h1>
            <a href={props.url} rel="noreferrer" target="_blank">
            <Image
            src= {`${path}`}
            alt="Project"
            width={200}
            height={200}
            className={styles.image}
            />
            </a>
           <p className={styles.description}>{props.description}</p>
            <a href={props.url} rel="noreferrer" target="_blank" className={styles.button}>Link</a>
        </div>
    )
}

export default Card
