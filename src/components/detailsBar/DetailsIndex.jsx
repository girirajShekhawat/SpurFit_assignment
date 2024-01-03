import React from 'react';
import { FaArrowUpLong } from "react-icons/fa6";

const Details = () => {
    return (
       
       
        <div className='flex flex-col'>

        <div className='h-[1px] w-[1310px] border-solid border-[1px] border-[#E0E0E0] rounded-full   '></div>
        <div className='flex  bg-[#f9f9f9] h-[45px] items-center box-border'>
         
            <input
           type="radio"
           name="radioGroup"
          className="rounded-full ml-[15px] border-gray-400 focus:ring-violet-700 text-violet-600 border-2 focus:border-violet-700 focus:outline-none h-[14px] w-[14px]  "
          />

          <div className='flex justify-evenly items-center  ml-[7px]'>
            <div className='flex justify-start  items-center ml-[7px] h-[43px] w-[103px]  font-[700px] text-[13px] text-[#333333] px-[12px] box-border leading-[20px]'>
                Trainee
                <FaArrowUpLong  className='ml-[4px] p-[2px] h-[40px]   text-slate-500'/>
            </div>
            <div className='flex items-center  w-[75px] px-[12px] py-[11px] ml-[88px] w-auto ml-[7px] font-[700px] text-[13px] text-[#333333] leading-[20px] box-border'>
                Compliance
            </div>
            <div className='flex items-center   w-[106px] px-[11px] py-[11px] ml-[7px] font-[500px] text-[13px] text-[#333333] leading-[20px] box-border '>
                Last Workout
            </div>
            <div className='flex items-center w-[113px] px-[12px] py-[11px] ml-[41px] font-[700px] text-[13px] text-[#333333] leading-[20px] box-border '>
                 Workout Plan
            </div>
            <div className='flex items-center  w-[108px] px-[11px]  py-[11px] ml-[41px] font-[500px] text-[13px] text-[#333333] leading-[20px] box-border'>
                Last Modified
            </div>
            <div className='flex items-center w-[113px] px-[12px] py-[11px] ml-[35px] font-[700px] text-[13px] text-[#333333] leading-[20px] box-border'>
                 Diet Plan
            </div>
            <div className='flex items-center  w-[108px] px-[11px]  py-[11px] ml-[41px]  font-[700px] text-[13px] text-[#333333] leading-[20px] box-border'>
            Last Modified
            </div>
            <div className='flex items-center  w-[67px] px-[12px]  py-[11px] ml-[48px] font-[700px] text-[13px] text-[#333333] leading-[20px] box-border'>
                 Trainer
            </div>
            <div className='flex items-center w-[113px] px-[12px]  py-[11px] ml-[19px] font-[700px] text-[13px] text-[#333333] leading-[20px] box-border'>
               Actions
            </div>
          </div>
            
        </div>

        <div className='h-[1px] w-[1310px] border-solid border-[1px] border-[#E0E0E0] rounded-full   '></div>
        </div>
    );
};

export default Details;