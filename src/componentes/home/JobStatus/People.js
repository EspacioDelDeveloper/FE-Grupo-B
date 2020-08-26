import React, { useState } from "react";
import IMAG1 from "../img/invitado1.jpg";
import IMAG2 from "../img/invitado2.jpg";
import IMAG3 from "../img/invitado3.jpg";
import IMAG4 from "../img/invitado4.jpg";
import IMAG5 from "../img/invitado5.jpg";
import { Testimonial } from "./Testimonial";

export const People = () => {
  const [show, setShow] = useState(false);

  return (
    <>
      <div className="seccion_people">
        <div className="container">
          <h3 className="text-center h3-seccionjob">
            What People Say About Us
          </h3>
          <div
            className="seccion__imagenes"
            onClick={() => {
              setShow(!show);
            }}
          >
            <img src={IMAG1} className="img-people" alt="logo"></img>
            <img src={IMAG2} className="img-people" alt="logo"></img>
            <img src={IMAG3} className="img-people" alt="logo"></img>
            <img src={IMAG4} className="img-people" alt="logo"></img>
            <img src={IMAG5} className="img-people" alt="logo"></img>
          </div>
          {show && <Testimonial />}
        </div>
      </div>
    </>
  );
};
