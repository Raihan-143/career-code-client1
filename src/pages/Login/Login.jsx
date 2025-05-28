import Lottie from 'lottie-react';
import React, { use } from 'react';
import loginLottie from '../../assets/lottie/login.json';
import { AuthContext } from '../../context/AuthContext';
import SocialLogin from '../Shared/SocialLogin';

const Login = () => {
    const {userLogin}=use(AuthContext)
    const handleLogin=e=>{
        e.preventDefault();
        const form=e.target;
        const email=form.email.value;
        const password=form.password.value;
        console.log(email,password);


       //create user 
       userLogin(email,password)
       .then(res=>{
        console.log(res.user)
       })
       .catch(error=>{
        console.log(error);
       })

    }
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <Lottie style={{width:'400px'}} animationData={loginLottie} loop={true}></Lottie>
                    
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <div className="card-body">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                        <form onSubmit={handleLogin}>
                            <fieldset className="fieldset">
                            <label className="label">Email</label>
                            <input type="email" name='email' className="input" placeholder="Email" />
                            <label className="label">Password</label>
                            <input type="password" name='password' className="input" placeholder="Password" />
                            <div><a className="link link-hover">Forgot password?</a></div>
                            <button className="btn btn-neutral bg-blue-500 border-none mt-4">Login</button>
                        </fieldset>
                        </form>
                        <SocialLogin></SocialLogin>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;