import React from "react";

const Contact = () => {
  return (
    <div class="contact-container">
      <article class="contact-title">
        <h1 className="title-contact">Contact me</h1>
      </article>
      <p className="p-contact">Thank you for viewing my work, see you soon</p>
      <article className="contact-form-container">
        <form className="contact-form">
          <label for="name">Complete Name</label>
          <input
            className="contact-section .contact-container .contact-form-container .contact-form"
            type="text"
            id="name"
            name="name"
            placeholder="Brandon Villa"
          />
          <br />
          <label for="email">Email</label>
          <input
            className="contact-section .contact-container .contact-form-container .contact-form"
            type="email"
            id="email"
            name="email"
            placeholder="brandonvilla@gmail.com"
          />
          <br />
          <label for="subject">Subject</label>
          <input
            className="contact-section .contact-container .contact-form-container .contact-form"
            type="text"
            id="subject"
            name="subject"
            placeholder="Project propose..."
          />
          <br />
          <label className="" for="message">
            Message
          </label>
          <textarea
            name="message"
            id="message"
            cols="27"
            rows="5"
            placeholder="Your Message here..."
          ></textarea>
          <br />
          <button className=".contact-section .contact-container .contact-form-container .contact-form button" type="submit">Send Message</button>
        </form>
      </article>
    </div>
  );
};

export default Contact;
