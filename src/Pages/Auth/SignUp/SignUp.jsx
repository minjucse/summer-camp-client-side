import React, { useContext, useState } from 'react'
import { useForm } from "react-hook-form";
import { Helmet } from 'react-helmet-async';
import { Link, useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';
import { AuthContext } from '../../../providers/AuthProvider';
import SocialSignIn from '../SocialSignIn/SocialSignIn';

const SignUp = () => {
  const { register, handleSubmit, reset,watch, formState: { errors } } = useForm();
  const { createUser, updateUser } = useContext(AuthContext);
  const [accepted, setAccepted] = useState(false);
  const navigate = useNavigate();

  const handleSignUp = data => {
    createUser(data.email, data.password)
      .then(result => {
        updateUser(data.name, data.photoURL).then(
          navigate('/')
        ).catch(error => {
          console.log(error);
        })
      })
      .catch(error => {
        console.log(error);
      })
  }
const password = watch('password');
  return (
    <>
      <Helmet>
        <title>Site Name | Sign Up</title>
      </Helmet>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <div className="w-1/2 mr-12">
            <img src="" alt="" />
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <h1 className="text-3xl text-center font-bold">Sign Up</h1>
              <form onSubmit={handleSubmit(handleSignUp)}>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input type="text"  {...register("name", { required: true })} name="name" placeholder="Name" className="input input-bordered" />
                  {errors.name && <span className="text-red-600">Name is required</span>}
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Image URL</span>
                  </label>
                  <input type="text"  {...register("photoURL", { required: true })} placeholder="Image URL" className="input input-bordered" />
                  {errors.photoURL && <span className="text-red-600">Image URL is required</span>}
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input type="email"  {...register("email", { required: true })} name="email" placeholder="email" className="input input-bordered" />
                  {errors.email && <span className="text-red-600">Email is required</span>}
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input type="password"  {...register("password", {
                    required: true,
                    minLength: 6,
                    maxLength: 20,
                    pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/
                  })} placeholder="password" className="input input-bordered" />
                  {errors.password?.type === 'required' && <p className="text-red-600">Password is required</p>}
                  {errors.password?.type === 'minLength' && <p className="text-red-600">Password must be 6 characters</p>}
                  {errors.password?.type === 'maxLength' && <p className="text-red-600">Password must be less than 20 characters</p>}
                  {errors.password?.type === 'pattern' && <p className="text-red-600">Password must have one Uppercase one lower case, one number and one special character.</p>}

                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Confirm Password</span>
                  </label>
                  <input type="password"  {...register("confirmPassword", { required: true,
                    validate: (value) => value === password || "The Passwords do not match" })} placeholder="Confirm Password" className="input input-bordered" />
                  {errors.confirmPassword && <span className="text-red-600">The Passwords do not match</span>}
                </div>
                <div className="form-control mt-6">
                  <input className="btn btn-primary" type="submit" value="Sign Up" />
                </div>
              </form>
              <div className="divider">Or</div>
              <SocialSignIn/>
              <p className='my-4 text-center'>Already Have an Account? <Link className='text-orange-600 font-bold' to="/sign-in">Sign In</Link> </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default SignUp