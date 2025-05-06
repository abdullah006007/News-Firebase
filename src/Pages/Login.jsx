import React, { useContext, useState } from 'react';
// import Navbar from '../Component/Navbar';
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../Component/Provider/AuthProvider';

const Login = () => {

    const [error, setError] = useState("")

    const {signIn} = useContext(AuthContext)
    const location = useLocation()
    const navigate = useNavigate()



    const handleLogIn = (e) =>{
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        signIn(email, password).then(res=>{
            const user = res.user
            // console.log(user);

            navigate(`${location.state? location.state: "/"}`)

        })
        .catch((error) => {
            const errorCode = error.code;
            // const errorMessage = error.message;
            // alert(errorCode, errorMessage)
            setError(errorCode)
          });
        
    }


    return (
        <div className='flex justify-center min-h-screen items-center'>

            <div class="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">


                <div class="card-body">
                    <div>
                        <h2 className='font-semibold text-3xl p-5'>Login your account</h2>
                    </div>

                    <form onSubmit={handleLogIn} className=''>
                        <fieldset class="fieldset">


                            {/* email */}
                            <label class="label">Email</label>
                            <input type="email" name='email' class="input" required placeholder="Email" />

                            {/* password */}
                            <label class="label">Password</label>
                            <input type="password" name='password' class="input" required placeholder="Password" />

                            <div><a class="link link-hover">Forgot password?</a></div>

                            {
                                error && <p className='text-red-300 text-sm'> {error} </p>
                            }
                            <button type='submit' class="btn btn-neutral mt-4">Login</button>
                            <p className='my-2 text-center'>Dont’t Have An Account ? <span className='text-secondary underline'><Link to="/auth/register">Register</Link></span> </p>
                        </fieldset>
                    </form>


                </div>
            </div>


        </div>
    );
};

export default Login;