import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';

const SocialLogin = () => {
    return (
        <div className='space-y-3'>
            <h2 className='font-bold mb-5'>Login With</h2>
            
            <button className='btn btn-outline btn-secondary w-full'> <FcGoogle /> Login With Google</button>
            <button className='btn btn-outline btn-primary w-full'><FaGithub />Login With Github</button>
            
        </div>
    );
};

export default SocialLogin;