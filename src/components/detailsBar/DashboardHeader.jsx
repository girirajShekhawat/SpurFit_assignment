import React from 'react';
import Button from '../Button';
import { IoIosAddCircleOutline } from "react-icons/io";
import { IoSearch } from "react-icons/io5";
import { CiFilter } from "react-icons/ci";

function HeaderBar(props) {

    return (
        <div className='flex justify-between h-[57px]  box-border items-center'>
            <div className='flex justify-evenly h-[44px] w-[313px] w-min-[313px]'>
                <Button children={`Active`} number={`16`}/>
                <Button children={`Pending`} number={`16`}/>
                <Button children={`Archived`} number={`8`}/>
            </div>

        <div className='flex justify-evenly mt-0'>
            <div className='flex inner-items justify-between px-2 py-1 h-[32px] w-[100px] min-w-[92px] bg-gradient-to-r from-[#464FEB] to-[#8330E9] rounded-full mx-5'>
                 <IoIosAddCircleOutline className='text-white mt-1'/> 
                 <button className='text-white '>Add New</button> 
            </div>

             <div className='h-[32px] w-[1px] border-solid border-2 border-slate-200  mx-5'></div>

             <div>
            <form>
                <div className="flex items-center justify-between h-[32px] w-[193px] bg-[#E0E0E0] rounded-full p-2 " >
                <IoSearch  />
                <input type='text' placeholder='Search anything'
                className='outline-none w-full pl-2 bg-[#E0E0E0]'/>  
                </div>
            </form>
        </div>

            <div className='flex bg-white  items-center h-[32px] w-[116px] box-border rounded-full border-solid border-2 border-violet-600  mx-5'>
            <CiFilter className=' text-violet-700  h-4 w-4  mx-1' />
            <select className=' text-violet-700 focus:none outline-none' placeholder="filter">
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