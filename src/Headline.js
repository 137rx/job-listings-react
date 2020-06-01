import React from "react";

const Headline = (props) => {
  return (
    <div className="headline">
      <h1 className="company">
        {props.job.company}
        <span className = {props.job.new ? "feature new" : null}> </span>
        <span className = {props.job.new ? "feature featured" : null}> </span>
      </h1>

      <h1 className="position">{props.job.position}</h1>

      <p className="features">
        {props.job.postedAt} <span className="dot"> </span> {props.job.contract} <span className="dot"> </span> 
        {props.job.location}
      </p>
    </div>
  );
};

export default Headline;
