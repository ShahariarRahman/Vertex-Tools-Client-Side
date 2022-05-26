import React, { useEffect } from 'react';
import auth from '../../firebase.init';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import Loading from '../Shared/Loading';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useToken from '../../hooks/useToken';

const Login = () => {
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const [signInWithEmailAndPassword, user, loading, error,] = useSignInWithEmailAndPassword(auth);

    const [token] = useToken(user || gUser);

    const { register, formState: { errors }, handleSubmit } = useForm();

    let signInError;

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    useEffect(() => {
        if (token) {
            navigate(from, { replace: true });
        };
    }, [token, from, navigate]);

    if (loading || gLoading) {
        return <Loading></Loading>;
    };

    if (error || gError) {
        signInError = <p className='text-red-400'><small>{error?.message}{gError?.message}</small></p>;
    };

    const onSubmit = data => {
        const email = data.email;
        const password = data.password;
        signInWithEmailAndPassword(email, password);
    };

    return (
        <div className='flex h-screen justify-center items-center  my-32 lg:my-0'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="text-center text-2xl font-bold text-primary">Login</h2>

                    <form onSubmit={handleSubmit(onSubmit)}>


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
                                        message: 'Provide a valid Email Address'
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
                        <input className='btn btn-outline w-full text-primary hover:bg-primary hover:border-primary' type="submit" value='Login' />

                    </form>
                    <p><small>New to Vertex Tools? <Link className='text-primary' to='/signup'>Create New Account</Link></small></p>

                    <div className="divider">OR</div>
                    <button className="btn btn-outline text-primary hover:bg-primary hover:border-primary" onClick={() => signInWithGoogle()}>Continue with Google</button>
                </div>
            </div>
        </div>
    );
};

export default Login;