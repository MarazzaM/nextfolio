import React from 'react'
import Card from '../components/Card'
import styles from '../styles/Projects.module.scss'


function Projects() {
    const project = [
        {
            title: "novo Porcelanatos",
            description:"Work for novoPorcelanatos, first professional project.",
            url: "https://novoporcelanatos.com/",
            img: "/8.webp",
            id:"c01"
        },
        {
            title: "Basic template",
            description:"Basic template for ecommerce.",
            url: "https://basic-template-xi.vercel.app",
            img: "/9.webp",
            id:"c02"
        },
        {
            title: "Ñam Ñam",
            description:"Next.js SPA | with contact form that automatically responds to whoever fills it out. PWA installable.",
            url: "https://dog-web-pwa.vercel.app",
            img: "/7.webp",
            id:"c0"
        },
        {
            title: "Tech Design",
            description:"SPA | Community of developers with resources and help to start web development.",
            url: "https://marazzam.github.io/techdesign/",
            img: "/4.webp",
            id:"c1"
        },
        
        {
            title: "S y S",
            description:"SPA | with multiple images loaded in carousels.This was my first simple attempt to use Next.js",
            url: "https://sojasysojitos.vercel.app",
            img: "/6.webp",
            id:"c2"
        },
        {
            title: "Ta'kabrom tattoo",
            description:"Tattoo artist page showcasing her work.",
            url: "https://takabrom-tattoo.web.app",
            img: "/1.webp",
            id:"c3"
        },
        {
            title: "Old portfolio",
            description:"My old portfolio, the first website I created.",
            url: "https://marazzam.github.io/portfolio/",
            img: "/5.webp",
            id:"c4"
        },
       
        {
            title: "Kitty Witty API Call",
            description:"Simple HTML, CSS and JS page to test APIs call",
            url: "https://kitty-witty.web.app",
            img: "/3.webp",
            id:"c5"
        },
        {
            title: "Vuelo del Alma",
            description:"Yoga teacher page using basic bootstrap.",
            url: "https://vuelo-del-alma.web.app",
            img: "/2.webp",
            id:"c6"
        },

    ]
    return (
        <div>
            <h1 className="title">My projects</h1>
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
                <Card
        title={project[7].title}
        description={project[7].description}
        url={project[7].url}
        img={project[7].img}
        id={project[7].id}
        />
       </div>
        </div>
    )
}

export default Projects
