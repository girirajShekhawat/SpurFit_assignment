import React from 'react';
import  DashboardHeader from './DashboardHeader';
import DetailsIndex from './DetailsIndex';
import TraineeList from './TraineeList';

function DetailsBarContainer(props) {
    return (
        <div className=' my-5 mx-4  h-full bg-white rounded-lg box-border'>
            <DashboardHeader/>
            <DetailsIndex/>
            <TraineeList/>
        </div>
    );
}

export default DetailsBarContainer;