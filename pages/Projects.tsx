import React from 'react'
import Card from '../components/Card'
import styles from '../styles/Projects.module.scss'


function Projects() {
    const project = [
        {
            title: "Ñam Ñam",
            description:"Next.js SPA | with contact form that automatically responds to whoever fills it out. PWA installable.",
            url: "https://dog-web-pwa.vercel.app",
            img: "/developer.svg",
            id:"c0"
        },
        {
            title: "Tech Design",
            description:"SPA | Community of developers with resources and help to start web development.",
            url: "https://marazzam.github.io/techdesign/",
            img: "/developer.svg",
            id:"c1"
        },
        
        {
            title: "S y S",
            description:"SPA | with multiple images loaded in carousels.This was my first simple attempt to use Next.js",
            url: "https://sojasysojitos.vercel.app",
            img: "/developer.svg",
            id:"c2"
        },
        {
            title: "Ta'kabrom tattoo",
            description:"Tattoo artist page showcasing her work.",
            url: "https://takabrom-tattoo.web.app",
            img: "/developer.svg",
            id:"c3"
        },
        {
            title: "Old portfolio",
            description:"My old portfolio, the first website I created.",
            url: "https://marazzam.github.io/portfolio/",
            img: "/developer.svg",
            id:"c4"
        },
       
        {
            title: "Kitty Witty API Call",
            description:"Simple HTML, CSS and JS page to test APIs call",
            url: "https://kitty-witty.web.app",
            img: "/developer.svg",
            id:"c5"
        },
        {
            title: "Vuelo del Alma",
            description:"Yoga teacher page using basic bootstrap.",
            url: "https://vuelo-del-alma.web.app",
            img: "/developer.svg",
            id:"c6"
        },

    ]
    return (
        <div>
            <h1 className={styles.title}>My projects</h1>
            <p className={styles.text}>Every day this section grows with more and better projects.</p>
       <div className={styles.container}>
       <Card
        title={project[0].title}
        description={project[0].description}
        url={project[0].url}
        img={project[0].img}
        id={project[0].id}
        />
         <Card
        title={project[1].title}
        description={project[1].description}
        url={project[1].url}
        img={project[1].img}
        id={project[1].id}
        />
         <Card
        title={project[2].title}
        description={project[2].description}
        url={project[2].url}
        img={project[2].img}
        id={project[2].id}
        />
         <Card
        title={project[3].title}
        description={project[3].description}
        url={project[3].url}
        img={project[3].img}
        id={project[3].id}
        />
        <Card
        title={project[4].title}
        description={project[4].description}
        url={project[4].url}
        img={project[4].img}
        id={project[4].id}
        />
        <Card
        title={project[5].title}
        description={project[5].description}
        url={project[5].url}
        img={project[5].img}
        id={project[5].id}
        />
        <Card
        title={project[6].title}
        description={project[6].description}
        url={project[6].url}
        img={project[6].img}
        id={project[6].id}
        />
       </div>
        </div>
    )
}

export default Projects
