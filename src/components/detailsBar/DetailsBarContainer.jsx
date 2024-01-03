import React from 'react';
import  DashboardHeader from './DashboardHeader';
import DetailsIndex from './DetailsIndex';
import TraineeList from './TraineeList';

function DetailsBarContainer(props) {
    return (
        <div className=' my-[12px] mx-4  h-[685px] bg-[#ffffff] w-full rounded-[20px] shadow-md box-border '>
            <DashboardHeader/>
            <DetailsIndex/>
            <TraineeList/>
        </div>
    );
}

export default DetailsBarContainer;