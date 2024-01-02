import React from 'react';
import TraineenDetailsCard from './TraineenDetailsCard';
import data from '../../assets/data'
function TraineeList() {
    
    return (
        <div className='bg-slate-400'>
            <TraineenDetailsCard data={data}/>
        </div>
    );
}

export default TraineeList;