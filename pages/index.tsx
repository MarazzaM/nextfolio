import type { NextPage } from "next";
import styles from '../styles/Home.module.scss';
import Image from 'next/image';
import Social from "../components/Social";

// @ts-ignore
import { Typewriter } from 'typewriting-react';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
    <div className={styles.hero}>
      <h1>Matías Marazza</h1>
      <span className={styles.type}>
      &#128126;
      <Typewriter words={['Front End Developer.', 'React Developer.', 'UI/UX Developer.', 'Student.', 'Next.js enthusiast.']} 
      typingSpeed={150}
      erasingSpeed={100}
      cursorClassName={styles.cursor}
      /> 
      </span>
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
        projects. Always ready to learn and take on new challenges.
      </p>
      <Social />
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
      Lets work together for a better future.
      </span>
    </div>
    </div>
  );
};

export default Home;
