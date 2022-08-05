import React from "react";
import Foto from "../images/Foto.png";

const AboutMe = () => {
  return (
    <div>
      <h1>About Me</h1>
      <p>
        Hi! Nice to meet you.
        I am an autonomous person with the ability to deal with difficult situations.
        difficult and always get to the right step of things taking good
        decisions that help me and the people around me.
      </p>
      <img className="foto1" src={Foto} alt="reating" />
      <ul>
        <li>Birthday: 09.08.1998</li>
        <li >Age: 23</li>
        <li >Location: Medellín, Colombia</li>
        <li >Study: Academlo</li>
        <li >Training: Técnico</li>
        <li >Interests: VideoGames and Developer</li>
      </ul>
      <input className="dowload-cv" type="button" value="Download CV"></input>
    </div>
  );
};

export default AboutMe;
