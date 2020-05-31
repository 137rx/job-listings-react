import React from 'react';

const Keywords = (props) => {
    return (
        <div>
            {props.jobs.map((job, id) => (
               <div className="languages">
               <p>{job.languages.toString()}</p>
           </div>  ))}
        </div>
    )
}

export default Keywords;