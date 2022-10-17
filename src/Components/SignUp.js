

import {useState} from 'react';
import FormInput from './Form-input/Form-input';
import './sign-up-form-stylee.scss';
import Button from './Buttons/Button';
// import { UserContext } from '../Context/UserContext';

import { createAuthUserWithEmailAndPassword ,creatUserDocumentFromAuth } from '../utils/firebase/firebaseUtils';

const defaultFormFields = {
    displayName: '',
    email:'',
    password:'',
    confirmPassword:'',
}

function SignUpForm (){

const [formFields , setFormFields] = useState(defaultFormFields);
const {displayName,email,password,confirmPassword} = formFields;


// const {setCurrentUser} = useContext(UserContext);
// console.log(formFields)

const resetFormFields = () =>{
    setFormFields(defaultFormFields);
}

const handleSubmit = async (event)=>{
    event.preventDefault();

    if(password != confirmPassword){
        alert('pasword do not match');
        return;
    }
try{
       const {user} = await createAuthUserWithEmailAndPassword(email,password);
       await creatUserDocumentFromAuth(user,{displayName})
    //    setCurrentUser(user);
       resetFormFields();

}catch(error){
    if(error.code == 'auth/email-already-in-use'){
        alert('user already exist');
       
    }
    else{
        console.log('user creation encountered an error',error);
    }
}
}

const handleChange = (event)=>{
    const {name,value} = event.target;
    setFormFields({...formFields, [name]: value});

}

    return(
        <div className='sign-up-container'>
        <h2>Don't have an account</h2>
        <span> Sign up with your email and password </span>

        <form onSubmit={handleSubmit}>
        
        <FormInput
        label='DisplayName'
         type='text' 
        // placeholder="name" 
        required 
        onChange={handleChange} 
        name='displayName'
         value={displayName}
         />

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

        <FormInput
        label='Confirm Password'
        type='password'
        //  placeholder="Re-Enter Password" 
         required
          onChange={handleChange}
          name='confirmPassword'
           value={confirmPassword}
           />

        <Button type="submit">SignUp</Button>
        
        </form>
        </div>
    )
}

export default SignUpForm;