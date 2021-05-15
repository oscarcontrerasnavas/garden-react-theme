import React, { useState, useEffect } from "react";
import { routes } from "../utils/globals";
import { Link } from "react-router-dom";

const Header = () => {
  const [pageOffset, setPageOffset] = useState(window.pageYOffset);
  const [isActive, setIsActive] = useState(false);

  const toggleMenu = () => {
    setIsActive(!isActive);
  };

  useEffect(() => {
    const scrollEvent = window.addEventListener("scroll", () => {
      setPageOffset(window.pageYOffset);
    });
    return () => {
      window.removeEventListener("scroll", scrollEvent);
    };
  }, []);

  return (
    <header className={`main__header ${pageOffset > 34 ? "fixed" : ""}`}>
      <div className="container">
        <div className="row align-items-center">
          <h1>
            Garden<span className="text-primary">.</span>
          </h1>
          <nav className={`main__navbar ${isActive ? "active" : ""}`}>
            <button
              className="navbar__trigger d-md-none"
              onClick={() => toggleMenu()}
            >
              <div className="lines">
                <span className="line"></span>
                <span className="line"></span>
                <span className="line"></span>
              </div>
            </button>
            <ul class="navbar__menu">
              {routes.map((route) => {
                return (
                  <li key={route.id}>
                    <Link to={route.path}>{route.title}</Link>
                  </li>
                );
              })}
            </ul>
          </nav>
          <div className="header__buttons d-flex align-items-center">
            <button className="btn btn-link fs-5 text-dark">
              <i className="bi bi-search"></i>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
