import React from 'react';
import { FaMapMarkerAlt } from "react-icons/fa";
import { Link } from 'react-router';

const JobCard = ({ job }) => {
    const { _id, title, company, location, description, salaryRange, requirements, company_logo } = job;
    return (
        <div className="card bg-gradient-to-br from-white via-blue-50 to-indigo-100 dark:bg-[#1e293b] shadow-md hover:shadow-xl transform hover:scale-[1.02] transition-all duration-300 border border-gray-200 dark:border-gray-700 p-4 rounded-xl">
            <div className='flex items-center gap-4 mb-4'>
                <figure>
                    <img
                        src={company_logo}
                        className='w-16 h-16 object-contain'
                        alt="Shoes" />
                </figure>
                <div>
                    <h1 className="text-xl font-bold text-gray-800 dark:text-white">{company}</h1>
                    <p className='flex items-center gap-2 text-gray-500 dark:text-gray-300'><FaMapMarkerAlt className="text-blue-500" />{location}</p>
                </div>
            </div>
            <div className="card-body p-0">
                <h2 className="text-2xl font-semibold text-indigo-600 dark:text-indigo-400 mb-2 flex items-center gap-2">
                    {title}
                    <div className="badge bg-gradient-to-r from-[#4f46e5] to-[#6d28d9] text-white font-semibold shadow-md">NEW</div>
                </h2>
                <p className="text-gray-700 dark:text-gray-200 mb-1">
                    <strong>Salary:</strong> {salaryRange.min}-{salaryRange.max} {salaryRange.currency}
                </p>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {description?.length > 120 ? description.slice(0, 120) + "..." : description}
                </p>
               <div className="flex flex-wrap gap-2 mb-4">
                    {requirements.map((skill, index) => (
                        <span
                            key={index}
                            className="px-3 py-1 rounded-full text-sm font-medium border border-indigo-400 text-indigo-500 dark:text-indigo-300 hover:bg-indigo-500 hover:text-white transition"
                        >
                            {skill}
                        </span>
                    ))}
                </div>

                   <div className='text-right'>
                    <Link to={`/jobs/${_id}`}>
                        <button className='bg-gradient-to-r from-[#4f46e5] to-[#6d28d9] text-white px-5 py-2 rounded-md font-semibold hover:from-[#6d28d9] hover:to-[#4f46e5] transition duration-300 shadow-md cursor-pointer'>
                            Show details
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default JobCard;