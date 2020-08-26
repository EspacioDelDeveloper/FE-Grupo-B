import React, { Fragment, useState } from 'react';
import "./estilos/trabajos.css"
import { v4 as uuidv4 } from 'uuid';
import { Button, Modal } from 'react-bootstrap';

 


const Trabajos= () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const datos = [
        { id: uuidv4(), name: 'web developer', descripcion:"Lorem impsupt lorem impsupt ", ubicacion: 'CABA', disponibilidad: "full-time" },
        { id: uuidv4(), name: 'devops', descripcion:"Lorem impsupt lorem impsupt", ubicacion: 'Cordoba', disponibilidad: "full-time" },
        { id: uuidv4(), name: 'backend developer', descripcion:"Lorem impsupt lorem impsupt", ubicacion: 'Mendoza', disponibilidad: "full-time" },
        { id: uuidv4(), name: 'web developer', descripcion:"Lorem impsupt lorem impsupt", ubicacion: 'CABA', disponibilidad: "full-time" },
        { id: uuidv4(), name: 'devops', descripcion:"Lorem impsupt lorem impsupt", ubicacion: 'Cordoba', disponibilidad: "full-time" },
        { id: uuidv4(), name: 'backend developer', descripcion:"Lorem impsupt lorem impsupt", ubicacion: 'Mendoza', disponibilidad: "full-time" },
        { id: uuidv4(), name: 'backend developer', descripcion:"Lorem impsupt lorem impsupt", ubicacion: 'Mendoza', disponibilidad: "full-time" },
        { id: uuidv4(), name: 'web developer', descripcion:"Lorem impsupt lorem impsupt", ubicacion: 'CABA', disponibilidad: "full-time" },
        { id: uuidv4(), name: 'devops', descripcion:"Lorem impsupt lorem impsupt", ubicacion: 'Cordoba', disponibilidad: "full-time" }
    ]

    return(
        <Fragment>
            <div className="container titulo-trabajo">
                <i className="fas fa-briefcase icono-trabajo"></i><h3 className="h3-trabajos">Recent Jobs</h3>
            </div>
            <div className="container seccion-trabajos">
                <div className="row">
                    <div className="col-md-9 col-sm-12">
                        <div className="table-responsive">
                        <table className="tabla"> 
                            <thead>
                                <tr>
                                <th>Empleo</th>
                                <th>Ubicacion</th>
                                <th>Disponibilidad</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    datos.length > 0 ?
                                    datos.map(dato =>(
                                        <tr key={dato.id}>
                                            <td>  
                                                <Button variant="success" onClick={handleShow}>
                                                    open
                                                </Button>

                                                <Modal show={show} onHide={handleClose}>
                                                    <Modal.Header closeButton>
                                                    <Modal.Title>Enviar Cv</Modal.Title>
                                                    </Modal.Header>
                                                    <Modal.Body>
                                                        <div>
                                                            <form >
                                                                <input type="text" name="nombre" placeholder="Name" required=""/>
                                                                <input type="text" name="apellido" placeholder="LastName" required=""/>
                                                                <input type="email" name="email" placeholder="email" required=""/>
                                                            </form>
                                                        </div>
                                                    </Modal.Body>
                                                    <Modal.Footer>
                                                    <Button variant="secondary" onClick={handleClose}>
                                                        Close
                                                    </Button>
                                                    <Button variant="primary" onClick={handleClose}>
                                                        Send
                                                    </Button>
                                                    </Modal.Footer>
                                                </Modal>                                           
                                            <span>{dato.name}</span><p>{dato.descripcion}</p></td>
                                            <td><i className="fas fa-map-marker-alt"></i>{dato.ubicacion}</td>
                                            <td><i className="fas fa-user"></i>{dato.disponibilidad}</td>
                                        </tr>
                                    )) : (
                                        <tr>
                                            <td colSpan={3}>No Jobs</td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>
                        </div>
                        <div className="pagination">
                            <a href="#">&laquo;</a>
                            <a href="#">1</a>
                            <a href="#">2</a>
                            <a href="#">3</a>
                            <a href="#">&raquo;</a>
                        </div>
                    </div>
                    <div className="trabajos__info">
                        <div className="col-md-3 col-sm-12">
                            <h4 className="h4-lista">Archives</h4>
                            <ul className="lista-trabajos">
                                <li><i className="fas fa-angle-right"></i>July 2020</li>
                                <li><i className="fas fa-angle-right"></i>August 2019</li>
                                <li><i className="fas fa-angle-right"></i>July 2018</li>
                            </ul>
                            <h4 className="h4-lista">Categories</h4>
                            <ul>
                                <li><i className="fas fa-angle-right"></i>Uncategorized</li>
                            </ul>
                            <h4 className="h4-lista">Meta</h4>
                            <ul>
                                <li><i className="fas fa-angle-right"></i>Login</li>
                                <li><i className="fas fa-angle-right"></i>Entries feed</li>
                                <li><i className="fas fa-angle-right"></i>Comments feed</li>
                                <li><i className="fas fa-angle-right"></i>Wordpress.org</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}
export default Trabajos;
