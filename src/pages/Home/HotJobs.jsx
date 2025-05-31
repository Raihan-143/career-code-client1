import React, { use } from 'react';
import JobCard from '../Shared/JobCard';

const HotJobs = ({jobsPromis}) => {
    const jobs=use(jobsPromis)
   
    return (
       <>
       <div className="mt-10 text-center">
  <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 dark:text-white mb-3">
    🔥 Trending Jobs of the Day
  </h1>
  <p className="text-gray-600 dark:text-gray-300 text-sm md:text-base max-w-2xl mx-auto">
    Discover today’s most popular jobs and apply before it's too late! 🚀 These opportunities are trending now — don't miss out.
  </p>

  {/* Job Cards */}
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
    {
      jobs.map(job => <JobCard key={job._id} job={job}></JobCard>)
    }
  </div>
</div>

       </>
    );
};

export default HotJobs;