import type { NextPage } from "next";
import styles from '../styles/Home.module.scss';
import Image from 'next/image';
//ICONS
import { BsLinkedin } from 'react-icons/bs';
import { BsGithub } from 'react-icons/bs';
import { BsGoogle } from 'react-icons/bs';
// @ts-ignore
import { Typewriter } from 'typewriting-react';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
    <div className={styles.hero}>
      <h1>Matías Marazza</h1>
      <Typewriter words={['Front End Developer.', 'React Developer.', 'UI/UX Developer.', 'Student.', 'Next.js enthusiast.']} 
      typingSpeed={150}
      erasingSpeed={100}
      className={styles.type}
      cursorClassName={styles.cursor}
      /> 
      <br />
      {/* prevent the page from jumping   */}
      <div className={styles.img}>
      <Image 
      src={"/developer.svg"}
      alt="Developer vector"
      width={300}
      height={300}
      />
      </div>
      <p className={styles.text}>
        An aspiring developer, who loves to bring imagination and creativity to
        projects. Always ready to learn and take on new challenges
      </p>
      <div className={styles.spheres}>
      <span className={styles.linkedin}><a href="https://www.linkedin.com/in/mat%C3%ADas-edgardo-marazza-cantero" target="_blank" rel=" noreferrer"><BsLinkedin/></a></span>
      <span className={styles.github}><a href="https://github.com/MarazzaM"  target="_blank" rel="noreferrer"><BsGithub/></a></span>
      <span className={styles.mail}><a href="mailto:memarazza@gmail.com" rel=" noreferrer" ><BsGoogle/></a></span>
    </div>
    <a href="/marazza-cv.pdf" download className={styles.neon}> See my Resume </a>
    </div>
    
    <div className={styles.imgdesktop}>
    <Image 
      src={"/developer.svg"}
      alt="Developer vector"
      width={500}
      height={500}
      />
      <br />
      <span className={styles.text}>
      Let's work together for a better future
      </span>
    </div>
    </div>
  );
};

export default Home;
