import React from "react";
import coping from "../images/coping.gif";

const Home = () => {
  return (
    <div className="Banner">
      <div className="BlockText">
        <h1>I´m Brandon Stiven</h1>
        <p>Development Web Full Stack </p>
        <img src={coping} alt="reating" />
      </div>
    </div>
  );
};

export default Home;
