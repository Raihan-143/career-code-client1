import React, { Suspense } from 'react';
import ApplicationStat from './ApplicationStat';
import ApplicationList from './ApplicationList';
import useAuth from '../../hooks/useAuth';
import { ApplicationPromise } from '../../api/applicationApi';


const MyApplications = () => {
    const {user}=useAuth();
    return (
        <div>
            <h1 className='text-3xl text-center'>My Applications</h1>
            <ApplicationStat></ApplicationStat>
            <Suspense fallback={'Loading your application'}>
                <ApplicationList 
               ApplicationPromise={ApplicationPromise(user.email)}
                ></ApplicationList>
            </Suspense>
        </div>
    );
};

export default MyApplications;