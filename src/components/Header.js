import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import styled from "styled-components";

const Header = () => {
  const [pageOffset, setPageOffset] = useState(window.pageYOffset);

  useEffect(() => {
    let scrollEvent = window.addEventListener("scroll", () => {
      setPageOffset(window.pageYOffset);
    });
    return () => window.removeEventListener("scroll", scrollEvent);
  }, []);

  return (
    <Wrapper className={`main-header ${pageOffset > 0 ? "fixed" : null}`}>
      <div className="container">
        <div className="row justify-content-between">
          <h1 className={`logo d-md-block ${pageOffset > 0 ? "d-none" : ""}`}>
            Garden<span className="text-primary">.</span>
          </h1>
          <Navbar />
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.header`
  transition: all 300ms ease-in;

  &.fixed {
    background-color: white;
    box-shadow: 0px 0 15px rgba(0, 0, 0, 0.1);
    margin: 0;
    padding: 0;
    position: fixed;
    width: 100%;
    top: 0;

    .row {
      align-items: center;
    }

    h1.logo {
      width: 20%;
      margin: 0;
    }

    nav {
      width: 100%;

      @media (min-width: 540px) {
        width: 80%;
      }
    }
  }
`;

export default Header;
