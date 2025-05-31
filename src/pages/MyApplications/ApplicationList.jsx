import React, { use } from 'react';
import JobApplicationRow from './JobApplicationRow';
import { FaListOl } from 'react-icons/fa';

const ApplicationList = ({ ApplicationPromise }) => {
    const applications = use(ApplicationPromise);

    return (
        <div className="max-w-7xl mx-auto my-12 px-4">
            <div className="text-center mb-6">
                <h3 className="text-3xl font-bold text-gray-800 dark:text-white flex items-center justify-center gap-2">
                    <FaListOl className="text-blue-500" />
                    Total Applications: {applications.length}
                </h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">Manage your incoming job applications easily</p>
            </div>

            <div className="overflow-x-auto rounded-xl shadow-lg">
                <table className="min-w-full table-auto bg-white/30 dark:bg-gray-800/30 backdrop-blur-md rounded-lg overflow-hidden border border-gray-200 dark:border-gray-600">
                    <thead>
                        <tr className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white text-left text-sm uppercase tracking-wider">
                            <th className="py-3 px-5">No#</th>
                            <th className="py-3 px-5">Candidate Name</th>
                            <th className="py-3 px-5">Applied Job</th>
                            <th className="py-3 px-5">Status</th>
                            <th className="py-3 px-5">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="text-gray-800 dark:text-gray-200 text-sm divide-y divide-gray-200 dark:divide-gray-700">
                        {
                            applications.map((application, index) => (
                                <JobApplicationRow
                                    key={application._id}
                                    index={index}
                                    application={application}
                                />
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ApplicationList;
