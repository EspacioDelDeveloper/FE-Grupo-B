import React, { Fragment } from "react";
import "./estilos/jobStatus.css";
import { StatusUpdate } from "./JobStatus/StatusUpdate";
import { Easiest } from "./JobStatus/Easiest";
import { People } from "./JobStatus/People";
import { Companies } from "./JobStatus/Companies";

const JobStatus = () => (
  <Fragment>
    <StatusUpdate />
    <Easiest />
    <People />
    <Companies />
  </Fragment>
);

export default JobStatus;
