import React from "react";

const Contact = () => {
  return (
    <div>
      <h1>Contact</h1>
      <p>Here you can find the way to talk to me, see you soon...</p>
      <label for="name"> Complete Name </label>
      <input
        type="text"
        id="name"
        placeholder="Brandon Stiven Zapata Villa"
        required
      />
      <label for="email"> Email </label>
      <input
        type="text"
        id="name"
        placeholder="brandonlindo@gmail.com"
        required
      />
      <label for="subject"> Subject</label>
      <input type="text" id="name" placeholder="Project..." required />
      <br />
      <label for="message"> Message </label>
      <textarea
        name="message"
        id="message"
        cols={27}
        rows={5}
        placeholder="Your message here..."
      ></textarea>
      <input className="dowload-cv" type="button" value="Send message"></input>
    </div>
  );
};

export default Contact;
