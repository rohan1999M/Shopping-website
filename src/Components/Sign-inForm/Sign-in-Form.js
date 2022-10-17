

import {useState} from 'react';
import FormInput from '../Form-input/Form-input';
import './sign-in-form-stylee.scss';
import Button from '../Buttons/Button';
// import { UserContext } from '../../Context/UserContext';

import { signInWithGooglePopup,
creatUserDocumentFromAuth,
signInAuthUserWithEmailAndPassword,
} from '../../utils/firebase/firebaseUtils';

const defaultFormFields = {
    
    email:'',
    password:'',
   
}

function SignInForm (){

const [formFields , setFormFields] = useState(defaultFormFields);
const {email,password} = formFields;


// const {setCurrentUser} = useContext(UserContext);

const SignInWithGoogle = async()=>{
     await signInWithGooglePopup();
    // creatUserDocumentFromAuth(user)
}


const resetFormFields = () =>{
    setFormFields(defaultFormFields);
}

const handleSubmit = async (event)=>{
    event.preventDefault();

try{
       const {user} = await signInAuthUserWithEmailAndPassword(email,password);
    //    console.log(user)
    //    setCurrentUser(user);
       resetFormFields();

}catch(error){
  switch(error.code){
    case 'auth/wrong-password':
        alert('incorrect password for email');
        break
    case 'auth/user-not-fount':
        alert(' no user associated with this email');
        break
        default:
            console.log(error)
  }

}
}

const handleChange = (event)=>{
    const {name,value} = event.target;
    setFormFields({...formFields, [name]: value});

}

    return(
        <div className='sign-up-container'>
        <h2>Already have an account</h2>
        <span> Sign in with your email and password </span>

        <form onSubmit={handleSubmit}>
     
        <FormInput
        label='Email'
        type='email'
        //  placeholder="email" 
         required 
         onChange={handleChange} 
         name='email'
          value={email}
          />

        <FormInput
        label='Password'
        type='password'
        //  placeholder="password"
          required 
          onChange={handleChange} 
          name='password'
           value={password}
           />

        <div className='buttons-container'>

        <Button type="submit">SignIn</Button>
        <Button  type='button' buttonType='google' onClick={SignInWithGoogle}>Google sign in</Button>
        
        </div>
        </form>
        </div>
    )
}

export default SignInForm;