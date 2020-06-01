import React from "react";

const Logo = (props) => {
    console.log(props.job)
  return (
    <div className="logo">
      <img src={props.job.logo} alt="logo" />
    </div>
  );
};

export default Logo;
