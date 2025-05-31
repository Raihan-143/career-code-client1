import React, { Suspense } from 'react';
import ApplicationStat from './ApplicationStat';
import ApplicationList from './ApplicationList';
import useAuth from '../../hooks/useAuth';
import { ApplicationPromise } from '../../api/applicationApi';


const MyApplications = () => {
    const {user}=useAuth();
    return (
        <div>
            <Suspense fallback={'Loading your application'}>
                <ApplicationList 
               ApplicationPromise={ApplicationPromise(user.email)}
                ></ApplicationList>
            </Suspense>
            <ApplicationStat></ApplicationStat>
        </div>
    );
};

export default MyApplications;