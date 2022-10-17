 import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg';
import './cart-icon-styles.scss'
import { useContext } from 'react';
import { CartContext } from '../../Context/Cart-context';

const CartIcon = ()=>{

   const {isCartOpen, setIsCartOpen}= useContext(CartContext);
   const toogleIsCartOpen = () => setIsCartOpen(!isCartOpen);

    return (
    //     <div className='cart-icon-container'>
    //    <shoppingIcon className='shopping-icon'/>
    //        <span className='item-count'>0</span>   
    //     </div>

    <div className='cart-icon-container' onClick={toogleIsCartOpen}>
    <ShoppingIcon className='shopping-icon'/>
    <span className='item-count'>0</span>
    </div>
    )
}
export default CartIcon;