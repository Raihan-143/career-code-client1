import React from 'react';
import { Link, useLoaderData } from 'react-router';
import { FaMapMarkerAlt, FaBriefcase, FaTags, FaCalendarAlt } from "react-icons/fa";

const JobDetails = () => {
    const { _id, title, company, location, jobType, category, applicationDeadline } = useLoaderData();

    return (
        <div className="bg-gradient-to-r from-[#f9fafb] via-white to-[#f9fafb] dark:from-[#1d1d42] dark:via-[#2d2d70] dark:to-[#1d1d42] min-h-screen flex items-center justify-center px-4 py-12">
            <div className="bg-white dark:bg-gray-800 shadow-lg rounded-2xl p-8 max-w-3xl w-full transition-transform duration-300 hover:scale-[1.015]">
                
                {/* Title */}
                <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white mb-2">
                    {title}
                </h1>

                {/* Company */}
                <p className="text-xl text-center font-medium text-indigo-600 dark:text-indigo-400 mb-6">
                    {company}
                </p>

                {/* Details Info Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <div className="flex items-center gap-3 p-4 bg-gray-100 dark:bg-gray-700 rounded-lg hover:shadow-md transition">
                        <FaMapMarkerAlt className="text-indigo-500 text-lg" />
                        <span className="text-gray-800 dark:text-gray-200">Location: {location}</span>
                    </div>
                    <div className="flex items-center gap-3 p-4 bg-gray-100 dark:bg-gray-700 rounded-lg hover:shadow-md transition">
                        <FaBriefcase className="text-indigo-500 text-lg" />
                        <span className="text-gray-800 dark:text-gray-200">Job Type: {jobType}</span>
                    </div>
                    <div className="flex items-center gap-3 p-4 bg-gray-100 dark:bg-gray-700 rounded-lg hover:shadow-md transition">
                        <FaTags className="text-indigo-500 text-lg" />
                        <span className="text-gray-800 dark:text-gray-200">Category: {category}</span>
                    </div>
                    <div className="flex items-center gap-3 p-4 bg-gray-100 dark:bg-gray-700 rounded-lg hover:shadow-md transition">
                        <FaCalendarAlt className="text-indigo-500 text-lg" />
                        <span className="text-gray-800 dark:text-gray-200">Deadline: {applicationDeadline}</span>
                    </div>
                </div>

                {/* Apply Button */}
                <div className="text-center">
                    <Link to={`/jobapply/${_id}`}>
                        <button className="px-8 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-full shadow-md transition duration-300 ease-in-out transform hover:scale-105 cursor-pointer">
                            For Apply Click Here
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default JobDetails;