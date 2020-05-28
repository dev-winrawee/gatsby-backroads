import React from 'react'
import Title from "../Title";
import styles from "../../css/contact.module.css";

const Contact = () => {
  return (
    <section className={styles.contact}>
        <Title title="Contact" subtitle="us" />
      <div className={styles.center}>
        {/* <form className={styles.form}>
            <div>
                <label htmlFor="name">name</label>
                <input type="text" name="name" id="name" placeholder="Weerawin" className={styles.formControl} />
            </div>
            <div>
                <label htmlFor="email">email</label>
                <input type="email" name="email" id="email" placeholder="email@email.com" className={styles.formControl} />
            </div>
            <div>
                 <label htmlFor="message">message</label>
                <textarea name="message" id="message" rows="10" placeholder="write message here" className={styles.formControl} />
            </div>
            <div>
                <input type="submit" value="submit here" className={styles.submit} />
            </div>
        </form> */}
      <iframe title= "contact" src="https://docs.google.com/forms/d/e/1FAIpQLSemBVxuryG1z7RP8t1BhYR_ioj90iVMJZQgKLpK9-BpEsJL8g/viewform?embedded=true" width="740" height="844" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>

      </div>
    </section>


  )
}

export default Contact
