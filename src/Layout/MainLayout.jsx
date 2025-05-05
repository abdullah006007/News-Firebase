import React from 'react';
import { Outlet } from 'react-router';
import Header from '../Component/Header';
import LateastNews from '../Component/LateastNews';
import Navbar from '../Component/Navbar';
import LeftAside from '../Component/HomeLayout/LeftAside';
import RighAside from '../Component/HomeLayout/RighAside';

const MainLayout = () => {
    return (
        <div>
            <header>
                <Header></Header>
                <section className='w-11/12 mx-auto my-3 '>
                    <LateastNews></LateastNews>
                </section>

                <nav className='w-11/12 mx-auto my-3 '>
                    <Navbar></Navbar>

                </nav>
                 
            </header>
            

            <main className='w-11/12 mx-auto grid grid-cols-12 gap-5  '>
                <aside className=' col-span-3 h-fit sticky top-10'>
                    <LeftAside></LeftAside>
                </aside>




                <section className='main col-span-6 '>
                <Outlet></Outlet>
                   


                </section>


                <aside className='col-span-3 h-fit sticky top-10'>
                    <RighAside> </RighAside>
                </aside>

            </main>
            
        </div>
    );
};

export default MainLayout;