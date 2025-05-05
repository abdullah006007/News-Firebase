import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const FIndUsOn = () => {
    return (
        <div>
            <h2 className='font-bold mb-5'>Find Us On</h2>
            <div className="join join-vertical w-full">
                <button className="btn bg-base-100 join-item justify-start"> <FaFacebook  size={25}/> Facebook</button>
                <button className="btn bg-base-100 join-item justify-start"> <FaInstagram size={25} /> Instagram</button>
                <button className="btn bg-base-100 join-item justify-start"> <FaTwitter  size={25}/> Twitter</button>
            </div>

        </div>
    );
};

export default FIndUsOn;