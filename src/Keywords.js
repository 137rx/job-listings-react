import React from "react";

const Keywords = (props) => {
  return (
    <div className="keywords">
      <p className="languages">{props.job.languages.toString().replace(',',' ')}</p>
      <p className="tools">{props.job.tools.toString().replace(',',' ')}</p>
    </div>
  );
};

export default Keywords;
