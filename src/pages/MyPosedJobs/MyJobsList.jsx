import React, { use } from 'react';
import { Link } from 'react-router';
import { FaUsers, FaClock, FaFolderOpen } from 'react-icons/fa';
import { motion } from 'framer-motion';

import { Tooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css';

const MyJobsList = ({ jobsCreatedByPromise }) => {
  const jobs = use(jobsCreatedByPromise);

  // find the job with highest applications
  const maxApplication = Math.max(...jobs.map(job => job.application_count));
  const isExpired = deadline => new Date(deadline) < new Date();

  return (
    <div className="px-4 py-8 min-h-screen bg-gradient-to-br from-blue-50 to-white dark:from-gray-900 dark:to-gray-800">
      <motion.h1
        className="text-4xl font-bold text-center text-indigo-700 dark:text-white mb-10"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        🚀 My Posted Jobs ({jobs.length})
      </motion.h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {jobs.map((job, index) => {
          const expired = isExpired(job.deadline);
          const isTop = job.application_count === maxApplication && maxApplication > 0;

          return (
            <motion.div
              key={job._id}
              className={`relative bg-white dark:bg-gray-700 border ${
                expired ? 'border-red-300 bg-red-50 dark:bg-red-900' : 'border-indigo-100'
              } shadow-md rounded-2xl p-6 hover:shadow-xl transition-all`}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {isTop && (
                <span
                  className="absolute top-3 right-3 bg-yellow-400 text-white px-2 py-1 rounded-full text-xs font-semibold shadow"
                  data-tooltip-id={`top-job-${index}`}
                >
                  🔥 Top Applied
                </span>
              )}
              <Tooltip id={`top-job-${index}`} content="This job has the most applications" />

              <h3 className="text-xl font-bold text-indigo-800 dark:text-white mb-3">
                {job.title}
              </h3>

              <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300 mb-2">
                <FaClock className="text-indigo-500 dark:text-white" />
                <span>
                  <span className="font-medium">Deadline:</span> {job.deadline}
                </span>
              </div>

              <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300 mb-4">
                <FaUsers className="text-green-600 dark:text-green-300" />
                <span>
                  <span className="font-medium">Applicants:</span> {job.application_count}
                </span>
              </div>

              <Link
                to={`/applications/${job._id}`}
                className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 transition-all duration-300"
                data-tooltip-id={`tooltip-${index}`}
                data-tooltip-content="Click to see who applied"
              >
                <FaFolderOpen />
                View Applications
              </Link>
              <Tooltip id={`tooltip-${index}`} />
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default MyJobsList;