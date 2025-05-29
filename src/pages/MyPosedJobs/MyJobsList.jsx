import React, { use } from 'react';
import { Link } from 'react-router';

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
                            <th>Title</th>
                            <th>Deadline</th>
                            <th>View Applications</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                       {
                        jobs.map((job,index)=> <tr key={job._id}>
                            <th>{index+1}</th>
                            <td>{job.title}</td>
                            <td>{job.deadline}</td>
                            <td><Link to={`/applications/${job._id}`}>
                            View Applications
                            </Link></td>
                        </tr>)
                       }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyJobsList;