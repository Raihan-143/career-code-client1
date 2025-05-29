import React, { Suspense } from 'react';
import useAuth from '../../hooks/useAuth';
import MyJobsList from './MyJobsList';
import { jobsCreatedByPromise } from '../../api/jobsApi';

const MyPostedJobs = () => {
    const {user}=useAuth();
    return (
        <div className='text-center'>
            My Posted Jobs are here
            <Suspense fallback={'Jobs Lists are Loading..'}>
                <MyJobsList jobsCreatedByPromise={jobsCreatedByPromise(user.email)}></MyJobsList>
            </Suspense>
        </div>
    );
};

export default MyPostedJobs;