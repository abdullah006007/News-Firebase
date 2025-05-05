import React from 'react';
import Marquee from 'react-fast-marquee';

const LateastNews = () => {
    return (
        <div className='flex items-center gap-3 bg-base-200 p-3 '>
            <p className='text-base-100 bg-secondary px-3 py-2 '>latest</p>
            <Marquee className='flex gap-5' pauseOnHover={true} speed ={60}>
            <p className='font-bold'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                 Doloremque, recusandae! </p>

            <p className='font-bold'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                 Doloremque, recusandae! </p>

            <p className='font-bold'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                 Doloremque, recusandae! </p>
            </Marquee>
            
        </div>
    );
};

export default LateastNews;