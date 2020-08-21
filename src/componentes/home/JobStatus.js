import React, { Fragment } from 'react';
import "./estilos/jobStatus.css";
import IMAG1 from "./img/invitado1.jpg";
import IMAG2 from "./img/invitado2.jpg";
import IMAG3 from "./img/invitado3.jpg";
import IMAG4 from "./img/invitado4.jpg";
import IMAG5 from "./img/invitado5.jpg";


const JobStatus = () => (
    <Fragment>
		<div className="seccion-jobstatus">
			<div className="container">
				<h3 className="text-center h3-seccionjob">Job Status Updates</h3>
				<ul className="numeros">
					<li><p className="numero">10</p></li>
					<li><p className="numero">15</p></li>
					<li><p className="numero">25</p></li>
				</ul>
				<ul className="informacion-jobs">
					<li><p className="info-jobs">Jobs Posted</p></li>
					<li><p className="info-jobs">Positions Field</p></li>
					<li><p className="info-jobs">Membres</p></li>
				</ul>
			</div>
		</div>
		<div className="seccion-Easiest">
			<h3 className="text-center h3-seccionjob">Easiest Way to Use</h3>
			<div className="container informacion-easiest">
				<div className="">
					<p className="text-center info-parrafo">Firts step</p>
					<i className="fas fa-clipboard-list lista-iconos"></i>
					<p className="info-parrafo2">Register With Us</p>
				</div>
				<div className="">
					<p className="text-center info-parrafo">Second step</p>
					<i className="fas fa-clipboard lista-iconos"></i>
					<p className="info-parrafo2">Create Your Perfile</p>
				</div>
				<div className="">
					<p className="text-center info-parrafo">Thirty step</p>
					<i className="fas fa-file-upload lista-iconos"></i>
					<p className="info-parrafo2">Upload Your Resume</p>
				</div>
				<div className="">
					<p className="text-center info-parrafo">Now It´s Our Turn</p>
					<i className="fas fa-mug-hot lista-iconos"></i>
					<p className="info-parrafo2">Now Take a Rest</p>
				</div>
			</div>	
		</div>
		<div className="seccion_people">
			<div className="container">
				<h3 className="text-center h3-seccionjob">What People Say About Us</h3>
				<div>
					<img src={IMAG1} className="img-people" alt="logo"></img>
					<img src={IMAG2} className="img-people" alt="logo"></img>
					<img src={IMAG3} className="img-people" alt="logo"></img>
					<img src={IMAG4} className="img-people" alt="logo"></img>
					<img src={IMAG5} className="img-people" alt="logo"></img>
				</div>
			</div>
		</div>
		<div className="seccion_companies">
			<div className="container">
				<h3 className="text-center h3-seccionjob">Companies who have posted jobs</h3>
				<ul className="logos-compañias">
					<li><p className="logo-compañia">Photodune</p></li>
					<li><p className="logo-compañia">3 Docean</p></li>
					<li><p className="logo-compañia">Videohive</p></li>
					<li><p className="logo-compañia">Actioviden</p></li>
					<li><p className="logo-compañia">Graphicriver</p></li>
				</ul>
			</div>
		</div>
    </Fragment>
);

export default JobStatus;