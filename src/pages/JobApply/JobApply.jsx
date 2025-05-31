import React from 'react';
import { Link, useParams } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import axios from 'axios';
import Swal from 'sweetalert2';
import { motion } from 'framer-motion';

const JobApply = () => {
  const { id: jobId } = useParams();
  const { user } = useAuth();

  const handleApplyForm = e => {
    e.preventDefault();
    const form = e.target;
    const linkedin = form.linkedin.value;
    const github = form.github.value;
    const resume = form.resume.value;

    const applicantion = {
      jobId,
      applicant: user.email,
      linkedin,
      github,
      resume
    };

    axios.post('http://localhost:5000/applications', applicantion)
      .then(res => {
        if (res.data.insertedId) {
          Swal.fire({
            position: "top-center",
            icon: "success",
            title: "Your application has been submitted",
            showConfirmButton: false,
            timer: 1500
          });
        }
      })
      .catch(error => {
        console.log(error);
      });
  };

  const fadeVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: i => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.5
      }
    })
  };

  return (
    <div className='mt-10 flex justify-center items-center px-4'>
      <form onSubmit={handleApplyForm} className="bg-white dark:bg-gray-800 shadow-xl rounded-xl p-8 max-w-md w-full">
       <motion.h1
  className='text-2xl font-extrabold text-center text-gray-800 dark:text-white mb-8'
  initial={{ opacity: 0, scale: 0.95 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 0.5 }}
>
  ✨ Submit Your Application Today!
  <Link to={`/jobs/${jobId}`}>
    <span className='text-indigo-600 underline ml-2'>View Job Details</span>
  </Link>
</motion.h1>


        {['linkedin', 'github', 'resume'].map((field, index) => (
          <motion.div
            key={field}
            className="mb-5"
            custom={index}
            initial="hidden"
            animate="visible"
            variants={fadeVariants}
          >
            <label className="block text-left text-gray-700 dark:text-gray-200 mb-1 capitalize">
              {field}
            </label>
            <input
              type="url"
              name={field}
              className="input input-bordered w-full bg-gray-100 dark:bg-gray-700 dark:text-white"
              placeholder={`${field.charAt(0).toUpperCase() + field.slice(1)} profile link`}
              required
            />
          </motion.div>
        ))}

        <motion.div
          className='mt-6'
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          <input
            type="submit"
            className="btn w-full bg-indigo-600 hover:bg-indigo-700 text-white transition"
            value="Apply Now"
          />
        </motion.div>
      </form>
    </div>
  );
};

export default JobApply;
