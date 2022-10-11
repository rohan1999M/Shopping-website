import React from "react";

// import{
//     auth,
// signInWithGooglePopup,
// creatUserDocumentFromAuth,
// logGoogleRedirectUser,
// signInWithGoogleRedirect,


// } from '../../utils/firebase/firebaseUtils';
// import { useFetcher } from "react-router-dom";
// import { async } from "@firebase/util";

import SignUpForm from "../SignUp";
// import FormInput from "../Form-input/Form-input";

import SignInForm from "../Sign-inForm/Sign-in-Form";
import './Authentication-styles.scss';


function Authentication(){





    // const logGoogleUser = async()=>{
    //     const response = await signInWithGooglePopup();
    //     const userDocRef = creatUserDocumentFromAuth(response.user)
    // }



    return (
        <div>
        <h1>Sign In page</h1> 
        <div className="authentication-container">
        
         
        <SignInForm/>
        <SignUpForm/>
    
        </div>
        </div>
       
       
    )
}

export  default Authentication;