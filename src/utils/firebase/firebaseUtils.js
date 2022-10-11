// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
getAuth,
signInWithRedirect,
signInWithPopup,
GoogleAuthProvider,
createUserWithEmailAndPassword,
sendPasswordResetEmail,

} from 'firebase/auth';


import {getFirestore,getDoc,setDoc,doc} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCDDzTmdaXqgDnre6SlzdbVJ25-nLz9yS4",
  authDomain: "shopping-db-46a45.firebaseapp.com",
  projectId: "shopping-db-46a45",
  storageBucket: "shopping-db-46a45.appspot.com",
  messagingSenderId: "1079851251231",
  appId: "1:1079851251231:web:e557ce8d64c0ed07e4072a"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();

provider.setCustomParameters({
prompt: 'select_account'
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
export const signInWithGoogleRedirect = () => signInWithRedirect(auth,provider);

export const db = getFirestore();



export const creatUserDocumentFromAuth = async(
  userAuth,
  addtionalInformation = {}
  )=>{

if(!userAuth)return;

  const userDocRef = doc(db,'users', userAuth.uid);


  const userSnapshot = await getDoc(userDocRef);


  if(!userSnapshot.exists()){
    const {displayName , email} = userAuth;
    const createdAt = new Date();

    try{
      await setDoc(userDocRef,{
        displayName,
        email,
        createdAt,
        ...addtionalInformation,
      });
    } catch(error){
      console.log('error creating the user', error.message);
    }
  }
  return userDocRef;
};

export const createAuthUserWithEmailAndPassword = async (email,password)=>{
  if(!email || !password) return;
  return await createUserWithEmailAndPassword(auth,email,password)
}