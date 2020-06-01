import React from "react";
import Headline from "./Headline";
import Keywords from "./Keywords";
import Logo from "./Logo";
import jobs from "./data.json";

const Job = () => {
    console.log(jobs)
  return (
    <div>
      {jobs.map((job) => {
        return (
          <div key={job.id} className="job">
            <Logo job={job} />
            <Headline job={job} />
            <Keywords job={job} />
          </div>
        );
      })}
    </div>
  );
};

export default Job;
