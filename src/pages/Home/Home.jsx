import React, { Suspense } from 'react';
import Banner from './Banner';
import HotJobs from './HotJobs';


const Home = () => {
    const jobsPromis=fetch('http://localhost:5000/jobs').then(res=>res.json())
    
    return (
        <div className='mt-5'>
            <Banner></Banner>
            <Suspense fallback={'Loading hot jobs'}>
                <HotJobs jobsPromis={jobsPromis}></HotJobs>
            </Suspense>
        </div>
    );
};

export default Home;