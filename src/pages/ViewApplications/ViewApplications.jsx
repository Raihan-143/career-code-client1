import axios from 'axios';
import React from 'react';
import { useLoaderData, useParams } from 'react-router';

const ViewApplications = () => {
    const { job_id } = useParams()
    const applications = useLoaderData();

    const handleStatusChange=(e, app_id)=>{
        console.log(e.target.value,app_id);

        axios.patch(`http://localhost:5000/applications/${app_id}`, {status: e.target.value})
        .then(res=>{
            console.log(res.data)
            if(res.data.modifiedCount){
                alert('Application status updated!')
            }
        })
        .catch(error=>{
            console.log(error)
        })
    }
    return (
        <div>
            <h1 className="text-3xl">{applications.length} Application for: {job_id}</h1>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Email</th>
                            <th>Job</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            applications.map(application => <tr key={application._id}>
                                <th>1</th>
                                <td>{application.applicant}</td>
                                <td>Quality Control Specialist</td>
                                <td>
                                    <select onChange={e=>handleStatusChange(e,application._id)} defaultValue={application.status} className="select">
                                        <option disabled={true}>Update Status</option>
                                        <option>Pending</option>
                                        <option>Interview</option>
                                        <option>Hired</option>
                                        <option>Rejected</option>
                                    </select>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ViewApplications;