import React from 'react';
import Button from '../Button';
import { IoIosAddCircleOutline } from "react-icons/io";
import { IoSearch } from "react-icons/io5";
import { CiFilter } from "react-icons/ci";

function HeaderBar(props) {

    return (
        <div className='flex justify-between h-[57px]  box-border items-center'>
            <div className='flex justify-evenly h-[44px] w-[353px] w-min-[313px] py-3 px-3'>
                <Button children={`Active`} number={`16`}/>
                <Button children={`Pending`} number={`16`}/>
                <Button children={`Archived`} number={`8`}/>
            </div>

        <div className='flex justify-evenly mt-0'>
            <div className='flex items-center justify-start   h-[32px] w-[107px] min-w-[92px] bg-gradient-to-r from-[#464FEB] to-[#8330E9] rounded-full px-[10px] py-[16px] '>
                 <IoIosAddCircleOutline className='text-white  mx-1'/> 
                 <button className='text-white text-[13px] font-[400px] leaidng-[22px] font-sans'>Add New</button> 
            </div>

             <div className='h-[32px] w-[1px] border-solid border-[1px] border-[#E0E0E0] rounded-full mr-2 ml-6'></div>

             <div>
            <form>
                <div className="flex items-center justify-between h-[32px] w-[193px] bg-[#F2F2F2] rounded-full p-2 " >
                <IoSearch className='h-[16px] w-[16px] ml-[2px] mt-[2px] text-violet-500' />
                <input type='text' placeholder='Search anything'
                className='outline-none w-full pl-2 bg-[#F2F2F2]'/>  
                </div>
            </form>
        </div>

            <div className='flex bg-white  items-center h-[32px] w-[116px] min-w-[116px] box-border rounded-full border-solid border-2 border-[#464FEB] mx-3 mr-[30px]'>
            <CiFilter className=' text-[#464FEB] h-4 w-4  mx-1' />
            <select className=' text-[#464FEB] focus:none outline-none rounded-full' placeholder="filter">
          <option value="Select an option" disabled selected >
            filter
            </option>
          <option value="1">Traninee</option>
          <option value="2">Diet</option>
          <option value="3">Workout</option>
        </select>
            </div>

            </div>
        </div>
    );
}

export default HeaderBar;