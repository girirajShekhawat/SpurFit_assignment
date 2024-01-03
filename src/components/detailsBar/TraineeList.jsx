import React from 'react';
import TraineenDetailsCard from './TraineenDetailsCard';
import data from '../../assets/data'
function TraineeList() {
    
    return (
        <div className='overflow-y-auto'>
            <TraineenDetailsCard data={data}/>
        </div>
    );
}

export default TraineeList;