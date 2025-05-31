import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { FaHeart, FaEye, FaTasks, FaEnvelopeOpenText, FaClipboardList, FaUsers } from 'react-icons/fa';

const ApplicationStat = () => {
    const { ref, inView } = useInView({ triggerOnce: true });

    return (
        <div ref={ref} className="bg-white dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8 rounded-xl shadow-lg max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-10">📊 Application Dashboard Stats</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

                {/* Total Likes */}
                <StatCard 
                    icon={<FaHeart />}
                    title="Total Likes"
                    value={inView && <CountUp end={25600} duration={2} separator="," />}
                    desc="21% more than last month"
                    bgColor="from-pink-100 to-pink-200 dark:from-[#2b1e34] dark:to-[#3b2848]"
                    textColor="text-pink-600 dark:text-pink-400"
                />

                {/* Page Views */}
                <StatCard 
                    icon={<FaEye />}
                    title="Page Views"
                    value={inView && <CountUp end={2600000} duration={2.5} separator="," />}
                    desc="21% more than last month"
                    bgColor="from-indigo-100 to-indigo-200 dark:from-[#1d1d42] dark:to-[#2d2d70]"
                    textColor="text-indigo-600 dark:text-indigo-400"
                />

                {/* Tasks Done */}
                <StatCard 
                    icon={<FaTasks />}
                    title="Tasks Done"
                    value={inView && <CountUp end={86} duration={2} suffix="%" />}
                    desc="31 tasks remaining"
                    bgColor="from-green-100 to-green-200 dark:from-[#204d3d] dark:to-[#306858]"
                    textColor="text-green-600 dark:text-green-300"
                />

                {/* Total Applications */}
                <StatCard 
                    icon={<FaUsers />}
                    title="Total Applications"
                    value={inView && <CountUp end={1240} duration={2} separator="," />}
                    desc="New 120 this week"
                    bgColor="from-yellow-100 to-yellow-200 dark:from-[#504710] dark:to-[#807717]"
                    textColor="text-yellow-700 dark:text-yellow-300"
                />

                {/* Pending Tasks */}
                <StatCard 
                    icon={<FaClipboardList />}
                    title="Pending Tasks"
                    value={inView && <CountUp end={17} duration={2} />}
                    desc="You’re almost there!"
                    bgColor="from-blue-100 to-blue-200 dark:from-[#12344d] dark:to-[#1a4f77]"
                    textColor="text-blue-600 dark:text-blue-300"
                />

                {/* New Messages */}
                <StatCard 
                    icon={<FaEnvelopeOpenText />}
                    title="New Messages"
                    value={inView && <CountUp end={8} duration={1.5} />}
                    desc="Check your inbox"
                    bgColor="from-purple-100 to-purple-200 dark:from-[#3b2d4f] dark:to-[#604879]"
                    textColor="text-purple-600 dark:text-purple-300"
                />

            </div>
        </div>
    );
};

const StatCard = ({ icon, title, value, desc, bgColor, textColor }) => {
    return (
        <div className={`bg-gradient-to-r ${bgColor} p-6 rounded-2xl shadow-md text-center hover:scale-105 transition-transform duration-300`}>
            <div className={`text-4xl ${textColor} mb-3`}>
                {icon}
            </div>
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-1">{title}</h3>
            <div className={`text-3xl font-bold ${textColor}`}>
                {value}
            </div>
            <p className="text-gray-600 dark:text-gray-400 mt-1">{desc}</p>
        </div>
    );
};

export default ApplicationStat;
