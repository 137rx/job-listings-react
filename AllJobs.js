import React from "react";
import Job from "./Job";
import Jobs from './data.json';

const AllJobs = (props) => {
    return (
        <div className="container">

            <Job jobs={Jobs} />

        </div>)
}

export default AllJobs;