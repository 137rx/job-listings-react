import React from 'react';

const Headline = (props) => {
    return (
        <div>
            {props.jobs.map((job, id) => (
                <div key ={job.id}>

                    <div className="company">
                        <h1>{job.company} {job.new} {job.featured}</h1>
                    </div>

                    <h1>{job.position}</h1>

                    <div className="features">
                        <p>{job.postedat} {job.contract} {job.location}</p>
                    </div>

                    <div className="features">
                        <p>{job.postedat} {job.contract} {job.location}</p>
                    </div> 
                
                </div>))}

        </div>
    )
}

export default Headline;