import React, { Fragment } from 'react';
import "./estilos/buscador.css"


const Buscador = () => (
    <Fragment>
        <div className="seccion">
            <h3 className="h3-buscador">Find a Job</h3>
            <div className="container seccion-buscador">
                <div className="row">
                    <div className="col-md-7 col-sm-12">
                        <h5 className="h5-buscador">Search</h5>
                        <form className="form-inline search">
                            <i className="fas fa-search" aria-hidden="true"></i>
                            <input className="form-control form-control-sm ml-3 w-75 input-search" type="text" placeholder="Keywords (it enginer, shop mnager, hr manager...)"
                            aria-label="Search"/>
                        </form>
                    </div>
                    <div className="col-md-5 col-sm-12">
                        <h5 className="h5-buscador">Location</h5>
                        <form className="form-inline search">
                            <i className="fas fa-map-marker-alt"></i>
                            <input className="form-control form-control-sm ml-3 w-75 input-search" type="text" placeholder="Buenos Aires, Bogota, Madrid..."
                            aria-label="Search"/>
                        </form>
                        <button type="button" className="ml-auto btn boton-buscador">Search</button>
                    </div>
                </div>
            </div>
        </div>
    </Fragment>
);

export default Buscador;