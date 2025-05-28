import React, { use } from 'react';
import JobCard from '../Shared/JobCard';

const HotJobs = ({jobsPromis}) => {
    const jobs=use(jobsPromis)
   
    return (
       <>
       <div className='mt-5'>
        <h1 className='text-4xl text-center font-bold'>Hot jobs of the day</h1>
         <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-5'>
            {
                jobs.map(job=><JobCard key={job._id} job={job}></JobCard>)
            }
        </div>
       </div>
       </>
    );
};

export default HotJobs;