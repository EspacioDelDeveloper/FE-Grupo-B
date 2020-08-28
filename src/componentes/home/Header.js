import React, { Fragment } from "react";
import "./estilos/header.css";
import IMG from "./img/envatomarket-logo.jpg";

const Header = () => (
  <Fragment>
    <nav>
      <div className="d-flex flex-column flex-md-row  p-3  shadow-sm barra">
        <a href="index.html" className="my-0 mr-md-auto text-white ">
          <img src={IMG} className="logo" alt="logo"></img>
        </a>
      </div>
    </nav>
    <div className="container-fluid contenedor seccion-redes">
      <ul className="nav justify-content-end container ul-redes">
        <a href="#" target="_blank">
          <i className="fab fa-facebook-square icono"></i>
        </a>
        <a href="#" target="_blank">
          <i className="fab fa-twitter-square icono"></i>
        </a>
        <a href="#" target="_blank">
          <i className="fab fa-google-plus-square icono"></i>
        </a>
        <a href="#" target="_blank">
          <i className="fab fa-youtube icono"></i>
        </a>
        <a href="#" target="_blank">
          <i className="fab fa-linkedin icono"></i>
        </a>
        <li className="nav-item">
          <button type="button" className="btn botones registro">
            Register
          </button>
        </li>
        <li className="nav-item">
          <button type="button" className="btn botones login">
            Login
          </button>
        </li>
      </ul>
      <hr />
    </div>
    <div>
      <nav className="navbar navbar-expand-lg  navbar-light navegacion">
        <a className="nav-link" href="/home">
          <h1 className="h1-navegacion">JobBoard</h1>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item dropdown enlaces-navegacion">
              <a className="nav-link" href="/Home">
                Home
              </a>
            </li>
            <li className="nav-item dropdown enlaces-navegacion">
              <a
                className="nav-link"
                href="#"
                id="navbarDropdownMenuLink"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                About
              </a>
            </li>
            <li className="nav-item dropdown enlaces-navegacion">
              <a
                className="nav-link"
                href="#"
                id="navbarDropdownMenuLink"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Projects
              </a>
            </li>
            <li className="nav-item dropdown enlaces-navegacion">
              <a
                className="nav-link"
                href="#"
                id="navbarDropdownMenuLink"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Blog
              </a>
            </li>
            <li className="nav-item dropdown enlaces-navegacion">
              <a
                className="nav-link"
                href="#"
                id="navbarDropdownMenuLink"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  </Fragment>
);

export default Header;
