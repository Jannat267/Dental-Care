import { useState } from "react";
import { getAuth, signInWithPopup, GoogleAuthProvider,onAuthStateChanged,signOut,createUserWithEmailAndPassword,signInWithEmailAndPassword} from "firebase/auth";
import { useEffect } from "react";
import initializeAuthentication from "../Firebase/firebase.init";


initializeAuthentication();

const useFirebase = () => {
  const[user,setUser]=useState({});
  const[email,setEmail]=useState();
  const[password,setPassword]=useState();
  const[isLoading,setIsLoading]=useState(true);
  const[error,setError]=useState('');
  const auth = getAuth();
   
    const googleProvider = new GoogleAuthProvider();

    const signInUsingGoogle=()=>
    {
      setIsLoading(true);
       return signInWithPopup(auth, googleProvider)   
    }
    const signInUsingEmail=()=>
    {
       return signInWithEmailAndPassword(auth, email, password)
    }

    const logOut=()=>
    {
      signOut(auth)
      .then(() => {
      setUser({})
      })  
      .finally(()=>setIsLoading(false));  
    }

    const signUpUsingEmail=()=>
    {
      
     
        return createUserWithEmailAndPassword (auth, email, password)
      
      
       
    }

    const handleEmail=e=>
    {
      return setEmail(e.target.value)
    }
   

    const handlePassword=e=>
    {
     return setPassword(e.target.value)
    }
    
    useEffect(()=>{
        onAuthStateChanged(auth, (user) => {

            if (user) {            
              setUser(user);             
            } 
            else{
              setUser({});
            }
            setIsLoading(false)
          });
    },[])
    
    return {
        user,
        error,
        email,
        password,
        setUser,
        setError,
        isLoading,
        setIsLoading,
        signInUsingGoogle,
        signUpUsingEmail,
        signInUsingEmail,
        handleEmail,
        handlePassword,
        
        logOut

    }
}
export default useFirebase;

