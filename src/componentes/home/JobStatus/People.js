import React, { useState } from "react";
import { Testimonial } from "./Testimonial";
import { data } from "./data";

export const People = () => {
  const [show, setShow] = useState(false);
  const info = data;
  const [userSelected, setUserSelected] = useState({
    id: "",
    nombre: "",
    datos: "",
  });

  return (
    <>
      <div className="seccion_people">
        <div className="container">
          <h3 className="text-center h3-seccionjob">
            What People Say About Us
          </h3>
          <div className="seccion__imagenes">
            {info.map((inf) => (
              <div>
                <img
                  key={inf.id}
                  src={inf.imagen}
                  className="img-people"
                  alt="logo"
                  onClick={() => {
                    setShow(true);
                    setUserSelected({
                      nombre: inf.nombre,
                      datos: inf.datos,
                    });
                  }}
                />
              </div>
            ))}
          </div>

          {show && <Testimonial userSelected={userSelected} />}
        </div>
      </div>
    </>
  );
};
