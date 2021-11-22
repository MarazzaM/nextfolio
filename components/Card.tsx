import React from 'react'
import Image from 'next/image'
import styles from '../styles/Card.module.scss'

function Card(props:any) {
    const path = `${props.img}`;
    return (
        <div className={styles.card} id={props.id}>
            <h1>{props.title}</h1>
            <Image
            src= {`${path}`}
            alt="Project"
            width={200}
            height={200}
            />
            <p>{props.description}</p>
            <a href={props.url}>Link</a>
        </div>
    )
}

export default Card
