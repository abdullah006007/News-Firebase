import React from 'react';
import Navbar from '../Component/Navbar';
import { Outlet } from 'react-router';

const AuthLayOut = () => {
    return (
        <div className='bg-base-200 min-h-screen'>
            <header className='w-11/12 mx-auto py-4'>
                <Navbar ></Navbar>
            </header>

            <main className='w-11/12 mx-auto py-5'>
            <Outlet></Outlet>

            </main>

        </div>
    );
};

export default AuthLayOut;