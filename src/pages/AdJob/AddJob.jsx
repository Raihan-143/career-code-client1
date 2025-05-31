import React from 'react';
import useAuth from '../../hooks/useAuth';
import axios from 'axios';
import Swal from 'sweetalert2';

const AddJob = () => {
    const { user } = useAuth();

    const handleAddJob = (e) => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());

        // Process salary range
        const { min, max, currency, ...newJob } = data;
        newJob.salaryRange = { min, max, currency };

        // Process requirements
        newJob.requirements = newJob.requirements.split(',').map(req => req.trim());
        newJob.responsibilities = newJob.responsibilities.split(',').map(res => res.trim());

        newJob.status = 'active';

        axios.post('http://localhost:5000/jobs', newJob)
            .then(res => {
                if (res.data.insertedId) {
                    //   alert('🎉 Successfully added the job!');
                    Swal.fire({
                        position: "top-center",
                        icon: "success",
                        title: "🎉 Successfully added the job!",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })
            .catch(error => {
                console.error(error);
            });
    };

    return (
        <div className="max-w-4xl mx-auto my-10 p-8 rounded-lg shadow-lg bg-white dark:bg-base-200">
            <h2 className="text-3xl font-bold text-center text-indigo-700 mb-6">📝 Add a New Job</h2>

            <form onSubmit={handleAddJob} className="space-y-6">

                {/* Basic Info */}
                <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label className="label font-semibold">Job Title</label>
                        <input type="text" name="title" className="input input-bordered w-full" placeholder="e.g. Frontend Developer" required />
                    </div>
                    <div>
                        <label className="label font-semibold">Company</label>
                        <input type="text" name="company" className="input input-bordered w-full" placeholder="Company Name" required />
                    </div>
                    <div>
                        <label className="label font-semibold">Location</label>
                        <input type="text" name="location" className="input input-bordered w-full" placeholder="e.g. Dhaka, Remote" required />
                    </div>
                    <div>
                        <label className="label font-semibold">Company Logo URL</label>
                        <input type="url" name="company_logo" className="input input-bordered w-full" placeholder="Image URL" required />
                    </div>
                </section>

                {/* Job Type & Category */}
                <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label className="label font-semibold">Job Type</label>
                        <select name="job-type" className="select select-bordered w-full" required>
                            <option disabled selected>Select Job Type</option>
                            <option>On-Site</option>
                            <option>Remote</option>
                            <option>Hybrid</option>
                        </select>
                    </div>
                    <div>
                        <label className="label font-semibold">Job Category</label>
                        <select name="category" className="select select-bordered w-full" required>
                            <option disabled selected>Select Category</option>
                            <option>Engineering</option>
                            <option>Marketing</option>
                            <option>Finance</option>
                        </select>
                    </div>
                </section>

                {/* Deadline */}
                <div>
                    <label className="label font-semibold">📅 Application Deadline</label>
                    <input type="date" name="deadline" className="input input-bordered w-full" required />
                </div>

                {/* Salary Range */}
                <section>
                    <h3 className="text-lg font-semibold mb-2">💰 Salary Range</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <input type="number" name="min" className="input input-bordered" placeholder="Minimum Salary" required />
                        <input type="number" name="max" className="input input-bordered" placeholder="Maximum Salary" required />
                        <select name="currency" className="select select-bordered" required>
                            <option disabled selected>Select Currency</option>
                            <option>BDT</option>
                            <option>USD</option>
                            <option>EU</option>
                        </select>
                    </div>
                </section>

                {/* Descriptions */}
                <section className="space-y-4">
                    <div>
                        <label className="label font-semibold">📝 Job Description</label>
                        <textarea name="description" className="textarea textarea-bordered w-full" placeholder="Write a detailed job description..." rows={4} required />
                    </div>
                    <div>
                        <label className="label font-semibold">✅ Requirements <span className="text-sm text-gray-500">(comma-separated)</span></label>
                        <textarea name="requirements" className="textarea textarea-bordered w-full" placeholder="e.g. React, Tailwind, Firebase" rows={2} required />
                    </div>
                    <div>
                        <label className="label font-semibold">📌 Responsibilities <span className="text-sm text-gray-500">(comma-separated)</span></label>
                        <textarea name="responsibilities" className="textarea textarea-bordered w-full" placeholder="e.g. Build UI, Deploy to Vercel" rows={2} required />
                    </div>
                </section>

                {/* HR Info */}
                <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label className="label font-semibold">👤 HR Name</label>
                        <input type="text" name="hr_name" className="input input-bordered w-full" placeholder="HR Name" required />
                    </div>
                    <div>
                        <label className="label font-semibold">📧 HR Email</label>
                        <input type="email" name="hr_email" defaultValue={user?.email} className="input input-bordered w-full" placeholder="HR Email" required />
                    </div>
                </section>

                {/* Submit Button */}
                <div className="text-center mt-8">
                    <input type="submit" className="btn btn-primary px-10 text-lg transition duration-300 ease-in-out transform hover:scale-105" value="🚀 Add Job" />
                </div>
            </form>
        </div>
    );
};

export default AddJob;
