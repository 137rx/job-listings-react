import React from 'react';


const Logo = (props) => {

    return (
         <div>
            {props.jobs.map((job, id) => (
                <div className="logo">
                    <img key={job.id} src={job.logo} alt="logo" />
                </div>))}
        
        </div>
    )
}

export default Logo;