 import { createContext,useState ,useEffect} from "react";
 import React from "react";
 import { onAuthStateChangedListlener,signOutUser ,creatUserDocumentFromAuth} from "../utils/firebase/firebaseUtils";

 export const UserContext = createContext({
   currentUser : null,
   setCurrentUser : ()=> null,
 });

 export const UserProvider = ({children}) =>{
    const [currentUser ,setCurrentUser] = useState(null);
    const value = {currentUser,setCurrentUser};

   
   useEffect(()=>{
          const unsubcribe = onAuthStateChangedListlener((user)=>{
            // console.log(user);
            if(user){
              creatUserDocumentFromAuth(user)
            }
            setCurrentUser(user)
          });
           
          return unsubcribe;
   },[]);

    return <UserContext.Provider value={value}>{children}</UserContext.Provider>
 }