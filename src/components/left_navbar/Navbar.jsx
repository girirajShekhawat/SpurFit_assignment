import React from 'react';
import NavbarButton from '../NavbarButton';
import { FaRegFileLines } from "react-icons/fa6";
import { IoSettingsOutline } from "react-icons/io5";

function Navbar() {
    const homeButtonLink='https://trainer.spur.fit/static/media/Home-active.c013aac2f538125bdec815552e2c6203.svg';
    const chatButtonLink='https://trainer.spur.fit/static/media/message.5c9018183fbc5121321cb8e003cac730.svg';
    const libraryButtonLink='https://trainer.spur.fit/static/media/library.8d915c9c7c093aea943c12f1c90ea1de.svg';
    
    return (
        <div className='h-[1000px]  flex flex-col justify-start relative w-[96px] bg-[#ffffff] box-border'>
        <div className=' w-full h-[77px]  flex justify-center items-center box-border    '>
            <img src='https://trainer.spur.fit/static/media/Spufit.f4bb521b87ec42bf87cfeae7eede32bb.svg' alt='Logo Img'
            className=' h-[40px] w-[40px]  rounded-full drop-shadow-lg'
            />
        </div>
        <div className='h-[1px] w-[70px] mx-[13px] border-solid border-[1px]  border-[#cccccc] rounded-full'></div>
        
        <div className='mt-[27px] mx-[35px] h-[240px] w-[24px]'>
            <div className='h-[24px] w-[24px] md-[48px]'>
            <NavbarButton link={homeButtonLink}/>
            </div>
            <div className='h-[24px] w-[24px] mt-[48px]'>
            <NavbarButton link={chatButtonLink}/>
            </div>
            <div className='h-[24px] w-[24px] mt-[48px]'>
            <NavbarButton link={libraryButtonLink}/>
            </div>
            <div >
                {/* file icon from the react icon */}
            <FaRegFileLines className='h-[24px] w-[24px] mt-[48px] text-[#404040]'/>
            </div>
        </div>
         
        <div  className='mx-[35px] absolute bottom-8 '>
        <IoSettingsOutline  className='h-[26px] w-[26px] text-[#5a5758]' />
        </div>
        </div>
    );
}

export default Navbar;