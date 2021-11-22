import React from 'react'
import styles from '../styles/Home.module.scss'
//ICONS
import { BsLinkedin } from 'react-icons/bs';
import { BsGithub } from 'react-icons/bs';
import { BsGoogle } from 'react-icons/bs';

function Social() {
    return (
        <div className={styles.spheres}>
      <span className={styles.linkedin}><a href="https://www.linkedin.com/in/mat%C3%ADas-edgardo-marazza-cantero" target="_blank" rel=" noreferrer"><BsLinkedin/></a></span>
      <span className={styles.github}><a href="https://github.com/MarazzaM"  target="_blank" rel="noreferrer"><BsGithub/></a></span>
      <span className={styles.mail}><a href="mailto:memarazza@gmail.com" rel=" noreferrer" ><BsGoogle/></a></span>
    </div>
    )
}

export default Social
