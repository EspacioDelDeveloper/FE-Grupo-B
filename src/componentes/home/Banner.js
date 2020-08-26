import React, { Fragment } from "react";
import "./estilos/banner.css";
import IMAG from "./img/empresa.jpg";

const Banner = () => (
  <Fragment>
    <div className="container-fluid banner">
      <img src={IMAG} className="imagen" alt="logo"></img>
    </div>
    <div className="container flotar">
      <div className="row">
        <div className="col-md-6">
          <div className="container">
            <div className="contenedor-banner">
              <h4 className="titulo-banner">
                Easiest way to fiend you dream job
              </h4>
              <p className="parrafo-banner">
                It is a long established fact that a reader will bi distracted
                by the readable content of page when looking at its layout.
              </p>
              <a href="#" className="btn boton-card">
                Find a Job
              </a>
            </div>
            <hr className="hr-banner"></hr>
          </div>
        </div>
        <div className="col-md-6">
          <div className="container">
            <div className="contenedor-banner">
              <h4 className="titulo-banner">
                Easiest way to fiend you dream job
              </h4>
              <p className="parrafo-banner">
                It is a long established fact that a reader will bi distracted
                by the readable content of page when looking at its layout.
              </p>
              <a href="#" className="btn boton-card2">
                Post a Job
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Fragment>
);

export default Banner;
