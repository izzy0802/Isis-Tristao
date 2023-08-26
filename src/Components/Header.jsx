/**
 * Header component
 *
 * Top navigation bar for your site. Set to remain visible as the
 * user scrolls so that they can constantly reach any part of your page.
 */
import React from "react";

const Header = () => {
  return (
    <div
      style={{
        position: "fixed",
        display: "flex",
        justifyContent: "center",
        //gap: "2rem",
        background: "#FFFFFF",
        padding: "1rem",
        top: 0,
        width: "100%",
        zIndex: 10,
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "2rem",
          background: "#FFFFFF",
          width: "40%",
          zIndex: 10,
          float: "right",
        }}
      >
        <a href="#home">Resumo</a>
        <a href="#about">Skills</a>
        <a href="#portfolio">Projetos</a>
        <a href="#footer">Contato</a>
      </div>
    </div>
  );
};

export default Header;
