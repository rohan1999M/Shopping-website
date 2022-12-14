import React from "react";
import { Fragment , useContext } from "react";
import {Outlet , Link} from 'react-router-dom';
import {ReactComponent as CrwnLogo} from '../../assets/crown.svg';
import CartIcon from "../Cart-Icon/Cart-icon";
import CartDropdown from "../cart-dropdown/Cart-dropdown";
import '../navigationStyle.scss';
import { UserContext } from "../../Context/UserContext";
import { CartContext } from "../../Context/Cart-context";
import { signOutUser } from "../../utils/firebase/firebaseUtils";

function NavigationBar (){

    const {currentUser} = useContext(UserContext);
    console.log(currentUser);



    // const signOutHandler = async () => {
    //      await signOutUser();
    //       setCurrentUser(null);

        
    // }

    const {isCartOpen} =useContext(CartContext);

    return(
       <Fragment>
        <div className="navigation">
         <Link className="logo-container" to='/'>
         <CrwnLogo className="logo"/>
         </Link>
        <div className="nav-links-container">
        <Link className="nav-link" to ='/shop'>SHOP</Link>
        <Link className="nav-link" to ='/contact'>CONTACT</Link>
        {      
           // if current user exits then it will render the sign out.
          currentUser ? (<span className="nav-link" onClick={signOutUser}>SIGN OUT</span>):
          ( <Link className="nav-link" to ='/auth'>SIGN IN</Link> )
        }
         <CartIcon/>
        
        </div>
        {isCartOpen && <CartDropdown/>}
        </div>
        <Outlet/>
        </Fragment>
    )
}

export default NavigationBar;