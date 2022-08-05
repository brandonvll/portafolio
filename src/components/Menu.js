import React from "react";

const Menu = ({ Home, AboutMe, Skills, Briefcase, Contact }) => {
  return (
    <div className="encabezado">
      <ul className="navbar-nav">
        <li className="nav-item orange">{Home}</li>
        <li className="nav-item">{AboutMe}</li>
        <li className="nav-item">{Skills}</li>
        <li className="nav-item">{Briefcase}</li>
        <li className="nav-item">{Contact}</li>
      </ul>
    </div>
  );
};

export default Menu;
