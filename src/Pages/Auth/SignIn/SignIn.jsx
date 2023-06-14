import React, { useContext, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { Helmet } from 'react-helmet-async';
import Swal from 'sweetalert2';
import { AuthContext } from '../../../providers/AuthProvider';
import SocialSignIn from '../SocialSignIn/SocialSignIn';
import { AiFillEyeInvisible } from 'react-icons/ai';
import { AiFillEye } from 'react-icons/ai';


const SignIn = () => {
    const { register, handleSubmit,  formState: { errors } } = useForm();
    const { signInUser} = useContext(AuthContext);
    const [passwordEye, setPasswordEye] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const handleSignIn = data => {
        signInUser(data.email, data.password)
            .then(result => {
                const loggedUser = result.user;
              
                Swal.fire({
                    title: 'User Login Successful.',
                    showClass: {
                        popup: 'animate__animated animate__fadeInDown'
                    },
                    hideClass: {
                        popup: 'animate__animated animate__fadeOutUp'
                    }
                });
                navigate(from, { replace: true })
            })
            .catch(error => console.log(error));
    };

    const handlePasswordClick =()=>{
        setPasswordEye(!passwordEye);
    }

    return (
        <>
            <Helmet>
                <title>AM Drawing School | Sign In</title>
            </Helmet>

            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <div className="w-1/2 mr-12">
                        <img src='' alt="" />
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            <h1 className="text-3xl text-center font-bold">Login</h1>
                            <form onSubmit={handleSubmit(handleSignIn)}>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="text" {...register("email")} placeholder="email" className="input input-bordered" />
                                </div>
                                <div className="form-control relative">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type={(passwordEye === false) ? 'password': "text"} {...register("password")} name='password' placeholder="password" className="input input-bordered" />
                                    {/* Eye Section */}
                                    <div className='text-2xl absolute bottom-3 right-5'>
                                        {
                                            (passwordEye === false)? <AiFillEyeInvisible onClick={handlePasswordClick}/>: <AiFillEye onClick={handlePasswordClick}/>
                                        }
                                  
                                   
                                    </div>
                                </div>
                                <div className="form-control mt-6">
                                    <input className="btn btn-primary" type="submit" value="Sign In" />
                                </div>
                            </form>
                            <br />

                            <div className="text-center sign-area">
                                <span className="">
                                    Or login with
                                </span>
                            </div>
                            <SocialSignIn/>
                            <div className='my-4 text-center'>
                                Don't Have an Account?
                                <br></br>
                                <Link to="/sign-up" className='text-blue-600/100 hover:text-orange-600 font-bold'>
                                    Sign up now
                                </Link>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SignIn