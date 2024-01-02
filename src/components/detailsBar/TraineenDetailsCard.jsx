import React from 'react';

 
import { RxBorderDotted } from "react-icons/rx";
import { BsChat } from "react-icons/bs";

function TraineenDetailsCard(props) {
    const {data}=props

    return (
        
       <>
       
  {data.map( (item) => (
    
    <div className='flex  bg-white h-[45px] items-center mt-[1px]' key={item.id} > 
  
  <input
  type="radio"
  name="radioGroup"
 className="rounded-full ml-5 border-gray-400 focus:ring-violet-700 text-violet-600 border-2 focus:border-violet-700 focus:outline-none h-4 w-4"
 />


<div className='flex  justify-evenly w-[1000px] min-w-[1000px] flex-grow'>
   <div className='flex items-center text-lg font-medium text-[#333333]'>
    <img src={item.img} className='h-5 w-6 rounded-full bg-contain bg-center mr-4' alt='img'/>
    {item.trainee}
   </div>

   <div className='flex items-center text-lg font-normal text-[#737270]'>
      {item.compliance}  
   </div>

   <div className='flex items-center text-lg font-normal text-[#737270]'>
       {item.lastWorkout}
   </div>
   <div className='flex items-center text-lg font-normal text-[#556ee6] bg-[#eff4ff]'>
        {item.workoutPlan}
   </div>
   <div className='flex items-center text-lg font-normal text-[#737270]'>
        {item.lastModifiedWorkout}
   </div>
   <div className='flex items-center text-lg font-normal text-[#33b055] bg-[#e7f6eb]'>
        { item.dietPlan}
   </div>
   <div className='flex items-center text-lg font-normal text-[#737270]'>
      {  item.lastModifiedDiet}
   </div>
   <div className='flex items-center text-lg font-normal  text-[#737270]'>
       {item.trainer}
   </div>
   <div className='flex items-center   '>
      <BsChat className='text-violet-700'/>
      <RxBorderDotted className='text-violet-700 ml-2'/>
   </div>
 </div>
   
 </div>   
  
  ))}

</>     
  
    );
    
}

export default TraineenDetailsCard;