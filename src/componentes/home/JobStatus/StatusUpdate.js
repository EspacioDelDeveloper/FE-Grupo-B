import React from "react";

export const StatusUpdate = () => {
  return (
    <>
      <div className="seccion-jobstatus">
        <div className="container mt-5">
          <h3 className="status__title">Job Status Updates</h3>
          <div className="seccion__numeros container">
            <ul className="numeros">
              <li className="lista__numeros">
                <div className="caja__numero">
                  <p className="numero">10</p>
                </div>
                <p className="info-jobs">Jobs Posted</p>
              </li>
              <li className="lista__numeros">
                <div className="caja__numero">
                  <p className="numero">15</p>
                </div>
                <p className="info-jobs">Positions Field</p>
              </li>
              <li className="lista__numeros">
                <div className="caja__numero">
                  <p className="numero">25</p>
                </div>
                <p className="info-jobs">Membres</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};
