import React from 'react';
import auth from '../../firebase.init';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import Loading from '../Shared/Loading';
import { Link, useNavigate } from 'react-router-dom';
import useToken from '../../hooks/useToken';

const SignUp = ({ setDisplayName }) => {
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const [createUserWithEmailAndPassword, user, loading, error,] = useCreateUserWithEmailAndPassword(auth);
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);

    const [token] = useToken(user || gUser);

    const { register, formState: { errors }, handleSubmit } = useForm();

    const navigate = useNavigate();

    let signInError;

    if (loading || gLoading || updating) {
        return <Loading></Loading>;
    };

    if (error || gError || updateError) {
        signInError = <p className='text-red-400'><small>{error?.message}{gError?.message}{updateError?.message}</small></p>
    };

    if (token) {
        navigate('/');
    };

    const onSubmit = async data => {
        await createUserWithEmailAndPassword(data.email, data.password);
        await updateProfile({ displayName: data.name });
        setDisplayName(data.name);
    };
    return (
        <div className='flex h-screen justify-center items-center my-32 lg:my-0'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="text-center text-2xl font-bold text-primary">Sign Up</h2>

                    <form onSubmit={handleSubmit(onSubmit)}>


                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Your Name"
                                className="input input-bordered w-full max-w-xs"
                                {...register("name", {
                                    required: {
                                        value: true,
                                        message: 'Name is Required'
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.name?.type === 'required'
                                    &&
                                    <span className="label-text-alt text-red-500">
                                        {errors.name.message}
                                    </span>
                                }
                            </label>
                        </div>


                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                type="email"
                                placeholder="Your Email"
                                className="input input-bordered w-full max-w-xs"
                                {...register("email", {
                                    required: {
                                        value: true,
                                        message: 'Email is Required'
                                    },
                                    pattern: {
                                        value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                        message: 'Provide a valid Email'
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.email?.type === 'required'
                                    &&
                                    <span className="label-text-alt text-red-500">
                                        {errors.email.message}
                                    </span>
                                }
                                {errors.email?.type === 'pattern'
                                    &&
                                    <span className="label-text-alt text-red-500">
                                        {errors.email.message}
                                    </span>
                                }
                            </label>
                        </div>


                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input
                                type="password"
                                placeholder="Password"
                                className="input input-bordered w-full max-w-xs"
                                {...register("password", {
                                    required: {
                                        value: true,
                                        message: 'Password is Required'
                                    },
                                    minLength: {
                                        value: 8,
                                        message: 'Must be 8 characters or longer'
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.password?.type === 'required'
                                    &&
                                    <span className="label-text-alt text-red-500">
                                        {errors.password.message}
                                    </span>
                                }
                                {errors.password?.type === 'minLength'
                                    &&
                                    <span className="label-text-alt text-red-500">
                                        {errors.password.message}
                                    </span>
                                }
                            </label>
                        </div>


                        {signInError}
                        <input className='btn btn-outline w-full text-primary hover:bg-primary hover:border-primary' type="submit" value='Sign Up' />

                    </form>
                    <p><small>Already have an? <Link className='text-primary' to='/login'>Please login</Link></small></p>

                    <div className="divider">OR</div>
                    <button className="btn btn-outline text-primary hover:bg-primary hover:border-primary" onClick={() => signInWithGoogle()}>Continue with Google</button>
                </div>
            </div>
        </div>
    );
};

export default SignUp;