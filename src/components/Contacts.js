import "../styles/contacts.css";
import React, { useState } from "react";
import emailjs from "@emailjs/browser";

const Contacts = () => {
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [loading, setLoading] = useState(false);

  const sendEmail = async (e) => {
    e.preventDefault();

    console.log("sending...");

    try {
      setError(null);
      setLoading(true);
      await emailjs.sendForm(
        "service_2e61c8i",
        "template_yw4hdf8",
        e.target,
        "o8droO4B2miGlUWSI"
      );
      setLoading(false);
      setSuccess("Email successfully sent");
    } catch (err) {
      setLoading(false);
      setSuccess(null);
      setError("Something went wrong. Try again");
    }
  };

  return (
    <section className="contact-section" id="contacts">
      <h2>CONTACTS</h2>

      <p>
        Feel free to Contact me by submitting the form below and I will get back
        to you as soon as possible
      </p>

      {error && !success && !loading && (
        <p
          style={{
            padding: "10px",
            borderRadius: "8px",
            backgroundColor: "red",
            color: "white",
          }}
        >
          {error}
        </p>
      )}
      {success && !error && !loading && (
        <p
          style={{
            padding: "10px",
            borderRadius: "8px",
            backgroundColor: "green",
            color: "white",
          }}
        >
          {success}
        </p>
      )}
      {loading && (
        <p
          style={{
            padding: "10px",
            borderRadius: "8px",
            backgroundColor: "orange",
            color: "white",
          }}
        >
          Loading...
        </p>
      )}

      <form onSubmit={(e) => sendEmail(e)}>
        <label htmlFor="email_from">Your Email:</label>
        <input
          type="text"
          id="email_from"
          name="email_from"
          placeholder="Email address"
        />

        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          name="message"
          placeholder="Enter Your Message"
        />

        <button type="submit">SUBMIT</button>
      </form>
    </section>
  );
};

export default Contacts;
