import React from 'react';
import { useLoaderData } from 'react-router';

const JobDetails = () => {
    const {title, company}=useLoaderData();
    
    return (
        <div className='text-center'>
            <h1 className='text-3xl font-bold'>Company: {company}</h1>
            <p>Job details of: {title}</p>
            <button className='btn btn-primary cursor-pointer'>Apply Now</button>

        </div>
    );
};

export default JobDetails;