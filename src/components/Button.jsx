import React from 'react';
 
function Button(props) {
    const {children, number}=props;
    return (
        <div className='group h-[54px] text-[#424242] font-normal hover:text-violet-700 '>
        <button className='focus:border-b-[3px] focus:rounded-sm focus:border-[#8330E9] transition-all duration-200'>
          {children}
          <span className='h-4 w-10 min-w-[10] bg-slate-100   px-[3px] rounded-[5px] group-hover:bg-violet-200 hover:border-b font-mono'>
            {number}
          </span>
        </button>
      </div>
     
    );
}

export default Button;