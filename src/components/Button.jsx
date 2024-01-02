import React from 'react';
 
function Button(props) {
    const {children, number}=props;
    return (
        <div className='group text-[#333333] text-lg font-medium hover:text-violet-900 '>
           <button  >
            {children}
           <span className='h-5 w-10 bg-slate-100 mx-1 rounded-sm group-hover:bg-violet-300 hover:border-b  '>
            {number}
            </span>
            </button>
      
        </div>

     
    );
}

export default Button;