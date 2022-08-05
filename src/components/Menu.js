import React from "react";
import Logo from "../images/Logo.png";

const Menu = ({ Home, AboutMe, Skills, Briefcase, Contact }) => {
  return (
    <div className="encabezado">
      <div className="encabe">
        <div class="Logo">
          <img src={Logo} alt="" />
        </div>
        <ul className="navbar-nav">
          <li className="nav-item orange">{Home}</li>
          <li className="nav-item">{AboutMe}</li>
          <li className="nav-item">{Skills}</li>
          <li className="nav-item">{Briefcase}</li>
          <li className="nav-item">{Contact}</li>
        </ul>
      </div>
    </div>
  );
};

export default Menu;
