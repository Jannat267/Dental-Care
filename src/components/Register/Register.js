import React from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Register = () => {
    // call the variable and function from context
    const {signUpUsingEmail,handleEmail,handlePassword,signInUsingGoogle,error,password,setError,setUser}=useAuth();
    const location= useLocation();
    const history=useHistory();
    // redirect url for reg and login page
    const redirect_uri=location?.state?.from ||'/home';
//   handler for regester
    const handleSignUpUsingEmail=e=>
    {  
    e.preventDefault();
    if(password.length<6)
      {
          return setError('Password should be at least 6 charecter');
      }
    signUpUsingEmail(e)
    .then((result) =>{ 
        console.log(result);
        setError('');
        history.push(redirect_uri);
     }) 
    }
    // handler for google login
    const handleSignInUsingGoogle=()=>{
        
        signInUsingGoogle()
        .then((result) =>{ 
            setUser(result.user);
            history.push(redirect_uri);
         }) 
    }
    
    return (
       <div className='container'>
           {/* signup form */}
            <div className='login-form  d-flex justify-content-center align-items-center col-md-12 col-sm-12'>
        <div className='m-3'>
        <h2 className='my-5'>Register</h2>
        <form onSubmit={handleSignUpUsingEmail} className='form-group' >
        <input type='text' className='m-1 bg-light py-3 px-3 border-1 form-control' placeholder='Name : ' required />
            <br/>
        <input type='email' className='m-1 bg-light py-3 px-3 border-1 form-control' placeholder='Email :' onBlur={handleEmail} required />
            <br/>
            <input type='password' className='m-1 bg-light py-3 px-3 border-1 form-control' placeholder='Password :' onBlur={handlePassword} required />
            <br/>
            <p className='text-danger fw-bold fs-5'>{error}</p>
            <div className='d-grid gap-2'>
                {/* submit button */}
            <input type='submit' value='submit' className='submit mt-2 btn btn-danger text-center py-1 fs-4' />
            </div>
          
            </form>
            
            <div className='mt-4 fs-1 text-info'>-------or------</div>
            <div className='d-grid gap-2'>
                {/* google signIn button */}
            <button type='submit' className='submit mt-2 btn btn-primary text-center py-1 fs-4' onClick={handleSignInUsingGoogle}>Sign In with Google</button>
            </div>
           {/* toggler */}
            <p className='mt-4 fs-3 text-info'><Link to='/login'>Already have an account?
            </Link></p>
        </div>  
    </div>
       </div>
    );
};

export default Register;