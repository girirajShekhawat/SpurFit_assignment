import React from 'react';
 
import { RiNotification2Line } from "react-icons/ri";
import Chaticon from '../../assets/Chaticon';
import { IoSearch } from "react-icons/io5";

function Header() {
    return (
        <div className='flex justify-between h-[77px] w-full bg-white rounded-lg mx-4 py-4 px-3  box-border'>
            <h1 className='text-black text-2xl font-sans font-medium'>Home</h1>

            <div>
            <form>
                <div className="flex items-center justify-between h-[40px] w-[381px] bg-[#E0E0E0] rounded-full p-2">
                <IoSearch  />
                <input type='text' placeholder='Search anything'
                className='outline-none w-full pl-2 bg-[#E0E0E0]'/>  
                </div>
            </form>
        </div>

            <div className='flex justify-evenly w-[260px] items-center mr-3'>

                <div className='mx-3  '>
              {/* notification icon from react icon */}
             <RiNotification2Line className='h-8 w-8'/>
                </div>

            <div className='flex inner-items justify-between px-3 py-2 h-[44px] w-[148px] min-w-[148px] bg-gradient-to-r from-[#464FEB] to-[#8330E9] rounded-full'>
                 <Chaticon />
                 <button className='text-white text-lg py-0'>Ask Copilot</button> 
            </div>

            <img src='https://shorturl.at/ixQRZ' className='h-[44px] w-[44px] rounded-full bg-cover ml-3' alt='profile pic'/>
            </div>
        </div>
    );
}

export default Header;