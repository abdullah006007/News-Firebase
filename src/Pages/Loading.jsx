import React from 'react';
import { CircleLoader } from 'react-spinners';

const Loading = () => {
    return (
        <div className='min-h-screen flex justify-center items-center'>


            <CircleLoader color="red" />

        </div>
    );
};

export default Loading;