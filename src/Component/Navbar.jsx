import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router';
import user  from '../assets/user.png'
import { AuthContext } from './Provider/AuthProvider';

const Navbar = () => {

    const {user, logOut} = useContext(AuthContext)

    const handleLogOut= () =>{


        logOut().then(() => {
            alert("Logged out");
        })
        .catch(error => {
            console.log(error);
        });

    }

    return (
        <div className='flex justify-between'>
            <div className=""></div>

            <div className="nav flex gap-3">
                <NavLink to="/">Home </NavLink>
                <NavLink to="/about">About </NavLink>
                <NavLink to="/career">Career </NavLink>

            </div>
            <div className="log-in-btn flex gap-3 items-center">
                <img className='w-12 h-12 rounded-full' src={`${user? user.photoURL: user}`} alt="" />

                <button onClick={handleLogOut} className='btn btn-primary px-10'>LogOut</button>
                
               

            </div>
            
        </div>
    );
};

export default Navbar;