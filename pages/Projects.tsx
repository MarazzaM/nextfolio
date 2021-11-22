import React from 'react'
import Card from '../components/Card'

function Projects() {
    const project = [
        {
            title: "Tech Design",
            description:"lorem ipsum",
            url: "https://marazzam.github.io/techdesign/",
            img: "/developer.svg",
        },
        {
            title: "Sojas y Sojitos",
            description:"lorem ipsum",
            url: "https://sojasysojitos.vercel.app",
            img: "/developer.svg",
        },
        {
            title: "Sojas y Sojitos",
            description:"lorem ipsum",
            url: "https://sojasysojitos.vercel.app",
            img: "/developer.svg",
        },
        {
            title: "Ta'kabrom tattoo",
            description:"lorem ipsum",
            url: "https://takabrom-tattoo.web.app",
            img: "/developer.svg",
        },
        {
            title: "Old portfolio",
            description:"lorem ipsum",
            url: "marazzam.github.io/portfolio/",
            img: "/developer.svg",
        },
        {
            title: "Vuelo del Alma",
            description:"lorem ipsum",
            url: "https://vuelo-del-alma.web.app",
            img: "/../public/developer.svg",
        },

    ]
    return (
        <div>
            <h1>Lorem ipsum</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, impedit.</p>
        <Card
        title={project[0].title}
        description={project[0].description}
        url={project[0].url}
        img={project[0].img}
        />
        </div>
    )
}

export default Projects
