import React from 'react';
import { useLoaderData, useParams } from 'react-router';

const ViewApplications = () => {
    const {job_id}=useParams()
    const applications=useLoaderData();
    return (
        <div>
            <h1 className="text-3xl">{applications.length} Application for: {job_id}</h1>
        </div>
    );
};

export default ViewApplications;