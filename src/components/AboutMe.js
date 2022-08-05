import React from "react";
import birthday from "../images/birthday.png";
import age from "../images/age.png";
import location from "../images/location.png";
import study from "../images/academy.png";
import traning from "../images/book.png";
import interesting from "../images/game.png";

const AboutMe = () => {
  return (
    <div className="about">
      <div className="ab50">
        <div className="titleabou">
          <h1>About Me</h1>
          <span class="title-bg">Resume</span>
        </div>
        <div className="Textoabout">
          <p>
            Hi! Nice to meet you. I am an autonomous person with the ability to
            deal with difficult situations. difficult and always get to the
            right step of things taking good decisions that help me and the
            people around me.
            <br />
          </p>

          <ul>
            <li>
              <img src={birthday} alt="" />
              Birthday: 09.08.1998
            </li>
            <li>
              <img src={age} alt="" />
              Age: 23
            </li>
            <li>
              <img src={location} alt="" />
              Location: Medellín, Colombia
            </li>
            <li>
              <img src={study} alt="" />
              Study: Academlo
            </li>
            <li>
              <img src={traning} alt="" />
              Training: Técnico
            </li>
            <li>
              <img src={interesting} alt="" />
              Interests: VideoGames and Developer
            </li>
          </ul>
        </div>
      </div>
      <div className="ab50">
        <h1 className="title-skills">Levels skills</h1>
        <div class="box-stats with-margin">
          <h3 class="poppins-font position-relative">40%</h3>
          <p class="open-sans-font m-0 position-relative text-uppercase">
            react <br />
            <span class="d-block">experience</span>
          </p>
        </div>
        <div class="box-stats with-margin">
          <h3 class="poppins-font position-relative">55%</h3>
          <p class="open-sans-font m-0 position-relative text-uppercase">
            Node.js <br /> <span class="d-block">experience</span>
          </p>
        </div>
        <div class="box-stats with-margin">
          <h3 class="poppins-font position-relative">70%</h3>
          <p class="open-sans-font m-0 position-relative text-uppercase">
            Javascript <br /> <span class="d-block">experience</span>
          </p>
        </div>
        <div class="box-stats with-margin">
          <h3 class="poppins-font position-relative">80%</h3>
          <p class="open-sans-font m-0 position-relative text-uppercase">
            HTML and CSS <span class="d-block">experience</span>
          </p>
        </div>
        <div className="Boton">
          <input
            className="dowload-cv"
            type="button"
            value="Download CV"
          ></input>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
