import React from 'react';
import bannerImg from '../../assets/watch.png';
import { IoArrowForwardSharp } from "react-icons/io5";

const Banner = () => {
    return (
        <div className='flex flex-col-reverse lg:flex-row items-center justify-between my-20 ml-20'>
            <div className='flex-1 border-red-500 md:space-y-4 space-y-2 md:mt-12 lg:mt-0 mt-8 p-4'>
                <p className='text-lg'>Enhanced Technology</p>
                <h2 className="md:text-5xl text-3xl font-semibold">Live a Better Day</h2>
                <p className='text-lg'>The ship set ground on the store of this uncharted desert isle <br /> 
                    with gilligan the skipper too the millionaire and his story 
                </p>
                <h3 className="md:text-3xl text-2xl font-bold text-cyan-500">$88.99</h3>
                <h3 className="text-xl font-bold line-through text-slate-400">$102.99</h3>
                <div className='flex items-center'>
                <button className='btn bg-gradient-to-r from-sky-500 to-indigo-500 text-white md:text-lg'>Shop Now <IoArrowForwardSharp/></button>
                
                </div>
            </div>
            <div className='flex-1'>
             
                <img className='md:w-1/2 w-2/3 lg:w-2/3 md:ml-16 lg:ml-0' src={bannerImg} alt="" />
                
                
            </div>
        </div>
    );
};

export default Banner;