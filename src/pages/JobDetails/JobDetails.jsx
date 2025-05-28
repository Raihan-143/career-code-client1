import React from 'react';
import { Link, useLoaderData } from 'react-router';

const JobDetails = () => {
    const {_id,title, company}=useLoaderData();
    
    return (
        <div className='text-center'>
            <h1 className='text-3xl font-bold'>Company: {company}</h1>
            <p>Job details of: {title}</p>
            <Link to={`/jobapply/${_id}`}>
            <button className='btn btn-primary cursor-pointer'>Apply Now</button>

            </Link>
        </div>
    );
};

export default JobDetails;