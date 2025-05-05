import React from 'react';
import swimming from '../../assets/swimming.png'
import classroom from '../../assets/class.png'
import play from '../../assets/playground.png'

const Qzone = () => {
    return (
        <div className='bg-base-200 p-3'>
            <h1 className='font-bold mb-5'>QZone</h1>
            <div className='space-y-5'>
                <img src={swimming} alt="" />
                <img src={classroom} alt="" />
                <img src={play } alt="" />

            </div>
             
        </div>
    );
};

export default Qzone;