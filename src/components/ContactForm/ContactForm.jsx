import React, { useState } from "react";
import Button from "../Button/Button";
import { MdMessage } from "react-icons/md";
import { IoMdCall } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import styles from "./Contact.module.css";

const ContactForm = () => {
  const [name, setName] = useState("Chandu");
  const [email, setEmail] = useState("chbhusan@gmail.com");
  const [message, setMessage] = useState("Hi good morning");

  // Update the state on form submit
  const handleOnSubmitForm = (e) => {
    e.preventDefault(); // Prevent form refresh
    console.log({ name, email, message }); // Log form data (optional)
  };

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.topButton}>
          <div>
            <Button text="Via Support Chat" icon={<MdMessage />} />
            <Button text="Via Call" icon={<IoMdCall />} />
          </div>
          <Button text="Via Email Form" icon={<MdEmail />} isOutline={true} />
        </div>

        <form onSubmit={handleOnSubmitForm}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)} // Update state on change
            placeholder="Your Name"
          />

          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)} // Update state on change
            placeholder="Your Email"
          />

          <label htmlFor="message">Message</label>
          <input
            type="text"
            id="message"
            name="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)} // Update state on change
            placeholder="Your Message"
          />

          <Button text="Submit" />
        </form>
      </div>
      <div className={styles.right}>
        <img src="/images/service.svg" alt="Contact Form Frame" />
      </div>

      {/* Display form state below the form */}
      <div>
        <p>
          <strong>Name:</strong> {name}
        </p>
        <p>
          <strong>Email:</strong> {email}
        </p>
        <p>
          <strong>Message:</strong> {message}
        </p>
      </div>
    </div>
  );
};

export default ContactForm;
