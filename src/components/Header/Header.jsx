import React, { useState } from "react";
import "./Header.css";

const Header = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes manejar la búsqueda, como enviar el término de búsqueda a una API o filtrar datos localmente.
    console.log(`Buscando: ${searchTerm}`);
  };

  // URL de la foto de perfil del usuario (si existe)
  const userProfileImage = "ruta/a/la/foto-de-perfil.jpg"; // Reemplaza con la URL real

  // URL de la imagen por defecto
  const defaultImage = "ruta/a/la/imagen-por-defecto.jpg"; // Reemplaza con la URL de la imagen por defecto

  // Verifica si el usuario tiene una foto de perfil
  const hasProfileImage = Boolean(userProfileImage);

  // Utiliza la URL de la foto de perfil si existe, de lo contrario, utiliza la imagen por defecto
  const imageUrl = hasProfileImage ? userProfileImage : defaultImage;

  return (
    <header className="header">
      <form className="search-form" onSubmit={handleSearchSubmit}>
        <input
          type="search"
          className="search-input"
          placeholder="Buscar"
          value={searchTerm}
          onChange={handleSearchChange}
        />
        <button type="submit" className="search-button">
          🔍
        </button>
      </form>
      <div className="profile-circle">
        <img src={imageUrl} alt="Foto de perfil" className="profile-image" />
      </div>
    </header>
  );
};

export default Header;
