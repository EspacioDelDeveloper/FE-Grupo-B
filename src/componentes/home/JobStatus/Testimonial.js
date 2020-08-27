import React from "react";

export const Testimonial = ({ userSelected }) => {
  return (
    <div className="caja__testimonial">
      <div className="seccion__testimonial container">
        <p className="testimonial">
          {userSelected.datos}
          <p>{userSelected.nombre}</p>
        </p>
      </div>
    </div>
  );
};
