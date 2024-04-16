// import React from 'react'
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <div
        style={{
          marginBottom: 80,
        }}
      />
      <header
        style={{
          fontSize: 25,
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          display: "flex",
          gap: 14,
          justifyContent: "center",
          padding: 10,
          background: "white"
        }}
      >
        <Link to="/">Naslovna</Link>
        <Link to="/onama">O nama</Link>
        <Link to="/kontakt">Kontakt</Link>
      </header>
    </>
  );
}

export default Header;
