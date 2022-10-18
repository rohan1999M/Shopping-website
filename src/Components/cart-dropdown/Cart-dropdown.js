import Button from '../Buttons/Button';
import './cart-dropdownStyles.scss';
import { CartItem } from '../cart-Items/cart-item';
import { useContext } from 'react';
import { CartContext } from '../../Context/Cart-context';
import { useNavigate } from 'react-router-dom';

const CartDropdown = () =>{

const {cartItems} = useContext(CartContext);

const navigate = useNavigate();
const goToCheckOutHandler = ()=>{
  navigate('/checkout');
}

    return(
        <div className='cart-dropdown-container'>
          <div className=' cart-items'>
          {cartItems.map(item => <CartItem key={item.id} cartItem={item}/>)}
          </div>
          <Button onClick={goToCheckOutHandler}>Check Out</Button>
        </div>
    )
}
export default CartDropdown;