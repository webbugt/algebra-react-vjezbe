// import React from 'react'
import { Link } from "react-router-dom";

const headerLinks = [
  {
    title: "Naslovna",
    href: "/",
  },
  {
    title: "O nama",
    href: "/onama",
  },
  {
    title: "Kontakt",
    href: "/kontakt",
  },
  {
    title: "Primjeri",
    href: "/primjeri",
  },
  {
    title: "Forme",
    href: "/forme"
  },
  {
    title: "Context",
    href: "/context"
  }
];

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
          flexWrap: "wrap",
          gap: 14,
          justifyContent: "center",
          padding: 10,
          background: "white",
        }}
      >
        {headerLinks.map((link) => {
          const { title, href } = link;
          return (
            <Link
              key={href}
              to={href}
              title={title}
              style={{
                fontWeight: "bold",
              }}
            >
              {title}
            </Link>
          );
        })}
      </header>
    </>
  );
}

export default Header;
