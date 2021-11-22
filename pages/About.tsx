import React from "react";
import styles from "../styles/About.module.scss";
import Image from "next/image";
import { BsCupFill } from "react-icons/bs";
import { SiJavascript } from "react-icons/si";
import { BsStackOverflow } from "react-icons/bs";

function About() {
  return (
    <div>
      <h1 className="title">About Me</h1>
      <div className={styles.container}>
        {/* left column */}
        <div className={styles.first}>
          <div className={styles.border}>
            <Image
              src={"/me.webp"}
              width={100}
              height={100}
              alt="Developer photo"
              className={styles.image}
            />
            <h2 className={styles.name}>Matías</h2>
            <h3 className={styles.subname}>Front end Developer</h3>
            <details className={styles.row}>
              <summary>
                <span>
                  Stack Overflow Expert{" "}
                  <BsStackOverflow className={styles.svg} id="overflow" />
                </span>
              </summary>
              <p>I have managed to master the way of Stack Overflow!</p>
            </details>
            <details className={styles.row}>
              <summary>
                <span className={styles.stack}>
                  Tea lover <BsCupFill className={styles.svg} id="cup" />
                </span>
              </summary>
              <p>A cup of tea is never bad and is useful at any time.</p>
            </details>
            <details className={styles.row}>
              <summary>
                <span className={styles.stack}>
                  Great Joker <SiJavascript className={styles.svg} id="js" />
                </span>
              </summary>
              <p>
                Why was the JavaScript developer sad? Because they didn't Node
                how to Express himself
              </p>
            </details>
            <h3 className={styles.enthusiast}>Learning enthusiast</h3>
            <p>
              I'm always looking for new knowledge, whether it's reading about
              new technologies, developing new innovative ideas, starting new
              projects, and always experimenting with the things I learn. I stay
              informed about new and creative ways of doing things,
              collaborating with the community!
            </p>
          </div>
        </div>
        {/* right column */}
        <div className={styles.second}>
          <div className={styles.text}>
            <div className={styles.about}>
              <p>
                I'm a self taught front end developer, I am comfortable working
                with JavaScript, HTML and CSS to deliver comprehensive customer
                experiences. I 'm also working with ReactJS and aspire to be a
                full MERN developer in the near future. I'm a passionate
                developer, love to work with Next.js and SCSS, always eager to
                use the latest web technologies, looking for opportunities and
                challenges to improve my technical and soft skills.
              </p>
            </div>
            <div className={styles.subgrid}>
              <div className={styles.subfirst}>
                <h2 className={styles.tecno}>Technologies I'm using</h2>
                <div className={styles.containterlist}>
                  <ul className={styles.list}>
                    <li>React.js</li>
                    <li>Next.js</li>
                    <li>JavaScript</li>
                    <li>TypeScript</li>
                    <li>CSS</li>
                    <li>SASS</li>
                    <li>HTML</li>
                    <li>Github</li>
                    <li>Scrum</li>
                    <li>Material UI</li>
                    <li>Bootstrap</li>
                    <li>MongoDb</li>
                  </ul>
                </div>
              </div>
              <div className={styles.subsecond}>
                <h2 className={styles.tecno}>Technologies I'm learning</h2>
                <div className={styles.containerlist}>
                  <ul className={styles.list}>
                    <li>NodeJS</li>
                    <li>Express.js</li>
                    <li>SQL</li>
                    <li>NoSQL</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        
      </div>
      <div className={styles.soft}>
          <h3 className={styles.tecno}>Soft Skills</h3>
          <p>
          ⭐Teamwork⭐
        Patience⭐
        Flexibility⭐
        Focus⭐
        Learning⭐
        Communication⭐
        Accountability⭐
        Proactivity⭐
        Feedback⭐
        Listening⭐
          </p>
        </div>
    </div>
  );
}

export default About;
