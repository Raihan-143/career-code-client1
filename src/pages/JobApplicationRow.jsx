import React from 'react';

const JobApplicationRow = ({ index, application }) => {
    return (
        <tr className="hover:bg-blue-50 dark:hover:bg-gray-700 transition-all duration-200">
            <td className="py-3 px-5 font-medium">{index + 1}</td>
            <td className="py-3 px-5">{application.name}</td>
            <td className="py-3 px-5">{application.jobTitle}</td>
            <td className="py-3 px-5">
                <span className={`px-3 py-1 rounded-full text-xs font-semibold ${application.status === "Pending" ? "bg-yellow-200 text-yellow-800" :
                        application.status === "Accepted" ? "bg-green-200 text-green-800" :
                            "bg-red-200 text-red-800"
                    }`}>
                    {application.status}
                </span>
            </td>
            <td className="py-3 px-5">
                <button className="text-sm bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded shadow transition">
                    View
                </button>
            </td>
        </tr>
    );
};

export default JobApplicationRow;