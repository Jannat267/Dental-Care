import React from 'react';
import { useHistory, useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Login = () => {
 // call the variable and function from context
    const {signInUsingEmail,handleEmail,handlePassword,signInUsingGoogle,setIsLoading,setUser}=useAuth();
    const location= useLocation();
    const history=useHistory();
      // redirect url for reg and login page
    const redirect_uri=location?.state?.from ||'/home';
//   handler for email signIn
    const handleSignInUsingEmail=e=>
    {    
    e.preventDefault();
    signInUsingEmail(e)
    .then((result) =>{ 
        history.push(redirect_uri);
     }) 
     .finally(()=>setIsLoading(false));
    }
    // handler for google signIn

    const handleSignInUsingGoogle=()=>{
        signInUsingGoogle()
        .then((result) =>{ 
            // set data in user variable
                setUser(result.user)
                // page redirect
                history.push(redirect_uri);
         }) 
         .finally(()=>setIsLoading(false));
    }
    return (
        <div className='login-form  d-flex justify-content-center align-items-center'>
        <div className=' mt-5'>
        <h2 className='my-4'>Login</h2>
        {/* login form */}
        <form onSubmit={handleSignInUsingEmail} className='form-group'>
        
        <input type='email' className='m-1 bg-light py-3 px-3 border-1 form-control' placeholder='Email :' onBlur={handleEmail} required />
            <br/>
            <input type='password' className='m-1 bg-light py-3 px-3 border-1 form-control' placeholder='Password :' onBlur={handlePassword} required/>
            <br/>
            <div className='d-grid gap-2'>
                {/* submit button */}
            <input type='submit' value='submit' className='submit mt-2 btn btn-danger text-center py-1 fs-4' />
            </div>
            </form>
            
            <div className='mt-1 fs-3 text-info'>----------or---------</div>
            <div className='d-grid gap-2'>
                {/* google signIn button */}
            <button type='submit' className='submit mt-2 btn btn-primary text-center py-1 fs-4' onClick={handleSignInUsingGoogle}>Sign In with Google</button>
            </div>
           
            <p className='mt-4 fs-3 text-info'><Link to='/register'>Create New Account
            </Link></p>
        </div>  
    </div>
    );
};

export default Login;
