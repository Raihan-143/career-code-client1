import React, { use } from 'react';

const MyJobsList = ({ jobsCreatedByPromise }) => {
    const jobs = use(jobsCreatedByPromise);
    return (
        <div>
            <h1 className="text-3xl">My posted jobs are: {jobs.length}</h1>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Job</th>
                            <th>Favorite Color</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                       {
                        jobs.map((job,index)=> <tr key={job._id}>
                            <th>{index+1}</th>
                            <td>{job.title}</td>
                            <td>{job.deadline}</td>
                            <td>Blue</td>
                        </tr>)
                       }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyJobsList;