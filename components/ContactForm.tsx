import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import styles from '../styles/ContactForm.module.scss';

const Result = () => {
  return <p>Your message has been sent!</p>;
};

export const ContactForm = () => {
  const [result, showResult] = useState(false);
  const form = useRef();

  const sendEmail = (e:any) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "gmail",
        "template_uzx5qdt",
        e.target,
        "user_Nb69BSUrJpVhYQVJjPbZp"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
    showResult(true);
  };

  setTimeout(()=>{
    showResult(false);
  }, 5000 )

  return (
    <form action="" onSubmit={sendEmail} className={styles.form}>
        <div className="formWord">
          <h2 className={styles.lets}>Let&apos;s get in touch!</h2>
          <span className={styles.label}>Name</span>
          <br />
          <input type="text" name="fullname" placeholder="Insert name" className={styles.input} required />
          <br />
          <span className={styles.label}>Phone Number</span>
          <br />
          <input type="tel" size={20} name="phone"  placeholder="11-8888-8888" className={styles.input} required />
          <br />
          <span className={styles.label}>Email</span>
          <br />
          <input type="email" placeholder="Insert email" pattern="/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/" name="email" className={styles.input} required />
          <br />
        </div>
        <div className="formWord">
          <span className={styles.label}>Message</span>
          <br />
          <textarea name="message" placeholder="Share your thoughts!" className={styles.textfield} id="" cols={15} rows={5} required></textarea>
          <br />
          <button className={styles.neon}>Submit</button>
          <div className="row">{result ? <Result/> : null}</div>
        </div>
    </form>
  );
};