import React from 'react';
 
import { RiNotification2Line } from "react-icons/ri";
import Chaticon from '../../assets/Chaticon';
import { IoSearch } from "react-icons/io5";

function Header() {
    return (
        <div className='flex justify-between flex-row   h-[77px]  w-full  bg-[#ffffff]  rounded-b-[20px] shadow-md mx-[14px]  py-4  px-3  items-center box-border'>
            <div className='h-[29px] w-[62px]  mt-[24] ml-[33px] text-[22px] leading-[28.64px] font-[500px]   text-[#231f20] font-[DM Sans]'>Home</div>

            <div>
            <form>
                <div className="flex items-center justify-between  ml-[300px] h-[39.06px] w-[381px] bg-gradient-to-r from-blue-100   to-violet-200  rounded-full p-2">
                <IoSearch className='h-[18px] w-[18px] mt-[3px] mx-[3px] '/>
                <input type='text' placeholder='Search anything'
                className='outline-none w-full h-[23px] opacity-50 pl-2 bg-gradient-to-r from-blue-100   to-violet-200  font-[100px] text-[18px]  leading-[19px]   '/>  
                </div>
            </form>
        </div>

            <div className='flex justify-evenly w-[260px]  h-[44px] items-center mr-1'>

                <div className='mx-3  '>
              {/* notification icon from react icon */}
             <RiNotification2Line className=' h-[24px] w-[24px]'/>
                </div>

            <div className='flex inner-items justify-between  px-3 py-2 h-[44px] w-[148px] min-w-[148px] bg-gradient-to-r from-[#464FEB] to-[#8330E9] rounded-full shadow-md '>
                 <Chaticon />
                 <button className='text-white font-sans font-[100px] py-0'>Ask Copilot</button> 
            </div>

            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFRmexku4sWN6wxU4DDmyl_6F898jGFNniPw&usqp=CAU' className='h-[44px] w-[44px] rounded-full bg-cover ml-3' alt='profile pic'/>
            </div>
        </div>
    );
}

export default Header;