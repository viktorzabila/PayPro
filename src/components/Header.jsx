import React from "react";
import Dropdown from "react-bootstrap/Dropdown";

import Logo from "../assets/logo.svg";

import "../index.css";

export const Header = () => {
  return (
    <header className="header-bg">
      <div className="container">
        <div className="header-content">
          <img src={Logo} alt="logo" className="mt-2 mb-2" />
          <div className="d-flex mb-header">
            <Dropdown className="header-dropdown-lang me-2">
              <Dropdown.Toggle
                className="header-dropdown-lang"
                variant="secondary"
                id="dropdown-basic"
              >
                English
              </Dropdown.Toggle>

              <Dropdown.Menu className="header-dropdown-lang">
                <Dropdown.Item href="#/action-1">English</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Ukrainian</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Polish</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Dropdown className="">
              <Dropdown.Toggle
                className="header-dropdown-cy"
                variant="secondary"
                id="dropdown-basic"
              >
                USD
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">USD</Dropdown.Item>
                <Dropdown.Item href="#/action-2">UAH</Dropdown.Item>
                <Dropdown.Item href="#/action-3">EU</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
