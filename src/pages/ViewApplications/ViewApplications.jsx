import axios from 'axios';
import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import { motion } from 'framer-motion';
import { MdEmail } from 'react-icons/md';
import { FaUserCircle } from 'react-icons/fa';

const statusColors = {
  Pending: 'bg-yellow-200 text-yellow-800 dark:bg-yellow-700 dark:text-yellow-100',
  Interview: 'bg-blue-200 text-blue-800 dark:bg-blue-700 dark:text-blue-100',
  Hired: 'bg-green-200 text-green-800 dark:bg-green-700 dark:text-green-100',
  Rejected: 'bg-red-200 text-red-800 dark:bg-red-700 dark:text-red-100',
};

const ViewApplications = () => {
  const { job_id } = useParams();
  const applications = useLoaderData();

  const handleStatusChange = (e, app_id) => {
    axios
      .patch(`http://localhost:5000/applications/${app_id}`, {
        status: e.target.value,
      })
      .then((res) => {
        if (res.data.modifiedCount) {
          alert('✅ Status updated!');
        }
      })
      .catch((err) => console.error(err));
  };

  return (
    <div className="min-h-screen px-4 py-8 bg-gradient-to-b from-white via-sky-50 to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Section Heading */}
      <div className="mb-10 text-center border-b border-indigo-700 dark:border-indigo-200">
        <h2 className="text-3xl font-bold text-indigo-800 dark:text-indigo-200">📋 All Applications</h2>
        <p className="text-gray-600 dark:text-gray-400">Total: <strong>{applications.length}</strong> applicants</p>
      </div>

      {/* Grid Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {applications.map((app, index) => (
          <motion.div
            key={app._id}
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl border dark:border-gray-700 transition-all p-5"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
          >
            {/* Avatar and Email */}
            <div className="flex items-center gap-4 mb-4">
              <FaUserCircle className="text-4xl text-indigo-500 dark:text-indigo-300" />
              <div>
                <p className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                  {app.applicant}
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400 flex items-center gap-1">
                  <MdEmail /> {app.email || 'no-email@example.com'}
                </p>
              </div>
            </div>

            {/* Job Title */}
            <p className="mb-2 text-md text-gray-600 dark:text-gray-300">
              Applied for: <strong>{app.title || "Job Title"}</strong>
            </p>

            {/* Status Badge */}
            <div className={`inline-block px-3 py-1 text-sm rounded-full font-medium mb-4 ${statusColors[app.status]}`}>
              {app.status}
            </div>

            {/* Status Dropdown */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
            >
              <label className="block text-sm font-medium text-gray-600 dark:text-gray-300 mb-1">
                Update Status
              </label>
              <select
                onChange={(e) => handleStatusChange(e, app._id)}
                defaultValue={app.status}
                className="w-full mt-1 px-4 py-2 rounded-md border dark:border-gray-600 bg-white dark:bg-gray-900 text-gray-700 dark:text-white shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              >
                <option disabled>Change status</option>
                <option>Pending</option>
                <option>Interview</option>
                <option>Hired</option>
                <option>Rejected</option>
              </select>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ViewApplications;
