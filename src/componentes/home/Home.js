import React, { Fragment } from 'react';
import Banner from './Banner';
import Buscador from './Buscador';
import Trabajos from './Trabajos';
import JobStatus from './JobStatus';


const Home = () => (
    <Fragment>
        <Banner />
        <Buscador />
        <Trabajos />
        <JobStatus />
    </Fragment>
);

export default Home;