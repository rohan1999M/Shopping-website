import React from "react";
import{
signInWithGooglePopup,
creatUserDocumentFromAuth,

} from '../../utils/firebase/firebaseUtils';

// import{    signInWithGooglePopup,
// createUserProfileDocument,
// } from '../../utils/firebase/firebase.utils';

// function SignIn (){

//     const logGoogleUser = async()=>{
//         const response = await signInWithGooglePopup();
//         createUserProfileDocument(response);
//     };
//     return(
//         <div>
//         <h1>Sign In Page</h1>
//         <button onClick={logGoogleUser}>Sign in with Google Popup</button>
//         </div>
//     )

// }

function SignIn(){

    const logGoogleUser = async()=>{
        const response = await signInWithGooglePopup();
        const userDocRef = creatUserDocumentFromAuth(response.user)
    }

    return (
        <div> Sign in page
        <button onClick={logGoogleUser}>sign in with google</button>
        </div>
    )
}

export  default SignIn;