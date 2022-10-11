import React from "react";

import{
    auth,
signInWithGooglePopup,
creatUserDocumentFromAuth,
logGoogleRedirectUser,
signInWithGoogleRedirect,


} from '../../utils/firebase/firebaseUtils';
// import { useFetcher } from "react-router-dom";
import { async } from "@firebase/util";

import SignUpForm from "../SignUp";


function SignIn(){





    const logGoogleUser = async()=>{
        const response = await signInWithGooglePopup();
        const userDocRef = creatUserDocumentFromAuth(response.user)
    }



    return (
        <div> Sign in page
        <button onClick={logGoogleUser}>sign in with google</button>
        <SignUpForm/>
        </div>
    )
}

export  default SignIn;