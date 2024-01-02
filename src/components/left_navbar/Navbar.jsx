import React from 'react';
import NavbarButton from '../NavbarButton';
import { FaRegFileLines } from "react-icons/fa6";
import { IoSettingsOutline } from "react-icons/io5";

function Navbar() {
    const homeButtonLink='https://trainer.spur.fit/static/media/Home-active.c013aac2f538125bdec815552e2c6203.svg';
    const chatButtonLink='https://trainer.spur.fit/static/media/message.5c9018183fbc5121321cb8e003cac730.svg';
    const libraryButtonLink='https://trainer.spur.fit/static/media/library.8d915c9c7c093aea943c12f1c90ea1de.svg';
    
    return (
        <div className='min-h-screen flex flex-col justify-start relative w-[96px] bg-white box-border'>
        <div className=' w-full h-[77px]    border-b-2   '>
            <img src='https://trainer.spur.fit/static/media/Spufit.f4bb521b87ec42bf87cfeae7eede32bb.svg' alt='Logo Img'
            className=' h-[60px] w-[60px] mx-4 mt-2 rounded-full'
            />
        </div>

        <div className='mt-[50px] mx-6'>
            <div className='h-16 w-full m-1'>
            <NavbarButton link={homeButtonLink}/>
            </div>
            <div className='h-16 w-full m-1'>
            <NavbarButton link={chatButtonLink}/>
            </div>
            <div className='h-16 w-full m-1'>
            <NavbarButton link={libraryButtonLink}/>
            </div>
            <div className='h-16 w-full mx-2'>
                {/* file icon from the react icon */}
            <FaRegFileLines className='h-6'/>
            </div>
        </div>
         
        <div  className='mx-7 absolute bottom-4 '>
        <IoSettingsOutline  className='h-6 w-6' />
        </div>
        </div>
    );
}

export default Navbar;