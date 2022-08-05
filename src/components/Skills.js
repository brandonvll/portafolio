import React from "react";
import invilved from "../images/hand.png";
import resilience from "../images/resilience.png";
import responsive from "../images/responsive.png";
import developer from "../images/developer.png";

const Skills = () => {
  return (
    <section className="cards.section">
      <div className="cards-container">
        <div className="title-skills">
          <h1>Quality Person</h1>
        </div>
        {/*<--card 1--> */}
        <div className="cards">
          <div className="Card">
            <span className="Card-logo">
              <img className="images-skills" src={developer} alt="idea" />
            </span>
            <h3>Developer</h3>
            <p>
              The job of a developer is transform ideas in facts that many
              others can interact with it easyly. Thats my motivation to improve
              my skills.
            </p>
          </div>
          {/*<--card 2--> */}
          <div className="Card">
            <span className="Card-logo">
              <img className="images-skills" src={invilved} alt="idea" />
            </span>
            <h3>involved</h3>
            <p>
              I always look for a way to fulfill the ideas or goals that I set
              for myself, positive thoughts that lead to improving my skills
              every day
            </p>
          </div>
          {/*<--card 3--> */}
          <div className="Card">
            <span className="Card-logo">
              <img className="images-skills" src={responsive} alt="idea" />
            </span>
            <h3>Responsive</h3>
            <p>
              Responsive A web page in the present must be responsive, as a
              person must be responsable of it.
            </p>
          </div>
          {/*<--card 4--> */}
          <div className="Card">
            <span className="Card-logo">
              <img className="images-skills" src={resilience} alt="idea" />
            </span>
            <h3>Resilience</h3>
            <p>
              The way we catch any problem is the way we will resolve it. Almost
              all of the time we can't solve it at first try but the trick is
              never give up.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
