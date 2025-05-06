import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { AuthContext } from '../Component/Provider/AuthProvider';

const Register = () => {

    const {createUser, setUser, updateUser } = useContext(AuthContext)
    const [nameError, setNameError] = useState("")

    const navigate = useNavigate()

    const handleRegister = (e) => {


        e.preventDefault();
        const name = e.target.name.value;
        if(name.length<5){
            setNameError("Name Should be more than 5 Character ")
            return
        }else{
            setNameError("")
        }
        const photo = e.target.photo.value;
        const email = e.target.email.value;
        const password = e.target.password.value;

      
        createUser(email, password)
        
        .then((userCredential) => {
            // Signed up 
            const user = userCredential.user;
            // console.log(user);
            updateUser({displayName:name, photoURL:photo}).then(()=>{
                setUser({...user, displayName:name, photoURL:photo})
                navigate('/')

            })
            .catch((error)=>{
                console.log(error);
                setUser(user)


            })
            
            // ...
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert(errorMessage)
            // ..
          });

    }


    return (
        <div>
            <div className='flex justify-center min-h-screen items-center'>

                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">


                    <div className="card-body">
                        <div>
                            <h2 className='font-semibold text-3xl text-center p-5'>Register your account</h2>
                        </div>

                        <form onSubmit={handleRegister}>

                            <fieldset className="fieldset">


                                {/* Name */}
                                <label className="label">Your Name</label>
                                <input type="text" className="input" name='name' placeholder="John Doe" />

                                {
                                    nameError && <p className='text-xs text-error'> {nameError} </p>
                                }

                                {/* Photo */}
                                <label className="label">Photo Url</label>
                                <input type="text" className="input" name='photo' placeholder="Photo Url" />

                                {/* email */}
                                <label className="label">Email</label>
                                <input type="email" className="input" name='email' placeholder="Email" />

                                {/* Password */}
                                <label className="label">Password</label>
                                <input type="password" className="input" name='password' placeholder="Password" />


                                <button type='submit' className="btn btn-neutral mt-4">Register</button>
                                <p className='my-2 text-center'>Already have An Account ? <span className='text-secondary underline'><Link to="/auth/login">Login</Link></span> </p>
                            </fieldset>
                        </form>


                    </div>
                </div>


            </div>
        </div>
    );
};

export default Register;