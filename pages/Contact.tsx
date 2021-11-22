import React from 'react'
import styles from '../styles/Contact.module.scss'
import { ContactForm } from '../components/ContactForm';
import Social from '../components/Social';
// @ts-ignore
import { Typewriter } from 'typewriting-react';

function Contact() {
    return (
        <div>
            <h1 className="title title-contact">Contact Me</h1>
            &#8205;    <Typewriter words={['Do you want to work together?', 'Or maybe you need help?', 'Write me and we will be in touch soon', 'And remember', 'Everything is possible.']} 
      typingSpeed={100}
      erasingSpeed={100}
      cursorClassName={styles.cursor}
      loop={false}
      nextWordDelay={1100}
      className={styles.type}
      
      /> 
        <p className={styles.text}>You can contact me on my social networks or leave a message through the form.</p>
        <Social />
        <ContactForm />
        </div>
    )
}

export default Contact
