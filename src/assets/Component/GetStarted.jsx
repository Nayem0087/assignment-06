import React from 'react';
import userIcon from '../../../assets/banner/user.png'
import packageIcon from '../../../assets/banner/package.png'
import rocketIcon from '../../../assets/banner/rocket.png'

const GetStarted = () => {
    return (
        <div>
            <h2 className='font-semibold md:text-5xl text-4xl text-center'>Get Started in 3 Steps</h2>
            <p className='text-gray-600 text-center pt-3 pb-10'>Start using premium digital tools in minutes, not hours.</p>
            <div className='max-w-[80%] mx-auto grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 mb-20'>
                <div className='shadow-2xl flex flex-col text-center p-4'>
                    <button className='flex justify-end'>
                        <a className='bg-[#9514FA] rounded-full py-1 px-2 flex justify-center text-white font-semibold'>01</a>
                    </button>
                    <button className='flex items-center justify-center'>
                        <img className='max-w-14 px-3 py-3 rounded-full bg-[#a85ee53e] ' src={userIcon} alt="" />
                    </button>
                    <h3 className='font-semibold text-3xl py-4'>Create Account</h3>
                    <p className='text-gray-600 pb-10'>Sign up for free in seconds. No credit card required to get started.</p>
                </div>

                <div className='shadow-2xl flex flex-col text-center p-4'>
                    <button className='flex justify-end'>
                        <a className='bg-[#9514FA] rounded-full py-1 px-2 flex justify-center text-white font-semibold'>02</a>
                    </button>
                    <button className='flex items-center justify-center'>
                        <img className='max-w-14 px-3 py-3 rounded-full bg-[#a85ee53e] ' src={packageIcon} alt="" />
                    </button>
                    <h3 className='font-semibold text-3xl py-4'>Choose Products</h3>
                    <p className='text-gray-600 pb-10'>Browse our catalog and select the tools that fit your needs.</p>
                </div>

                <div className='shadow-2xl flex flex-col text-center p-4'>
                    <button className='flex justify-end'>
                        <a className='bg-[#9514FA] rounded-full py-1 px-2 flex justify-center text-white font-semibold'>03</a>
                    </button>
                    <button className='flex items-center justify-center'>
                        <img className='max-w-14 px-3 py-3 rounded-full bg-[#a85ee53e] ' src={rocketIcon} alt="" />
                    </button>
                    <h3 className='font-semibold text-3xl py-4'>Start Creating</h3>
                    <p className='text-gray-600 pb-10'>Download and start using your premium tools immediately.</p>
                </div>
            </div>
        </div>
    );
};

export default GetStarted;