import React from 'react';
import { Link, useParams } from 'react-router';
import useAuth from '../../hooks/useAuth';
import axios from 'axios';
import Swal from 'sweetalert2';

const JobApply = () => {
    const { id: jobId } = useParams();
    const { user } = useAuth()
    console.log(jobId, user);
    const handleApplyForm = e => {
        e.preventDefault();
        const form = e.target;
        const linkedin = form.linkedin.value;
        const github = form.github.value;
        const resume = form.resume.value;
        // const email=form.email.value;
        console.log(linkedin, github, resume);

        const applicantion = {
            jobId,
            applicant: user.email,
            linkedin,
            github,
            resume

        }
        //using Axios for saving data in db
        axios.post('http://localhost:5000/applications', applicantion)
            .then(res => {
                console.log(res.data)
                if (res.data.insertedId) {
                    // alert('Your application is done!');
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
                console.log(error)
            })
    }
    return (
        <div className='mt-5 text-center'>
            <form onSubmit={handleApplyForm}>
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                    <h1 className='text-3xl font-bold'>Apply for this job: <Link to={`/jobs/${jobId}`}><span className='text-blue-500 underline'>Details</span></Link> </h1>

                    <label className="label">Linkedin</label>
                    <input type="url" name='linkedin' className="input" placeholder="Linkedin profile link" />

                    <label className="label">Github</label>
                    <input type="url" name='github' className="input" placeholder="Github profile link" />

                    <label className="label">Resume</label>
                    <input type="url" name='resume' className="input" placeholder="Resume link" />
                    {/* <label className="label">Email</label>
                    <input type="text" name='email' className="input" placeholder="Enter your email" /> */}
                    <input type="submit" className='btn cursor-pointer' value="Apply" />
                </fieldset>

            </form>
        </div>
    );
};

export default JobApply;