import React from 'react';
import img from '../../assets/images/profile.jpg';

const MyPortfolio = () => {
    return (
        <div className='mb-10'>
            <div className='md:flex justify-between mt-2 mx-auto px-4 sm:px-6 lg:px-8 text-gray-800 shadow-lg p-10'>
                <div className='rounded-xl p-2 flex flex-col items-center text-center'>
                    <img className='h-24 w-24 rounded-2xl' src={img} alt="" />
                    <div className='w-full'>
                        <h2 className='text-md my-2'>Md. Shahariar Rahman Sumon</h2>
                        <p className='text-md font-thin'>
                            Bsc in Computer Science and Engineering
                        </p>
                        <p className='text-md font-thin'>
                            From Daffodil International University.
                        </p>
                        <h2 className='text-md my-2'>
                            shahariar15-1670@diu.edu.bd<br />
                            shahariarrahman98@gmail.com
                        </h2>
                    </div>
                </div>
                <div className='rounded-xl flex flex-col items-center text-center'>
                    <div className='text-md my-8 uppercase'>list of skills I have as a web developer.</div>
                    <div className='text-md font-thin flex flex-col items-center'>
                        <ul className='grid lg:grid-cols-2 gap-2'>
                            <li className='flex  space-x-1'>
                                <span className="badge badge-primary text-white">Html</span>
                                <span className="badge badge-primary text-white">Html5</span>
                            </li>
                            <li className='flex justify-between space-x-1'>
                                <span className="badge badge-primary text-white">Css</span>
                                <span className="badge badge-primary text-white">Css3</span>
                            </li>
                            <li className='flex justify-between space-x-1'>
                                <span className="badge badge-primary text-white">JavaScript</span>
                                <span className="badge badge-primary text-white">ES6</span>
                            </li>
                            <li className='flex justify-between space-x-1'>
                                <span className="badge badge-primary text-white">Github</span>
                                <span className="badge badge-primary text-white">Hosting</span>
                            </li>
                            <li className='flex justify-between space-x-1'>
                                <span className="badge badge-primary text-white">Taildwind</span>
                                <span className="badge badge-primary text-white">Daisyui</span>
                            </li>
                            <li className='flex justify-between space-x-1'>
                                <span className="badge badge-primary text-white">Boostrap</span>
                                <span className="badge badge-primary text-white">Component</span>
                            </li>
                            <li className='flex justify-between space-x-1'>
                                <span className="badge badge-primary text-white">React</span>
                                <span className="badge badge-primary text-white">React router</span>
                            </li>
                            <li className='flex justify-between space-x-1'>
                                <span className="badge badge-primary text-white">Firebase</span>
                                <span className="badge badge-primary text-white">Authentication</span>
                            </li>

                            <li className='flex justify-between space-x-1'>
                                <span className="badge badge-primary text-white">Mongodb</span>
                                <span className="badge badge-primary text-white">MySql</span>
                            </li>
                            <li className='flex justify-between space-x-1'>
                                <span className="badge badge-primary text-white">Node</span>
                                <span className="badge badge-primary text-white">Express</span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className='rounded-xl flex flex-col items-center text-center'>
                    <p className='text-md my-8 capitalize'>Some of my project live website links.</p>
                    <div className='flex flex-col items-center space-y-3'>
                        <div>
                            <a target="blank" href="https://primax-electronics.web.app/">
                                <button className='btn btn-sm capitalize bg-rose-600 hover:bg-rose-700 w-44'>
                                    <small>Primax Electronics</small>
                                </button>
                            </a>
                        </div>
                        <div>
                            <a target="blank" href="https://dreams-photography-786.web.app/">
                                <button className='btn btn-sm capitalize bg-sky-600 hover:bg-sky-700 w-44'>
                                    <small>Dreams Photography</small>
                                </button>
                            </a>
                        </div>
                        <div>
                            <a target="blank" href="https://shahariar-assignment-9.netlify.app/">
                                <button className='btn btn-sm capitalize bg-gray-600 hover:bg-gray-700 w-44'>
                                    <small>Blog and Reviews</small>
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default MyPortfolio;