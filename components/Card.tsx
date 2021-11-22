import React from 'react'
import Image from 'next/image'

function Card(props:any) {
    const path = `${props.img}`;
    return (
        <div>
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
