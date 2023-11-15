import React from "react";
import "./Sidebar.css";
import homeIcon from "./home.png";
import configIcon from "./config.png";
import perfilIcon from "./perfil.png";
import principalIcon from "./principal.png";
import ranksIcon from "./ranks.png";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <h1>Corluss</h1>
      </div>
      <ul className="sidebar-menu">
        <li>
          <a href="#home">
            <img src={homeIcon} alt="Home" /> Principal
          </a>
        </li>
        <li>
          <a href="#menu">
            <img src={principalIcon} alt="Menu" /> Menú
          </a>
        </li>
        <li>
          <a href="#profile">
            <img src={perfilIcon} alt="Profile" /> Perfil
          </a>
        </li>
        <li>
          <a href="#ranking">
            <img src={ranksIcon} alt="Ranking" /> Rankings
          </a>
        </li>
        <li>
          <a href="#settings">
            <img src={configIcon} alt="Settings" /> Configuración
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
