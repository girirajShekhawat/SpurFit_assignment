import React from 'react';
import { FaArrowUpLong } from "react-icons/fa6";

const Details = () => {
    return (
        <div className='flex  bg-[#f9f9f9] h-[45px] items-center box-border'>
            <input
           type="radio"
           name="radioGroup"
          className="rounded-full ml-5 border-gray-400 focus:ring-violet-700 text-violet-600 border-2 focus:border-violet-700 focus:outline-none h-4 w-4"
          />
          <div className='flex  justify-evenly w-[1000px] min-w-[1000px] flex-grow'>
            <div className='flex items-center text-lg font-medium text-[#333333]'>
                Trainee
                <FaArrowUpLong  className='ml-1 text-slate-500'/>
            </div>
            <div className='flex items-center text-lg font-medium text-[#333333]'>
                Compliance
            </div>
            <div className='flex items-center text-lg font-medium text-[#333333]  '>
                Last Workout
            </div>
            <div className='flex items-center text-lg font-medium text-[#333333]'>
                 Workout Plan
            </div>
            <div className='flex items-center text-lg font-medium text-[#333333]'>
                Last Modified
            </div>
            <div className='flex items-center text-lg font-medium text-[#333333]'>
                 Diet Plan
            </div>
            <div className='flex items-center text-lg font-medium text-[#333333]'>
            Last Modified
            </div>
            <div className='flex items-center text-lg font-medium text-[#333333]'>
                 Trainer
            </div>
            <div className='flex items-center text-lg font-medium text-[#333333]'>
               Actions
            </div>
          </div>
            
        </div>
    );
};

export default Details;