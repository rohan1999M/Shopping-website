import Button from '../Buttons/Button';
import './cart-dropdownStyles.scss';

const CartDropdown = () =>{
    return(
        <div className='cart-dropdown-container'>
          <div className=' cart-items'/>
          <Button>Check Out</Button>
        </div>
    )
}
export default CartDropdown;