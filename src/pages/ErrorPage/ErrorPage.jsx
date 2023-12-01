import React from 'react';
import errorImg from '../../assets/2.jpg'
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className='flex justify-center lg:my-44 md:my-20 my-16'>
            <div className='text-center'>
            <img className='lg:w-64 md:w-48 w-36' src={errorImg} alt="" />
            <Link className='text-purple-700 underline mt-8' to='/'>Back to home</Link>
            </div>
        </div>
    );
};

export default ErrorPage;