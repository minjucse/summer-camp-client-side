import React, { useContext } from 'react';
import { useForm } from "react-hook-form";
import { Helmet } from 'react-helmet-async';
import Swal from 'sweetalert2';
import service from '../../../../hooks/useBaseServices';
import { AuthContext } from '../../../../providers/AuthProvider';

const Upsert = () => {
    const { userInfo } = useContext(AuthContext);
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        data.feedback= "";
        data.totalEnrolled =0;
        
        service.userCreate("add-class", data).then(res => {
            if (res.data.insertedId) {
                reset();
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: `Success Add Your Class!`,
                    showConfirmButton: false,
                    timer: 1500
                })
            }
        })
            .catch(err => {
                console.log(err);
            });

    };

    return (
        <div className='card shadow-xl bg-base-100'>
            <Helmet>
                <title>AM Drawing School | Class Create</title>
            </Helmet>
            <h2 className='text-center text-3xl'>Add New Class:  </h2>

            <div className="card-body">
                <form onSubmit={handleSubmit(onSubmit)}>
                    {errors.exampleRequired && <span>This field is required</span>}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text"    {...register("name", { required: true })}
                                placeholder="name" className="input input-bordered" autoComplete='off' />
                                  {errors.name && <span className="text-red-600">Name is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Image URL</span>
                            </label>
                            <input type="text" {...register("classImage", { required: true })} placeholder="Image URL" className="input input-bordered" autoComplete='off' />
                            {errors.classImage && <span className="text-red-600">Image URL is required</span>}
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Available Seats</span>
                            </label>
                            <input type="number" {...register("quantity")} placeholder="Available Seats" className="input input-bordered" autoComplete='off' />
                            {errors.quantity && <span className="text-red-600">Available Seats is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Price</span>
                            </label>
                            <input type="number" {...register("price")} placeholder="price" className="input input-bordered" autoComplete='off' />
                            {errors.price && <span className="text-red-600">Available Seats is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Instructor Name</span>
                            </label>
                            <input type="text" defaultValue={userInfo?.displayName} {...register("createdName")} className="input input-bordered" readOnly />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Instructor Email</span>
                            </label>
                            <input type="email" {...register("createdBy")} defaultValue={userInfo?.email} placeholder="seller email" className="input input-bordered" readOnly />
                        </div>
                        
                    </div>
                    <div className="form-control mt-6">
                        <input className="btn btn-primary btn-block" type="submit" value="Add Class" />
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Upsert