import React from 'react';
import background from '../../assets/images/background.jpg';
import banner from '../../assets/images/banner.jpg';
const Banner = () => {
    return (
        <section className='hero w-full'>
            <figure className='w-full hidden lg:block'><img className='opacity-20 object-cover sm:w-full' src={background} alt="Shoes" /></figure>
            <div className="hero-content flex-col lg:flex-row-reverse mb-2">
                <img src={banner} className="h-72 xl:h-80 2xl:h-96 rounded-lg shadow-2xl" alt='' />
                <div>
                    <h1 className="text-5xl font-bold">Welcome to <p className='text-primary'>Vertex Manufacturing &#38; Co. </p></h1>
                    <p className="py-6 text-xl font-light">
                        We are manufacturing many kind of tools. We are manufacturing hammer, drill machine, screwdriver, wrench, pliers, measuring tape, chisel, soldering iron, shovel, electric saw, hacksaw, paint roller, paintbrush, sandpaper, nut, bolts, drill bit, clamp, workbench, nail gun, glue gun, etc. We are selling a large number of product to our customers every year. We have customer in Thirty five different countries. If you want buy our product give us your list of items with details information. We will supply your product as soon as possible. Thank you for visiting our website.
                    </p>
                    <button className="btn btn-secondary">place order!</button>
                </div>
            </div>
        </section>
    );
};

export default Banner;