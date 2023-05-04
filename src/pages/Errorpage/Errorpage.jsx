import React from 'react';
import errorImg from "../../assets/error.png"
import { Link, useRouteError } from 'react-router-dom';
const Errorpage = () => {
    const { error, status } = useRouteError()
    return (
        <section className='flex items-center h-screen p-16 bg-gray-100 text-gray-900'>
            <div className='d-flex flex-column justify-content-between align-items-center px-5 mx-auto my-8'>
                <img className='w-25' src={errorImg} alt="" />
                <div className='max-w-md text-center'>
                    <h2 className='mb-8 font-extrabold text-9xl text-gray-600'>
                        <span className='sr-only'>Error</span> {status || 404}
                    </h2>
                    <p className='text-xl font-semibold md:text-3xl mb-8 text-danger'>
                        {error?.message}
                    </p>
                    <Link
                        to='/'
                        className='px-4 py-3 rounded'
                    >
                        <button className='band-bg py-2 px-4 rounded-2 border-0 fw-bold text-white'>Back to homepage</button>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Errorpage;