import React from 'react';

 
import { RxBorderDotted } from "react-icons/rx";
import { BsChat } from "react-icons/bs";

function TraineenDetailsCard(props) {
    const {data}=props

    return (
        
       
      <> 
  {data.map( (item) => (
   <div className='flex flex-col'>
    <div> 
    <div className='flex  bg-white h-[45px] items-center mt-[1px]' key={item.id} > 

  <div className='flex   ml-[4px] h-[36px] h-[42px] py-[14px] px-[11px] '>
  <input
  type="radio"
  name="radioGroup"
 className="rounded-full items-center border-gray-400 focus:ring-violet-700 text-violet-600 border-2 focus:border-violet-700 focus:outline-none h-[14px] w-[14px] "
 />
  </div>
 


<div className='flex '>
   <div className='flex items-center    w-[176px] h-[42px] py-[11px] px-[12px] mr-[10px] '>
    <img src={item.img} className='h-[20px] w-[20px] rounded-full bg-contain bg-center mr-4' alt='img'/>
    
    <div className='w-[131px] text-[13px] font-[400px] leading-[20px] font-sans text-[#323130]'>
    {item.trainee}
    </div>
    
   </div>

   <div className='flex items-center text-[13px] font-[400px] leading-[16px] font-sans text-[#605E5C] ml-[31px] w-[49px] h-[42px]'>
      {item.compliance}  
   </div>

   <div className='flex items-center  text-[13px] font-[400px] leading-[16px] font-sans text-[#605E5C] ml-[27px] w-[113px] h-[42px] pl-[12px] pr-[8px]'>
       {item.lastWorkout}
   </div>

   <div className='flex items-center ml-[27px] w-[132px] h-[42px] px-[11px] py-[20px]'>
        <div className='text-[12px] font-[400px] leading-[16px] font-sans text-[#556EE6] mx-[1px] bg-[#eff4ff] px-[5px] rounded-md'>
        {item.workoutPlan}
        </div>
        
   </div>

   <div className='flex items-center text-[13px] font-[400px] leading-[16px] font-sans text-[#605E5C]  w-[113px] h-[42px] ml-[35px] pl-[12px] pr-[8px]'>
        {item.lastModifiedWorkout}
   </div>

   <div className='flex items-center ml-[27px] h-[42px] w-[132px] px-[11px] '>
   <div className='text-[12px] font-[400px] leading-[16px] font-sans text-[#09A033] mx-[1px] bg-[#e7f6eb] px-[5px] rounded-md'>
      { item.dietPlan}
        </div> 
   </div>

   <div className='flex items-center text-[13px] font-[400px] leading-[16px] font-sans text-[#605E5C] ml-[41px] w-[113px] h-[42px] pl-[12px] pr-[8px]'>
      {  item.lastModifiedDiet}
   </div>

   <div className='flex items-center text-[13px] font-[400px] leading-[16px] font-sans text-[#605E5C]  ml-[27px] w-[113px] h-[42px]  px-[12px]'>
       {item.trainer}
   </div>
   <div className='flex items-center  ml-[1px] w-[48px] h-[42px] '>
      <BsChat className='text-violet-700'/>
      <RxBorderDotted className='text-violet-700 ml-2'/>
   </div>
 </div>
  
 </div>   
  </div>
  <div className='h-[1px] w-[1356px] border-solid border-[1px] border-[#d6d4d2] rounded-full ml-[4px]  '></div>
  </div>
  ))}

     </>
   
    );
    
}

export default TraineenDetailsCard;