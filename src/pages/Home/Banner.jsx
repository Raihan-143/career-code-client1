import React from 'react';
import { motion } from "motion/react";
import team4 from '../../assets/team/team4.png';
import team3 from '../../assets/team/team3.png'

const Banner = () => {
    return (
        <>
            <div className="hero min-h-96 bg-gradient-to-r from-[#1d1d42] via-[#2d2d70] to-[#1d1d42] dark:from-[#111827] dark:via-[#1f2937] dark:to-[#111827] transition-all duration-500">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className='flex-1'>
                        <motion.img
                            src={team4}
                            animate={{ y: [0, 50, 0] }}
                            transition={{ duration: 5, repeat: Infinity }}
                            className="max-w-sm border-white border-s-8 border-b-8 rounded-t-[40px] rounded-br-[40px] shadow-2xl"
                        />
                        <motion.img
                            src={team3}
                            animate={{ x: [100, 150, 100] }}
                            transition={{ duration: 5, repeat: Infinity }}
                            className="max-w-sm border-white border-s-8 border-b-8 rounded-t-[40px] rounded-br-[40px] shadow-2xl"
                        />
                    </div>
                    <div className='flex-1 text-center lg:text-left text-white'>
                        <motion.h1
                            initial={{ scale: 0 }}
                            animate={{
                                scale: 1,
                                transition: { duration: 4 }
                            }}
                            className="text-4xl md:text-5xl font-extrabold leading-tight"
                        >
                            Find Your <motion.span
                                animate={{
                                    color: ['#a8ff33', '#33ffea', '#6833ff', '#ffa733', '#85ff33'],
                                    transition: { duration: 4, repeat: Infinity }
                                }}
                            >Perfect Job</motion.span> Today!
                        </motion.h1>

                        <p className="py-6 text-gray-300 max-w-xl mx-auto lg:mx-0">
                            Discover the latest job opportunities tailored just for you. Whether you're starting your career or looking for your next big move, we connect talented individuals with the right employers—quickly, easily, and efficiently.
                        </p>

                        <button className="btn btn-primary bg-white text-black">Get Started</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Banner;